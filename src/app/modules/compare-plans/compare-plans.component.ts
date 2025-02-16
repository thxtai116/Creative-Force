import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compare-plans.component.html',
  styleUrl: './compare-plans.component.scss'
})
export class ComparePlansComponent {
  plans = [
    { name: "Starter", price: "$2,400 /mo", btnText: "GET A QUOTE" },
    { name: "Core", price: "$4,100 /mo", btnText: "GET A QUOTE" },
    { name: "Enterprise", price: "Custom", btnText: "GET A QUOTE" }
  ];

  features = [
    { name: "Users", values: ["Unlimited", "Unlimited", "Unlimited"] },
    { name: "Workspaces (Clients)", values: ["1", "3", "Unlimited"] },
    { name: "Additional Workspaces", values: ["$", "$", "$"] },
    { name: "Cloud Based", values: ["✔️", "✔️", "✔️"] },
    { name: "Multi-Tenant Database", values: ["✔️", "✔️", "✔️"] },
    { name: "Regional Multi-Tenant Binary Storage", values: ["✔️", "✔️", "✔️"] },
    { name: "Full Redundant Back-up", values: ["$", "$", "$"] },
    { name: "Dedicated Database", values: ["$", "$", "$"] },
    { name: "Dedicated Binary Storage", values: ["$", "$", "$"] },
    { name: "API", values: ["✔️", "✔️", "✔️"] },
    { name: "Webhooks", values: ["✔️", "✔️", "✔️"] },
    { name: "File Automation", values: ["✔️", "✔️", "✔️"] },
    { name: "FTP Server (10 Gb)", values: ["✔️", "✔️", "✔️"] },
    { name: "File Types Essentials", values: ["🔹", "🔹", "🔹"] },
    { name: "File Types Advanced", values: ["$", "$", "$"] }
  ];
}
