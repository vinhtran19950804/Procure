import React, { Component } from 'react';

export default class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Procure</a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}