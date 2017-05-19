import React from 'react';
import ToyPopUp from './ToyPopUp.jsx';

const GIRAFFE = {
	id: 'Gilbert',
	name: 'GILBERT THE FARTING GIRAFFE',
	pic: ['./app/static/images/giraffe.jpeg'],
	description: "Gilbert has a high fiber diet and with that is a whole lotta ruckus! Squeeze Gilberts belly and be prepared for an unruly sound.",
	about: ['HIGH QUALITY AND DURABLE Gilbert is double stitched, interior mesh lining for extra durability, and a plush outside material.',
	'SAFE FOR YOUR FUR BABY Gilbert is double stitched, interior mesh lining for extra durability, and a plush outside material.',
	'This toy is not indestructible and best to monitor your pet while playing with it. If your pet finds access to the sound insert, please throw away. The sound module is not for play if exposed.',
	],
	more: 'Gilbert the Farting Giraffe is a great excuse to blame the dog! Made of plush, non-toxic materials, the toy is designed for extra durability and extra laughs. Made in China. Non-toxic polyfill interior and the sound insert is ROHS compliant.',
	price: 15,
	options: false,
}

const ROPE_BONE ={
	id: 'Bone_Shape',
	name: "Bone Shape Rope Toy",
	pic: ['./app/static/images/boneRope.jpeg'],
	description: "Made of 100% cotton. Tightly woven rope shaped into a bone, durable and non-toxic material ideal for your pets play",
	about: ['HEALTHY FOR YOUR PETS TEETH AND GUMS fun way to keep up on your pets dental hygiene!',
	' DESIGNED FOR SMALL TO MEDIUM DOGS This toy is made of high quality, woven-rope ideal for small to medium sized dogs!',
	' SOAK IN WATER AND FREEZE Great summer treat when it’s a little toasty outside!',],
	price: 10,
	options: true,
	colors: ['red', 'pink', 'orange', 'green', 'blue'],
}

const TUG_N_TOSS = {
	id: 'Tug_N_Toss',
	name: "Tug-n-Toss Rope Toy",
	pic: ['./app/static/images/tugNToss.jpeg'],
	description: "Made of 100% cotton. Tightly woven rope, durable and non-toxic material ideal for your pets play",
	about: [' GREAT TOY TO INTERACT WITH YOUR PET Handle makes it easy to interact with your pup, play tug-of-war, and toss!',
	'HEALTHY FOR YOUR PETS TEETH AND GUMS fun way to keep up on your pets dental hygiene!',
	' DESIGNED FOR SMALL TO MEDIUM DOGS This toy is made of high quality, woven-rope ideal for small to medium sized dogs!',
	' SOAK IN WATER AND FREEZE Great summer treat when it’s a little toasty outside!',],
	price: 10,
	options: true,
	colors: ['red', 'green', 'blue', 'teal', 'redBlue', 'tealBlue'],
}

const PROCEEDS = { strong: "5% OF PROFITS DONATED FOR HOMELESS PETS",
 descrip: "We all love our fur babies and there are too many pets out there with out a home! 5% of profits will be donated to small, non-profit organizations that protect the welfare of these animals and make sure they find their forever homes!"}

export default class Toys extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Gilbert_modal: {display: 'none'},
			Bone_Shape_modal: {display: 'none'},
			Tug_N_Toss_modal: {display: 'none'},
			//fartSound: new Audio('./app/static/sounds/fart2.mov'),
		}
		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	showModal(e){
		this.props.fartSound;
		let id= e.target.id + '_modal';
		this.state[id] = {display: 'block'};
		this.setState(this.state);
	}

	closeModal(e){
		let id= e.target.id + '_modal';
		this.state[id] = {display: 'none'};
		this.setState(this.state);
	}
	
	createToy(toy){
		return(
			<div className="individualToys" id={toy.id}>
			  <div className="toyImage">
			   <img className="imageOfToy" src={toy.pic[0]} alt={toy.name} id={toy.id} onClick={this.showModal} />
			  </div>
			  <ToyPopUp id={toy.id + 'modal'} toyPop={toy} styleModal={this.state[toy.id + '_modal']} toyImgColl={toy.pic} close={this.closeModal} />
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