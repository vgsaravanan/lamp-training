import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

firstName: string;
lastName: string;
emailId: string[];
contactNumber: string[];
gender: string[];
dateOfBirth: string;
bloodGroup: string[];
interestType: string[];
graduationType: string[];
submitted:boolean;

  constructor() {
  	this.gender = ['Male', 'Female'];
  	this.interestType = ['Cricket', 'FootBall', 'Racing', 'Listen to Music'];
  	this.graduationType = ['SSLC', 'HSC', 'UG', 'PG', 'MASTERS'];
  	this.bloodGroup = ["A+","B+","O+","AB+","AB-","O-","B-","A-"];
  }

  	log(x) {
  		console.log(x);
  	}

  	sumbitted = false;

  	addEmailId(x) {
  		let element = document.createElement('input');
  		console.log(x);
  	}

  	onSubmit() {
  		this.submitted = true;
  		console.log(this.submitted);
  	}

  	get diagnostic() {
  		return JSON.stringify(this);
  	}

  ngOnInit() {
  }

}
