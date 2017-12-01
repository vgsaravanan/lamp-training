import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '../../model/data';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import 'rxjs/add/operator/map';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user: User[] = [];
  data: userdata;
  result: string[];
  length : number = 60;
  pageSize: number;
  pageSizeOptions: number[]= [5, 10];
  offset:number = 0;
  limit:number = 0;
  page: number = 1;
  pageEvent: PageEvent;
  s: boolean ;
  constructor(private service:UserService) { 
  }

  // getUser(): boolean {
  //   this.service.getUser().subscribe(
  //     user => {
  //       this.user= user;
  //       this.length = user.length;
  //       this.s = true;
  //    });
  //    return true;
  // }
  pagination(page,limit) {
    // console.log(page,limit);
    this.page = page;
    this.limit = limit;
    
    this.data.page = this.page;
    this.data.limit = this.limit;
    this.service.getUser(this.data).subscribe(
      user => {
        this.user= user;
        this.length = 60;
        // this.s = true;
     });

    // this.offset = (this.page-1)*(this.limit);
    // console.log(this.offset);
    // this.result = [];
    // // console.log(this.result);
    // for( let i = 0; i < this.limit; i++) {
    //     console.log(this.user[this.offset]);
    //     this.result[i] = this.user[this.offset++];
    //     console.log(this.result[i]);
    // }
  }
  
//   dataSource = new MatTableDataSource<string>(this.user);
  
//     @ViewChild(MatPaginator) paginator: MatPaginator;
    
//     ngAfterViewInit() {
//       this.dataSource.paginator = this.paginator;
//       console.log(this.user);
//     }

  ngOnInit() {
    // this.getUser();
    // if(this.s) {
      this.pagination(1,5);
    // }
    
    
    // console.log(this.pageEvent.pageIndex);
    // console.log(this.pageEvent.pageSize);
    // console.log(this.user.length);
    // this.length = this.user.length;
    // console.log(this.length);
    // console.log(this.user);
    // console.log(this.dataSource);
    // console.log(this.pageEvent.pageSize);
    
  }

}


type userdata = {
  page: any;
  limit: any;
};