const express = require('express');
const router = express.Router();
const uuid = express('uuid');

const movies = require('../../models/movies');

// Gets All Movies
router.get('/', (req, res) => {
    res.json(movies); 
 });
 
 // Get Single Movie
 router.get('/:id', (req, res) => {
 
     const found = movies.some(movie => movie.id === parseInt(req.params.id));
 
     if (found) {
         res.json(movies.filter(movie => movie.id === parseInt(req.params.id)));
     } else {
         res.status(400).json({ msg: `No movie with such id ${req.params.id}` });
     }
 });

//  Creating Movies
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Kindly include a name and email'});
    }

    members.push(newMember);
    res.json(members);
})


 module.exports = router;