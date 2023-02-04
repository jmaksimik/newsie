import mongoose from 'mongoose';

const bookmarkSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    url: {type: String, required: true},
    description: String,
    image: String,   

}, {
    timestamps: true
})

export default mongoose.model('Bookmark', bookmarkSchema);