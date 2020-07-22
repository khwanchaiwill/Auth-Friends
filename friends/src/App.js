import React from 'react';

import './App.css';
import LoginForm from './component/LoginForm';
import AddFriendForm from './component/AddFriend';
import FriendList from './component/FriendList';
import { Switch, Route, NavLink} from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

function App () {

 
    return(
 
      <div>
        <header>
          <NavLink className="link" to="/login">Login</NavLink>
          <NavLink className="link" to ="/FriendsList">Protected Page</NavLink>
          <NavLink className="link" to ="/add-friends">Add friend</NavLink>
        </header>
      <div>
        <Switch> 
          <PrivateRoute exact path="/FriendsList" component={FriendList} />
          <PrivateRoute path="/add-friends" component={AddFriendForm }/>
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
          
      </Switch> 
      </div>
    </div>
  
    )
}
export default App;
