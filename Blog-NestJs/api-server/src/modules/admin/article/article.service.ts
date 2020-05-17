import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDto } from './article-proxy';
import { PagingResultDto } from 'src/modules/shared/proxy.model';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel('Article' ) private mongoModel: Model<Article>
    ) {}
    
    async findAll(input: any) {
        const total = await this.mongoModel.countDocuments(input.filter);
        const articles = await this.mongoModel
            .find(input.filter).sort(input.sort)
            .skip(input.paging.skip).limit(input.paging.limit)
            .populate('author', '_id userName')
            .populate('comments', '_id title');
        return new PagingResultDto<any>(total, articles);
    }

    async findById(id: string) {
        const article = await this.mongoModel
            .findOne({ _id: id })
            .populate('author', '_id userName')
            .populate('comments', '_id title');
        return article;
    }

    async create(input: ArticleDto, owner: any) {
        const article: ArticleDto = new ArticleDto(
            input.title,
            input.description,
            input.content,
            owner.id,
            input.thumbnail
        );
        const model = new this.mongoModel(article);
        await model.save();
        return model;

    }
}
