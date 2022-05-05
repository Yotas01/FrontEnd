import { RAE } from "src/model/RAE";
import { CDIO } from "../CDIO/cdio";
import { Section } from "../section/section";

export class CourseReview {
    CourseId:number;
    number:number;
    name:string;
    section:Section;
    RAEs:RAE[];
    cdioList:CDIO[];

  constructor(CourseId: number, number: number, name: string, section: Section, RAEs: RAE[], cdioList: CDIO[]) {
    this.CourseId = CourseId
    this.number = number
    this.name = name
    this.section = section
    this.RAEs = RAEs
    this.cdioList = cdioList
  }

  public set(courseReview:CourseReview) {
    this.CourseId = courseReview.CourseId;
    this.number = courseReview.number;
    this.name = courseReview.name;
    this.section = courseReview.section;
    this.RAEs = courseReview.RAEs;
    this.cdioList = courseReview.cdioList;
  }

  public toString():string {
    return "Course Review:\nid-" + this.CourseId + "\nnumber-" + this.number + "\nname-" + this.name
    + "\nsection-" + this.section + "\nRAEs-" + this.RAEs + "\ncdioList-" + this.cdioList;
  }
}
