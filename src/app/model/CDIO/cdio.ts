import { Course } from "../course/course";
import { Outcome } from "../outcome/outcome";
import { RAE } from "../rae/RAE";

export class CDIO {
    constructor(public description:string, public number:number, public outcomes:Outcome[],
        public RAEs:RAE[], public courses:Course[]){
        this.description = description;
        this.number = number;
        this.outcomes = outcomes;
        this.RAEs = RAEs
        this.courses = courses;
    }
}
