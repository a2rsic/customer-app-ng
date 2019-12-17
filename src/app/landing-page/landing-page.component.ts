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

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.loadCustomerOffers();
  }

  private loadCustomerOffers() {
    this.customerService.getOffers().subscribe(
      (response) => {
        console.log('response :', response);
        this.offers = response;
      },
      (error) => {
        console.log(error);
        alert('Something went wrong');
      }
    );
  }

}
