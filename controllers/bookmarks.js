import User from '../models/user.js';
import Bookmark from '../models/bookmark.js';

export default {
    create,
    deleteBookmark, 
    index
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

async function deleteBookmark(req, res) {
    try {
        const bookmark = await Bookmark.findOne({'_id': req.params.id})
        bookmark.remove(req.params.id);
        await bookmark.save();
        res.json({data: 'bookmark successfully deleted'})
    } catch(err) {
        console.log(err, '<-- error in controller delete function')
        res.status(400).json({err})
    }
}

async function index(req, res) {
    try {
        const bookmarks = await Bookmark.find({}).populate('user').exec();
        res.status(201).json({data: bookmarks});
    
    } catch (err) {
        res.status(400).json({err});
    } 
}