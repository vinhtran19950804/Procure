import React, { Component } from 'react';

import '../App.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        alert(this.state.username, this.state.password);
    }
    handleChangeUsername = (event) => {
        const username = event.target.value;
        this.setState({ username });
    }
    handleChangePassword = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }
    render() {
        const { username, password } = this.state;
        return (
            <div>
                <form className="Modal" onSubmit={e => this.onSubmit(e)}>
                    <label>Login</label>
                    <input 
                        className="Column"
                        type="text" 
                        name="username" 
                        placeholder="username" 
                        value={username}
                        onChange={this.handleChangeUsername}
                    />
                    <input 
                        className="Column"
                        type="password" 
                        name="password" 
                        placeholder="password"
                        value={password}
                        onChange={this.handleChangePassword}
                    />
                    <button className="Column">Log In</button>
                </form>
            </div>
        )
    }
}