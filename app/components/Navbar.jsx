import React from 'react';

export default class Navbar extends React.Component{
  render(){
    return(
      <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header"> 
          <a className="navbar-brand" href="#"><div className="navLogo" ></div></a>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <ul className="nav navbar-nav navbar-right collapse navbar-collapse">
          <li><a className='pdLink' href="#about">About</a></li>
          <li><a className='pdLink' href="#toys">Toys</a></li>
          <li><a className='pdLink' href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>
    )
  }
}