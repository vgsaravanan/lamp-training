import { Injectable } from '@angular/core';
import { NewUserComponent } from './new-user.component';
import { USERS } from './mock-user';
import { User } from './user';
import { Gender } from './gender';
import { BloodGroup } from './gender';
import { InterestType } from './gender';
import { GraduationType } from './gender';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewUserService {

private headers = new Headers({'Content-Type':'application/json'});
private gender = "http://www.mocky.io/v2/59fc3fcf2d0000b63f124387";
private bloodgroup = 'http://www.mocky.io/v2/59fc47bf2d000027411243bf';
private interest = 'http://www.mocky.io/v2/59fc48172d0000ce411243c3';
private graduation = 'http://www.mocky.io/v2/59fc48502d0000db411243c4';


  constructor(private http: Http) { }

  getGender(){
   return this.http.get(this.gender);
  }

  // getBloodGroup() {
  //   return this.http.get(this.bloodgroup);
  // }

  // getInterestType() {
  // 	return this.http.get(this.interest);
  // }

  // getGraduationType() {
  // 	return this.http.get(this.graduation);
  // }

  getUser(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

 
  // getBloodGroup() {
  // 	return ["A+","B+","O+","AB+","AB-","O-","B-","A-"];
  // }

  // getInterestType() {
  // 	return ['Cricket', 'FootBall', 'Racing', 'Listen to Music'];
  // }

  // getGraduationType() {
  // 	return ['SSLC', 'HSC', 'UG', 'PG', 'MASTERS'];
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
