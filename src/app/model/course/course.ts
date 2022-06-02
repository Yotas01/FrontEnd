export class Course {
    constructor(public CourseId:number, public number:number, public name:string,
        public sections:Map<number,string>, public raes:Map<number,string>, public cdioList:number[]){
        this.CourseId=CourseId;
        this.number = number;
        this.name = name;
        this.sections = sections;
        this.raes = raes;
        this.cdioList = cdioList;
    }
}
