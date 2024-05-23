import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const navigate = useNavigate;

// function goBack(){
//     navigate('/users')
// }

export const UserComponent = () => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');

    function handleFirstName(event){
        //Gets value from form and applies it to firstName useState variable
        setFirstName(event.target.value);
    }

    function handleLastName(event){
        //Gets value from form and applies it to firstName useState variable
        setLastName(event.target.value);
    }

    function handleUsername(event){
        //Gets value from form and applies it to firstName useState variable
        setUsername(event.target.value);
    }

    function handleEmail(event){
        //Gets value from form and applies it to firstName useState variable
        setEmail(event.target.value);
    }

    //saveUser function
    function saveUser(event){
        event.preventDefault();
        
        //Applies fields from form to user object
        const user = {firstName, lastName, username, email};
        //Prints user object to console (For testing purposes)
        console.log(user);
    }

  return (
    <div className="container">
        <br/>
        {/* <button type="button" class="btn btn-primary" onClick={goBack}>Go Back</button> */}
        <div className='row'>
            {/* card div with some bootstrap styling that shrinks the card and centers it */}
            <div className = 'card col-md-6 offset-md-3'>
                <h1 className='text-center'>Create Account</h1>
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
                                className='form-control'
                                onChange={handleFirstName}>

                            </input>
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
                                className='form-control'
                                onChange={handleLastName}>

                            </input>
                        </div>
                        
                        {/* Field for username */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Username:</label>
                            <input 
                                type='text'
                                placeholder='Username'
                                name='firstName'
                                // passing useState firstName variable from line 13 to value
                                value={username}
                                className='form-control'
                                onChange={handleUsername}>

                            </input>
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
                                className='form-control'
                                onChange={handleEmail}>

                            </input>
                        </div>
                        {/* submit button */}
                        <br/>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={saveUser}>Submit</button>
                            <button className='btn btn-secondary'>Back</button>
                        </div>
                        <br/>
                    </form>
            </div>
        </div>
    </div>
  )
}
