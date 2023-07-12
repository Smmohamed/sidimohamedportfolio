import React, { useEffect, useRef } from 'react';
import './Technologie.css'
import i1 from '../../assets/IntelliJ_IDEA_Icon.svg.png'
import i2 from '../../assets/Visual_Studio_Icon_2019.svg.png'
import i3 from '../../assets/casandra.png'
import i4 from '../../assets/docker.png'
import i5 from '../../assets/vs.jpg'
import i6 from '../../assets/pasted image 0.png'
import i7 from '../../assets/raw.png'
import i8 from '../../assets/000000058915.jpg'
import i9 from '../../assets/devops-tools.jpg'
import ScrollReveal from 'scrollreveal';
import i10 from '../../assets/node.png'
import i11 from '../../assets/IOS_wordmark_(2017).svg.png'
import i12 from '../../assets/sql-server-tutorial.svg'
function Technologie() {
    const containerRef = useRef(null);

  
    useEffect(() => {
      ScrollReveal().reveal(containerRef.current, {
        duration: 1500,
        distance: '480px',
        origin: 'top',
        easing: 'ease-in-out',
        mobile: false,
      
      });
      containerRef.current.style.zIndex=444
  
}, []);
  return (
    <div className='tec'  ref={containerRef}>
        
        <img src={i1}/>
        <img src={i2}/>
        <img src={i3}/>
        <img src={i4}/>
        <img src={i5}/>
        <img src={i6}/>
        <img src={i7}/>
        <img src={i8}/>
        <img src={i9}/>
        <img src={i10}/>
        <img src={i11}/>
        <img src={i12}/>


    </div>
  )
}

export default Technologie