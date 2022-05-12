import { CourseReview } from "../model/courseReview/course-review";
import { Section } from "../model/section/section";

export class Constants{
    public static baseUrl:string = "http://localhost:8080";
    public static sectionBase = new Section(1,1,"",1,1,new Map);
    public static courseReviewBase = new CourseReview(1,1,"",this.sectionBase,[],[]);
}