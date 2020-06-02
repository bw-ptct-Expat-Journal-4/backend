const express = require('express');

const Story = require('./storymodel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Story.getStory()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Database failed to get users. Contact your backend"})
    })
 });

 router.get('/:id', (req, res) => {
    const {id} = req.params;

    Story.findStoryById(id)
    .then(story => {
        if (story) {
            res.json(story)
        } else {
            res.status(404).json({message: 'There is no story with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Failed to get story. Contact your backend'})
    })
});

router.post('/', (req, res) => {
    const storyData = req.body;

    Story.addStory(storyData)
    .then(story => {
        res.status(201).json(story)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: err})
    
    })
    
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Story.findStoryById(id)
    .then(user => {
        if (user) {
            Story.updateStory(changes, id)
            .then(updateStory => {
                res.json(updateStory);
            })
        } else {
            res.status(404).json({message: "No story with that id exists"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update story. Contact your backend"})
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Story.removeStory(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'No story with that id exists'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to delete story. Contact your backend"})
    })
});

module.exports = router;