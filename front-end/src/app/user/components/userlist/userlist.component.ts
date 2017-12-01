import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '../../model/data';
import { UserService } from '../../service/user.service';
import 'rxjs/add/operator/map';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user: string[];
  result: string[];
  length : number;
  pageSize: number;
  pageSizeOptions: number[]= [5, 10];
//   display = ['firstName'];
  
  pageEvent: PageEvent;
  constructor(private service:UserService) { 
    // this.getUser();
  }

  getUser(): void {
    this.service.getUser().subscribe(
      user => {
        this.user= user;
        this.length = user.length;
        // console.log(typeof(this.user), user.length,this.length)
     });
  }
  pagination(page,limit) {
    console.log(page,limit);
    let offset = (page-1)*limit;
    this.result = [];
    console.log(this.result);
    for( let i = offset; this.result.length < limit; i++) {
        this.result[i] = this.user[offset];
        console.log(this.result[i]);
    }
  }
  
//   dataSource = new MatTableDataSource<string>(this.user);
  
//     @ViewChild(MatPaginator) paginator: MatPaginator;
    
//     ngAfterViewInit() {
//       this.dataSource.paginator = this.paginator;
//       console.log(this.user);
//     }

  ngOnInit() {
    this.getUser();
    // console.log(this.user.length);
    // this.length = this.user.length;
    // console.log(this.length);
    // console.log(this.user);
    // console.log(this.dataSource);
    // console.log(this.pageEvent.pageSize);

  }

}

// export class datas {
//   firstName: string;
//   lastName: string;
//   image: string;
//   dateOfBirth: string;
// }

// let u: datas =  [
//   {
//       firstName: "Sureshs",
//       lastName: "Rainaa",
//       image: "",
//       dateOfBirth: "1970-06-16T00:00:00+05:30"
//   },
// ]