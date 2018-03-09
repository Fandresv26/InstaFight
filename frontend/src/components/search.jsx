import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';


class Search extends React.Component {

    constructor(props){

        super(props);

        this.state={
            user1 : "",
            user2 : ""
        };
    }

    change1(val){
        console.log(val);
        this.setState({
         user1:val
        })
    }

    change2(val){
        console.log(val);
        this.setState({
         user2:val
        })
    }

  

  render () {
    return(
      <div className="form-group row">
            <div className="col-xs-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                  onChange={(event) => this.change1(event.target.value)}/>
                </div>
            </div>

            <div className="col-xs-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                  onChange={(event) => this.change2(event.target.value)}/>
                </div>
            </div>

            <div className="col-md-1">
                <Button onClick={()=>
                    {this.props.getUsers(this.state.user1, this.state.user2)}
                }>
                Fight
                </Button>
            </div>
      </div>
    )
  }
}

export default Search;