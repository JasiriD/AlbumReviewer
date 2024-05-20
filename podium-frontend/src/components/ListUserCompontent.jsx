import React, {useEffect, useState} from 'react'
import { listUsers } from '../services/UserService'

function ListUserCompontent() {

    //Table with REST data
    const [users, setUsers] = useState([])

    //Not exactly sure how this works, takes data from API and puts it into users variable
    useEffect(()=> {
        listUsers().then((response) => {
            setUsers(response.data)
        }).catch(error => {
            console.error(error);
        })

    },[])

  return (
    //Remember that className usually refers to bootstrap
    <div className='container'>
        <h1>All Users</h1>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    //Table that displays dummy data
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