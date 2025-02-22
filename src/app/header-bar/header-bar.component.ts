import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  imports: [],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css',
  standalone: true
})
export class HeaderBarComponent {
ngOnInit() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if(navLinks){
        navLinks.classList.toggle('show');
      }

    });
  }
}
}
