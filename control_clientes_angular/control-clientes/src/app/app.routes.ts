import { Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfGuard } from './guardianes/conf.guard';

export const routes: Routes = [
    { path: '', component: TableroComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent, canActivate: [ConfGuard]},
    { path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard]},
    { path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard]},
    { path: '**', component: NoEncontradoComponent}
];
