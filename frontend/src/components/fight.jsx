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
            likes1: null,
            likes2: null
        };
    }

    getUser1(u1){
        this.setState({
            user1: u1
        });
        fetch("https://www.instagram.com/"+u1+"/?__a=1")
            .then((res)=>{
                if (res.status!=="200") {
                    console.log("Error getting the data");
                }
            return res.json();
            })
            .then((userOne) =>{
                userOne.user.media.nodes.map(img => 
                    likes += img.likes.count),

                this.setState({
                    user1: userOne;
                    likes: likes1;
                })
            })
    }

    getUser2(u1){
        this.setState({
            user2: u2
        });
        fetch("https://www.instagram.com/"+u2+"/?__a=1")
            .then((res)=>{
                if (res.status!=="200") {
                    console.log("Error getting the data");
                }
            return res.json();
            })
            .then((userTwo) =>{
                userOne.user.media.nodes.map(img => 
                    likes += img.likes.count),

                this.setState({
                    user2: userTwo;
                    likes: likes2;
                })
            })
    }

    
    render() {
        return(
            <div className="Fight">

                <header>
                    <h1>Fight</h1>
                </header>

                <Search search={this.search.bind(this)}></Search>

                //*<div className="row">
                     <Users users={this.state.users} />
                </div>*/

                

            </div>
        );
    }
}

export default Fight;