// App.js
import React from "react";
import "./App.css";
import Home from "./Composantes/Home/Home";
import Contact from "./Composantes/Contact/Contact";
import Projets from "./Composantes/Projets/Projets";

import Layout from "./Composantes/Layout/Layout";
import { BrowserRouter, Routes, Route,Outlet, Link } from "react-router-dom";
import { TestimonialsProvider } from './Composantes/TestimonialsContext/TestimonialsContext';
import Header from "./Composantes/Header/Header";
import Footer from "./Composantes/Footer/Footer";
import TestimonialsPage from "./Composantes/TestimonialsPage/TestimonialsPage"
import TestimonialForm from "./Composantes/TestimonialForm/TestimonialForm";
import Technologie from "./Composantes/Technologies/Technologie";



function App() {
  return (
    <>
   

   <TestimonialsProvider>
       <BrowserRouter>
<Header/>
 
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="projet" element={<Projets />} />
       
          <Route path="Temoing" element={<TestimonialsPage  />} />
          <Route path="Technologie" element={<Technologie />} />
 
         
            
        
       
       
          <Route path="contact" element={<Contact />} />
         
       
      </Routes>
    </BrowserRouter>
   
   
    <Footer/>
    </TestimonialsProvider>


    </>
  );
}

export default App;
