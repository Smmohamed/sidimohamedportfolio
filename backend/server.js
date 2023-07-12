const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
  console.log(11)
res.send("<h1>hiiiiii</h1>")
})




app.post('/api/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  const errors = {};

  // Perform validation
  if (!name || name.length < 5) {
    errors.name = 'Name should be at least 5 characters long';
  }

  if (!email || !email.includes('@')) {
    errors.email = 'Please enter a valid email address';
  }

  if (!message || message.length < 7) {
    errors.message = 'Message should be at least 7 characters long';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // Data is valid, proceed with further processing
  // ...

  return res.json({ success: "votre message est envoyer" });
});



app.post('/api/tem', (req, res) => {
  const { Auteur,  message } = req.body;
  const errors = {};

  // Perform validation
  if (!Auteur || Auteur.length < 5) {
    errors.Auteur = 'Auteur should be at least 5 characters long';
  }

 

  if (!message || message.length < 7) {
    errors.message = 'Message should be at least 7 characters long';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // Data is valid, proceed with further processing
  // ...

  return res.json({ success: "votre avi est ajouter" });
});










app.listen(5000, () => {
  console.log('Server running on port 5000');
});