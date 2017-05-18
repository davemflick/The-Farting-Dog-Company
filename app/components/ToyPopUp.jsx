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

	addColors(col){
		let colorArr = [<p className="colOptions" key="key">Colors</p>];
		let i = 0;
		if(col.colors){
			col.colors.forEach(color=>{ colorArr.push(
			<div className="colOpt" id={`${col.id}_${color}`} key={i}></div>);
			i++});
		}
		return colorArr;
	}

	render(){
		return(
			<div className='toyModal' id={this.props.toyPop.id} style={this.props.styleModal} onClick={this.props.close}>
				<div className="contentModal" id='not'>
					<span className="close" id={this.props.toyPop.id} onClick={this.props.close}>X</span>
					<h1>{this.props.toyPop.name}</h1>
					<div className="productContent">
						<div className="toyImages">	
							{this.mapImages(this.props.toyImgColl)}
						</div>
						<div className="productDetails">
							<h4>{this.props.toyPop.description}</h4>
							<p>Starting at ${this.props.toyPop.price}</p>
							<h3>Options </h3>
							<div className="ifColors">
							{this.addColors(this.props.toyPop)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}