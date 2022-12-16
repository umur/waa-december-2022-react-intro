const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setReviews(res.data);
                setLoaded(true);
            })
    }, [])
    const removeFromDom = productId => {
        setReviews(reviews.filter(review => review._id != productId));
    }
    const deleteReview = (reviewId) => {
        axios.delete('http://localhost:8000/api/reviews/' + reviewId)
            .then(res => {
                removeFromDom(reviewId)
            })
    }
    
    return ( 
        <div>
            <h1>Reviews</h1>
            {loaded && <ReviewList reviews={reviews} removeFromDom={removeFromDom} deleteReview={deleteReview}/>}
        </div>
     );
}
 
export default Reviews;