import React from 'react'

function ListUserCompontent() {

    //Table with dummy data
    const testData = [
        {
            "id":1,
            "firstName": "Jasiri",
            "lastName": "Dickson",
            "userName": "Jeezi",
            "email": "Shingun121@gmail.com"
        },
        {
            "id":1,
            "firstName": "Jasiri2",
            "lastName": "Dickson2",
            "userName": "Jeezi2",
            "email": "Shingun121@gmail.com2"
        },
        {
            "id":3,
            "firstName": "Jasiri3",
            "lastName": "Dickson3",
            "userName": "Jeezi3",
            "email": "Shingun121@gmail.com3"
        },
    ]

  return (
    //Remember that className usually refers to bootstrap
    <div className='container'>
        <h1>All Users</h1>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    //Table that displays dummy data
                    testData.map(user =>
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