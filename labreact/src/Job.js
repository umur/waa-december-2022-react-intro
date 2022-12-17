import React from 'react';

const Job = (props)=>{

    return(
        <div>
            <div>
                Position : {props.position}
            </div>
            <div>
                Company Name: {props.company}
            </div>
            <div>
                <input type="button" value="Show Details"/>
            </div>
        </div>
    );
}

export default Job;