import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/login/login.component';
import { MenuRegistroComponent} from '../app/menu-registro/menu-registro.component'
import { HomeComponent } from '../app/home/home.component'
import { CitasComponent } from './citas/citas.component'
import { CortesComponent } from './Serviciosprestados/cortes/cortes.component';
import { PeluquerosComponent } from './Serviciosprestados/peluqueros/peluqueros.component';
import { ProductosComponent } from './Serviciosprestados/productos/productos.component';
import { NavbarInternComponent } from './Controlnavbars/navbar-intern/navbar-intern.component';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: MenuRegistroComponent},
  {path: 'reservas', component: CitasComponent},
  {path: 'cortes', component: CortesComponent},
  {path: 'peluqueros', component: PeluquerosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'navbar', component: NavbarInternComponent},
  {path: 'admin', component: VistaAdminComponent},
  { path: '**', redirectTo: 'home' } // Redireccionar a login en caso de ruta desconocida

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
