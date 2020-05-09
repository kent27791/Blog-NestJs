import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './modules/auth/user/user-proxy';
import { Role } from './modules/auth/role/role-proxy';
import { Permission } from './modules/auth/permission/permission-proxy';
@Injectable()
export class SeedCommand {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
        @InjectModel('Role') private roleModel: Model<Role>,
        @InjectModel('Permission') private permissionModel: Model<Permission>
    ) {

    }

    @Command({ command: 'init:user', describe: 'init user', autoExit: true })
    async initUser() {
        const users = [
            {
                _id: '1eab09c048f5a710c8ef4001',
                userName: 'administrator',
                password: '123456',
                roles: [
                    '2eab09c048f5a710c8ef4001',
                    '2eab09c048f5a710c8ef4002'
                ],
                permissions: [
                    "3eab09c048f5a710c8ef4001"
                ]
            },
            {
                _id: '1eab09c048f5a710c8ef4002',
                userName: 'tester',
                password: '123456',
                roles: [
                    '2eab09c048f5a710c8ef4002'
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
                _id: '2eab09c048f5a710c8ef4001', name: 'Admin',
                permissions: [
                    '3eab09c048f5a710c8ef4001',
                    '3eab09c048f5a710c8ef4002',
                    '3eab09c048f5a710c8ef4003',
                    '3eab09c048f5a710c8ef4004',
                    '3eab09c048f5a710c8ef4005',
                ]
            },
            {
                _id: '2eab09c048f5a710c8ef4002', name: 'Moder',
                permissions: [
                    '3eab09c048f5a710c8ef4004'
                ]
            },
            { _id: '2eab09c048f5a710c8ef4003', name: 'Author' }
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
            { _id: '3eab09c048f5a710c8ef4001', name: 'Api', display: 'Api', path: '/', method: null, parent: null },
            { _id: '3eab09c048f5a710c8ef4002', name: 'Api.User', display: 'Api.User', path: '/user', method: null, parent: '3eab09c048f5a710c8ef4001' },
            { _id: '3eab09c048f5a710c8ef4003', name: 'Api.User.Create', display: 'Api.User.Create', path: '/user', method: 'post', parent: '3eab09c048f5a710c8ef4002' },
            { _id: '3eab09c048f5a710c8ef4004', name: 'Api.User.Edit', display: 'Api.User.Edit', path: '/user/:id', method: 'post', parent: '3eab09c048f5a710c8ef4002' },
            { _id: '3eab09c048f5a710c8ef4005', name: 'Api.User.Delete', display: 'Api.User.Delete', path: '/user/:id', method: 'delete', parent: '3eab09c048f5a710c8ef4002' }
        ]
        try {
            const result = await this.permissionModel.create(pers);
        } catch (err) {
            console.log(err)
        }

    }
}
