import { CDIO } from "../CDIO/cdio";
import { RAE } from "../rae/RAE";
import { Section } from "../section/section";

export class CourseReview {
  constructor(public courseId: number, public number: number, public name: string, public section: Section,
    public raes: RAE[], public cdioList: CDIO[]) {
    this.courseId = courseId
    this.number = number
    this.name = name
    this.section = section
    this.raes = raes
    this.cdioList = cdioList
  }
}
