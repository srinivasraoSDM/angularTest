import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/_services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private authService: AuthService) {}
  public user: any;
  public currentUserSub: any;

  async ngOnInit(): Promise<void> {
    await this.getUser();
    // await this.initForm(user);
  }

  async getUser() {
    this.currentUserSub = this.authService.currentUser
      .asObservable()
      .subscribe((user) => {
        console;
        this.user = user;

        this.initForm(user);
      });
  }

  private initForm(user: any) {
    this.userForm = new FormGroup({
      userName: new FormControl(user?.username || null),
      name: new FormControl(user?.name || null),
      email: new FormControl(user?.email || null),
      website: new FormControl(user?.website || null),
      street: new FormControl(user?.address?.street || null),
      suite: new FormControl(user?.address?.suite || null),
      city: new FormControl(user?.address?.city || null),
      zipcode: new FormControl(user?.address?.zipcode || null),
      companyName: new FormControl(user?.company?.name || null),
    });
  }

  ngOnDestroy(): void {
    this.currentUserSub?.unsubscribe();
  }
}
