import React, { PropTypes } from 'react';
import Photo from './photo';


class InfoColumn extends React.Component {

	render () {
	    if(this.props.info){
	      return(

	        <div>
	          <div className="container text-center">
	          	<div className="row text-center">
		          	{this.props.info.map((user)=>{

		            	return(
		             	 <Photo foto={user}></Photo>
		            	)

		          	})}
	        	</div>
	          </div>
	        </div>
	      )
	    }

	    else{
	      return(
	        <div></div>
	      )
	    }
 	}

}

export default InfoColumn;