import User from '../models/user.js';
import Tag from '../models/tag.js';

export default {
    create,
    index
};

async function create(req, res) {
    console.log(req.body, '<- req.body passed to controller');
    try {
        const tag = await Tag.create({
            user: req.user._id,
            title: req.body.data,
        });
        await tag.populate('user')
        res.status(201).json({tag})
    } catch (err) {
        res.status(400).json({err});
    }
}

async function index(req, res) {
    try {
        const tags = await Tag.find({}).populate('user').exec();
        res.status(200).json({data: tags});
    } catch (err) {
        res.status(400).json({err});
    }
}


