import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnChanges {

  @Input() user!: User | null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      const previousUser = changes['user'].previousValue;
      const currentUser = changes['user'].currentValue;
      console.log('User details changed from:', previousUser, 'to:', currentUser);
      if (currentUser) {
        this.displayUserDetails(currentUser);
      }
    }
  }

  displayUserDetails(user: User) {
    console.log('Displaying details for user:', user.name);
  }
}
