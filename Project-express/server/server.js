const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 2006;

app.use(cors());
app.use(express.json()); 

let users = [];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== parseInt(id));
  res.json(users);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age,email } = req.body;
  users = users.map(user => user.id === parseInt(id) ? { ...user, name, age, email } : user);
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, age, email } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required.' });
  }

  if (isNaN(age)) {
    return res.status(400).json({ error: 'Age must be a valid number.' });
  }

  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id: newId,
    name,
    email,
    age: parseInt(age), 
  };

  users.push(newUser);

  res.status(201).json(newUser);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


