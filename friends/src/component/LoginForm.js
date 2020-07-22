import React from 'react';
import axios from 'axios';



class LoginForm extends React.Component {
    constructor(){
        super()
        this.state = {
            credentials: {
                username: "",
                password: ""
            },
        }
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            credentials: {
                ...this.state.credentials,
                [name] : value
            },
        })
    }
    loginSubmit = e => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/api/login", {
            
                username: "Lambda School",
                password: "i<3Lambd4"    
        })
        .then(res => {
            console.log(res)
            window.localStorage.setItem("token", res.data.payload);
            this.props.history.push("/FriendsList")
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.loginSubmit}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="username"
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password"
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}
export default LoginForm;