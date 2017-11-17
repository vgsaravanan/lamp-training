export class User{
	firstName: string ='';
	lastName: string = '';
	// var arr: Array<{id: number, text: string}> = [...];
	// emailId: Array<{ emailId:string}> = [];
	emailId: emailType[] = [];
	contactNumber: contactType[] = [];
	gender: string = '';
	dateOfBirth: string;
	bloodGroup: string[] = [];
	areaOfInterest: interestType[] = [];
	graduationType: graduationDetail[] = [];
	
	constructor() {
		this.areaOfInterest.push();
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