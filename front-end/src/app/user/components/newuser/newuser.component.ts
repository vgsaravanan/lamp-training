import { Component, OnInit, Input} from '@angular/core';
import { User } from '../../model/user';
import { Gender } from '../../model/gender'
import 'rxjs/add/operator/map';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  // users: User[];
  user: User = new User();

  // users:User[];
  genderType: any;
  bloodGroupType: any;
  interestType: any;
  graduationType: any;
  
  submitted: boolean = false;

  constructor(private service: UserService) { 
    
    console.log(typeof(this.user.emailId));
  }


  // fun(obj) {
  //   console.log(obj);
  //   let a = Object.keys(obj).map(function(k){
  //     return obj[k]
  //   } );
  // }


  onSubmit() {
    this.submitted = true;
    // this.users;
    // console.log(JSON.stringify(this.users));
  }

  addEmailId(x): void {
    this.user.emailId=[];
    console.log(typeof(this.user.emailId))
    this.user.emailId.push(x);
    // let e: string[] = ['a','b','c'];
    // console.log(typeof(e));
    // console.log(x, typeof(this.user.emailId), this.user.emailId);
    // // let l = typeof(this.user.emailId);
    // // console.log(l);
    // this.user.emailId.push(x);
    
    // console.log(this.user.emailId.push(x));
  }

  // removeEmailId(x) {
  //   for(let i=0; i < users.emailId.length; i++)
  //   {
  //     if(users.emailId[i] == x) {
  //       users.emailId.splice(i,1);
  //     }
  //   }
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

  // generateArray():Array<string> {
  //   console.log(Object.keys(this.genderType));
  //   return Object.keys(this.genderType);
  // }

  ngOnInit() {
    // this.getUser();
    this.getGender();
    this.getBloodGroup();
    this.getGraduationType();
    this.getInterestType();
    // this.generateArray();
  }
}
