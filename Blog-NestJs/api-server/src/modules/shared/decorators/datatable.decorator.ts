
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const InputDatatable = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const input = {
        paging: {
            skip: req.body?.paging?.skip || 0,
            take: req.body?.paging?.skip || 10,
        },
        filter: req.body?.filter || {},
        sort: req.body?.sort || {}
    }

    for (const key in input.filter) {
      const value = input.filter[key];
      if(value == undefined || value == '') {
        delete input.filter[key];
      }
    }
    
    return input;
  },
);