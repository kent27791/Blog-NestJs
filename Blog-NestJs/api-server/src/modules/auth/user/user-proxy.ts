import { Document } from 'mongoose';
import { Role } from '../role/role-proxy';
import { Permission } from '../permission/permission-proxy';
export interface User extends Document {
    userName: string,
    password: string,
    created: Date,
    roles: Role[],
    permissions: Permission[]
}

export interface UserDto {
    id: string;
    userName: string;
    password: string;
    permissions: string[];
    roles: string[];
}

export interface RegisterDto {
    userName: string;
    password: string;
}