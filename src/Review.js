import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Review = () => {
    let initialReview = [""];
    const [reviewState,setReviewState] = useState(initialReview);
    const fetchReview= async() =>{
        const reviews = await axios.get("http://localhost:8081/reviews");
        //console.log(reviews.data)
        setReviewState(reviews.data);
    }
    useEffect(() => {
        fetchReview();
    }, [])
    return (
        <div>

           { 
           reviewState.map(x=>{
                return(
                    <div>{x.comment}</div>
                );
            })
             }
           
        </div>
     
     );
}
 
export default Review;
