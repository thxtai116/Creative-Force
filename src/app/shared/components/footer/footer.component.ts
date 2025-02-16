import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialIcons = [
    { icon: "linkedin", url: "#" },
    { icon: "x-twitter", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "facebook", url: "#" },
    { icon: "youtube", url: "#" },
    { icon: "vimeo", url: "#" }
  ];

  footerLinks = [
    {
      title: "E-Comm Platform",
      links: ["Workflow Automation", "Sample Management", "Asset Hub", "Review & Approval", "Compare Creative Force"]
    },
    {
      title: "Extensions",
      links: ["Copywriting", "Editorial Projects", "Planning Calendar", "Video Production", "VPI Management"]
    },
    {
      title: "User Resources",
      links: ["Developer API", "Downloads", "Help Center", "Partners & Integrations", "Release Notes"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Customer Stories", "Press", "dreem.ai", "creativeoperations.com"]
    }
  ];
}
