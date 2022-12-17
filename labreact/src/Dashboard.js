
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AddJob from './AddJob';
import Jobs from './Jobs';
// import {Link, Routes, Route} from 'react-router-dom';

export const LangContext = React.createContext('default');


const Dashboard = () =>{

    // const [showHideState, setShowHideState] = useState(true);

    // const onShowHideClicked= () =>{
    //     setShowHideState(!showHideState);
    // }

    // const changeLanguage = (lang) =>{
    //     setLangState({...langState,lang:lang})
    // }

    // const [langState, setLangState] = useState({
    //     lang: 'EN',
    //     changeLanguage: changeLanguage
    // });
 
    return(
        <div> 
           

            <div>
                <Link to='/jobs'>Jobs</Link>
            </div>

            <div>
            <Link to='/add-job'>Add Jobs</Link>
            </div>

           
           
            

            <Routes>
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/add-job' element={<AddJob />} />
            </Routes>


        </div>
    )
       
    

}

export default Dashboard;