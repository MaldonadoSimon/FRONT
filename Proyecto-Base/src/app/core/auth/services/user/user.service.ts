import {Injectable} from '@angular/core';
import {IUser} from './model/IUser';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) {
  }

  public getUser(): IUser {
    return this.authService.getUser();
  }
}
