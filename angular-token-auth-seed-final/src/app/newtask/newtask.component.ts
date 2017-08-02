import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'new-task',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.sass']
})
export class NewtaskComponent implements OnInit {
  task = {
    title:"",
    due_date:"",
    importance:"",
    urgency:"",
    est_time_completion:""
  }
  list_id
  constructor() { }

  ngOnInit() {
  }

  submitNewTask(){
    console.log(this.task);
  }

}
