import React, { createContext, useState } from 'react';

export const TestimonialsContext = createContext();

export const TestimonialsProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = (testimonial) => {
    setTestimonials((prevTestimonials) => [
      ...prevTestimonials,
      { id: Date.now(), ...testimonial },
    ]);
  };

  return (
    <TestimonialsContext.Provider value={{ testimonials, addTestimonial }}>
      {children}
    </TestimonialsContext.Provider>
  );
};