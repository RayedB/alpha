import { Injectable } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Subject, Observable } from 'rxjs';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ListService } from './list.service';

@Injectable()
export class AuthService {
  lists
  userSignedIn$:Subject<boolean> = new Subject();

  constructor(public authService:Angular2TokenService, private router:Router, private service: ListService) {
    this.authService.validateToken().subscribe(
        res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
      )
  }
  logOutUser():Observable<Response>{

      return this.authService.signOut().map(
          res => {
            this.userSignedIn$.next(false);
            return res;
          }
      );
    }

    registerUser(signUpData:  {email:string, password:string, passwordConfirmation:string}):Observable<Response>{
      return this.authService.registerAccount(signUpData).map(
          res => {
            this.userSignedIn$.next(true);
            this.router.navigate(['/profile'])
            return res
          }
      );
    }

    logInUser(signInData: {email:string, password:string}):Observable<Response>{

      return this.authService.signIn(signInData).map(
          res => {
            this.userSignedIn$.next(true);
            console.log(res.headers.get('access-token'));
            console.log(res.headers.get('client'));
            console.log(res.headers.get('expiry'));
            this.service.getLists()
              .subscribe(data => this.lists = data)
            this.router.navigate(['/profile'])
            return res
          }
      );

    }



}
