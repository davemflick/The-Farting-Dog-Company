import React from 'react';

export default class Banner extends React.Component{
  render(){
    return(
    <div className="banCont" id="about">
     <div className="banner">
      <div className='titleCont'>
       <h1 className="header"> THE FARTING DOG COMPANY </h1>
       <img className="headLogo"  src="./app/static/images/logo1.png" />
      </div>
       <div className="descriptionContainer">
         <div className='logoContainer'>
         </div>
         <h3 className="aboutFDC"> "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain."</h3>
       </div>
     </div>
    </div>
    )
  }
}