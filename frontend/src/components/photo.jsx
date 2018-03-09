import React, {Component} from "react";
import PropTypes from "prop-types";

class Photo extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="col-sm-4">
                <img className="foto" src={this.props.thubmnail_src} alt=""/>
                
                <h3>Likes: {this.props.likes.count}</h3>


            </div>
        );
    }
}

Photo.PropTypes = {
    photo : PropTypes.object.isRequired
}

export default Photo;