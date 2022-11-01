import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-detalles',
    templateUrl: './detalles.component.html',
    styleUrls: ['./detalles.component.css'],
    providers: [ProyectoService],
})
export class DetallesComponent implements OnInit {
    public url: string;
    public project!: Proyecto;
    public confirm: boolean;

    constructor(
        private _proyectoService: ProyectoService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this.url = Global.url;
        this.confirm = false;
    }

    ngOnInit() {
        this._route.params.subscribe((params) => {
            let id = params['id'];

            this.getDetalles(id);
        });
    }

    getDetalles(id: string) {
        this._proyectoService.getDetalles(id).subscribe(
            (response) => {
                this.project = response.project;
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }

    deleteProject(id: string) {
        this._proyectoService.deleteProject(id).subscribe(
            (response) => {
                if (response.project) {
                    this._router.navigate(['/proyecto']);
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }

    setConfirm(confirm: boolean) {
        this.confirm = confirm;
    }
}
