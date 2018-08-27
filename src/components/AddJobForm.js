import React, { Component } from 'react'


class AddJobForm extends Component {

    state = {
        title: "",
        description: "",
        pay: "",
        interested: []
    }

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let newJob = {
            "id": (this.props.jobs.length + 1),
            "title": this.state.title,
            "description": this.state.description,
            "pay": this.state.pay,
            "interested": this.state.interested
        };
        this.props.addJobToGlobalState(newJob);
    }

    
    render() {
        return (
            <aside id="side-bar">
                <h3>Add a Job</h3>
                <form className="job-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input  type="text" 
                            value={this.state.title} 
                            name="title"
                            onChange={this.handleChange} />
                    <label htmlFor="pay">Compensation</label>
                    <input  type="text" 
                            value={this.state.pay} 
                            name="pay"
                            onChange={this.handleChange} />
                    <label htmlFor="description">Description</label>
                    <textarea   rows="8" cols="40"
                                type="text" 
                                value={this.state.description} 
                                name="description"
                                onChange={this.handleChange}>
                    </textarea>
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </aside>

        )

    }
}

export default AddJobForm;