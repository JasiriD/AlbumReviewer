//rafce is the command to create a simple baseline react component
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import { listUsers } from '../services/UserService'

export const LoginComponent = () => {

  const navigate = useNavigate();


  //loginAttempt function
  function loginAttempt(){

  }


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

  //loop through users function
  function checkUsers(){

    const test = {userName, password};
    console.log(test);
    let output = "";

    //Loops through users objects
    for(let user in users){
      //If validation checking if username isnt correct
      if((users[user].firstName) != test.userName){
        output += (users[user].firstName) + " ";
        //if username is correct, do this
      }else{
        console.log("Yay!");
        console.log(users[user].id);
      }
    }
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
      <div className = 'card col-md-6 offset-md-3'>
        <div className='card-body'>
          <form>
            {/*Username Entry */}
            <div className='form-group'>
              <label className='form-label'>Username</label>
              <input type="text" className="form-control" id="inputUsername1" placeholder="Enter username" name='userName' onChange={handleuserName}></input>
            </div>
            {/*Password Entry */}
            <div className='form-group'>
              <label className='form-label'>Password</label>
              <input type="text" className="form-control" id="inputPassword1" placeholder="Enter password" name='password' onChange={handlePassword}></input>
            </div>
          </form>
        </div>
        <div className='text-center'>
          <button className='btn btn-danger' onClick={checkUsers}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent