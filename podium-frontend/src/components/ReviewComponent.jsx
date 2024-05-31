import React, {useEffect, useState} from 'react'
import { listUsers, getUserByID } from '../services/UserService'
import LoginComponent from './LoginComponent';
import { deleteReview, listReviews } from '../services/ReviewService';

const ReviewComponent = () => {

    const number = 1;

    let highestID = 0;
    let currentLoopID = 0;

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


    //Function for displaying revires
    function displayReviews(){
        while(currentLoopID <= highestID){
            
            console.log(reviews[currentLoopID]);
            currentLoopID += 1;
            return(
                <div>
                    <h3>reviews[review].atitle</h3>
                    <p>reviews[review].body</p>
                </div>
            );

        }
    }

/*     function displayReviews2(title, body){
            console.log("haha!");
            console.log(title);
            return ("<div><h3>{title.toString()}</h3><p>{body.toString()}</p></div>"); 
    } */

    function maxID(){
        for(let review in reviews){
         highestID = reviews[review].id;
        }
    }


    //Remove review function
    function removeReview(id){
        /* console.log(id); */

        deleteReview(id).then((response) =>{
            getAllReviews();
        }).catch.error(error => {
            console.error(error);
        });
    }


    return (
    /* Displays reviews in a div using map function */
    <div>
        {/* {maxID()}
        {highestID}

        {displayReviews()} */}

       {/*  {console.log(reviews[currentLoopID])} */}


          {
            reviews.map(review =>
                <div key={review.id} className='text-center'>
                    <h3>{review.atitle}</h3>
                    <h4>{review.title}</h4>
                    <p>{review.body}</p>
                    <p className="tinytext">written by {review.user.userName}</p>
                    <div className='text-center'>
                        <button className='btn btn-danger' onClick={() => removeReview(review.id)}>Delete</button>
                    </div>
                    <br/>
                </div>
            )
        } 
    </div>
    )
}

export default ReviewComponent