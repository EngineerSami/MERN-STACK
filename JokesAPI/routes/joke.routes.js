const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    
    app.get('/api/jokes', JokeController.findAllJokes);

    app.post('/api/jokes', JokeController.createJoke);

    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke);

    app.put('/api/jokes/update/:id', JokeController.updateJoke);
}