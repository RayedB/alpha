import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from './services/auth.service';
import { TaskService } from './services/task.service';
import { ListService } from './services/list.service';
import { HandleErrorService } from './services/errorhandler.service'
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
  ],
  providers: [
    Angular2TokenService,
    AuthService,
    TaskService,
    ListService,
    HandleErrorService,
    AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
