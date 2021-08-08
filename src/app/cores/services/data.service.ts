import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public path: string  = 'https://picsum.photos/';
  constructor(private httpClient: HttpClient) { }

  
  public getData(select: string): Observable<any> {
      let apiURL = this.path + select;
    return this.httpClient.get(apiURL);
  }

}
