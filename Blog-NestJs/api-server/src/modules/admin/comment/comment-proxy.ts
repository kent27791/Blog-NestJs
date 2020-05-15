import { Document } from "mongoose";
import { Article } from "../article/article-proxy";
import { User } from "src/modules/auth/user/user-proxy";

export interface Comment extends Document {
    title: string;
    content: string;
    rating: number;
    isApprove: boolean;
    parent: Comment;
    article: Article;
    owner: User;
    created: Date;
}