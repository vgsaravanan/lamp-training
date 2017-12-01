import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { HttpHeaders} from '@angular/common/http';
import { User } from './../model/user';
import { Data } from './../model/data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';
// import { USERS } from './../model/mockUser';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { catchError,tap, map } from 'rxjs/operators';

@Injectable()
export class UserService {

  // private header = { headers: new Headers({ 'Content-Type': 'application/json' }) };
  private headers = new Headers(
    {"Content-Type":"application/json"}
  );
  // http://www.mocky.io/v2/59ffecc62e00004b21ca59e5
  // private gender = "http://www.mocky.io/v2/59fffa6a2e00007b24ca5a0a";
 
  // private userUrl = "http://www.mocky.io/v2/5a02e79d3300004032f6f13a";
  private userUrl = "http://127.0.0.1:8000/user/new";
  constructor(private http: Http) { }
  
  options = new RequestOptions({ headers: this.headers });


  addUser (user: User): Observable<User> {
   return this.http.post(this.userUrl, JSON.stringify(user), this.options)
   .map(response=> response.json()) 
   .catch(this.handleError);
    }

  // getResponse(): Observable<string> {
  //   return this.http.get(this.userUrl).map((response)=> response.json());
  // }

  getUser(data): Observable<User[]>{
    let link = "http://127.0.0.1:8000/user/display/" + data.page;
    return this.http.post(link, JSON.stringify(data), this.options)
    .map(response=> response.json()) 
    .catch(this.handleError);
  }
  
  public handleError(error: Response | any) {
    // console.error(error.message || error);
    return Observable.throw(error.message || error);
      }

  //  private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   };
  // }
}
