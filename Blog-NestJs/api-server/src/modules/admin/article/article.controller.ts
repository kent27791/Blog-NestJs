import { Controller, Get, Post, HttpCode, HttpStatus, Param, Body } from '@nestjs/common';
import { ArticleService } from './article.service';
import { InputDatatable } from 'src/modules/shared/decorators/datatable.decorator';
import { User } from 'src/modules/shared/decorators/user.decorator';
import { Authorize } from 'src/modules/shared/decorators/authorize.decorator';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ) {

    }

    @Post()
    @HttpCode(HttpStatus.OK)
    async getArticles(@InputDatatable() input) {
        return await this.articleService.findAll(input);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getArticleById(@Param('id') id) {
        return await this.articleService.findById(id);
    }

    @Post('create')
    @Authorize()
    async createArticle(@User() user, @Body() input: any) {
        return await this.articleService.create(input, user);
    }
}
