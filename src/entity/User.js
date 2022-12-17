import { useNavigate } from "react-router";


function User(props) {


   const navigate =  useNavigate();

    const onShowDetailClicked = (id) => {
        // navigate to UserDetail with id
       navigate('/User-detail/' + id);
    }

    return (
        <div>
            <div>
                First Name : {props.firstname}
            </div>

            <div>
                Lastname : {props.lastname}
            </div>

            <input 
                type="button" 
                value="Show Detail" 
                onClick={() => { onShowDetailClicked(props.id)}} />

            ======
        </div>
    )
}

export default User;