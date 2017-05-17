import React from 'react';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';

export default class Header extends React.Component{
  render(){
    return(
     <div className="headerContainer">
       <Navbar fartSound={this.props.fartSound}/>
     </div>
    )
  }
}