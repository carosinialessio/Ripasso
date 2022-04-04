import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Utente } from 'src/app/shared/model/utente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) { }

  public getUser(): Observable<Utente> {
    return this.httpClient.get<Utente>(`${this.baseUrl}/utente`).pipe(tap(response => {
    }),
      catchError(this.handleError)
    );
  }

  public createUser(user:Utente): Observable<Response> {
    return this.httpClient.post<Response>(`${this.baseUrl}/utente`, 
    {
      'nome': user.nome,
      'cognome': user.cognome,
      'dataNascita': user.dataNascita,
      'email': user.email,
      'telefono': user.telefono,
      'indirizzo': user.indirizzo,
      'citta': user.citta
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
