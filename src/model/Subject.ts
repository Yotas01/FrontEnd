import { Course } from "./Course";
import { RAE } from "./RAE";

export class Subject extends Course{

    professor: string;
    students: number;
    semester:number;
    
    constructor(id: number, name: string, raes: RAE[] = [], professor: string, students: number, semester:number){
        super(id,name,raes);
        this.professor = professor;
        this.students = students;
        this.semester = semester;
    }
}