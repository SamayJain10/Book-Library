import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnChanges {
  
  @Input() user!: any; 
  @Input() address!: string;
  @Input() age!: number;
  @Input() phone!: string;
  @Input() email!: string;
  @Input() username!: string;


  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        const previousValue = change.previousValue;
        const currentValue = change.currentValue;
        
        if (propName === 'user' && currentValue) {
          this.displayUserDetails(currentValue);
        }
      }
    }
  }

 
  displayUserDetails(user: any): void {
    console.log('Displaying user details:', user);
  }
}
