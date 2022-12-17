import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { LangContext } from './Dashboard';

const AddJob = () => {

    // const lang = useContext(LangContext);

    // const onChangeLanguageClicked = () => {
    //     let newLang = lang.lang === 'EN' ? 'SP' : 'EN';
    //     lang.changeLanguage(newLang);
    //     console.log(lang);
    // }

    const formRef = useRef();

    const addJob =async () =>{
        // event.preventDefault();
        const data = {
            company: formRef.current.companyName.value,
            postion: formRef.current.position.value
        };
        
        await axios.post("https://639a7ae1d5141501973692fb.mockapi.io/api/v1/jobs", data);
    }


    return (
        <div>

            <form ref={formRef} onSubmit={addJob}>
                <div>
                Company Name:  <input type="text" name="companyName" />
                </div>
               
               <div>
               Company Position: <input type="text" name="position" />
               </div>
               <input type="submit" value = "submit"/>
               
            </form>
        </div>

    );


}

export default AddJob;