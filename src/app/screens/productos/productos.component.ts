import { Component } from '@angular/core';
import { TablaProductosComponent } from "../../components/tabla-productos/tabla-productos.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaProductosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
