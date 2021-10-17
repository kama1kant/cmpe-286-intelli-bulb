import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './dashboard';
import NavHeader from './navheader';


class Main extends Component {
    render() {
        return (
            <div>
                <NavHeader></NavHeader>
                <Route path="/dashboard" component={Dashboard} />
            </div>
        )
    }
}

export default Main;