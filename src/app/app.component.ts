import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PricingComponent } from "./modules/pricing/pricing.component";
import { AiInnovationsComponent } from "./modules/ai-innovations/ai-innovations.component";
import { ComparePlansComponent } from "./modules/compare-plans/compare-plans.component";
import { SecurityFaqComponent } from "./modules/security-faq/security-faq.component";
import { AiFutureComponent } from "./modules/ai-future/ai-future.component";
import { TestimonialsComponent } from "./modules/testimonials/testimonials.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, PricingComponent, AiInnovationsComponent, ComparePlansComponent, SecurityFaqComponent, AiFutureComponent, TestimonialsComponent],
  template: `
    <app-header></app-header>
    <app-pricing></app-pricing>
    <app-ai-innovations></app-ai-innovations>
    <app-compare-plans></app-compare-plans>
    <app-testimonials></app-testimonials>
    <app-security-faq></app-security-faq>
    <app-ai-future></app-ai-future>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
