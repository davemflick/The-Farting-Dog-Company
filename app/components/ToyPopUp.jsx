import React from 'react';

export default class ToyPopUp extends React.Component{


	mapImages(imgs){
	let images = [];
		for(var i=0; i<imgs.length; i++){
			if(i===0){
				images.push(<img src={imgs[0]} key={i} style={{display: 'block'}} className="poppedImg" />);
			} else {
				images.push(<img src={imgs[i]} key={i} style={{display: 'none'}} className="poppedImg" />);
			}
		}
		return images;
	}

	render(){
		return(
			<div className='toyModal' id={this.props.toyPop.id} style={this.props.styleModal} onClick={this.props.close}>
				<div className="contentModal" id='not'>
					<span className="close" id={this.props.toyPop.id} onClick={this.props.close}>X</span>
					<h1>{this.props.toyPop.name}</h1>
					<div className="toyImages">	
						{this.mapImages(this.props.toyImgColl)}
					</div>
				</div>
			</div>
		)
	}
}