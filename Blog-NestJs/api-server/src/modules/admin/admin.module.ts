import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from '../shared/shared.module';
import { BlogController } from './blog/blog.controller';
import { BlogSchema } from './blog/blog.schema';
import { BlogService } from './blog/blog.service';
import { AuthModule } from '../auth/auth.module';
@Module({
    imports: [
        SharedModule,
        MongooseModule.forFeature([
            { name: 'Blog', schema: BlogSchema }
        ]),
        AuthModule
    ],
    controllers: [
        BlogController
    ],
    providers: [
        BlogService
    ],
    exports: [
        
    ]
})
export class AdminModule {}
