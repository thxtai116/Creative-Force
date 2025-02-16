import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-faq.component.html',
  styleUrls: ['./security-faq.component.scss']
})
export class SecurityFaqComponent {
  securityItems = [
    { icon: "shield", title: "SOC 2 Type II" },
    { icon: "lock", title: "256-bit Encryption" },
    { icon: "privacy_tip", title: "Data Privacy & GDPR" },
    { icon: "business", title: "Third-Party Management" }
  ];

  faqs = [
    { 
      question: "How do monthly and annual pricing differ?", 
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      open: true 
    },
    { question: "How many users are included in Starter and Core plans?", answer: "", open: false },
    { question: "Is there a minimum contract length?", answer: "", open: false },
    { question: "Will I be charged sales tax?", answer: "", open: false },
    { question: "Who on my account can add users?", answer: "", open: false },
    { question: "What happens if I exceed my current plan limits?", answer: "", open: false },
    { question: "Do my external clients need to have an account?", answer: "", open: false },
    { question: "Can I upgrade my plan mid-cycle?", answer: "", open: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
