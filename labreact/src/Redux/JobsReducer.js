import { createSlice } from "@reduxjs/toolkit";

 const JobSlicer =  createSlice({
    name : 'JobReducer',
    initialState: {initialJobs:[]},
    reducers: {
        setStateJobs: (state,action) =>{
            state.initialJobs = action.payload
        }
    }
    
 });
 const JobReducer = JobSlicer.reducer;
 export const {setStateJobs} = JobSlicer.actions
 export default JobReducer;