import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from "./header-bar/header-bar.component";

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, HeaderBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'nizam-function-palace-web-app';
}
