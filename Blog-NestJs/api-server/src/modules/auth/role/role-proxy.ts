import { Document } from "mongoose";
import { Permission } from "../permission/permission-proxy";

export class Role extends Document {
    name: string;
    created: Date;
    permissions: Permission[]
}

export interface RoleDto {
    name: string,
}