import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
  standalone: true
})
export class HeaderBarComponent implements OnInit {

  slideIndex = 0;
  slides: HTMLElement[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Wait for the view to be initialized, then grab all slide images
    setTimeout(() => {
      this.slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
      this.showSlides();
    });

    // Initialize FAQ items and hamburger menu logic (as per your original code)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      this.renderer.listen(item, 'click', () => {
        faqItems.forEach(innerItem => {
          if (innerItem !== item) {
            innerItem.classList.remove('active');
            const arrow = innerItem.querySelector('.arrow') as HTMLElement;
            if (arrow) {
              arrow.classList.remove('rotate');
            }
          }
        });

        item.classList.toggle('active');
        const arrow = item.querySelector('.arrow') as HTMLElement;
        if (arrow) {
          arrow.classList.toggle('rotate');
        }
      });
    });

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

  showSlides() {
    const slides = this.slides;
    
    // Hide all slides initially
    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    // Increment slide index and loop back to first image
    this.slideIndex++;
    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }

    // Show the current slide
    slides[this.slideIndex].style.display = 'block';
  }

  // Call showSlides method at regular intervals (every 3 seconds)
  ngAfterViewInit() {
    setInterval(() => this.showSlides(), 3000);
  }
}
