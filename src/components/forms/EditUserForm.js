import React, { useState, useEffect } from 'react';

const EditUserForm = ({currentUser, updateUser, setEditing}) => {
    const [user, setUser] = useState(currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();
        updateUser(user._id, user);
    };

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" 
                            id={user._id} 
                            name="name"
                            value={user.name}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="name"></label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="age" 
                            value={user.age}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="age"></label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn">Update</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => setEditing(false)}
                            >Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;
