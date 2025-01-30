import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'https://your-backend-api.com/reservations';

  constructor(private http: HttpClient) {}

  makeReservation(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
