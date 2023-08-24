import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Controlnavbars/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MenuRegistroComponent } from './menu-registro/menu-registro.component';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './Serviciosprestados/citas/citas.component';
import { NavbarInternComponent } from './Controlnavbars/navbar-intern/navbar-intern.component';
import { CortesComponent } from './Serviciosprestados/cortes/cortes.component';
import { PeluquerosComponent } from './Serviciosprestados/peluqueros/peluqueros.component';
import { ProductosComponent } from './Serviciosprestados/productos/productos.component';
import { HeaderPrinComponent } from './header-prin/header-prin.component';
import { HttpClientModule } from '@angular/common/http';
import { VistaclienteComponent } from './Admin/vistacliente/vistacliente.component';
import { VistapeluquerosComponent } from './Admin/vistapeluqueros/vistapeluqueros.component';
import { VistaproductosComponent } from './Admin/vistaproductos/vistaproductos.component';
import { VistacortesComponent } from './Admin/vistacortes/vistacortes.component';
import { NavadminComponent } from './Controlnavbars/navadmin/navadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MenuRegistroComponent,
    HomeComponent,
    CitasComponent,
    NavbarInternComponent,
    CortesComponent,
    PeluquerosComponent,
    ProductosComponent,
    HeaderPrinComponent,
    VistaclienteComponent,
    VistapeluquerosComponent,
    VistaproductosComponent,
    VistacortesComponent,
    NavadminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
