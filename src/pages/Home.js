import React, { useEffect, useState } from 'react';
import api from '../services/api';
import UserTable from '../components/table/UserTable';
import AddUserForm from '../components/forms/AddUserForm';
import EditUserForm from '../components/forms/EditUserForm';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({ id: null, name: '', age: '' });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        refreshUserTable();
    }, []);

    const refreshUserTable = () => {
        api.get('users')
            .then(response => response.data)
            .then(data => {
                setUsers(data);
            });
    }

    const addUser = (user) => {
        console.log(user);
        api.post('users', user)
            .then(res => {
                refreshUserTable();
            });
    };

    const deleteUser = (id) => {
        api.delete(`users/${id}`)
            .then(res => {
                refreshUserTable();
            });
    };

    const updateUser = (id, user) => {
        api.put(`users/${id}`, user)
            .then(res => {
                refreshUserTable();
            });
        setCurrentUser({ id: null, name: '', username: '' });
        setEditing(false);
    };

    const editRow = (user) => {
        setCurrentUser({ _id: user._id, name: user.name, age: user.age });
        setEditing(true);
    };

    return (
        <div className="container">
            <div className="row">
                {
                    editing ? (
                        <div className="col s12 l6">
                            <h4>Edit User</h4>
                            <EditUserForm 
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser} 
                            />
                        </div>
                    ) : (
                        <div className="col s12 l6">
                            <h4>Add user</h4>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )
                }
                
                <div className="col s12 l6">
                    <h5>Users</h5>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    );
};

export default Home;
