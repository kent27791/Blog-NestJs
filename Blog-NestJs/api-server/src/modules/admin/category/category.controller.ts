import { Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service'
@Controller('category')
export class CategoryController {
    constructor(
        private categoryService: CategoryService
    ) {

    }

    @Get('/for-dropdown')
    async getAllForDropdown() {
        return await this.categoryService.getAllForDropdown();
    }
}
