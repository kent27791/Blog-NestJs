import { Document } from 'mongoose';
import { User } from '../../auth/user/user-proxy';
import { Comment } from '../comment/comment-proxy';
export interface Article extends Document {
    title: string;
    description: string;
    content: string;
    thumbnail: string;
    author: User;
    comments: Comment[];
    created: Date;
}

export class ArticleDto {
    constructor(
        title: string,
        description: string,
        content: string,
        author: string,
        thumbnail: string) {
        this.title = title;
        this.description = description;
        this.content = content;
        this.author = author;
        this.thumbnail = thumbnail;
    }
    title: string;
    description: string;
    content: string;
    author: string;
    thumbnail: string;
}