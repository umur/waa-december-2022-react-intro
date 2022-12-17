import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import AddJob from './AddJob';
import Jobs from './Jobs';

import JobDetails from './JobDetails';

export const langContext = React.createContext();

const Dashboard = () => {
    const [lang, setLang] = React.useState('en');
    const toggleLang = () => {
        setLang(lang === 'en' ? 'fr' : 'en');
    }
    const [disableState, setDisableState] = React.useState(false);

    const disableButton = () => {
        setDisableState(true);
    }
    const enableButton = () => {
        setDisableState(false);
    }
    const langChange = (e) => {
        setLang(e.target.value);
        if (e.target.value === 'en' || e.target.value === 'fr') {
            enableButton();
        } else {
            disableButton();
        }
    }

    return (
        <div>
            <langContext.Provider value={lang}>
                <div><Link to="/jobs">Jobs</Link></div>
                <div><Link to="/addjob">Add Job</Link></div>
                <button onClick={toggleLang} disabled={disableState}>Toggle Lang</button>
                <input type="text" onChange={langChange} value={lang}></input>

                <Routes>
                    <Route path="/jobs" element={<Jobs />}></Route>
                    <Route path="/addjob" element={<AddJob />}></Route>
                    <Route path="/jobdetail/:id" element={<JobDetails />}></Route>
                </Routes>
            </langContext.Provider>

        </div>
    )
}
export default Dashboard;