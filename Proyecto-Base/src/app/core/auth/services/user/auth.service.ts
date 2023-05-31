import {Injectable} from '@angular/core';
import {IUser} from './model/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: IUser;
  private executive: IUser;

  constructor() {
    // This is intentional
  }

  public setUser(user: IUser): void {
    this.user = user;
  }

  public getUser(): IUser {
    return this.user;
  }

  public setExecutive(executive: IUser): void {
    this.executive = executive;
  }

  public getExecutive(): IUser{
    return this.executive;
  }
}
