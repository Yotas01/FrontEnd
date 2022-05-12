export class Course {
    constructor(public CourseId:number, public number:number, public name:string,
        public sections:Map<number,string>, public RAEs:Map<number,string>, public cdioList:number[]){
        this.CourseId=CourseId;
        this.number = number;
        this.name = name;
        this.sections = sections;
        this.RAEs = RAEs;
        this.cdioList = cdioList;
    }
}
