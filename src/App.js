import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import JobList from './components/JobList'
import AddJobForm from './components/AddJobForm'
import Footer from './components/Footer'



class App extends Component {

  state = {
    jobs: []
  }

  addJobToGlobalState = (newJob) => {
    let currentJobs = this.state.jobs;
    currentJobs.unshift(newJob);
    this.setState({
      jobs: currentJobs
    })
  }

  componentDidMount() {
    fetch("http://localhost:9000/")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        jobs: json.listings.reverse()
      });
    });

  }

  render() {
    return (
      <div>
        <Header />
        <main id="jobStuffs">
          <JobList jobs={this.state.jobs} />
          <AddJobForm addJobToGlobalState={this.addJobToGlobalState} jobs={this.state.jobs}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
