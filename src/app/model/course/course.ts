export class Course {
    CourseId:number;
    number:number;
    name:string;
    sections:Map<number,string>;
    RAEs:Map<number,string>;
    cdioList:number[];

    constructor(CourseId:number, number:number,name:string,sections:Map<number,string>,RAEs:Map<number,string>,cdioList:number[],){
        this.CourseId=CourseId;
        this.number = number;
        this.name = name;
        this.sections = sections;
        this.RAEs = RAEs;
        this.cdioList = cdioList;
    }
}
