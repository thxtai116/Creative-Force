import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-innovations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-innovations.component.html',
  styleUrls: ['./ai-innovations.component.scss']
})
export class AiInnovationsComponent {
  innovations = [
    {
      title: "E-Commerce Copywriting",
      description: "Supercharge copy production with our multidimensional AI copywriter.",
      image: "../../../../assets/icon/ecommerce.svg",
      label: "LIVE",
      wide: true
    },
    {
      title: "Workflow",
      description: "Build flexible, custom workflows that integrate with the most advanced AI services available.",
      image: "/assets/workflow.png",
      label: "LIVE",
      wide: true,
      icons: [
        "../../../../assets/icon/image 22.svg",
        "../../../../assets/icon/image 5.svg",
        "../../../../assets/icon/image 3.svg",
        "../../../../assets/icon/image 4.svg"
      ]
    },
    {
      title: "Garment Labels",
      description: "Convert garment label information into digital data during sample check-in.",
      image: "../../../../assets/icon/AdobeStock_171226773 1.svg",
      label: "IN DEVELOPMENT"
    },
    {
      title: "Digital Models",
      description: "Increase image variety with advanced digital models.",
      image: "../../../../assets/icon/AdobeStock_616478768 1.svg",
      label: "IN DEVELOPMENT"
    },
    {
      title: "Color Variations",
      description: "Produce accurate and consistent color variations.",
      image: "../../../../assets/icon/CRF048_060.svg",
      label: "IN DEVELOPMENT"
    }
  ];
}
