export class User {
	firstName: string ='';
	lastName: string = '';
	emailId: string[]=[];
	contactNumber: string[] = [];
	gender: string = '';
	dateOfBirth: Date = new Date('YYYY-MM-DD');
	bloodGroup: string = '';
	interestType: string = '';
	graduationType: string = '';
	

	constructor() {
		// this.firstName = '';
		// this.lastName = '';
		// this.emailId = [];
	}
}