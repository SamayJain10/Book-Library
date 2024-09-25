import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';  
import { User } from '../../models/user';  

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  newUser: User = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    email: '',
    address: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();  
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe(user => {
      console.log('User added:', user);  
      this.users.push(user);  
      this.newUser = { id: 0, name: '', age: 0, phone: '', email: '', address: '' };  
    });
  }
}
