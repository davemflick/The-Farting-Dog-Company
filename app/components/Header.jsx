import React from 'react';
import Navbar from './Navbar.jsx';

export default class Header extends React.Component{
  render(){
    return(
     <div className="headerContainer">
       <Navbar />
     </div>
    )
  }
}