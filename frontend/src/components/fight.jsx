import React, {Component} from "react";
import Search from "./search.jsx";
import Users from "./users.jsx";

class Fight extends  Component{

    constructor(props)
    {
        super(props);

        this.state={
            user1: "",
            user2: "",
            photos:[]
        };
    }

    getUser1(u1){
        fetch("https://www.instagram.com/"+u1+"/?__a=1")
            .then((res)=>{
                if (res.status!=="200") {
                    console.log("Error getting the data");
                }
            return res.json();
            })
            .then(userOne=>{
                userOne.user.media.nodes.map(img =>
                    this.state.likes += img.likes.count),
                this.setState({
                    user1:userOne,
                    likes1:this.state.likes
                })
            })
    }

    getUser2(u2){
        fetch("https://www.instagram.com/"+u2+"/?__a=1")
            .then((res)=>{
                if (res.status!=="200") {
                    console.log("Error getting the data");
                }
            return res.json();
            })
            .then(userTwo=>{
                userTwo.user.media.nodes.map(img =>
                    this.state.likes += img.likes.count),
                this.setState({
                    user2:userTwo,
                    likes2:this.state.likes
                })
            })
    }

    getUsers(u1, u2){
        console.log(this.state.user1);
        console.log(this.state.user2);
    }

    
    render() {
        return(
            <div className="Fight">

                <header>
                    <h1>Fight</h1>
                </header>

                <Search getUsers={this.getUser1.bind(this), this.getUser2.bind(this)}></Search>

                

            </div>
        );
    }
}

export default Fight;