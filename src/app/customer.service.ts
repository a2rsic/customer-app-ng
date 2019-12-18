import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffer } from './types/offer.interface';
import { ISubscription } from './types/subscription.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'https://selfcare-service.demo.melita.com/interview/api/offers';

  constructor(private http: HttpClient) { }

  public getOffers(): Observable<IOffer[]> {
    return this.http.get<IOffer[]>(this.url);
  }

  public getSubscription(id: number): Observable<ISubscription[]> {
    return this.http.get<ISubscription[]>(`${this.url}/${id}/subscriptions`);
  }
}
