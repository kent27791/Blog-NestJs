import { Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(
        private blogService: BlogService
    ) {

    }

    @Post('')
    async getBlogs() {
        return await this.blogService.getBlogs();
    }

    @Get('/seed')
    async seed() {
        return await this.blogService.seed();
    }
}
