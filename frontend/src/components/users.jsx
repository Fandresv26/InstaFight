import React, {Component} from "react";
import PropTypes from "prop-types";
import User from "./user";

class Users extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <User user={this.state.user} />
            </div>);
    }
}

Users.PropTypes = {
    users : PropTypes.array.isRequired
};

export default Users;