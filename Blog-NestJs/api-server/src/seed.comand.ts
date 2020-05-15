import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './modules/auth/user/user-proxy';
import { Role } from './modules/auth/role/role-proxy';
import { Permission } from './modules/auth/permission/permission-proxy';
import { Category } from './modules/admin/category/category-proxy';
import { Article } from './modules/admin/article/article-proxy';
import { Comment } from './modules/admin/comment/comment-proxy';
@Injectable()
export class SeedCommand {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
        @InjectModel('Role') private roleModel: Model<Role>,
        @InjectModel('Permission') private permissionModel: Model<Permission>,
        @InjectModel('Category') private categoryModel: Model<Category>,
        @InjectModel('Article') private articleModel: Model<Article>,
        @InjectModel('Comment') private commentModel: Model<Comment>
    ) {

    }

    @Command({ command: 'init:user', describe: 'init user', autoExit: true })
    async initUser() {
        const users = [
            {
                _id: '000000000000000000000001',
                userName: 'administrator',
                password: '123456',
                roles: [
                    '100000000000000000000001',
                    '100000000000000000000002',
                    '100000000000000000000003'
                ],
                permissions: [
                    
                ]
            },
            {
                _id: '000000000000000000000002',
                userName: 'tester',
                password: '123456',
                roles: [
                    '100000000000000000000002'
                ],
                permissions: [
                    '200000000000000000000002'
                ]
            }
        ]
        try {
            const result = await this.userModel.create(users);
        } catch (err) {
            console.log(err)
        }
    }

    @Command({ command: 'init:role', describe: 'init role', autoExit: true })
    async initRole() {
        const roles = [
            {
                _id: '100000000000000000000001', name: 'Admin',
                permissions: [
                    '200000000000000000000001',
                    '200000000000000000000002',
                    '200000000000000000000003',
                    '200000000000000000000004',
                    '200000000000000000000005',
                    '200000000000000000000006',
                    '200000000000000000000007',
                    '200000000000000000000008',
                    '200000000000000000000009'
                ]
            },
            {
                _id: '100000000000000000000002', name: 'Moder',
                permissions: [
                    '200000000000000000000001'
                ]
            },
            { _id: '100000000000000000000003', name: 'Author' }
        ]
        try {
            const result = await this.roleModel.create(roles);
        } catch (err) {
            console.log(err)
        }
    }

    @Command({ command: 'init:permission', describe: 'init permission', autoExit: true })
    async initPermission() {
        const pers = [
            { _id: '200000000000000000000001', name: 'Api', display: 'Api', path: '/', method: null, parent: null },
            //user
            { _id: '200000000000000000000002', name: 'Api.User', display: 'Api.User', path: '/user', method: null, parent: '200000000000000000000001' },
            { _id: '200000000000000000000003', name: 'Api.User.Create', display: 'Api.User.Create', path: '/user', method: 'post', parent: '200000000000000000000002' },
            { _id: '200000000000000000000004', name: 'Api.User.Edit', display: 'Api.User.Edit', path: '/user/:id', method: 'post', parent: '200000000000000000000002' },
            { _id: '200000000000000000000005', name: 'Api.User.Delete', display: 'Api.User.Delete', path: '/user/:id', method: 'delete', parent: '200000000000000000000002' },
            //article
            { _id: '200000000000000000000006', name: 'Api.Article', display: 'Api.Article', path: '/article', method: null, parent: '200000000000000000000001' },
            { _id: '200000000000000000000007', name: 'Api.Article.Create', display: 'Api.Article.Create', path: '/article', method: 'post', parent: '200000000000000000000006' },
            { _id: '200000000000000000000008', name: 'Api.Article.Edit', display: 'Api.Article.Edit', path: '/article/:id', method: 'post', parent: '200000000000000000000006' },
            { _id: '200000000000000000000009', name: 'Api.Article.Delete', display: 'Api.Article.Delete', path: '/article/:id', method: 'delete', parent: '200000000000000000000006' },
        ]
        try {
            const result = await this.permissionModel.create(pers);
        } catch (err) {
            console.log(err)
        }

    }

    @Command({ command: 'init:category', describe: 'init category', autoExit: true })
    async initCategory() {
        const categories = [
            { _id: '300000000000000000000001', name: 'Trang chủ', description: 'Trang chủ', parent: null },
            { _id: '300000000000000000000002', name: 'Công nghệ', description: 'Công nghệ', parent: null },
            { _id: '300000000000000000000003', name: 'IT', description: 'IT', parent: null }
        ];
        try {
            const result = await this.categoryModel.create(categories);
        } catch(err) {
            console.log(err)
        }
    }

    @Command({ command: 'init:article', describe: 'init article', autoExit: true })
    async initArticle() {
        const articles = [
            {
                _id: '400000000000000000000001',
                title: 'Chuyện nghề của dev',
                description: 'Câu chuyện của một senior dev ...',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                thumbnail: '/public/article/article-1.png',
                author: '000000000000000000000001',
                comments: [
                    '500000000000000000000001'
                ]
            }
        ]
        try {
            const result = await this.articleModel.create(articles);
        } catch(err) {
            console.log(err)
        }
    }

    @Command({ command: 'init:comment', describe: 'init comment', autoExit: true })
    async initComment() {
        const comments = [
            {
                _id: '500000000000000000000001',
                title: 'Bài viết good',
                content: 'Bài viết dành cho những dev',
                rating: 5,
                isApprove: true,
                parent: null,
                article: '400000000000000000000001',
                owner: '000000000000000000000002'
            }
        ]
        try {
            const result = await this.commentModel.create(comments);
        } catch(err) {
            console.log(err);
        }
    }

    @Command({ command: 'init:database', describe: 'init database', autoExit: true })
    async initDatabase() {
        try {
            await this.initUser();
            await this.initRole();
            await this.initPermission();
            await this.initCategory();
            await this.initArticle();
            await this.initComment();
        } catch(err) {
            console.log(err);
        }
    }
}
