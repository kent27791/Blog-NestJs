import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt-strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/user.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.serivce';
import { RoleSchema } from './role/role.schema';
import { PermissionController } from './permission/permission.controller';
import { PermissionService } from './permission/permission.service';
import { PermissionSchema } from './permission/permission.schema';
import { SharedModule } from '../shared/shared.module';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: { expiresIn: '24h' },
        }),
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },
            { name: 'Role', schema: RoleSchema },
            { name: 'Permission', schema: PermissionSchema }
        ]),
        SharedModule
    ],
    controllers: [
        UserController,
        AuthController,
        RoleController,
        PermissionController
    ],
    providers: [
        JwtStrategy,
        AuthService,
        UserService,
        RoleService,
        PermissionService
    ],
    exports: [
        MongooseModule,
        PassportModule,
        JwtStrategy,
        AuthService,
        UserService,
        RoleService,
        PermissionService
    ]
})
export class AuthModule { }
