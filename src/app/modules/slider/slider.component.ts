import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule], // Import MatSliderModule
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  assets = 10000;
  priceStarter = 2400;
  priceCore = 4100;

  @Output() priceChange = new EventEmitter<{ starter: number; core: number }>();

  updatePrices(event: any) {
    this.assets = event.value || event.target.value; // Lấy đúng giá trị từ mat-slider
    this.priceStarter = 2400 + (this.assets / 10000);
    this.priceCore = 4100 + (this.assets / 10000);

    this.priceChange.emit({ starter: this.priceStarter, core: this.priceCore });
  }
}
