import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category-proxy';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category' ) private categoryModel: Model<Category>
    ) {

    }

    async getAllForDropdown() {
        return await this.categoryModel.find({}).select('_id name');
    }
}
