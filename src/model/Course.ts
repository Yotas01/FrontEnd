import { RAE } from "./RAE";

export class Course{
    id: number;
    name: string;
    raes: RAE[];

    constructor(id: number, name: string, raes:RAE[] = []){
        this.id = id;
        this.name = name;
        this.raes = raes;
    }
}