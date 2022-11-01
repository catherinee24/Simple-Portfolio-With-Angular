import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';
import { Global } from './global';

@Injectable()
export class ProyectoService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }

    testService() {
        return 'Probando el servivio de angular';
    }

    saveProject(proyecto: Proyecto): Observable<any> {
        let params = JSON.stringify(proyecto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save-proyecto', params, {
            headers: headers,
        });
    }

    getProjects(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'proyectos', { headers: headers });
    }

    getDetalles(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'proyecto/' + id, {
            headers: headers,
        });
    }
    // Borrar un Proyecto por id
    deleteProject(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.delete(this.url + 'proyecto_to_delete/' + id, {
            headers: headers,
        });
    }

    updateProject(project : Proyecto): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        console.log(params)
        console.log(project)

        return this._http.put(this.url + 'proyecto_to_update/' + project._id, params, {
            headers: headers
        });
    }
}
