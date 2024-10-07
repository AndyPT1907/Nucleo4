import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./screens/inicio/inicio.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nucelo4-Entregable-1';
}
