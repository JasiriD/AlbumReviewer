import React, {useEffect, useState} from 'react'
import { listUsers, getUserByID } from '../services/UserService'
import LoginComponent from './LoginComponent';
import { addReview, listReviews } from '../services/ReviewService';
import ReviewComponent from './ReviewComponent';
import ReviewWriteComponent from './ReviewWriteComponent';
import { func } from 'prop-types';

const HomePageComponent = () => {

    const[currentID, setCurrentID] = useState(0);

    const reviewData = "This is test review data";

    const[currentUser, setCurrentUser] = useState({})

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
                    return <p className='text-center'>what the fuck</p>
                //If currentID matches, do this
                }else{
                    console.log(reviews);
                    return <p className='text-center'>You are signed in as {users[user].userName}</p>
                }
            }
            /* return <p className='text-center'>Logged in as {getUserByID(currentID)}</p>; */
        }else{
            //If user is not logged in, do this
            /* console.log("false"); */
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

    //retrueveUserByID function
    function retrieveUserByID(){
        getUserByID(id).then((response) => {
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

    const[title, setTitle] = useState('');
    const[atitle, setaTitle] = useState('');
    const[body, setBody] = useState('');

    //Creating useState for errors (When the new review doesn't have proper variables in the form)
    //Each field here will contain errors pertaining to their cooresponding user field
    const [errors, setErrors] = useState({
        title: '',
        atitle: '',
        body: '',
    })

    function handleTitle(event){
        //Gets value from form and applies it to title useState variable
        setTitle(event.target.value);
    }

    function handleaTitle(event){
        //Gets value from form and applies it to album title useState variable
        setaTitle(event.target.value);
    }

    function handleBody(event){
        //Gets value from form and applies it to body useState variable
        setBody(event.target.value);
    }


    //Check new review function
    function validateReview(){

        //This prevents the page from reloading for no reason
        event.preventDefault();

        //Initally declaring valid as true
        let valid = true;

        //Copu of errors useState variable
        const errorsCopy = {... errors};

        //Checks if album title
        if(atitle.trim() != ''){
            errorsCopy.title = '';
        }else {
            errorsCopy.atitle = 'An album title is required';
            valid = false;
        }

        //same for review title
        if(title.trim() != ''){
            errorsCopy.title = '';
        }else {
            errorsCopy.title = 'A review title is required';
            valid = false;
        }

        //same for review body
        if(body.trim() != ''){
            errorsCopy.body = '';
        }else {
            errorsCopy.body = 'A review body is required';
            valid = false;
        }

        //Setting real errors to the copy we made here
        setErrors(errorsCopy);

        return valid;
    }

    function submitReview(){

        //Checks if validateReview function returns true
        if(validateReview){
            //This also prevents the page from reloading for no reason
            event.preventDefault();


            //applies data in form to review object, along with the currently signed in user
            const review = {atitle, title, body, currentID}

            /* console.log(review); */

            addReview(review).then((response) =>{
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            })
        }
    }




    return (
        <div className='container'>
            
            <h1 className='display-1 text-center'>
                Podium
            </h1>
            {/* Login component. Checks if user is logged in. If not, put login form */}
            {checkLoggedIn()}
            {/* Reviews Container */}
            <br/>
            <div className=''>
                {/* Makes cards display horizontally instead of vertically */}
                <div className=''>
                    <div className = 'card col-md-6 offset-md-3'>
                        <h3 className='card-title text-center'>
                            Your Reviews
                        </h3>
                        <div className='card-body'>
                                <ReviewComponent/>
                        </div>
                    </div>
                    <br/>

                    <div className = 'card col-md-6 offset-md-3'>
                        <div className='card-body'>
                            <h3 className='text-center'>Write New Review</h3>
                            <form>
                                {/* Field for review title */}
                                <div className='form-group'>
                                    <label className='form-label text-center'>Album Title:</label>
                                    <input
                                    type='text'
                                    name='atitle'
                                    className={`form-control ${errors.atitle ? 'is-invalid': ''}`}
                                    //Changes userName in useState variable immediately something is typed in form
                                    onChange={handleaTitle}
                                    ></input>

                                </div>
                                {/* Field for album title*/}
                                <div className='form-group'>
                                    <label className='form-label text-center'>Review Title:</label>
                                    <input
                                    type='text'
                                    name='title'
                                    className={`form-control ${errors.title ? 'is-invalid': ''}`}
                                    onChange={handleTitle}
                                    ></input>

                                </div>
                                {/* Field for review body*/}
                                <div className='form-group'>
                                    <label className='form-label text-center'>Review:</label>
                                    
                                    <textarea
                                    type='text'
                                    name='body'
                                    className={`form-control ${errors.body ? 'is-invalid': ''}`}
                                    rows={7}
                                    onChange={handleBody}
                                    ></textarea>

                                </div>
                                <br/>   
                                {/*Submit button*/}
                                <div className='text-center'>
                        <           button className='btn btn-success' onClick={submitReview}>New Review</button>
                                </div>  
                                
                            </form>
                        </div>
                    </div>


                </div>
                <br/>
                <br/>
            </div>
        </div>
        
        
  )
}

export default HomePageComponent