import { UserRole } from "./userrole";

export class UserRoleMappingDto {
    userID!: number;
    roles: UserRole[];
    
    
    constructor() {
    this.roles = [];
    }
}
