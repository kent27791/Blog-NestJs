import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthorizeGuard } from '../guards/authorize.guard';
export const Authorize = (pers: string[] = [], roles: string[] = [], requireAll = false) => {
    return applyDecorators(
        UseGuards(AuthGuard('jwt'), AuthorizeGuard),
        SetMetadata('requireAll', requireAll),
        SetMetadata('pers', pers),
        SetMetadata('roles', roles)
    )
}