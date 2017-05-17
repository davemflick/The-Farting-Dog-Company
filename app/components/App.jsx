import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Toys from './Toys.jsx';
import Footer from './Footer.jsx';

var fart1 = new Audio('./app/static/sounds/fart1.mp3');
export default class App extends React.Component{

  playFartSound(e){
  	fart1.play();
  }

  render(){
    return(
      <div>
        <Header fartSound={this.playFartSound}/>
        <Banner />
        <Toys />
        <Footer />
      </div>
    )
  }
}