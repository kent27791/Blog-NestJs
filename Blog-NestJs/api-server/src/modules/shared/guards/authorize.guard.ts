import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/modules/auth/user/user.service';

@Injectable()
export class AuthorizeGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService
  ) {
    
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requireAll = this.reflector.get<boolean>('requireAll', context.getHandler()) || false;
    const roles = this.reflector.get<string[]>('roles', context.getHandler()) || [];
    const rolesClass = this.reflector.get<string[]>('roles', context.getClass()) || [];
    const requireRoles = [ ...roles, ...rolesClass ];

    const pers = this.reflector.get<string[]>('pers', context.getHandler()) || [];
    const persClass = this.reflector.get<string[]>('pers', context.getClass()) || [];
    const requirePers = [ ...pers, ...persClass ];

    if(requireRoles.length == 0 && requirePers.length == 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userRoles: string[] = request.user.roles;
    const userPers: string[] = request.user.permissions;
    //validate roles
    let validAllRoles = false;
    if(requireRoles.length > 0) {
      validAllRoles = requireRoles.some((ur, index) => {
        const validRole = userRoles.includes(ur);
        if((validRole && !requireAll) || (validRole && index == requireRoles.length - 1)) {
          return true;
        }
        return false;
      })
    } else {
      validAllRoles = true;
    }
    //validate permissions
    let validAllPers = false;
    if(requirePers.length > 0) {
      validAllPers = requirePers.some((up, index) => {
        const validPer = userPers.includes(up);
        if((validPer && !requireAll) || (validPer && index == requirePers.length - 1)) {
          return true;
        }
        return false;
      })
    } else {
      validAllPers = true;
    }

    const validAll = requireAll ? (validAllRoles && validAllPers) : (validAllRoles || validAllPers);
    return validAll;
  }
}
