import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <h1>¡Welcome to the "Instagram Fights"!</h1>

                <div className="row">
                    <div className="col-sm-12">
                        <img className="imageHomePage" src="../inst.png" alt="Instagram"/>
                    </div>

                    <div className="col-sm-12">
                    <br />
                        <img className="arrow" src="../arrow.png" alt="Arrow"/>
                    </div>
                </div>

                <br />
                <br />
             

                <h2>Instagram fights are really comparisons between public users of 
                the application. <br />
                These users are compared by the amount of likes received in their last photos. <br />
                Test it yourself.</h2>


                <br />
                <br />
                <br />
               

					 <a href="#fight" className="button">Fights!</a>
					 <a href="#history" className="button">History</a>

				<br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
          


				  
            </div>
        );
    }
}

export default Home;