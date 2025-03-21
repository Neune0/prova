import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PiattiComponent } from "./components/piatti/piatti.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PiattiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
