import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import JobList from './components/JobList'



class App extends Component {

  state = {
    jobs: []
  }

  componentDidMount() {
    fetch("https://gif-api-practice.herokuapp.com/gifs")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    })

  }

  render() {
    return (
      <div>
        <Header />
        <JobList />
      </div>
    );
  }
}

export default App;
