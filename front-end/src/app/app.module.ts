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
MatButtonModule
 } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { NewuserComponent } from './user/components/newuser/newuser.component';
import { AppComponent } from './app.component';
// import { NewUserComponent } from './usercomponents/new-user/new-user.component';
// import { NewUserService } from './usercomponents/new-user/new-user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
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
    RouterModule.forRoot(
      [
        {
          path:'newuser',
          component:NewuserComponent
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
