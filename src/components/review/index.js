import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getReviews } from '../../services/reviewService';
import './review.css';
import ReviewStar from './reviewStar';

function Review(props) {

    const [product, setProduct] = useState({});
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const dispatch = useDispatch();

    const params = useParams();

    const fetchReviews = function(){
        let url = '/reviews';
        if(params.id)
            url+=`/filter-by-product?id=${params.id}`;

        dispatch(getReviews(url)); 
    }

    useEffect(() => {
        fetchReviews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(reviews.length > 0) {
            setProduct({name:reviews[0].product.name, rating:reviews[0].product.rating});
        }
    }, [reviews])    

    return (
        <div className='review'>
            <label className='h2'>{product.name}</label>
            <ReviewStar size={product.rating}/>
            <label className='h5'>Reviews</label>
            <ol>
                {reviews.map((review, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <p>
                                    {review.user.firstName + " " + review.user.lastName}
                                    ({review.user.email}) <br/>
                                    
                                </p>
                                <p className='comment'>{review.comment} </p>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </div>
    );
}

export default Review;