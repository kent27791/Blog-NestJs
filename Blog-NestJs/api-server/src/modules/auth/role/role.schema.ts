import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    permissions: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Permission',
            default: []
        }
    ],
    created: {
        type: Date,
        default: Date.now()
    }
})