export class Proyecto {
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public author: string,
        public langs: string,
        public year: number,
        public img: string
    ) {}
}
