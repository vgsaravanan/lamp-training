import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { User } from '../../model/user';
import 'rxjs/add/operator/map';
import { UserService } from '../../service/user.service';
import { CoreService } from '../../../core/service/core.service'; 

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
  response: any;
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
  errorMessage: string = '';
  submitted: boolean = false;

  loaded: boolean =false;
  constructor(private service: UserService, private coreServie: CoreService) { 
    
  }

  selectOptions(x) {
    this.selectedInterest.push(x);
  }
  selectGraduation(x) {
    this.selectedGraduation.push(x);
  }
  // validate(event: MatChipInputEvent) :void {
  //   let input = event.input;
  //   let value = event.value;
  //   let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  //   if(emailRegEx.test(value)) {
  //     return control.value < 1 || valid ? null : {'isEmail': true};
  //   }
  // }
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if(emailRegEx.test(value)) {
      if ((value || '').trim()) {
        this.user.emailId.push({emailId:value.trim()});
      }
      if (input) {
        input.value = '';
      }
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
    let regEx = /^[0-9]+$/;
    if(regEx.test(value)) {
      if ((value || '').trim()) {
        this.user.contactNumber.push({contactNumber:value.trim()});
      }
      if (input) {
        input.value = '';
      }
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

  getImage(event) {
    // let image = event.target.files[0];
    // let files = event.srcElement.files;
    if (event.target.files && event.target.files.length > 0) {
      let file =  event.target.files[0];
      let reader = new FileReader();
      
      reader.readAsDataURL(file);

      reader.onload = (event:any) => {
        this.user.image = reader.result.split(',')[1];
        // let files = {
        //   lastModified    : file.lastModified,
        //   lastModifiedDate: file.lastModifiedDate,
        //   name       : file.name,
        //   size       : file.size,
        //   type       : file.type,
        //   value      : reader.result.split(',')[1]
        // }
      }
      console.log(this.user.image);
    } 

  }
  
  // getResponse() {
  //   return this.service.getResponse().subscribe(
  //     error => {
  //       this.errorMessage = error;
  //       console.log(this.errorMessage);
  //     });
  // }

  onSubmit() {
    this.submitted = true;
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
    // console.log(JSON.stringify(this.user));
    // console.log('Response');
    
    // this.getResponse();

   this.service.addUser(this.user as User).subscribe(
     data =>{ 
       console.log('hiiii');
      },
      error => {
        this.errorMessage = <any>error;
        // console.log('helkhjkjhkj');
        // return Observable.throw(error);
      }
      // response=> {
      //    this.response =response;
      //    console.log(this.response);
      //  }
      );
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
    // console.log("Remove:",this.user.emailId);
  }

  getGender(): void {
    this.coreServie.getGender().subscribe(
    gender => {
    this.genderType = gender;
  });
  }

  getBloodGroup(): void {
    this.coreServie.getBloodGroup().subscribe(
      bloodType => {
        this.bloodGroupType = bloodType;
      }
    )
  }

  getInterestType(): void {
    this.coreServie.getInterestType().subscribe(
      interestType => {
        this.interestType = interestType;
      }
    )
  }

  getGraduationType(): void {
    this.coreServie.getGraduationType().subscribe(
      graduationType => {
        this.graduationType = graduationType;
      }
    )
  }
  ngOnInit() {
    this.getGender();
    this.getBloodGroup();
    this.getGraduationType();
    this.getInterestType();
  }
}