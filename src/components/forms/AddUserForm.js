import React, { useState } from 'react';

const AddUserForm = ({addUser}) => {

    const initialFormState = { name: '', age: ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();
        if (!user.name || !user.age) return;
        addUser(user);
        setUser(initialFormState);
    };

    return (
        <div className="row">
            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" 
                            id="name" 
                            name="name" 
                            value={user.name}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            type="number" 
                            name="age" 
                            value={user.age}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="age">Age</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button className="waves-effect waves-light btn">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUserForm;
