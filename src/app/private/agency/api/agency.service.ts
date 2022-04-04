import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Azienda } from 'src/app/shared/model/azienda';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  baseUrl = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) { }

  public getAgency(): Observable<Azienda>{
    return this.httpClient.get<Azienda>(`${this.baseUrl}/azienda`).pipe(tap(response => {

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
