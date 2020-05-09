import { Document } from 'mongoose';
import { User } from '../../auth/user/user-proxy';
export interface Blog extends Document {
    title: string,
    description: string,
    content: string,
    author: User,
    created: Date
}

export class BlogDto {
    constructor(
        title: string,
        description: string,
        content: string,
        author: string) {
        this.title = title;
        this.description = description;
        this.content = content;
        this.author = author;
    }
    title: string;
    description: string;
    content: string;
    author: string;
}