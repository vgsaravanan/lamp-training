import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UserService } from './service/user.service';
import { CoreService } from '../core/service/core.service';
import { HttpModule } from '@angular/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserlistComponent } from './components/userlist/userlist.component';

import { MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatChipsModule,
  MatTooltipModule,
  MatCardModule,
  // MatPaginator, 
  // MatTableDataSource
   } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
    // MatPaginator, 
    // MatTableDataSource
  ],
  declarations: [NewuserComponent, UserlistComponent],
  providers:[UserService, CoreService ]
})
export class UserModule { }
