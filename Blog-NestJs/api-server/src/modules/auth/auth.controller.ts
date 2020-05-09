import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput, RegisterInput } from './auth.proxy';
import { UserService } from './user/user.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService
        ) {

    }

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() input: LoginInput) {
        return await this.authService.login(input);
    }

    @Post('register')
    async createUser(@Body() input: RegisterInput) {
        return await this.userService.create(input);
    }
}
