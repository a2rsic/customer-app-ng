import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ISubscription } from '../types/subscription.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  public subscriptions: ISubscription[] = [];
  public isLoading = true;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private loaction: Location,
  ) { }

  ngOnInit() {
    this.loadSubscription();
  }

  public goBack() {
    this.loaction.back();
  }

  private loadSubscription() {
    const offerId = +this.route.snapshot.paramMap.get('id');
    this.customerService.getSubscription(offerId).subscribe(
      (subscriptions) => {
        this.isLoading = false;
        this.subscriptions = subscriptions;
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
        alert('Something went wrong');
      }
    );
  }

}
