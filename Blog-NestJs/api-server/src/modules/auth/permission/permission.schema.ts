import * as mongoose from 'mongoose';
export const PermissionSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    display: {
        type: String,
        required: true
    },
    path: {
        type:String,
        required: false,
        default: null
    },
    method: {
        type: String,
        required: false,
        default: null,
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: 'Permission',
        default: null,
        required: false,
    },
    created: {
        type: Date,
        default: Date.now()
    }
})