import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';

var fart1 = new Audio('./app/static/sounds/fart1.mp3');
export default class App extends React.Component{

  playFartSound(e){
  	fart1.play();
  	console.log(e.target);
  }

  render(){
    return(
      <div>
        <Header fartSound={this.playFartSound}/>
      </div>
    )
  }
}