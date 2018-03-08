import React, { PropTypes } from 'react';

class Photo extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      url:this.getUrl()
    }
  }

  getUrl() {
        var request = require("request")

        var url = "http://instagram/" +
                  this.props.user +
                  "/?__a=1"
            "key=d99803c970a04223998cabd90a741633" +
            "&stop_id=it"

        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
            }
        })


        return "https://farm"+
            this.props.photo.farm +
            ".staticflickr.com/" +
            this.props.photo.server +
            "/"+
            this.props.photo.id+
            "_" +
            this.props.photo.secret +
            "_s.jpg";
    }

  render () {
    return(
      <div>
        <img src={this.state.url} alt={this.props.photo.title}></img>
      </div>
    )
  }
}

export default Photo;