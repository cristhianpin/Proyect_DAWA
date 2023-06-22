import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/login/login.component';
import { MenuRegistroComponent} from '../app/menu-registro/menu-registro.component'
import { HomeComponent } from '../app/home/home.component'
import { ReservaCitasComponent } from '../app/reserva-citas/reserva-citas.component'
import { CitasComponent } from '../app/citas/citas.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: MenuRegistroComponent},
  {path: 'reservacitas', component: ReservaCitasComponent},
  {path: 'reservas', component: CitasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
