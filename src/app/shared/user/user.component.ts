import {
  Component,
  EventEmitter,
  input,
  Input,
  InputSignal,
  output,
  Output,
} from '@angular/core';
import { type User } from './user.model';
import { UiCardStyleComponent } from '../ui-card-style/ui-card-style.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UiCardStyleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selectedActiveUser!: boolean;

  //
  // @Output() select = new EventEmitter<string>();
  // a more modern way

  select = output<string>(); // this is an alternative way or using @Output select = new EventEmitter<string>

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  get avatarImagePath() {
    return '/assets/img/users/' + this.user.avatar;
  }
}
