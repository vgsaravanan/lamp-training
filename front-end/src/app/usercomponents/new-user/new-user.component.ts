import { Component, OnInit } from '@angular/core';
import { NewUserService } from './new-user.service';
import { User } from './user';
import { Gender } from './gender';
import 'rxjs/add/operator/map';


@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

users: User[];
genderType: any;

submitted: boolean;


  constructor( private service: NewUserService) {
  }

    getUser(): void {
      this.service.getUser().then(users => this.users = users);
  }

    getGender(): void {

      this.service.getGender().subscribe(
      gender => {
      this.genderType = gender;
      console.log(this.genderType)});
    }
    
   


  ngOnInit() {
    this.getUser();
    this.getGender();
  }

}
