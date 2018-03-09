import React, {Component} from "react";
import PropTypes from "prop-types";
import Photo from "./photo";

class User extends Component {
    constructor(props){
        super(props);
    }

    renderUser(){
        return this.props.user.map((t,i) =>{
            return <Photo photo ={t} key={i}/>
        });
    }

    render(){
        return(<div>
            {this.renderUser()}
        </div>);
    }
}

User.PropTypes = {
    user : PropTypes.array.isRequired
};

export default User;