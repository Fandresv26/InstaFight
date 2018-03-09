import React, {Component} from "react";
import Users from "./users.jsx";

class Fight extends  Component{

    constructor(props)
    {
        super(props);

        this.state={
            user1: "",
            user2: "",
            likes1: null,
            likes2: null,
            img1: "",
            img2: ""
        };

        this.search = this.search.bind(this);
    }


    change1(event)
    {
        if(event.key === "Enter")
        {
            this.setState({user1: event.target.value});
        }
    }

    change2(event)
    {
        if(event.key === "Enter")
        {
            this.setState({user2: event.target.value});
        }
    }

    getUser1(u1){
        
        fetch("https://www.instagram.com/"+u1+"/?__a=1")
            .then((res)=>{
                if (res.status!=="200") {
                    console.log("Error getting the data");
                }
            return res.json();
            })

            .then((userOne) =>{
                
            })
    }

    getUser2(){
        fetch("https://www.instagram.com/"+u2+"/?__a=1")
            .then((res)=>{
                if (res.status!=="200") {
                    console.log("Error getting the data");
                }
            return res.json();
            })
            .then((userTwo) =>{
                userTwo.user.media.nodes.map(img => 
                    likes += img.likes.count),

                this.setState({
                    likes: likes2
                })
            })

    }


    
    render() {
        return(
            <div className="Fight">

                <header>
                    <h1>Fight</h1>
                </header>

                <div className="form-group row">
                        <div className="col-xs-3">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                              </div>
                              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                              change1={this.change1(event.target.value)}/>
                            </div>
                        </div>

                        <div className="col-xs-3">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                              </div>
                              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                              change2={this.change2(event.target.value)}/>
                            </div>
                        </div>

                  </div>




                //*<div className="row">
                     <Users users={this.state.users} />
                </div>*/

                

            </div>
        );
    }
}

export default Fight;