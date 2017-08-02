import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit {
  lists
  tasks = []
  list = {title: ''}
  listCreationForm:boolean;
  taskCreationForm:boolean;
  constructor(private service: ListService) {
    this.listCreationForm = false;
   }

  ngOnInit() {
    //Get todo lists
    this.service.getLists()
      .subscribe(data => {
        this.lists = data; // Save lists in variable
        for (let list of this.lists) { // loop through array to get tasks for each list
          this.service.getTasks(list.id).subscribe(data => {
            for (let d of data){
              this.tasks.push(d);
            } // Save tasks in variable
            console.log(this.tasks);
          });
        }
      });
  }

  newList() {
    this.listCreationForm = true;
    console.log("newlist")
  }

  deleteList(listId){
    this.service.deleteList(listId);
    this.lists.splice(listId,1)
  }

  processForm(){
    this.listCreationForm = false;
    this.service.createList(this.list)
    this.lists.push(this.list);
  }

  toggleNewTask(){
    this.taskCreationForm = !this.taskCreationForm;
  }



}
