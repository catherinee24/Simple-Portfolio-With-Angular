import { Component, OnInit, ViewChild } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
    public widthSlider!: number;
    public anchuraToSlider!: any;
    public autor!: any;

    @ViewChild('textos', {static: true}) textos: any;

    constructor() {}

    ngOnInit() {
        // let version_clasica = document.querySelector('#texto').innerHTML);
        console.log(this.textos.nativeElement.innerText);
    }

    cargarSlider() {
        this.anchuraToSlider = this.widthSlider;
    }

    resetSlider() {
        this.anchuraToSlider = false;
    }

    getAutor(event: any) {
        this.autor = event;
    }
}
