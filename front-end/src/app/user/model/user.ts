export class User{
	firstName: string ='';
	lastName: string = '';
	emailId: emailType[] = [];
	contactNumber: contactType[] = [];
	gender: string = '';
	dateOfBirth: Date;
	bloodGroup: string[] = [];
	areaOfInterest: interestType[] = [];
	graduationType: graduationDetail[] = [];
	image: string;
	
	constructor() {
		// this.areaOfInterest.push();
	}
}

type emailType = {
	emailId: string;
}
type contactType = {
	contactNumber: string;
}
type interestType = {
	interest: number;
}

type graduationDetail = {
	graduation: number;
}