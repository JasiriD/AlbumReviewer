//rafce is the command to create a simple baseline react component
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import { listUsers, getUserByID } from '../services/UserService'

const LoginComponent = ({ sendDataToParent }) => {

    const navigate = useNavigate();

    //Test data
    const data = "This is test data";

    //loginAttempt function
    function loginAttempt(){

    }

    const[currentID, setCurrentID] = useState(0);

    //Creating useState for errors (When the new user doesn't have proper variables in the form)
    //Each field here will contain errors pertaining to their cooresponding user field
    const [errors, setErrors] = useState({
        userName: '',
        password: '',
    })


    const[userName, setuserName] = useState('');
    const[password, setPassword] = useState('');

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



    //Login authenication function
    function checkUsers(){

        //Initally declaring valid as true
        let valid = true;

        //Copu of errors useState variable
        const errorsCopy = {... errors};

        //Checks if username field is empty
        if(userName.trim() != ''){
            errorsCopy.userName = '';
        }else {
            errorsCopy.userName = 'A Username is required';
            valid = false;
        }

        //same for password
        if(password.trim() != ''){
            errorsCopy.password = '';
        }else {
            errorsCopy.password = 'A Password is required';
            valid = false;
        }

        //Username and password passed from form
        const test = {userName, password};

        //console.log(test);

        //Empty output
        let output = "";

        //Loops through users objects
        for(let user in users){

            console.log("test");

            //If validation checking if username isnt correct
            if((users[user].userName) != test.userName || (users[user].password) != test.password){
                //setting errors to reflect if username or password are invalid
                errorsCopy.userName = 'Username or password incorrect.';
                errorsCopy.password = 'Username or password incorrect.';
                console.log(users[user].userName + " " + users[user].password);
            //if username is correct, do this
            }else{
                console.log("Yay!");
                console.log(users[user].id);
                /* navigate("/users"); */
                sendDataToParent(users[user].id);
                return(users[user].id);
            }
        }

        //Sets real errors to the copy we created earlier
        setErrors(errorsCopy);

        return output;
    }

    function handleuserName(event){
        setuserName(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }


    return (
    <div className='container'>
        <br/>
        <div className = 'card col-md-6 offset-md-3'>
            <div className='card-body'>
            <h1 className='text-center'>Login</h1>
            <form>
                    {/*Username Entry */}
                    <div className='form-group'>
                        <label className='form-label'>Username</label>
                        <input 
                            type="text" 
                            id="inputUsername1" 
                            placeholder="Enter username" 
                            name='userName' 
                            className={`form-control ${errors.userName ? 'is-invalid': ''}`}
                            onChange={handleuserName}></input>

                        {/* Displays validation error message under input text box */}
                        {errors.userName && <div className='invalid-feedback'> {errors.userName}</div>}
                    </div>
                    {/*Password Entry */}
                    <div className='form-group'>
                        <label className='form-label'>Password</label>
                        <input 
                            type="text" 
                            id="inputPassword1" 
                            placeholder="Enter password" 
                            name='password' 
                            className={`form-control ${errors.userName ? 'is-invalid': ''}`}
                            onChange={handlePassword}></input>

                        {errors.password && <div className='invalid-feedback'> {errors.password}</div>}
                    </div>
                </form>
            </div>
            <br/>
            <div className='text-center'>
                <button className='btn btn-danger' onClick={checkUsers}>Login</button>
            </div>
            <br/>
        </div>
{/*         <Link
            to={{
                pathname: "/users",
                state: currentID,
            }}
        ></Link> */}
        <div>
            {/* passing test data to HomePageComponent*/}
        </div>
    </div>
    )
}

export default LoginComponent