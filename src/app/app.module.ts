import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './todo/edit/edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChatModule } from './chat/chat.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    ChatModule,
    TodoModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // RouterModule.forRoot([
    //   { path: 'login', component: SignInComponent },
    //   { path: '', redirectTo: 'login', pathMatch: 'full' },
    //   { path: '*', component: SignInComponent },
    //   { path: '**', component: SignInComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditComponent]
})
export class AppModule { }
