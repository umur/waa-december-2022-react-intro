import data from './data';
export default function UserDetail(props){
    const user = data.getUserById();
    console.log("user is", props.match.params);
    return (
        <h1>
            In User details
        </h1>
    );
}