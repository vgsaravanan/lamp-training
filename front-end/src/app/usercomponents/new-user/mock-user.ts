import { User } from './user';
import { Gender } from './gender';

export const USERS: User[] = [
{
	firstName: 'saravanan',
	lastName: 'venugopal',
	emailId: ['saravanan','venugopal'],
	contactNumber: ['74189874574','7010504706'],
	gender: "male",
	dateOfBirth: '25-05-1995',
	bloodGroup: 'A+',
	interestType: 'cricket',
	graduationType: 'BE'
}
];


export const GENDER: Gender[] = [
{
	type: ['Male','Female'],
}
];