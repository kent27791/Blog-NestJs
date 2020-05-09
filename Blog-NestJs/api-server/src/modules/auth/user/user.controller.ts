import { Controller, Get, Param, NotFoundException, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { InputDatatable } from 'src/modules/shared/decorators/datatable.decorator';
import { Authorize } from '../../shared/decorators/authorize.decorator';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Authorize(['Api.User', 'Api.User.Create'], ['Admin'], false)
    async getUser(@InputDatatable() input) {
        return await this.userService.findAll(input);
    }

    @Get(':userName')
    getUserById(@Param('userName') userName) {
        const user = this.userService.findByUserName(userName);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}
