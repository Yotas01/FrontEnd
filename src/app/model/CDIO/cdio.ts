import { Course } from "src/model/Course";
import { Outcome } from "../outcome/outcome";
import { RAE } from "../rae/RAE";

export class CDIO {
    description:string;
    number:number;
    outcomes:Outcome[];
    RAEs:RAE[];
    courses:Course[];

    constructor(description:string,number:number,outcomes:Outcome[],RAEs:RAE[],courses:Course[]){
        this.description = description;
        this.number = number;
        this.outcomes = outcomes;
        this.RAEs = RAEs
        this.courses = courses;
    }
}
