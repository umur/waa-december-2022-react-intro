import axios from "axios";
import { useEffect, useState } from "react";


const Reviewlist = (props) => {
     const reviewState = [];
     const [reviewData, setReviewData] = useState(reviewData);
     const fetchReviews = async () => {
          const revData = await axios.get("http://localhost:8081/reviews");
          setReviewData(revData.data);
          console.log(revData);
     }

     useEffect(() => {
          fetchReviews();
     }, []);
     return (

          <div>
               


               <p>review1- {props.listName}</p>
               <p>review2 - {props.listName}</p>
               <p>review3 -{props.listName}</p>


          </div>
     );
}

export default Reviewlist;