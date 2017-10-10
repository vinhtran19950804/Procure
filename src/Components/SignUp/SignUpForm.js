import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        const { username, email, password, passwordConfirmation, timezone } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join Procure</h1>
                <div className="form-group">
                    <label className="control-label">
                        User Name
                    </label>
                    <input 
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label classname="control-label">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control" 
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">
                        PassWord ConFirmation
                    </label>
                    <input
                        value={passwordConfirmation}
                        onChange={this.onChange}
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">
                        Time Zone
                    </label>
                    <input
                        value={timezone}
                        onChange={this.onChange}
                        type="text"
                        name="timezone"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}

export default SignUpForm;