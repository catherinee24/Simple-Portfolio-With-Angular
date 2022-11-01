import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UploadService } from 'src/app/services/upload';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-editar',
    templateUrl: '../crear-proyecto/crear-proyecto.component.html',
    styleUrls: ['../crear-proyecto/crear-proyecto.component.css'],
    providers: [ProyectoService, UploadService],
})
export class EditarComponent implements OnInit {
    public title: string;
    public project!: Proyecto;
    public saveProyecto: any;
    public status!: string;
    public filesToUpload: Array<File>;
    public url: string;

    constructor(
        private _proyectoService: ProyectoService,
        private _uploadService: UploadService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this.title = 'Editar proyeto!';
        this.filesToUpload = [];
        this.url = Global.url;
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

    onSubmit(form: any) {
        // guardar los datos
        this._proyectoService.updateProject(this.project).subscribe(
            (response) => {
                if (response.project) {
                    if (this.filesToUpload) {
                        // subir la imagen
                        this._uploadService
                            .makeFileRequest(
                                Global.url + 'image/' + response.project._id,
                                [],
                                this.filesToUpload,
                                'image'
                            )
                            .then((result: any) => {
                                this.status = 'success';
                                this.saveProyecto = result.project;
                            });
                    } else {
                        this.saveProyecto = response.project;
                        this.status = 'success';
                    }
                } else {
                    this.status = 'failed';
                }
            },
        );
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
