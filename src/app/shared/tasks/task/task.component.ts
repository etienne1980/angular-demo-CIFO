import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { UiCardStyleComponent } from '../../ui-card-style/ui-card-style.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UiCardStyleComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private removeTask = inject(TasksService);

  onCompleteTask() {
    this.removeTask.removeTask(this.task.id);
  }
}
