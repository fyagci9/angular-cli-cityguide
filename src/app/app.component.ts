import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValueComponent } from "./value/value.component";
import { NavComponent } from "./nav/nav.component";
import { CityComponent } from "./city/city.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ValueComponent, NavComponent, CityComponent]
})
export class AppComponent {
  title = 'city-guide-SPA';
}
