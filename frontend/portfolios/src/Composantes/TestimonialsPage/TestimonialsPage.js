import React, { useState } from 'react';
import TestimonialsList from '../../Composantes/TestimonialsList/TestimonialsList';
import TestimonialForm from '../TestimonialForm/TestimonialForm';
import { TestimonialsProvider } from '../TestimonialsContext/TestimonialsContext';
import './TestimonialsPage.css';
//import {  Routes, Route,Outlet, Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';



const TestimonialsPage = () => {
  const navigate = useNavigate();
  const [show,setShow]=useState(1)
  const [show2,setShow2]=useState(0)
  const handleClick = () => {
    // Naviguer vers une autre page
setShow(0)
setShow2(1)
  };

  const handleClick2 = () => {
    // Naviguer vers une autre page
setShow(1)
setShow2(0)
  };
  return (
    
      <div className='t'>
        <h1>Témoignages</h1>
        <button className='btn btn-success' onClick={handleClick}> Ajouter votre Avi</button>
       
 
  <div style={{opacity:show}}>
     <TestimonialsList/>
    </div>
    <div style={{opacity:show2}}>
      <TestimonialForm clic={handleClick2} />
      </div>
  
        
        
     
      </div>
    
  );
};

export default TestimonialsPage;
