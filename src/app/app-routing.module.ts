import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { EmpresaComponent } from './empresas/empresa/empresa.component';
import { LoginComponent } from './login/login/login.component';
import { ReservaComponent } from './reservas/reserva/reserva.component';



const routes: Routes = [
  
{
  path: 'empleado',
component: EmpleadoComponent

}
,
{
  path: 'empresa',
component: EmpresaComponent

}
,
{
  path: 'app',
component: LoginComponent

}
,{
  path: 'reserva',
component: ReservaComponent

}

,
 {path: '**', redirectTo: 'app'}  


]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
