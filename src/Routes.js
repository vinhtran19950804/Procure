import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './Components/App';
import LoginForm from './Components/Login/LoginForm';
import SignUpPage from './Components/SignUp/SignUpPage';
import store from './store';

export default class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}