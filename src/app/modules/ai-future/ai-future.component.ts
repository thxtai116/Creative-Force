import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-future',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-future.component.html',
  styleUrls: ['./ai-future.component.scss']
})
export class AiFutureComponent {
  title = "Explore the <span class='highlight'>AI-driven</span> future of content production.";
  description = "Transform your studio operations with innovative, AI-powered solutions tailored for the future of content creation. Learn how we can elevate your workflow today.";
  buttonText = "TALK WITH US";
  teamAvatars = [
    "../../../../assets/icon/Julie King 1.svg",
    "../../../../assets/icon/Alex Chin 1.svg",
    "../../../../assets/icon/Timothy Callanan 1.svg",
    "../../../../assets/icon/James Carey alt 1.svg",
  ];
  productImages = {
    jeans: "../../../../assets/icon/CRF070_001 2.svg",
    model: "../../../../assets/icon/CRF038_069-expand 1.svg",
    fabricSwatch: "/assets/fabric-swatch.png"
  };
}
