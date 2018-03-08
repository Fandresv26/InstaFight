import React, { Component } from 'react';
import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import InfoColumn from './infoColumn';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      infoColumn: []
    }
  }

  componentDidMount() {
    fetch("https://www.instagram.com/"+this.state.term+"/?__a=1")
      .then((res)=>{
        if (res.status!=="200") {
          console.log("Error getting the data");
        }
        return res.json();
      })
      .then((json)=>{
        this.setState({
          usuario1:json
        })
      })
  }

  getInfoColumn(){

    console.log(this.state.users);
    this.setState({infoColumn:[]},()=>{
      this.state.users.map((user, i)=>{
        if(user){
          console.log("USER: "+user);
          /*se crea una variable adicional, en este caso axios, que llama fotos de flickr.*/
          .then(response => {
            console.log(response);

            var info = response.data.infoColumn;


            this.state.infoColumn[i]=info;
            this.setState({
              info: this.state.info
            });
          });
        }
      });
    });
  }

  change(val){
      console.log(val);
      this.setState({
        term:val
      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to InstaFights</h1>
        </header>
        <p className="App-intro">
          Digite el nombre de los usuarios a comparar.
        </p>

        <input className="form-control1" type="text" onChange={(event) => this.change(event.target.value)}/>

        <input className="form-control2" type="text" onChange={(event) => this.change(event.target.value)}/>

        <InfoColumn info={this.state.infoColumn}></InfoColumn>

        
      </div>
    );
  }


}

export default App;