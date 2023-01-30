import mongoose from 'mongoose';

const tagSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String
})

export default mongoose.model('Tag', tagSchema)