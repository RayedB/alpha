import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from "angular2-token";

@Injectable()
export class ListService {

  private listsUrl: string = 'lists';
  private tasksUrl: string = '/tasks';
  public headers = new Headers();


  constructor(private http: Http, private _tokenService: Angular2TokenService) {

  }

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
  createList(params){
    return this._tokenService.post(this.listsUrl, params)
      .map(res => res.json())
  }
  //update lists
  updatelist(param){
    // mandatory comment ?
  }
  //Delete list
  deleteList(param){
    return this._tokenService.delete(this.listsUrl+'/'+param)
  }

}
