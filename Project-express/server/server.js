const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1306;

app.use(cors());
app.use(express.json()); 

let users = [
  { id: 1, name: 'Sami Daraghmeh', age: '18' },
  { id: 2, name: 'Jalal Hemo', age: '34' },
  { id: 3, name: 'Ali Yahya', age: '20' },
  { id: 4, name: 'Nasri Ladaa', age: '33' },
  { id: 5, name: 'Omar Rayyan', age: '20' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== parseInt(id));
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.put('/api/users/:id', (req, res) => {
const { id } = req.params;
const { name, age } = req.body;
users = users.map(user => user.id === parseInt(id) ? { ...user, name, age } : user);
  res.json(users);
  
});
