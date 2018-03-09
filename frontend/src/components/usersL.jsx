import React, {Component} from "react";
import PropTypes from "prop-types";
import User from "./user";

class Users extends Component {
    constructor(props){
        super(props);
    }


    renderUsers(){
        return this.props.users.map((t,i) =>{
            return <User user ={t} key={i}/>
        });
    }


    render(){
        return(
            <div>
                {this.renderFollowers()}
            </div>);
    }
}

};

export default Users;