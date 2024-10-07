import { Routes } from '@angular/router';
import { InicioComponent } from './screens/inicio/inicio.component';
import { ContactosComponent } from './screens/contactos/contactos.component';
import { InformacionComponent } from './screens/informacion/informacion.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { DetallesProductosComponent } from './components/detalles-productos/detalles-productos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent},
    { path: 'contactos', component: ContactosComponent},
    { path: 'informacion', component: InformacionComponent},
    { path: 'productos',component:ProductosComponent },
    { path: 'detalles/:idTelefono',component:DetallesProductosComponent },
    { path: '**', redirectTo: 'inicio' }
];
