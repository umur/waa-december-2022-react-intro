const UserDetails = () => {
    const [user, setUser] = useState (null);
    const [loaded, setLoaded] = useState (false);
    const { id } = useParams ();
    useEffect (() => {
        axios.get ("http://localhost:8000/api/users/" + id)
            .then (res => { 
                setUser (res.data);
                setLoaded (true);
            })
    }, [])
    const fetchUserById = async () => {
        const res = await axios.get ("http://localhost:8000/api/users/" + id);
        setUser (res.data); 
        setLoaded (true);
    }
    useEffect (() => {
        fetchUserById ();
    }, [])
    return ( 
        <div>
            <h1>User Details</h1>
            {loaded && <UserDetails user={user}/>}
        </div>
     );
}
 
export default UserDetails;