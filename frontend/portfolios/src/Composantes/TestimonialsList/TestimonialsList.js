import React, { useContext } from 'react';
import { TestimonialsContext } from '../TestimonialsContext/TestimonialsContext';

const TestimonialsList = () => {
  const { testimonials } = useContext(TestimonialsContext);

  return (
    <div>
      <br></br>
      
      {testimonials.map((testimonial) => (
        <div className='card' key={testimonial.id}>
          <h3>{testimonial.author}</h3>
          <p>{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsList;