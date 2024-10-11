import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  closeTask = output<void>();

  //
  enteredTitle!: string;
  enteredDate!: string;
  enteredSummary!: string;

  // constructor(private tasksService: TasksService) {} // or can use alternatively ...

  private tasksService = inject(TasksService); // tasksService is just a property which contains an injection token represented by the TasksService service

  onClosing() {
    this.closeTask.emit();
  }

  // onSubmit() {
  //   this.addNewTask.emit({
  //     title: this.enteredTitle,
  //     dueDate: this.enteredDate,
  //     summary: this.enteredSummary,
  //   });
  // }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.closeTask.emit();
  }
}
