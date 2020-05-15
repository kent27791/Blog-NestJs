import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    thumbnail: String,
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Comment',
            default: []
        }
    ],
    created: {
        type: Date,
        default: Date.now()
    }
})