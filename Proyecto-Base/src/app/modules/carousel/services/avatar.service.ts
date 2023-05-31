import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient) { }

  public async getAvatar(run: number): Promise<string> {
    const url = `${environment.AVATAR}/${environment.API_V1}/beneficiario/${run}/avatar?isapre=${environment.ISAPRE}`;
    return this.http.get<string>(url).toPromise();
  }
}
