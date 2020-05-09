export interface ResponseDto<T> {
    statusCode: number;
    success: boolean;
    errors: any[];
    result: T;
}

export class PagingResultDto<T> {
    constructor(total: number, items: T[]) {
        this.total = total;
        this.items = items;
    }
    total: number;
    items: T[];
}