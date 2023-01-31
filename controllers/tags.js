import User from '../models/user.js';
import Tag from '../models/tag.js';

export default {
    create
};

function create(req, res) {
    console.log(req.user, '<- req.user', req.body);

    try {
        const tag = Tag.create({
            user: req.user._id,
            title: req.body.title,
        });
        tag.populate('user')
    } catch (err) {
        res.status(400).json({err});
    }
}


