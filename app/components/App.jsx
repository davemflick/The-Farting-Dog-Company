import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Toys from './Toys.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fartSounds: [new Audio('./app/static/sounds/fart1.mov'),
      new Audio('./app/static/sounds/fart2.mov'),
      new Audio('./app/static/sounds/fart3.mov'),
      new Audio('./app/static/sounds/fart4.mov')]
    }
    this.playFartSound = this.playFartSound.bind(this);
  }

  playFartSound(e){
  	let rand = Math.floor(Math.random() * this.state.fartSounds.length);
    this.state.fartSounds[rand].play();
  }

  render(){
    return(
      <div>
        <Header fartSound={this.playFartSound}/>
        <Banner />
        <Toys fartSound={this.playFartSound}/>
        <Footer />
      </div>
    )
  }
}