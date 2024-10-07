import { Component } from '@angular/core';
import { FormularioInformacionComponent } from "../../components/formulario-informacion/formulario-informacion.component";

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [FormularioInformacionComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

}
