import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app-routing';

import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditarComponent } from './components/editar/editar.component';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ProyectoComponent,
    CrearProyectoComponent,
    ContactoComponent,
    ErrorComponent,
    DetallesComponent,
    EditarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
