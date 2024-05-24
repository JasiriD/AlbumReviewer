import React, {useEffect, useState} from 'react'
import { listUsers } from '../services/UserService'
//Importing useNavigate hook. This allows us to change pages with buttons
import { useNavigate } from 'react-router-dom'

function ListUserCompontent() {

    //Creating useState for users
    const [users, setUsers] = useState([])

    //Setting const function to useNavigate because you can't use it directly (HAS TO BE INSIDE INITIAL FUNCTION (WITH BRACKETS AT END!!!!) ! ! ! ! !)
    const navigate = useNavigate();

    //Not exactly sure how this works, takes data from API and puts it into users variable
    useEffect(()=> {
        listUsers().then((response) => {
            //calling useState function to apply the response data from our get request to users object
            setUsers(response.data)
        }).catch(error => {
            console.error(error);
        })

    },[])

    function addUser(){
        //addUser function transports you to addUser url
        navigate('/adduser')
    }

  return (
    //Remember that className usually refers to bootstrap classes
    <div className='container'>
        <h1 className='text-center'>All Users</h1>
        {/*Button that calls addUser funcion on click, navigating you to addUser page*/}
        <button type="button" className="btn btn-primary" onClick={addUser}>Make Account</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    {/*table header*/}
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    //Table that displays user data
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListUserCompontent