const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 2006;

const USERS_FILE_PATH = path.join(__dirname, 'users.json');
app.use(cors());
app.use(express.json());

const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(USERS_FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writeUsersToFile = (users) => {
  fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2), 'utf8');
};

app.get('/api/users', (req, res) => {
  const users = readUsersFromFile(); 
  res.json(users);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  let users = readUsersFromFile();
  users = users.filter(user => user.id !== parseInt(id));
  writeUsersToFile(users);
  res.json(users);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  let users = readUsersFromFile();
  users = users.map(user => user.id === parseInt(id) ? { ...user, name, age, email } : user);
  writeUsersToFile(users);
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

  let users = readUsersFromFile();
  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id: newId,
    name,
    email,
    age: parseInt(age), 
  };

  users.push(newUser);
  writeUsersToFile(users);

  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
