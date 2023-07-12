import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [msg, setmsg] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Success:', data);
      setmsg("votre message est envoyer")
      // Handle success
    } else {
      console.error('Error:', data);
      setErrors(data.errors);
    }
  };

  return (
    <div className='con'>
      <h2>Contact Me :</h2>
      <h3 style={{color:'#00970B',textAlign:'center'}} >{msg}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <br></br>
        {errors.name && <p>{errors.name}</p>}
        <br></br>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
           <br></br>
        {errors.email && <p>{errors.email}</p>}
        <br></br>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
        />
           <br></br>
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
