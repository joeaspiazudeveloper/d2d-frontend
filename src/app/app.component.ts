import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// writable signals

 let count = signal(0);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    
}
