import { Component, inject,  } from '@angular/core';

import { PhonesService } from '../../services/phones.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla-inicio.component.html',
  styleUrl: './tabla-inicio.component.css'
})
export class TablaInicioComponent {
  private service = inject(PhonesService);

  phones: any

  ngOnInit() {
      this.service.getTelefonos().subscribe(p =>(
        this.phones = p
      ))
  }
}
