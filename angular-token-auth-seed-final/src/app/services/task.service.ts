import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from "angular2-token";

@Injectable()
export class TaskService {

  constructor(private _tokenService: Angular2TokenService) {}

  //Get all tasks
  getTasks(){

  }
  //Get single task
  getMostImportantTask(){

  }
  //Create task
  createTask(params,list_id){
    return this._tokenService.post("lists/"+list_id+"/tasks",params)
      .map(res => res.json())
  }
  //update tasks
  updateTask(param){
    // mandatory comment ?
  }
  //Cancel task
  cancelTask(param){
    //switch task's score to 0 and mark as done with mandatory comment of why it has been canceled
  }

}
