import React, {useEffect, useState} from 'react'
import { listUsers, getUserByID } from '../services/UserService'
import LoginComponent from './LoginComponent';
import { listReviews } from '../services/ReviewService';

const ReviewComponent = () => {


    //Creating useState for reviews
    const [reviews, setReviews] = useState([])

    //getAllReviews function
    function getAllReviews(){
        listReviews().then((response) => {
            //calling useState function to apply the response data from our get request to reviews object
            setReviews(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    //Calls getAllReviews function
    useEffect(()=> {
        getAllReviews();
    },[])

  return (
    /* Displays reviews in a div using map function */
    <div>{reviews.map(review =>
    <div>
        <h3>{review.atitle}</h3>
        <p>{review.body}</p>
    </div>
    )}</div>
  )
}

export default ReviewComponent