import React, {useEffect, useState} from 'react'
import { listUsers, getUserByID } from '../services/UserService'
import LoginComponent from './LoginComponent';
import { listReviews } from '../services/ReviewService';
import ReviewComponent from './ReviewComponent';

const HomePageComponent = () => {

    const[currentID, setCurrentID] = useState(0);


    //Function to handle data from LoginComponent
    function handleDataFromChild(data) {
        setCurrentID(data);
    }

    function myID(id){
        return id;
    }

    //Checks if user is logged in already
    function checkLoggedIn(){
        //If currentID is not 0 (This will represent if user is logged in already; default is 0)
        if(currentID != 0){
            //if user is logged in, do this
            console.log("true");
            //For loop iterating through users array
            for(let user in users){
                //Pass if currentID doesnt match current user
                if(users[user].id != currentID){

                //If currentID matches, do this
                }else{
                    console.log(reviews);
                    return <p>You are signed in as {users[user].userName}</p>
                }
            }
            /* return <p className='text-center'>Logged in as {getUserByID(currentID)}</p>; */
        }else{
            //If user is not logged in, do this
            console.log("false");
            return <LoginComponent sendDataToParent={handleDataFromChild} />
        }
    }

    //Creating useState for users
    const [users, setUsers] = useState([])

    //getAllUsers function
    function getAllUsers(){
        listUsers().then((response) => {
            //calling useState function to apply the response data from our get request to users object
            setUsers(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    //Calls getAllUsers function
    useEffect(()=> {
        getAllUsers();
    },[])


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
        <div>
            
            <h1 className='display-1 text-center'>
                Podium
            </h1>
            {/* Login component. Checks if user is logged in. If not, put login form */}
            {checkLoggedIn()}
            {/* Reviews Container */}
            <br/>
            <div className='container'>
                <div className='row'>
                    <div className = 'card col-md-6'>
                        <h3 className='card-title text-center'>
                            Your Reviews
                        </h3>
                        <div className='card-body'>
                                <ReviewComponent/>
                        </div>    
                    </div>
                    <div className = 'card col-md-6'>
                        <h3 className='card-title text-center'>
                            Your Reviews
                        </h3>
                        <div className='card-body'>
                                <ReviewComponent/>
                        </div>    
                    </div>
                </div>
                
            </div>
        </div>
        
        
  )
}

export default HomePageComponent