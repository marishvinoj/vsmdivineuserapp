import { EntityBase } from "./user";

export interface UserRoleMapping extends EntityBase
{
 UserId: string;
 RoleId: string;
}


export const userRoleMappingHeaders = [
    { field: 'RoleName', header: 'RoleName', type: '' },
    { field: 'UserName', header:'Name', type: ''},
    ];