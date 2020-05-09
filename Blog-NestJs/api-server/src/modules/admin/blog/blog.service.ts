import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDto } from './blog-proxy';

@Injectable()
export class BlogService {
    constructor(
        @InjectModel('Blog' ) private blogModel: Model<Blog>
    ) {}
    
    async getBlogs() {
        return await this.blogModel.find({}).populate('author', '_id userName');
    }

    async seed() {
        const blog: BlogDto = {
            title: 'Blog 1',
            description: 'Test blog 1',
            author: '5eb5892e263b4e1bc82230b3',
            content: 'content blog 1'
        }
        const createdBlog = await this.blogModel.create(
            blog
        )
        return createdBlog;
    }
}
