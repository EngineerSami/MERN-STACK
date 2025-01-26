const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1306;

app.use(cors());

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Sami Daraghmeh', age: '18' },
    { id: 2, name: 'Jalal Hemo', age: '34' },
    { id: 3, name: 'Ali Yahya', age: '20' },
    { id: 4, name: 'Nasri Ladaa', age: '33' },
    { id: 5, name: 'Omar Rayyan', age: '20' }
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
