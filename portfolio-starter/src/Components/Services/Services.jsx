import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
function Services() {
  return (
<div className="services">
    {/* left side */}
    <div className="awesome">
        <span>My awesome</span>
        <span>Services</span> 
        <span>
            Lorem ispum is simply dummy text of printing 
           <br />
           Lorem is simpley dummy text of printing 
        </span>
        <a href={Resume} download>
        <button className="button s--button">Download CV</button>
        </a>
        <div className="blur s--blurl"style={{background: "#ABF1FF94"}}></div>
    </div>
    {/* right side */}
    <div className="cards">
        <div className="cards">
            <div style={{left: '36rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Figmaz, sketch, Photoshop, Adobe, Adobe xd"}
            />
            </div>
            {/* second card */}
            <div style={{top: "12rem", left: "9rem"}}>
            <Card
            emoji={Glasses}
            heading={'Development'}
            detail={"React, Node, Express, MongoDB, Firebase"}
            />
            </div>    
             {/* third card */}
             <div style={{top: "20rem", left: "31rem"}}>
            <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
                "Teren teren ho ho ho ho"
            }
            />       
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>   
    </div>
</div>
  )
  
}

export default Services