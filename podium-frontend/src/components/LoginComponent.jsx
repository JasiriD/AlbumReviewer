//rafce is the command to create a simple baseline react component
import React from 'react'
import { useNavigate } from 'react-router'

export const LoginComponent = () => {

  const navigate = useNavigate();


  //loginAttempt function
  function loginAttempt(){

  }

  return (
    <div className='container'>
      <div className = 'card col-md-6 offset-md-3'>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label className='form-label'>Username</label>
              <input type="text" className="form-control" id="inputUsername1" placeholder="Enter username"></input>
            </div>
            <div className='form-group'>
              <label className='form-label'>Password</label>
              <input type="text" className="form-control" id="inputPassword1" placeholder="Enter password"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent