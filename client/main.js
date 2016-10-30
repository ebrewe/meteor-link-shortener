import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Links } from '../imports/collections/links';

import Header from './components/header';
import LinkCreate from './components/link-create';
import LinkList from './components/link-list';

const App = () =>{
    return (
        <div>
          <Header />
          <div className="container">
            <LinkCreate />
            <LinkList />
          </div>
        </div>
    );
}

Meteor.startup(()=>{
  ReactDOM.render(<App />, document.getElementById('react-mount'));
});
