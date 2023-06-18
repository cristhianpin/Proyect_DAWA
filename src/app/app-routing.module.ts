import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/login/login.component';
import { MenuRegistroComponent} from '../app/menu-registro/menu-registro.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: MenuRegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
