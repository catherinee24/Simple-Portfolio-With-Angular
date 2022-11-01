import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UploadService } from 'src/app/services/upload';
import { Global } from 'src/app/services/global';

@Component({
    selector: 'app-crear-proyecto',
    templateUrl: './crear-proyecto.component.html',
    styleUrls: ['./crear-proyecto.component.css'],
    providers: [ProyectoService, UploadService],
})
export class CrearProyectoComponent implements OnInit {
    public title: string;
    public project: Proyecto;
    public saveProyecto: any;
    public status!: string;
    public filesToUpload!: Array<File>;
    public url: string;

    constructor(
        private _proyectoService: ProyectoService,
        private _uploadService: UploadService
    ) {
        this.title = 'Crear Proyectos';
        this.project = new Proyecto('', '', '', '', '', 2022, '');
        this.url = Global.url;
    }

    ngOnInit(): void {}

    onSubmit(form: any) {
        // guardar los datos
        this._proyectoService
            .saveProject(this.project)
            .subscribe((response) => {
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
                                this.saveProyecto = result.project;
                                this.status = 'success';
                                form.reset();
                            });
                    } else {
                        this.saveProyecto = response.project;
                        this.status = 'success';
                        form.reset();
                    }
                } else {
                    this.status = 'failed';
                }
            });
    }

    fileChangeEvent(fileInput: any) {
        console.log(fileInput);
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
