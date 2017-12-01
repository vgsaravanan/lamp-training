import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule,
MatNativeDateModule,
MatRadioModule,
MatSelectModule,
MatFormFieldModule,
MatInputModule,
MatChipsModule,
MatButtonModule,
MatCardModule,
// MatPaginator,
// MatTableDataSource
 } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { NewuserComponent } from './user/components/newuser/newuser.component';
import { UserlistComponent } from './user/components/userlist/userlist.component';
import { AppComponent } from './app.component';
// import { NewUserComponent } from './usercomponents/new-user/new-user.component';
// import { NewUserService } from './usercomponents/new-user/new-user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    // EmailValidatorDirective,
    // NewUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpModule,
    HttpClientModule,
    UserModule,
    MatChipsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    // MatPaginator, 
    // MatTableDataSource,
    RouterModule.forRoot(
      [
        {
          path:'user/new',
          component:NewuserComponent
        },
        {
          path:'user/list',
          component:UserlistComponent
        },
      ]
    )
  ],
  providers: [
      // NewUserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }