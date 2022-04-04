import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Vacancy } from 'src/app/shared/model/vacacy';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  baseUrl=environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) { }

  getAllVacancy(): Observable<Vacancy[]> {
    return this.httpClient.get<Vacancy[]>(`${this.baseUrl}/vacancy`).pipe(tap(response => {
      console.log(response);
    }),
      catchError(this.handleError)
    );;
  }

  createVacancy(vacancy: Vacancy): Observable<Response> {
    return this.httpClient.post<Response>(`${this.baseUrl}/vacancy`, 
    {
      'titolo': vacancy.titolo,
      'azienda': vacancy.azienda,
      'settore': vacancy.settore,
      'ruolo': vacancy.ruolo,
      'budget': vacancy.budget,
      'descrizione': vacancy.descrizione,
    }).pipe(tap(response => {

    }),
    catchError(this.handleError));
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }
}
