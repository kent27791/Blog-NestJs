import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto, User, UserDto } from './user-proxy';
import { PagingResultDto } from 'src/modules/shared/proxy.model';
import * as _ from 'lodash';
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private mongoModel: Model<User>) {

    }

    sanitizeUser(user: User, propName: string) {
        const sanitized = user.toObject();
        delete sanitized[propName];
        return sanitized;
    }

    async findAll(input: any) {
        const total = await this.mongoModel.countDocuments(input.filter);
        const users = await this.mongoModel.find(input.filter).sort(input.sort).skip(input.paging.skip).limit(input.paging.limit).map(list => {
            return list.map(u => {
                return this.sanitizeUser(u, 'password');
            })
        });
        return new PagingResultDto<any>(total, users);
    }
    
    async findByUserName(userName: string): Promise<User> {
        const user = await this.mongoModel.findOne({ userName: userName });
        return this.sanitizeUser(user, 'password');
    }

    async create(input: RegisterDto) {
        const { userName } = input;
        const find = await this.mongoModel.findOne({ userName: userName });
        if(find) {
            throw new HttpException('User alrealy exist', HttpStatus.BAD_REQUEST);
        }
        const model = new this.mongoModel(input)
        await model.save();
        return this.sanitizeUser(model, 'password');
    }

    async findUserAuthentication(userName: string) {
        const user = await this.mongoModel.findOne({ userName: userName })
                           .populate({
                               path: 'roles',
                               select: '_id name',
                               populate: {
                                   path: 'permissions',
                                   select: '-_id name'
                               }
                           })
                           .populate({
                               path: 'permissions',
                               select: '-_id name'
                           });
        let allPers = [...user.permissions.map(p => p.name)];
        const allRoles = [];
        user.roles.map(r => {
            allRoles.push(r.name);
            allPers = _.union(allPers, r.permissions.map(p => p.name))
        })
        const output: UserDto = {
            id: user.id,
            userName: user.userName,
            permissions: allPers,
            roles: allRoles,
            password: user.password
        }
        return output;
    }
}
