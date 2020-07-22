import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axios/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const newfriend = {
    name: "",
    age: "",
    email: "",
}
const AddFriendForm = props => {
    const [addFriend, setAddFriend] = useState(newfriend)
    const {push} = useHistory();

    const handleChange = e => {
        const { name, value } = e.target
        setAddFriend({
            ...addFriend,
            [name]: value
        })
    }
    const addSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("http://localhost:5000/api/friends", addFriend)
        .then(res => {
            console.log(res)
            setAddFriend(res.data)
            push(`/FriendsList`)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    return(
        <div className="addfriend-form">
            <form onSubmit={addSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={props.name}
                    onChange={handleChange}
                    placeholder="name"
                /> 
                <input 
                    type="text"
                    name="age"
                    value={props.age}
                    onChange={handleChange}
                    placeholder="age"
                />
                 <input 
                    type="email"
                    name="email"
                    value={props.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                />
            <button> Add Friend </button>
            </form>
        </div>
    )
}
export default AddFriendForm;