import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { IOffer } from '../types/offer.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public offers: IOffer[] = [];
  public isLoading = true;

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.loadCustomerOffers();
  }

  private loadCustomerOffers() {
    this.customerService.getOffers().subscribe(
      (offers) => {
        this.isLoading = false;
        this.offers = offers;
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
        alert('Something went wrong');
      }
    );
  }

}
