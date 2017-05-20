import React from 'react';
import ToyPopUp from './ToyPopUp.jsx';
import state, { GIRAFFE, ROPE_BONE, TUG_N_TOSS, PROCEEDS} from '../state.js';


export default class Toys extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Gilbert_modal: {display: 'none'},
			Bone_Shape_modal: {display: 'none'},
			Tug_N_Toss_modal: {display: 'none'},
			curImg: 0,
			//fartSound: new Audio('./app/static/sounds/fart2.mov'),
		}
		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	showModal(e){
		this.props.fartSound();
		let id= e.target.id + '_modal';
		this.state[id] = {display: 'block'};
		this.setState(this.state);
	}

	closeModal(e){
		let id= e.target.id + '_modal';
		this.state[id] = {display: 'none'};
		this.state.curImg = 0;
		this.setState(this.state);
	}
	
	createToy(toy){
		return(
			<div className="individualToys" id={toy.id}>
			  <div className="toyImage">
			   <img className="imageOfToy" src={"./app/static/images/" + toy.pic[0]} alt={toy.name} id={toy.id} onClick={this.showModal} />
			  </div>
			  <ToyPopUp id={toy.id + 'modal'} toyPop={toy} styleModal={this.state[toy.id + '_modal']} toyImgColl={toy.pic} close={this.closeModal} curImg={this.state.curImg} />
			  <div className="productDetails">
			   <h3>{toy.name}</h3>
			   <p>{toy.description}</p>
			   <p>{toy.more}</p>
			  </div>
			</div>
		)
	}


	render(){
		return(
			<div className='toyContainer' id="toys">
			<div className="titleCont">
			 <h1 className="toysTitle">Our Products </h1>
			 <h4 className="fivePercent"><strong>{PROCEEDS.strong} </strong> {PROCEEDS.descrip}</h4>
			</div>
				{this.createToy(GIRAFFE)}
				{this.createToy(ROPE_BONE)}
				{this.createToy(TUG_N_TOSS)}
			</div>
		)
	}
}