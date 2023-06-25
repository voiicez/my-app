import '../App.css'
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function SocialMedia(){
    const [hovered,setHovered]=useState(null)
const handleClick =(url)=>{
    window.open(url,'_blank')
}
const handleHover=(buton)=>{
    setHovered(buton);
};
const handleHoverExit=()=>{
    setHovered(null)
}
const ikonSize=40
    return(
        <section className='SocialMedia'>
       
        <FaTwitter size={hovered==='Twitter' ?ikonSize:30} className={`LinkCard ${hovered === 'Twitter' ? 'Hovered' : ''}`}
        onClick={()=>handleClick('https://www.twitter.com/behlulcansahin')}
        onMouseEnter={()=>handleHover('Twitter')}
        onMouseLeave={()=>handleHoverExit()}>
        
        </FaTwitter> 
        <FaLinkedin size={hovered==='LinkedIn' ?ikonSize:30} className={`LinkCard ${hovered === 'LinkedIn' ? 'Hovered' : ''}`}
        onClick={()=>handleClick('https://www.linkedin.com/in/behlulcan/')}
        onMouseEnter={()=>handleHover('LinkedIn')}
        onMouseLeave={()=>handleHoverExit()}>
        
        </FaLinkedin> 
        <FaGithub size={hovered==='GitHub' ?ikonSize:30} className={`LinkCard ${hovered === 'GitHub' ? 'Hovered' : ''}`}
        onClick={()=>handleClick('https://github.com/voiicez')}
        onMouseEnter={()=>handleHover('GitHub')}
        onMouseLeave={()=>handleHoverExit()}>
        
        </FaGithub> 
        </section>

        

    )
}