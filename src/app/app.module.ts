import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MenuRegistroComponent } from './menu-registro/menu-registro.component';
import { HomeComponent } from './home/home.component';
import { ReservaCitasComponent } from './reserva-citas/reserva-citas.component';
import { CitasComponent } from './citas/citas.component';
import { CitasadminComponent } from './citasadmin/citasadmin.component';
import { NavbarInternComponent } from './navbar-intern/navbar-intern.component';
import { CortesComponent } from './servicios/cortes/cortes.component';
import { PeluquerosComponent } from './servicios/peluqueros/peluqueros.component';
import { ProductosComponent } from './servicios/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MenuRegistroComponent,
    HomeComponent,
    ReservaCitasComponent,
    CitasComponent,
    CitasadminComponent,
    NavbarInternComponent,
    CortesComponent,
    PeluquerosComponent,
    ProductosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
