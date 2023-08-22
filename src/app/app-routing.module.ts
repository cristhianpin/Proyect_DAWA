import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/login/login.component';
import { MenuRegistroComponent} from '../app/menu-registro/menu-registro.component'
import { HomeComponent } from '../app/home/home.component'
import { ReservaCitasComponent } from '../app/reserva-citas/reserva-citas.component'
import { CitasComponent } from '../app/citas/citas.component'
import { CortesComponent } from './servicios/cortes/cortes.component';
import { PeluquerosComponent } from './servicios/peluqueros/peluqueros.component';
import { ProductosComponent } from './servicios/productos/productos.component';
import { NavbarInternComponent } from './navbar-intern/navbar-intern.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: MenuRegistroComponent},
  {path: 'reservacitas', component: ReservaCitasComponent},
  {path: 'reservas', component: CitasComponent},
  {path: 'cortes', component: CortesComponent},
  {path: 'peluqueros', component: PeluquerosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'navbar', component: NavbarInternComponent},
  { path: '**', redirectTo: 'home' } // Redireccionar a login en caso de ruta desconocida

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
