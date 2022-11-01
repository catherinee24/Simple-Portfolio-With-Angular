import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    @Input() anchura!: number;
    @Output() getAuthor = new EventEmitter();

    public autor: any;

    constructor() {
        this.autor = {
            nombre: 'catellaTech',
            web: 'catellatech.com',
            email: 'catellatech@gmail.com',
        };
    }

    ngOnInit() {
        // trabajando con jquery plugin
        $('#logo').click(function (e: any) {
            e.preventDefault();
            $('header').css('background', 'green').css('height', '100px');
        });

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: this.anchura,
        });
    }

    lanzarEvento(event: any) {
        this.getAuthor.emit(this.autor);
    }
}
