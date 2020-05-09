import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginInput, AuthPayload } from './auth.proxy';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {
        
    }

    async login(input: LoginInput) {
        try {
            const user = await this.userService.findUserAuthentication(input.userName);
            const isValid = await bcrypt.compareSync(input.password, user.password);
            if (!isValid) {
                throw new UnauthorizedException('Invalid credentials');
            }
            delete user.password;
            const payload: AuthPayload = {
                id: user.id,
                userName: user.userName,
                permissions: user.permissions,
                roles: user.roles
            }
            const token = this.jwtService.sign(payload);
            return {
                ...user,
                token
            }

        } catch(err) {
            throw new UnauthorizedException('Invalid credentials');
        }
    }
    
}
