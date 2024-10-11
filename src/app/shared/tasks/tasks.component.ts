import { Component, Input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string; // holds the id of the currently selected user

  isTaskAdded: boolean = false;

  //
  constructor(private tasksService: TasksService) {} // this creates a property automacically

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.isTaskAdded = true;
  }

  onCancelAddTask() {
    this.isTaskAdded = false;
  }
}
