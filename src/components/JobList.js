import React from 'react';
import Job from './Job';

const JobList = (props) => {

    const dinoJobs = props.jobs.map((jobObject, index) => {
        return <Job key={jobObject.id} 
                    jobId={jobObject.id}
                    jobTitle={jobObject.title}
                    jobDescription={jobObject.description}
                    jobPay={jobObject.pay}
                    interested={jobObject.interested}
                />
    })

    return (
        
        <section>
            <h2>Job Listings</h2>
            <ul id="job-listings">
                {dinoJobs}
            </ul>
        </section>
        

    )
    
}

export default JobList;