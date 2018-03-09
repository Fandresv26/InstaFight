import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';


class Search extends React.Component {


    change1(event)
    {
        if(event.key === "Enter")
        {
            this.props.getUser1(event.target.value);
        }
    }

    change2(event)
    {
        if(event.key === "Enter")
        {
            this.props.getUser2(event.target.value);
        }
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
    )
  }
}

export default Search;