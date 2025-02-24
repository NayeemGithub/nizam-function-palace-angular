import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
  standalone: true
})
export class HeaderBarComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Get all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Add click event listener to each FAQ card
    faqItems.forEach(item => {
      this.renderer.listen(item, 'click', () => {
        // Close all FAQ items by removing the 'active' class
        faqItems.forEach(innerItem => {
          if (innerItem !== item) {
            innerItem.classList.remove('active');
            const arrow = innerItem.querySelector('.arrow') as HTMLElement;
            if (arrow) {
              arrow.classList.remove('rotate'); // Remove arrow rotation from others
            }
          }
        });

        // Toggle the 'active' class on the clicked FAQ item
        item.classList.toggle('active');

        // Rotate the arrow on the clicked FAQ item
        const arrow = item.querySelector('.arrow') as HTMLElement;
        if (arrow) {
          arrow.classList.toggle('rotate');
        }
      });
    });

    // Hamburger menu logic (already present in your code)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        if (navLinks) {
          navLinks.classList.toggle('show');
        }
      });
    }
  }
}
