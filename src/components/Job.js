import React from 'react';

const Job = (props) => {

    return (
        <li>
            <h4>{props.jobTitle}</h4>
            <small>{props.jobPay}</small>
            <p>{props.jobDescription}</p>
            <small>{props.interested.length} dinos are interested in this job.</small>
        </li>

    )

}

export default Job;