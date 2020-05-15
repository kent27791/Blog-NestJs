import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: null
    },
    parent: {
        type: mongoose.Types.ObjectId,
        required: false,
        default: null,
        ref: 'Category'
    },
    created: {
        type: Date,
        default: Date.now()
    }
})