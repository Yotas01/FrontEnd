import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseReview } from 'src/app/model/courseReview/course-review';
import { Section } from 'src/app/model/section/section';
import { SearchCourseService } from 'src/app/services/search/search-course.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {

  courseNumber:number = 0;
  semester:number = 0;
  section:number = 0;
  course:CourseReview = new CourseReview(1,1,"",new Section(1,1,"",1,1,new Map),[],[]);

  constructor(private searchService:SearchCourseService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("course: " + this.course.toString());
    this.searchService.getCourseForReview(this.courseNumber,this.section,this.semester)
    .subscribe(foundCourse => {{
      console.log("Found :" + foundCourse);
      this.course.set(foundCourse);
    }});
  }

}
