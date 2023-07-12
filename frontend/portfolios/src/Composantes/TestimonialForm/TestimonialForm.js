import React, { useState, useContext } from 'react';
import { TestimonialsContext } from '../TestimonialsContext/TestimonialsContext';
import { TestimonialsProvider } from '../TestimonialsContext/TestimonialsContext';
import { BrowserRouter, useNavigate } from 'react-router-dom';

const TestimonialForm = ({clic}) => {
  const navigate = useNavigate();
  const [msg, setmsg] = useState("");
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    author: '',
  
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });


  const { addTestimonial } = useContext(TestimonialsContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (author.trim() && message.trim()) {
      addTestimonial({ author, message });
      setAuthor('');
      setMessage('');
  
   
      const response = await fetch('http://localhost:5000/api/tem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Auteur:author,message:message}),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Success:', data);
        setmsg("votre message est envoyer")
        clic()
        // Handle success
      } else {
        console.error('Error:', data);
        setErrors(data.errors);
      }


    }
  };

  return (

    <form onSubmit={handleSubmit}>
            <h3 style={{color:'#00970B',textAlign:'center'}} >{msg}</h3>
      <div>
        <label htmlFor="author">Auteur :</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      {errors.Auteur&& <p>{errors.Auteur}</p>}
      <div>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div> 
      {errors.message && <p>{errors.message}</p>}
      <button type="submit">Envoyer</button>
    </form>

  );
};

export default TestimonialForm;