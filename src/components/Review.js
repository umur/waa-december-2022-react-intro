import axios from "axios";
import { useEffect, useState } from "react";

export function Review() {
  const fetchReviews = async () => {
    const reviews = await axios.get("http://localhost:8080/reviews");
    setName(reviews.data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  let intialState = [];

  const [reviewsState, setName] = useState(intialState);
   
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">comments</th>
                      </tr>
                </thead>
                <tbody>
                 
                   {reviewsState.map(userreview=>
                   {
                    return(
                        <tr>
                        <th scope="row">{userreview.id}</th>
                        <td>{userreview.comment}</td>
                        </tr>
                    );

                   })

                   }

                </tbody>
                
            </table>
          {/* <h3>{user.id}</h3>
          <h3>{user.comment}</h3> */}
        </div>
      );


}
