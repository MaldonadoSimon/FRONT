import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {IText} from './model/text.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicTextService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public async getText(section: string, name: string): Promise<IText> {
    const url = `${environment.API}/${environment.API_V1}/text/section/${section}`;
    const resp: { data: any[] } = await this.http.get<Promise<{ data: IText[] }>>(url)
      .toPromise();
    return resp.data.filter((t) => t.name === name)[0];
  }

}
