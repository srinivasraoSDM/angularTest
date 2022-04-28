import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<any>({});
  currentUser$: Observable<any>;
  public users: any = null;

  public get currentUserValue() {
    return this.currentUser.value;
  }

  constructor(private http: HttpClient) {
    this.currentUser$ = this.currentUser.asObservable();
  }

  async getUser(): Promise<any> {
    const res: any = await this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .toPromise()
      .catch(() => {
        return;
      });
    if (res) {
      this.users = await res;

      return res;
    } else {
      return false;
    }
  }
}
