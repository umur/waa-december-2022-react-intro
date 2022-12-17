import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Job from './Job';
import { setStateJobs } from './Redux/JobsReducer';

const Jobs = () => {

    

    //Moving it to reducer
    // const [intialJobs, setStateJobs] = useState([]);
    
    //using redux
    const initialJobs= useSelector((state) => state.JobReducer.initialJobs);
    const dispatch = useDispatch();

    const getData =async () => {
        const data = await axios.get("https://639a7ae1d5141501973692fb.mockapi.io/api/v1/jobs");
        // console.log(data.data);
        dispatch(setStateJobs(data.data));   
        
        //using redux
       
    }

    
    useEffect(()=>{
        getData()
    },[])

    return(
        <div>

            {initialJobs.map((item)=>{
                return <Job 
                    key = {item.id}
                    id = {item.id}
                    company = {item.company}
                    position = {item.position}  
                />;
            })}
            
        </div>
    );
}

export default Jobs;