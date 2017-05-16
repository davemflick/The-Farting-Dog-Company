import React from 'react';

export default class Banner extends React.Component{
  render(){
    return(
     <div className="banner">
       <h1 className="header"> The Farting Dog Company </h1>
       <div className="descriptionContainer">
         <h4 className="aboutFDC"> "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain."</h4>
         <div className='logoContainer'>
           <img className="bannerLogo" alt="companyLogo" src="./app/static/images/logo2.png" />
         </div>
       </div>
     </div>
    )
  }
}