import { Component, OnInit, Input} from '@angular/core';
import { User } from '../../model/user';
import { Gender } from '../../model/gender'
import 'rxjs/add/operator/map';
import { UserService } from '../../service/user.service';
import {ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

const COMMA = 188;

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  user: User = new User();

  newuser: User[];
  genderType: string;
  bloodGroupType: string;
  interestType: string;
  graduationType: string;
  

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];


  submitted: boolean = false;

  constructor(private service: UserService) { 
    console.log(typeof(this.user.emailId));
    console.log(this.user);
  }


  // fun(obj) {
  //   console.log(obj);
  //   let a = Object.keys(obj).map(function(k){
  //     return obj[k]
  //   } );
  // }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    console.log(event)

    console.log("Before Insert:",this.user.emailId);
    if ((value || '').trim()) {
      this.user.emailId.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    console.log("After Insert:",this.user.emailId);
  }

  removeEmailId(id: string): void {
    let index = this.user.emailId.indexOf(id);

    if (index >= 0) {
      this.user.emailId.splice(index, 1);
    }
    console.log("After Removal:",this.user.emailId);
  }

  addContact(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    console.log(event)

    console.log("Before Insert:",this.user.contactNumber);
    if ((value || '').trim()) {
      this.user.contactNumber.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    console.log("After Insert:",this.user.contactNumber);
  }

  removeContact(id: string): void {
    let index = this.user.contactNumber.indexOf(id);

    if (index >= 0) {
      this.user.contactNumber.splice(index, 1);
    }
    console.log("After Removal:",this.user.contactNumber);
  }

  
  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.user));

          this.service.addUser(JSON.stringify(this.user)).subscribe(response=> {
            console.log('Response');
            console.log(response);
          });

    if( this.user) {

    }

    // this.users;
    // console.log(JSON.stringify(this.users));
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addEmailId(x): void {
 
    console.log("Before Insert:",this.user.emailId);
    this.user.emailId.push(x);
    console.log("After Insert:",this.user.emailId);
  }

  // removeEmailId(x) {
  //   for(let i=0; i < this.user.emailId.length; i++)
  //   {
  //     if(this.user.emailId[i] == x) {
  //       this.user.emailId.splice(i,1);
  //     }
  //   }
  //   console.log("Remove:",this.user.emailId);
  // }

  // getUser(): void {
  //     this.service.getUser().then(users => this.user = users);
  //     console.log(this.user);
  // }

  getGender(): void {
    this.service.getGender().subscribe(
    gender => {
    this.genderType = gender;
    console.log(typeof(this.genderType))});
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
    // this.generateArray();
  }
}
