import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions } from '@angular/http';
import { HttpHeaders} from '@angular/common/http';
import { User } from './../model/user';
import { Gender } from './../model/gender';
import { BloodGroup } from './../model/gender';
import { InterestType } from './../model/gender';
import { GraduationType } from './../model/gender';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';
// import { USERS } from './../model/mockUser';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { catchError,tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  // private header = { headers: new Headers({ 'Content-Type': 'application/json' }) };
  private headers = new Headers(
    {"Content-Type":"application/json"}
  );
  // http://www.mocky.io/v2/59ffecc62e00004b21ca59e5
  // private gender = "http://www.mocky.io/v2/59fffa6a2e00007b24ca5a0a";
  private gender = "http://www.mocky.io/v2/5a0528a0300000da19fe0952";
  private bloodgroup = 'http://www.mocky.io/v2/5a052a023000002b1afe0957';
  private interest = 'http://www.mocky.io/v2/5a05297a300000151afe0956';
  private graduation = 'http://www.mocky.io/v2/5a052a4d3000002b1afe0958';
  // private userUrl = "http://www.mocky.io/v2/5a02e79d3300004032f6f13a";
  private userUrl = "http://127.0.0.1:8000/user/new";
  constructor(private http: Http) { }
  
  options = new RequestOptions({ headers: this.headers });


  addUser (user: User): Observable<User> {
    // console.log(user);
    // let u = {"firstName":"saravanan"};
   return this.http.post(this.userUrl, JSON.stringify(user), this.options)
   .pipe(
    catchError(this.handleError<any>('addUser'))
   );
    }

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

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  // private log(message: string) {
  //   this.messageService.add('UserService:' + message);
  // }
 
  //  private handleError(error: any): Promise<any> {
  //    console.error('An error occurred', error); 
  //    return Promise.reject(error.message || error);
  //  }

}
