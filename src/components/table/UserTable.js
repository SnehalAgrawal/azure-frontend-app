import React from 'react';

const UserTable= ({users, editRow, deleteUser}) => (
    <table className="responsive-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
        </thead>
    <tbody>
        {
            users.length > 0 ? (
                users.map (user => (

                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => editRow(user)}>
                                edit
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => deleteUser(user._id)}>
                                delete
                            </button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{users[0]} No Users</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default UserTable;