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
 CreatedBy?: Date;
 ModifiedDate?: Date;
 ModifiedBy?: string;
 IsActive: boolean;
}

export const userHeaders = [
 { field: 'RoleName', header: 'RoleName', type: '' },
 { field: 'Name', header:'Name', type: ''},
 { field: 'Email', header:'Email', type: ''},
 { field: 'Password', header:'Password', type: ''},
 { field: 'Gender', header:'Gender ', type: ''},
 { field: 'MobileNumber', header:'Mobile Number', type: ''},
 { field: 'EmailId', header:'Email Id', type: ''},
 { field: 'Dob', header:'Dob ', type: ''},
 { field: 'Address', header:'Address', type: ''},
 { field: 'Pincode', header:'Pincode', type: ''}
 ];