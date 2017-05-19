import React from 'react';

export default class ToyPopUp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			imageShown: {display: 'block'},
			imageHidden: {display: 'none'},
			currentImg: this.props.curImg,
			totalImgs: this.props.toyImgColl.length,
		}
		this.switchPic = this.switchPic.bind(this);
	}

	mapImages(imgs){
	let images = [];
	let cur = this.state.currentImg;
		for(var i=0; i<imgs.length; i++){
			if(i === cur){
				images.push(<img src={'./app/static/images/' + imgs[cur]} key={i} style={this.state.imageShown} className="poppedImg" />);
			} else {
				images.push(<img src={'./app/static/images/' + imgs[i]} key={i} style={this.state.imageHidden} className="poppedImg" />);
			}
		}
		return images;
	}

	switchPic(){
		let len = this.state.totalImgs;
		if(len > 1){
			if(this.state.currentImg === len-1) {
			this.state.currentImg = 0;
		} else {
			this.state.currentImg++;
		}
		this.setState(this.state);
		this.mapImages();
		}

	}


	isOptions(opt){
		if(opt.options){
			return(
			 <h3>Options</h3>

			 )
		}
	}


	addColors(col){
		if(col.colors){
			let colorArr = [<p className="colOptions" key="key">Colors</p>];
			let i = 0;
			col.colors.forEach(color=>{ colorArr.push(
			<div className="colOpt" id={`${col.id}_${color}`} key={i}></div>);
			i++});
			return colorArr;
		}	
	}

	render(){
		return(
			<div className='toyModal' id={this.props.toyPop.id} style={this.props.styleModal} onClick={this.props.close}>
				<div className="contentModal" id='not'>
					<span className="close" id={this.props.toyPop.id} onClick={this.props.close}>X</span>
					<h1>{this.props.toyPop.name}</h1>
					<div className="productContent">
						<div className="toyImages">	
							<div className="nextPic" onClick={this.switchPic}> ➤➤➤➤➤ </div>
							{this.mapImages(this.props.toyImgColl)}
						</div>
						<div className="productDetails">
							<h4>{this.props.toyPop.description}</h4>
							<p>Starting at ${this.props.toyPop.price}</p>
							<ul className="aboutToy">
			   				{this.props.toyPop.about.map((toy, i)=> <li key={i}>{toy}</li>)}
			   				</ul>
							{this.isOptions(this.props.toyPop)}
							<div className="ifColors">
							{this.addColors(this.props.toyPop)}
							</div>
							<p className="purchase"> Purchase this Item through <a href={this.props.toyPop.amazon} target="_blank">Amazon.</a></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}