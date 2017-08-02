import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

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

  constructor(private service: TaskService) { }

  ngOnInit() {
  }

  submitNewTask(){
    this.service.createTask(this.task,this.list_id);
    console.log(this.task)
    this.task = {
      title:"",
      due_date:"",
      importance:"",
      urgency:"",
      est_time_completion:""
    }

  }

}
