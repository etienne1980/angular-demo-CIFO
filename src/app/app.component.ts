import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { UserComponent } from './shared/user/user.component';
import { DUMMY_USERS } from './utils/dummy-users';
import { TasksComponent } from './shared/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  //
  selectedUserId?: string;

  //

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  //
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

/*
  The issue occurs because when you use selectedUser as a simple property, it is only evaluated once (during initialization). Angular's change detection does not automatically re-evaluate it when selectedUserId changes.

  By using a getter, get selectedUser(), it ensures that the selectedUser is dynamically recalculated every time it's accessed, reflecting any changes in selectedUserId. This allows it to work correctly with Angular's change detection.
 */
