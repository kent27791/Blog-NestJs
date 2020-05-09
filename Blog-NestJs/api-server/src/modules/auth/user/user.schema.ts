import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
export const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    roles: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Role',
            default: []
        }
    ],
    permissions: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Permission',
            default: []
        }
    ]
})

UserSchema.pre('save', async function(next: mongoose.HookNextFunction) {
    try {
        if(!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this['password'], 10);
        this['password'] = hashed;
        return next();
    } catch(err) {
        return next(err);
    }
})
