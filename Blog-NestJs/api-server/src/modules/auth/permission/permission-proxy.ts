import { Document } from "mongoose";

export class Permission extends Document {
    name: string;
    display: string;
    parent: Permission;
    path: string;
    method: string;
    created: Date;
}