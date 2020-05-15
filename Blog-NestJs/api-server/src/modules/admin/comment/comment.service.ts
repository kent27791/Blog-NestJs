import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './comment-proxy';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel('Comment') private commentModel: Model<Comment>
    ) {

    }
}
