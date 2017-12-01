import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions } from '@angular/http';
import { HttpHeaders} from '@angular/common/http';
import { Gender } from '.././model/entity';
import { BloodGroup } from '.././model/entity';
import { InterestType } from '.././model/entity';
import { GraduationType } from '.././model/entity';

@Injectable()
export class CoreService {

  private gender = "http://www.mocky.io/v2/5a0528a0300000da19fe0952";
  private bloodgroup = 'http://www.mocky.io/v2/5a052a023000002b1afe0957';
  private interest = 'http://www.mocky.io/v2/5a05297a300000151afe0956';
  private graduation = 'http://www.mocky.io/v2/5a052a4d3000002b1afe0958';
  
  constructor(private http: Http) { }
  
  getGender(){
    return this.http.get(this.gender).map(
      (response) => response.json(),
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
}

