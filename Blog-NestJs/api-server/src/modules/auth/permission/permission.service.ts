import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Permission } from "./permission-proxy";

@Injectable()
export class PermissionService {
    constructor(
        @InjectModel('Permission') private mongoModel: Model<Permission>
    ) {

    }

    async create(input: any) {
        const { name } = input;
        const find = await this.mongoModel.findOne({ name: name });
        if(find) {
            throw new HttpException('Permission alrealy exist', HttpStatus.BAD_REQUEST);
        }
        const model = new this.mongoModel(input)
        await model.save();
        return model;
    }
}