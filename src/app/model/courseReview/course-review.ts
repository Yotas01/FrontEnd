import { CDIO } from "../CDIO/cdio";
import { RAE } from "../rae/RAE";
import { Section } from "../section/section";
import { SectionReview } from "../sectionReview/section-review";

export class CourseReview {
  constructor(public courseId: number, public number: number, public name: string, public section: Section,
    public raes: RAE[], public cdioList: CDIO[], public sectionReview: SectionReview) {
    this.courseId = courseId
    this.number = number
    this.name = name
    this.section = section
    this.raes = raes
    this.cdioList = cdioList
    this.sectionReview = sectionReview;
  }
}
