import React, { Component } from "react";
// import Rides from '../components/rides';

import './rides.css';

let imgUrl = './images/bike-background-02.png';

let bgImage = {
  backgroundImage: 'url(' + imgUrl + ')',
  minHeight:'100%',
  width:'100%'
}

class RidesPage extends Component{
	render(){
		return(
			<div style={bgImage}>
				<div  className="rm-rides-container">
					<div className="rm-rides-left-panel">
						{/*<Rides history={this.props.history} parent={this.props.parent}></Rides>*/}
					</div>
					<img className="" src="./images/biker-04.png"/>
				</div>
			</div>
		)
		
	}
}

export default RidesPage;