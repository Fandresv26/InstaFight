import React, {Component} from "react";

class History extends  Component{
    constructor(props)
    {
        super(props);
        this.state = {
            history:[]
        };

    }

    componentDidMount(){
        fetch("/getHistory", {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                if (res.status!=="200") {
                    console.log("Error getting the data");
                }
                return res.json();
            })
            .then((json) =>{
                this.setState({
                    history : json
                })
            })
    }

    getJSON(){
        return this.state.history.map((t)=> {
            return(
                <div className="col-sm-3 caja">
                    <br/>
                    <h3>Fights: {t.fights}</h3>
                    <br/>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="Drivers">
                <br/>
                <h1>History of Searches</h1>
                <br/>
                <br/>
                <div className="row">
                    {this.getJSON()}
                </div>
                <br/>
                <br/>
            </div>
        )
    }


}

export default History;