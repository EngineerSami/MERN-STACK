const Joke = require('../models/joke.model');

module.exports = {
    findAllJokes: (req, res) => {
        Joke.find()
        .then(result => res.json(result))
        .catch(error => res.status(500).json(error));
    }
    ,
    createJoke: (req, res) => {
        console.log(req.body)
        Joke.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.status(500).json(error));
    }
    ,
    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(error => res.status(404).json(error));
    }
    ,
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        .then(result => res.json(result))
        .catch(error => res.status(404).json(error));
    }
}