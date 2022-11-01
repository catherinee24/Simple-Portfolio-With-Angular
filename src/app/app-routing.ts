import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes del proyecto
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditarComponent } from './components/editar/editar.component';

const appRoutes: Routes = [
    { path: '', component: SobremiComponent },
    { path: 'sobre-mi', component: SobremiComponent },
    { path: 'proyecto', component: ProyectoComponent },
    { path: 'crear-proyecto', component: CrearProyectoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'detalles/:id', component: DetallesComponent },
    { path: 'editar-proyecto/:id', component: EditarComponent },
    { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
