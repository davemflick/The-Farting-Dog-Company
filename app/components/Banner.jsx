import React from 'react';

export default class Banner extends React.Component{
  render(){
    return(
    <div className="banCont" id="about">
     <div className="banner">
     <div className="soundAdjustment" onClick={this.props.soundOnOff}> 
      <div id="soundOn" style={this.props.soundOn} >🔈</div>
      <div id="soundOff" style={this.props.soundOff} > 🔇</div>
      </div>
      <div className='titleCont'>
       <h1 className="header"> THE FARTING DOG COMPANY </h1>
       <img className="headLogo"  src="./app/static/images/logo1.png" />
      </div>
       <div className="descriptionContainer" id="descripContid">
         <div className='logoContainer'>
         </div>
         <h3 className="aboutFDC" id="aboutFDCid"> "This will be a mission statement or something else you want. The more I look at this font, the harder I find it to read... What do you think? Also, I need you to provide me with some original photos (possibly sounds as well), don't want to infringe on any copyright."</h3>
       </div>
     </div>
    </div>
    )
  }
}