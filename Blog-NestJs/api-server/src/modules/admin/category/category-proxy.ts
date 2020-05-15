import { Document } from 'mongoose';
export interface Category extends Document {
    name: string;
    description: string;
    parent: Category;
    created: Date;
}