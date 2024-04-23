import { Router } from 'express';
import db from '../db';

const router = Router();


// GET // api/tweets/123
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const tweets = await db.tweets.getOne(id);
        const tweet = tweets[0];
        if(!tweet) {
            return res.status(404).json({ message: 'No User was found with this id'})
        }
        res.json(tweet);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.get('/', async (req, res) => {
    try {
        const tweets = await db.tweets.getAll();
        res.json(tweets);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.put('/:id', async (req, res) => {
    try {
        
        const updateTweet = req.body;
        const result = await db.tweets.updateOne(updateTweet.id, updateTweet.location );
        res.json({ message: 'Tweet Updated', id: result.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.post('/', async (req, res) => {
    try {
        const newTweet = req.body;
        const result = await db.tweets.insert(newTweet.body, newTweet.location);
        res.json({ message: 'Tweet Created', id: result.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const deleteTweet = await db.tweets.deleteOne(id);
        res.json({ message: 'Tweet has been deleted'})
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

export default router;