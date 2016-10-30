import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from '../../imports/collections/links';

class LinkList extends Component {
  renderRows(){
    return this.props.links.map( link=>{
      const {url, clicks, token } = link;
      const shortLink = `http://localhost:3000/${token}`;

      return (
          <tr className="" key={token}>
            <td>{url}</td>
            <td><a href={shortLink}>{shortLink}</a></td>
            <td>{clicks}</td>
          </tr>
      );
    });
  }
  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Address</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

//for this we need on cmd:
// npm install --save react-addons-pure-data-mixin :(
// meteor add react-meteor-data

export default createContainer( ()=>{
  Meteor.subscribe('links');
  console.log(Links.find({}).fetch())
  return { links: Links.find({}).fetch()};
},LinkList);
