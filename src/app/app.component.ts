import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValueComponent } from "./value/value.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ValueComponent]
})
export class AppComponent {
  title = 'city-guide-SPA';
}
