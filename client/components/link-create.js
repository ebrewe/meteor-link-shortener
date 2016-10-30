import React, { Component } from 'react';

export default class LinkCreate extends Component {
  constructor(props){
    super(props);
    this.state={error:''};
  }
  handleSubmit(e){
    e.preventDefault();
    Meteor.call('links.insert', this.refs.input.value, (error)=>{
      if(error){
        this.setState({error: 'enter a valid url'});
      }else{
        this.setState({error: ''});
        this.refs.input.value = '';
      }
    });
    //console.log('react sent ' + this.state.text)
  }
  render(){
    return (
        <form onSubmit={(e)=>{this.handleSubmit(e)}}>
          <div className="form-group">
            <label>Link to shorten:</label>
            <input ref="input"  className="form-control" />
          </div>
          <div className="text-danger">
            {this.state.error}
          </div>
          <button className="btn btn-primary">Shorten</button>
        </form>
    );
  }
}
