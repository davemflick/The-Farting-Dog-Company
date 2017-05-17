import React from 'react';

const GIRAFFE = {
	id: 'Gilbert',
	name: 'GILBERT THE FARTING GIRAFFE',
	pic: './app/static/images/giraffe.jpeg',
	description: "Gilbert has a high fiber diet and with that is a whole lotta ruckus! Squeeze Gilberts belly and be prepared for an unruly sound.",
	about: ['HIGH QUALITY AND DURABLE Gilbert is double stitched, interior mesh lining for extra durability, and a plush outside material.',
	'SAFE FOR YOUR FUR BABY Gilbert is double stitched, interior mesh lining for extra durability, and a plush outside material.',
	],
	more: 'Gilbert the Farting Giraffe is a great excuse to blame the dog! Made of plush, non-toxic materials, the toy is designed for extra durability and extra laughs. Made in China. Non-toxic polyfill interior and the sound insert is ROHS compliant.',
}

const PROCEEDS = { strong: "5% OF PROFITS DONATED FOR HOMELESS PETS",
 descrip: "We all love our fur babies and there are too many pets out there with out a home! 5% of profits will be donated to small, non-profit organizations that protect the welfare of these animals and make sure they find their forever homes!"}

export default class Toys extends React.Component{
	
	createToy(toy){
		return(
			<div className="individualToys">
			  <div className="toyImage">
			   <img className="imageOfToy" src={toy.pic} alt={toy.name} />
			  </div>
			  <div className="productDetails">
			   <h3>{toy.name}</h3>
			   <p>{toy.description}</p>
			   <p>{toy.more}</p>
			   <ul className="aboutToy">
			   	{toy.about.map((toy, i)=> <li key={i}>{toy}</li>)}
			   </ul>
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
			</div>
		)
	}
}