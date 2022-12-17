import axios from "axios";
import { useRef } from "react";

const AddJobs = () => {

    const formRef = useRef();

    const postJobs = async (jobs) => {
        await axios.post("https://639a7ae1d5141501973692fb.mockapi.io/api/v1/jobs", jobs)
    }

    const jobSubmitHandeler = (event) => {
        event.preventDefault();
        const jobs = {
            company: formRef.current.name.value,
            position: formRef.current.address.value
        }
        postJobs(jobs);
        console.log();
        console.log(formRef.current.address.value);

    }

    return (
        <div>
            <form ref={formRef} onSubmit={jobSubmitHandeler}>
                <div className="form-group">
                    <label >company Name</label>
                    <input type="text" className="form-control" name="name" placeholder="company Name" />

                </div>
                <div className="form-group">
                    <label >position</label>
                    <input type="text" className="form-control" name="address" placeholder="position" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default AddJobs;