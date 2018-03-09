import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./home.jsx";
import Fight from "./fight.jsx";
import History from "./history.jsx";


class Main extends Component {

    render () {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/fight" render={
                        (props) => 
                        <Fight token={this.props.token} 
                        saveToken={this.props.saveToken} 
                        url={this.props.url} 
                        {...props} />} 
                    />

                    <Route exact path="/history" render={
                        (props) => 
                        <History token={this.props.token} 
                        saveToken={this.props.saveToken} 
                        url={this.props.url} 
                        {...props} />} 
                    />

                </Switch>
            </main>
        );
    }
}

export default Main;