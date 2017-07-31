import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit {
  lists
  tasks
  constructor(private service: ListService) { }

  ngOnInit() {
    this.service.getLists()
      .subscribe(data => {
        this.lists = data;
        for (let list of this.lists) {
          console.log(list.id);
          this.service.getTasks(list.id).subscribe(data => {
            this.tasks = data;
            console.log(this.tasks);
          });
        }
      });

  }




}
