import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { offers } from './data/offers-data';
import { subscriptions } from './data/subscriptions-data';
import { IOffer } from './types/offer.interface';
import { ISubscription } from './types/subscription.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  public getOffers(): Observable<IOffer[]> {
    return of(offers);
  }

  public getSubscription(): Observable<ISubscription[]> {
    return of(subscriptions);
  }
}
