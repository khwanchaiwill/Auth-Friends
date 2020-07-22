import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../axios/axiosWithAuth';

class FriendList extends React.Component {
   state = {
       friends: []
   };

   componentDidMount(){
       this.getFriends();
   }
    getFriends = () => {
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            console.log(res.data)
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
  
    render(){
        return(
        <div className="friendlist">
            {
                this.state.friends.map(friend => (
                    <div className="friend" key={friend.id}>
                        <h2> {friend.name} </h2>
                        <p> {friend.age} </p>
                        <p> {friend.email} </p>
                    </div>
                ))
            }
        </div>
    )
    }
    
}
export default FriendList;