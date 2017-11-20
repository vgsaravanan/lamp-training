import { Component, OnInit, Input} from '@angular/core';
import { User } from '../../model/user';
import 'rxjs/add/operator/map';
import { UserService } from '../../service/user.service';
import {ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import * as moment from 'moment';

const COMMA = 188;

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  user: User = new User();
  // newuser: User[];
  genderType: string;
  bloodGroupType: string;
  interestType: string;
  graduationType: string;
  selectedInterest: number[] = [];
  selectedGraduation: number[] = [];

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];

  submitted: boolean = false;

  constructor(private service: UserService) { 
    
  }

  selectOptions(x) {
    this.selectedInterest.push(x);
  }
  selectGraduation(x) {
    this.selectedGraduation.push(x);
  }
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      this.user.emailId.push({emailId:value.trim()});
    }
    if (input) {
      input.value = '';
    }
  }

  // removeEmailId(id: string): void {
  //   let index = this.user.emailId.indexOf({emailId:id});

  //   if (index >= 0) {
  //     this.user.emailId.splice(index, 1);
  //   }
  //   // console.log("After Removal:",this.user.emailId);
  // }

  addContact(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      this.user.contactNumber.push({contactNumber:value.trim()});
    }
    if (input) {
      input.value = '';
    }
  }

  removeContact(x) {
    for(let i=0; i < this.user.contactNumber.length; i++)
    { 
      if(this.user.contactNumber[i] == x) {
        this.user.contactNumber.splice(i,1);
      }
    }
  }

  
  // removeContact(id: string): void {
  //   let index = this.user.contactNumber.indexOf(id);

  //   if (index >= 0) {
  //     this.user.contactNumber.splice(index, 1);
  //   }
  //   // console.log("After Removal:",this.user.contactNumber);
  // }

  
  onSubmit() {
    this.submitted = true;
    // this.user.dateOfBirth =this.user.dateOfBirth;  
    if(this.selectedInterest.length) {
      this.user.areaOfInterest = [];
      for(let i= 0; i< this.selectedInterest.length; i++) {
        this.user.areaOfInterest.push({interest:this.selectedInterest[i]});
      }
    }

    if(this.selectedGraduation.length) {
      this.user.graduationType = [];
      for(let i= 0; i< this.selectedGraduation.length; i++) {
        this.user.graduationType.push({graduation:this.selectedGraduation[i]});
      }
    }

    console.log(JSON.stringify(this.user));
    console.log('Response');

    this.service.addUser(this.user as User).subscribe(response=> {
         console.log(response);
       });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  removeEmailId(x) {
    for(let i=0; i < this.user.emailId.length; i++)
    {
      if(this.user.emailId[i] == x) {
        this.user.emailId.splice(i,1);
      }
    }
    console.log("Remove:",this.user.emailId);
  }

  // getUser(): void {
  //     this.service.getUser().then(users => this.user = users);
  //     console.log(this.user);
  // }

  getGender(): void {
    this.service.getGender().subscribe(
    gender => {
    this.genderType = gender;
  });
  }

  getBloodGroup(): void {
    this.service.getBloodGroup().subscribe(
      bloodType => {
        this.bloodGroupType = bloodType;
      }
    )
  }

  getInterestType(): void {
    this.service.getInterestType().subscribe(
      interestType => {
        this.interestType = interestType;
      }
    )
  }

  getGraduationType(): void {
    this.service.getGraduationType().subscribe(
      graduationType => {
        this.graduationType = graduationType;
      }
    )
  }
  ngOnInit() {
    // this.getUser();
    this.getGender();
    this.getBloodGroup();
    this.getGraduationType();
    this.getInterestType();
  }
}
