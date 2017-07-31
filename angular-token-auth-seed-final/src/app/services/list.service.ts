import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from "angular2-token";

@Injectable()
export class ListService {

  private listsUrl: string = '/lists';
  private tasksUrl: string = '/tasks';
  public headers = new Headers();


  constructor(private http: Http, private _tokenService: Angular2TokenService) {}

  //Get all lists
  getLists(){
    //this._tokenService.validateToken();
    return this._tokenService.get(this.listsUrl)
      .map(res => res.json())
  }

  getTasks(listid){
    return this._tokenService.get(this.listsUrl+'/'+listid+this.tasksUrl)
      .map(res => res.json())
  }
  //Get single list
  getMostImportantlist(){

  }
  //Create list
  createlist(params){

  }
  //update lists
  updatelist(param){
    // mandatory comment ?
  }
  //Cancel list
  cancellist(param){
    //switch list's score to 0 and mark as done with mandatory comment of why it has been canceled
  }

}
