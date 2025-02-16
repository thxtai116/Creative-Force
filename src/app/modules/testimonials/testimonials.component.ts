import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: "Decreased photographer onboarding time from 1 day to 20 minutes",
      caseStudy: "BOOHOO CASE STUDY",
      logo: "../../../../assets/icon/3x.svg"

    },
    {
      text: "MACH Certified",
      logo: "../../../../assets/icon/Vector.svg"
    },
    {
      text: "We can just come in, get into the flow, get into the groove. We pass our files off just like everyone else does. But all that little painstaking, not fun stuff, is handled by the program.",
      author: "ANTHONY NOCELLA — Lead Photographer",
      company: "nuuly"
    },
    {
      text: "Creative Force isn’t just software; it’s a partnership with a shared goal of creating efficiencies within workflows.",
      author: "MICHELLE M.",
      role: "Director, Creative & Photo Studio Operations",
      rating: 5
    },
    {
      text: "Implementing Creative Force reduced a large amount of unnecessary admin work which has improved efficiency and lowered potential reshoots, which is a large cost- and time-saver.",
      author: "JOEL PAMMENTER — Senior Photographer",
      company: "boohoo"
    },
    {
      text: "82% Faster turnaround time",
      caseStudy: "ORENDT STUDIOS CASE STUDY",

    }
  ];

  awards = [
    { image: "../../../assets/icon/DigitalAssetManagement_MomentumLeader_Leader.png", title: "Momentum Leader", season: "Spring 2024" },
    { image: "../../../assets/icon/DigitalAssetManagement_HighPerformer_HighPerformer.png", title: "High Performer", season: "Spring 2024" },
    { image: "../../../assets/icon/ProductInformationManagement(PIM)_BestSupport_Small-Business_QualityOfSupport.png", title: "Best Support", season: "Enterprise 2024" }
  ];

  // brandLogos = [
  //   "../../../assets/icon/LOGOS NEG.svg"
  // ];
}
