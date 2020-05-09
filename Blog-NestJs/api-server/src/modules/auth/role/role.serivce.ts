import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Role, RoleDto } from "./role-proxy";

@Injectable()
export class RoleService{
    constructor(
        @InjectModel('Role') private mongoModel: Model<Role>
    ) {
        
    }

    async create(input: RoleDto) {
        const { name } = input;
        const find = await this.mongoModel.findOne({ name: name });
        if(find) {
            throw new HttpException('Role alrealy exist', HttpStatus.BAD_REQUEST);
        }
        const model = new this.mongoModel(input)
        await model.save();
        return model;
    }
}