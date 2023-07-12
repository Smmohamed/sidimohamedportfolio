import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './Home.css';
import img from '../../assets/ff9c4979-d9ad-47f9-8281-eb313ae91802-removebg-preview (1).png'
const Home = () => {

  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(containerRef.current, {
      duration: 1000,
      distance: '80px',
      origin: 'bottom',
      easing: 'ease-in-out',
      mobile: false,
    
    });
    containerRef.current.style.zIndex=444
  

    ScrollReveal().reveal(containerRef2.current, {
      duration: 2000,
      distance: '80%',
      origin: 'right',
      easing: 'ease-in-out',
      mobile: false,
    
    });
  }, []);
  return (
    <>
    <div className="hero" style={{marginTop:0}}>

  <div  ref={containerRef}>
    <h1>Welcome to my portfolio</h1>
    <p>A brief presentation of me and my skills</p>
   </div>
   



  

</div>
<div className='info' ref={containerRef2}>
  <img src={img} />
   <div>
    <h1>Sidi Mohamed Cheikh Ahmed Lelvally</h1>
    <p>
    I am Mohamed Full Stuck Developer I am an award-winning full-stack web developer and UI/UX javascript specialist. Check out my articles, React and React Native Components at the Code Lab. Feel free to take a look at my latest projects on the portfolio web page.
    </p>
    
    
    
   </div>
     
     

</div>




</>





  );
}

export default Home;
