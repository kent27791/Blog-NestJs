import { Controller, Post, Body } from '@nestjs/common';
import { RoleService } from './role.serivce';

@Controller('role')
export class RoleController {
    constructor(
        private roleService: RoleService
    ) {
        
    }

    @Post()
    async createRole(@Body() input: any) {
        return this.roleService.create(input);
    }
}
