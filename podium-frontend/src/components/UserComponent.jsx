import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../services/UserService';
//useParams allows us to write conditionals based on current URL
import { useParams } from 'react-router-dom';


export const UserComponent = () => {

    const navigate = useNavigate();

    const{id} = useParams();

    function goBack(){
        navigate('/users');
    }

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[userName, setuserName] = useState('');
    const[email, setEmail] = useState('');

    //Creating useState for errors (When the new user doesn't have proper variables in the form)
    //Each field here will contain errors pertaining to their cooresponding user field
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
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

    //saveUser function
    function saveUser(event){
        event.preventDefault();
        //Checks if validateForm returns true
        if(validateForm()){
            //Applies fields from form to user object
            const user = {firstName, lastName, userName, email};

            // //Prints user object to console (For testing purposes)
            console.log(user);

            //addUser function that is passed user object (from userService)
            addUser(user).then((response) =>{
                console.log(response.data);
                //returns user to list of users page
                navigate('/users')
            })
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

        if(email.trim() != ''){
            errorsCopy.email = '';
        }else {
            errorsCopy.email = 'An email is required.';
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
        {/* <button type="button" class="btn btn-primary" onClick={goBack}>Go Back</button> */}
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
                            <label className='form-label'>userName:</label>
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

                        {/* submit button & back button*/}
                        <br/>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={saveUser}>Submit</button>
                            <button className='btn btn-secondary' onClick={goBack}>Back</button>
                        </div>
                        <br/>
                    </form>
            </div>
        </div>
    </div>
  )
}
