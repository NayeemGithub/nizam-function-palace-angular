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

    // Hamburger menu logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle menu visibility
      });

      // Add click event for navigation links
      const navItems = navLinks.querySelectorAll('li a');
      navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
          navLinks.classList.remove('show'); // Close the menu
          const targetId = navItem.getAttribute('href')?.substring(1); // Get target section ID
          if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to section
            } else {
              console.error(`Element with ID ${targetId} not found.`);
            }
          }
        });
      });
    } else {
      console.error("Hamburger or nav links element not found.");
    }
  }
}
