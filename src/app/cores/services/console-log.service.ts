import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';
import { Image } from 'src/app/models/const/image';

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogService {

  constructor() { }

  public consoleLogIn(select: Image): Observable<any> {
    console.log(select);
  
    return of(true);
  }
}