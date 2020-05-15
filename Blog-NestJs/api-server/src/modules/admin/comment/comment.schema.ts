import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0
    },
    isApprove: {
        type: Boolean,
        default: false
    },
    parent: {
        type: mongoose.Types.ObjectId,
        required: false,
        default: null,
        ref: 'Comment'
    },
    article: {
        type: mongoose.Types.ObjectId,
        ref: 'Article'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now()
    }
})