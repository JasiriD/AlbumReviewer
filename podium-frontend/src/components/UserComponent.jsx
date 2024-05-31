import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser, getUserByID, updateUser } from '../services/UserService';
//useParams allows us to write conditionals based on current URL
import { useParams } from 'react-router-dom';


export const UserComponent = () => {

    const navigate = useNavigate();

    //Gets id from URL
    const{id} = useParams();

    //goBack function that returns you to view all users screen
    function goBack(){
        navigate('/users');
    }

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[userName, setuserName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    useEffect(() =>{ 

        //If url contains an ID, then execute this function
        if(id){
            getUserByID(id).then((response) => {
                //Takes response from getUserByID and puts it into fields using useState functions
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setuserName(response.data.userName);
                setEmail(response.data.email);
                setPassword(response.data.password);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id]);

    //Creating useState for errors (When the new user doesn't have proper variables in the form)
    //Each field here will contain errors pertaining to their cooresponding user field
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    })

    function handleFirstName(event){
        //Gets value from form and applies it to firstName useState variable
        setFirstName(event.target.value);
    }

    function handleLastName(event){
        //Gets value from form and applies it to lastName useState variable
        setLastName(event.target.value);
    }

    function handleuserName(event){
        //Gets value from form and applies it to userName useState variable
        setuserName(event.target.value);
    }

    function handleEmail(event){
        //Gets value from form and applies it to email useState variable
        setEmail(event.target.value);
    }

    function handlePassword(event){
        //Gets value from form and applies it to email useState variable
        setPassword(event.target.value);
    }

    //saveUser function
    function saveUser(event){
        event.preventDefault();
        //Checks if validateForm returns true
        if(validateForm()){
            //Applies fields from form to user object
            const user = {firstName, lastName, userName, email, password};

            // //Prints user object to console (For testing purposes)
            console.log(user);

            
            //If statement that checks if you're updating an existing user or creating a new one
            //If there is an id in the URL, run updateUser
            //.catch error statements are there to throw errors if any field is empty/incorrect
            if(id){
                updateUser(id, user).then((response) =>{
                    console.log(response.data);
                    //returns user to list of users page
                    navigate('/users')
                }).catch(error => {
                    console.error(error);
                })
            }else{
                //addUser function that is passed user object (from userService)
                addUser(user).then((response) =>{
                    console.log(response.data);
                    navigate('/users')
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    //Validate form function
    function validateForm(){
        //Declares form as valid initially
        let valid = true;

        //Creating copy of errors useState variable. The three dots are a spread operator, used to copy objects into other objects
        const errorsCopy = {... errors};

        //First if statement checking if firstName is valid. .trim method removes spaces from both sides of string
        if(firstName.trim() != ''){
            errorsCopy.firstName = '';
        }else {
            errorsCopy.firstName = 'A first name is required.';
            valid = false;
        }

        //Same thing for other fields

        if(lastName.trim() != ''){
            errorsCopy.lastName = '';
        }else {
            errorsCopy.lastName = 'A last name is required.';
            valid = false;
        }

        if(userName.trim() != ''){
            errorsCopy.userName = '';
        }else {
            errorsCopy.userName = 'A username is required.';
            valid = false;
        }

        if(password.trim() != ''){
            errorsCopy.password = '';
        }else {
            errorsCopy.password = 'A password is required.';
            valid = false;
        }

        //Sets errors equal to errorsCopy using useState
        setErrors(errorsCopy);

        return valid;
    }

    //Function that controls page title (As update and create user functions share the same component)
    function pageTitle(){
        //If id is not empty, return update user
        if(id){
            return <h1 className='text-center'>Edit Account</h1>;
            //else, return add user
        }else{
            return <h1 className='text-center'>Create Account</h1>
        }
    }

  return (
    <div className="container">
        <br/>
        {/* Go back button that currently doesnt work: <button type="button" class="btn btn-primary" onClick={goBack}>Go Back</button> */}
        <div className='row'>
            {/* card div with some bootstrap styling that shrinks the card and centers it */}
            <div className = 'card col-md-6 offset-md-3'>
                {/* Running pageTitle function to return either Edit or Create account */}
                {pageTitle()}
                <div className = 'card-body'></div>
                    <form>
                        {/* Field for firstName */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>User First Name:</label>
                            <input 
                                type='text'
                                placeholder='First Name'
                                name='firstName'
                                // passing useState firstName variable from line 13 to value
                                value={firstName}
                                //Adds is-invalid bootstrap css class if there is an error
                                className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                                onChange={handleFirstName}>

                            </input>
                            {/* Displays validation error message under input text box */}
                            { errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div> }
                        </div>

                        {/* Field for lastName */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>User Last Name:</label>
                            <input 
                                type='text'
                                placeholder='Last Name'
                                name='lastName'
                                // passing useState firstName variable from line 13 to value
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                                onChange={handleLastName}>

                            </input>
                            { errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div> }
                        </div>
                        
                        {/* Field for userName */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Username:</label>
                            <input 
                                type='text'
                                placeholder='Username'
                                name='userName'
                                // passing useState firstName variable from line 13 to value
                                value={userName}
                                className={`form-control ${errors.userName ? 'is-invalid': ''}`}
                                onChange={handleuserName}>

                            </input>
                            { errors.userName && <div className='invalid-feedback'> {errors.userName} </div> }
                        </div>

                        {/* Field for email */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>User Email:</label>
                            <input 
                                type='text'
                                placeholder='Email'
                                name='email'
                                // passing useState firstName variable from line 13 to value
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid': ''}`}
                                onChange={handleEmail}>

                            </input>
                            { errors.email && <div className='invalid-feedback'> {errors.email} </div> }
                        </div>

                        {/* Field for password */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>User Password:</label>
                            <input 
                                type='password'
                                placeholder='Password'
                                name='password'
                                // passing useState firstName variable from line 13 to value
                                value={password}
                                className={`form-control ${errors.password ? 'is-invalid': ''}`}
                                onChange={handlePassword}>

                            </input>
                            { errors.password && <div className='invalid-feedback'> {errors.password} </div> }
                        </div>

                        {/* submit button & back button*/}
                        <br/>
                        <div className='text-center' id="submitButtons">
                            <button className='btn btn-success' onClick={saveUser}>Submit</button>                             
                            <button className='btn btn-secondary' onClick={goBack}>Back</button>
                        </div>
                        <br/>
                    </form>
            </div>
        </div>
    </div>
  )
};
