import React from 'react';
import ToyPopUp from './ToyPopUp.jsx';
import state, { GIRAFFE, ROPE_BONE, TUG_N_TOSS, PROCEEDS} from '../state.js';


export default class Toys extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Gilbert_modal: {display: 'none'},
			Bone_Shape_modal: {display: 'none'},
			Bone_Shape_modal: {display: 'none'},
			curImg: 0,
			toyCount: 1,
			//fartSound: new Audio('./app/static/sounds/fart2.mov'),
		}
		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.toyBackground = this.toyBackground.bind(this);
	}
	//Make Sure to reset state.toyCount to 1 on initial load and every Update. So correct styles load.
	componentDidMount(){
		this.state.toyCount = 1;
	}
	componentDidUpdate(){
		this.state.toyCount = 1;
	}

	//Bring up corresponding toy modal when clicked.
	showModal(e){
		this.props.fartSound();
		let id= e.target.id + '_modal';
		this.state[id] = {display: 'block'};
		this.setState(this.state);
	}
	//Close corresponding toy modal when clicked
	closeModal(e){
		let id= e.target.id + '_modal';
		this.state[id] = {display: 'none'};
		this.state.curImg = 0;
		this.setState(this.state);
	}

	//Determine backgrounds of each toy depending on order shown. Updates toyCount. Uses evens and odds.
	toyBackground(){
		let tC = this.state.toyCount;
		let oddEven = '';
		if(tC % 2 !== 0){
			oddEven = 'odd';
		} else {
			oddEven = 'even';
		}
		tC++;
		this.state.toyCount = tC;
		return oddEven;
	}
	
	//Create a Toy in Product list for Each Toy Object Given from state.js
	createToy(toy){
		return(
			<div className={this.toyBackground() + ' individualToys'} id={toy.id}>
			  <div className="toyImage" id="toyImageId">
			   <img className="imageOfToy" src={"./app/static/images/" + toy.pic[0]} alt={toy.name} id={toy.id} onClick={this.showModal} />
			  </div>
			  <ToyPopUp id={toy.id + 'modal'} toyPop={toy} styleModal={this.state[toy.id + '_modal']} toyImgColl={toy.pic} close={this.closeModal} curImg={this.state.curImg} />
			  <div className="productDetails" id="prodDetId">
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
				{this.createToy(GIRAFFE) }
				{this.createToy(ROPE_BONE)}
				{this.createToy(TUG_N_TOSS)}

			</div>
		)
	}
}