import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { ArticleController } from './article/article.controller';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { ArticleService } from './article/article.service';
import { ArticleSchema } from './article/article.schema';
import { CategorySchema } from './category/category.schema';
import { CommentSchema } from './comment/comment.schema';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Article', schema: ArticleSchema },
            { name: 'Category', schema: CategorySchema  },
            { name: 'Comment', schema: CommentSchema }
        ]),
        SharedModule,
        AuthModule
    ],
    controllers: [
        ArticleController,
        CategoryController,
        CommentController
    ],
    providers: [
        ArticleService,
        CategoryService,
        CommentService
    ],
    exports: [
        MongooseModule
    ]
})
export class AdminModule {}
