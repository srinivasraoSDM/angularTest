import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/_services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getTheAllUsers();
  }

  async getTheAllUsers() {
    this.authService.getUser().then((res) => {
      this.users = res;
      console.log('res data is ehere', res);
    });
  }
  async editUser(user: any) {
    this.authService.currentUser.next(user);
  }
}
