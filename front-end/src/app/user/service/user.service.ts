import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { User } from './../model/user';
import { Gender } from './../model/gender';
import { BloodGroup } from './../model/gender';
import { InterestType } from './../model/gender';
import { GraduationType } from './../model/gender';
// import { USERS } from './../model/mockUser';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private headers = new Headers(
    {"Content-Type":"application/json"}
  );
  // http://www.mocky.io/v2/59ffecc62e00004b21ca59e5
  // private gender = "http://www.mocky.io/v2/59fffa6a2e00007b24ca5a0a";
  private gender = "http://www.mocky.io/v2/59faa882370000782e66ba07";
  private bloodgroup = 'http://www.mocky.io/v2/59fc47bf2d000027411243bf';
  private interest = 'http://www.mocky.io/v2/59fc48172d0000ce411243c3';
  private graduation = 'http://www.mocky.io/v2/59fc48502d0000db411243c4';


  constructor(private http: Http) { }

  getGender(){
    return this.http.get(this.gender).map(
      (response) => response.json()
      );
   }

  getBloodGroup() {
    return this.http.get(this.bloodgroup).map(
      (response) => response.json()
      );
  }

  getInterestType() {
    return this.http.get(this.interest).map(
      (response) => response.json()
      );
  }

  getGraduationType() {
    return this.http.get(this.graduation).map(
      (response) => response.json()
      );
  }
  
 
  //  getUser(): Promise<User[]> {
  //    return Promise.resolve(USERS);
  //  }
 
  
  //  getBloodGroup() {
  //    return ["A+","B+","O+","AB+","AB-","O-","B-","A-"];
  //  }
 
  //  getInterestType() {
  //    return ['Cricket', 'FootBall', 'Racing', 'Listen to Music'];
  //  }
 
  //  getGraduationType() {
  //    return ['SSLC', 'HSC', 'UG', 'PG', 'MASTERS'];
  //  }
 
   private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
   }

}
