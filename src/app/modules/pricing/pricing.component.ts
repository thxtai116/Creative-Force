import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  priceStarter = 2400;
  priceCore = 4100;

  updatePrices(event: { starter: number; core: number }) {
    this.priceStarter = event.starter;
    this.priceCore = event.core;
  }
}
