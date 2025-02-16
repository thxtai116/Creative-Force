import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PricingComponent } from './modules/pricing/pricing.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'testimonials', component: TestimonialsComponent }
];
