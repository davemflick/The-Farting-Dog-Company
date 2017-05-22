import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Toys from './Toys.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fartSounds: [new Audio('./app/static/sounds/fart1.mov'),
      new Audio('./app/static/sounds/fart2.mov'),
      new Audio('./app/static/sounds/fart3.mov'),
      new Audio('./app/static/sounds/fart4.mov')],
      playSounds: false,
      soundOn: {display: 'none'},
      soundOff: {display: 'block'},
    }
    this.playFartSound = this.playFartSound.bind(this);
    this.adjustSound = this.adjustSound.bind(this);
  }


  playFartSound(e){
    if(this.state.playSounds){
      let rand = Math.floor(Math.random() * this.state.fartSounds.length);
      this.state.fartSounds[rand].play();
    }
  }

  adjustSound(){
    let block = {display: 'block'};
    let none = {display: 'none'};
    let play = this.state.playSounds;
    if(play){
      this.state.soundOn = none;
      this.state.soundOff = block;
    } else {
      this.state.soundOn = block;
      this.state.soundOff = none;
    }
    this.state.playSounds = !play;
    this.setState(this.state);
}
  render(){
    return(
      <div>
        <Header fartSound={this.playFartSound}/>
        <Banner  soundOnOff={this.adjustSound} soundOn={this.state.soundOn} soundOff={this.state.soundOff}/>
        <Toys fartSound={this.playFartSound}/>
        <Contact />
        <Footer />
      </div>
    )
  }
}