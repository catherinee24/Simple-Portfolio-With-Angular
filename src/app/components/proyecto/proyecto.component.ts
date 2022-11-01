import { Component, OnInit } from '@angular/core';

// importamos el modelo
import { Proyecto } from 'src/app/models/proyecto';
// importamos el service
import { ProyectoService } from 'src/app/services/proyecto.service';
// importamos Global para utilizar nuestra URL
import { Global } from 'src/app/services/global';

@Component({
    selector: 'app-proyecto',
    templateUrl: './proyecto.component.html',
    styleUrls: ['./proyecto.component.css'],
    providers: [ProyectoService],
})
export class ProyectoComponent implements OnInit {
    public projects: Proyecto[];
    public url: string;

    constructor(private _proyectoService: ProyectoService) {
      this.projects = [];
      this.url = Global.url;
    }

    ngOnInit() {
        this.getProjects();
    }

    getProjects() {
        this._proyectoService.getProjects().subscribe(
            (response) => {
                if(response.projects){
                  this.projects = response.projects;
                }
                console.log(response)
            },
            (err) => {
                console.log(<any>err);
            }
        );
    }
}
