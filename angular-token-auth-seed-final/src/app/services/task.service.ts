import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  constructor(private http: Http) {}

  //Get all tasks
  getTasks(){

  }
  //Get single task
  getMostImportantTask(){

  }
  //Create task
  createTask(params){

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
