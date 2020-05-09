import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayload } from './auth.proxy';
import { UserService } from './user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: AuthPayload) {
    // const { userName } = payload;
    // const user = await this.userService.findByUserName(userName);
    // if(!user) {
    //   throw new UnauthorizedException();
    // }
    // return this.userService.sanitizeUser(user, 'password')
    return payload;
  }
}