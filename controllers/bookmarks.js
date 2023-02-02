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
            title: req.body.data.title,
            url: req.body.data.url,
            description: req.body.data.description,
            image: req.body.data.image,
        });
        await bookmark.populate('user');
        res.status(201).json({bookmark})
   
    }catch(err) {
        res.status(400).json({err});
    }
}