import React from 'react'

const User_Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(
                        user => (
                            <tr key={user.id}>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td>
                                    <button onClick={() => { props.editRow(user) }} className="button primary">Edit</button>
                                    <button onClick={() => props.deleteUser(user.id)} className="button primary">Delete</button>
                                </td>
                            </tr>
                        )
                    )
                ) : (
                        <tr>
                            <td colSpan={3}>No users are available</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    )

}

export default User_Table