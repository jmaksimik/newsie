import User from '../models/user.js';
import Bookmark from '../models/bookmark.js';

export default {
    create
};

async function create(req, res) {
    console.log(req.body, '<- req.body passsed to controller');
    try {
        const bookmark = await Bookmark.create({
            user: req.user._id,
            title: req.body.title,
            url: req.body.url,
            description: req.body.description,
            image: req.body.image,
        });
        await bookmark.populate('user');
        res.status(201).json({bookmark})
   
    }catch(err) {
        res.status(400).json({err});
    }
}