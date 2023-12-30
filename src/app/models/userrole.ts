import { EntityBase } from "./user";

export interface UserRole extends EntityBase
{
    RoleName: string;
}

export const userRoleHeaders = [
    { field: 'RoleName', header: 'RoleName', type: '' }
  ];
