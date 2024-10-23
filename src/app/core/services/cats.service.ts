import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
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
  getBreedImages(breedId: string): Observable<any> {
    const url = `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`;
    return this._http.get(url).pipe(
      map((imageResponse: any) => imageResponse[0]?.url || '') 
    );
  }

  getBreedsWithImages(): Observable<ICat[]> {
    return this.getBreeds().pipe(
      switchMap((breeds: ICat[]) => {
        const breedRequests = breeds.map(breed =>
          this.getBreedImages(breed.id).pipe(
            map(imageUrl => ({
              ...breed,
              image: imageUrl
            }))
          )
        );
        return forkJoin(breedRequests); 
      })
    );
  }
}
