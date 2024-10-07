import { Component, inject } from '@angular/core';
import { PhonesService } from '../../services/phones.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css'
})
export class TablaProductosComponent {
  service = inject(PhonesService)
  phones: any

  busqueda:any

  modoNocturno: boolean = false;
  vistaGaleria: boolean = true;
  modoEspanol: boolean = true;

  cambiarModo() {

    this.modoNocturno = !this.modoNocturno;
    this.vistaGaleria = !this.vistaGaleria;
    this.modoEspanol = !this.modoEspanol;
  }


  ngOnInit() {
    this.service.getTelefonos().subscribe(p =>(
      this.phones = p
    ))
}
filtrarPorMarca(phones: any[], marca: string): any[] {
  if (!phones || !marca) {
    return phones; // Devuelve todos los teléfonos si no hay filtro.
  }
  return phones.filter(item => item.marca.toLowerCase() === marca.toLowerCase());
}


 trackByFn(index: number, item: any) {
  return item.id;
}
}
