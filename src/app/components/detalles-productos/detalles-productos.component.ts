import { Component, inject } from '@angular/core';
import { PhonesService } from '../../services/phones.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles-productos',
  standalone: true,
  imports: [],
  templateUrl: './detalles-productos.component.html',
  styleUrl: './detalles-productos.component.css'
})
export class DetallesProductosComponent {
  servicio = inject(PhonesService)
  
  router = inject(ActivatedRoute)

  phones: any

  ngOnInit(){
    this.router.params.subscribe(id=>{
      this.servicio.getTelefonosID(id['idTelefono']).subscribe(a=>{
        this.phones = a
      })
    })
  }
}
