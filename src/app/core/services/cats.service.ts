import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICat } from 'src/app/models/ICat.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  constructor(private _http: HttpClient) { }
  getBreeds(): Observable<ICat[]> {
    return this._http.get<ICat[]>(environment.apiUrl);
  }
}
