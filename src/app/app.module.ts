import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { EmpresaComponent } from './empresas/empresa/empresa.component';
import { LoginComponent } from './login/login/login.component';
import { ReservaComponent } from './reservas/reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpresaComponent,
    LoginComponent,
    ReservaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
