import { Injectable } from "@nestjs/common";
import { Model, Document } from "mongoose";

export class BaseService<T extends Document> {
    constructor(
        private modal: Model<T>
    ) {

    }

    async create(input: any) {
        const createdModel = new this.modal(input);
        await createdModel.save();
        return createdModel;
    }
}