export interface User extends EntityBase
{
        Name: string;
        Email: string;
        Password: string;
        Gender: boolean;
        MobileNumber: number;
        EmailId: string;
        Dob: Date;
        Address: string;
        Pincode?: number;
}

export interface EntityBase
{
        Id: number;
        CreatedDate: Date;
        CreatedBy?: string;
        ModifiedDate?: Date;
        ModifiedBy?: string;
        IsActive: boolean;
}