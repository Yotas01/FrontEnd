import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseReviewService } from 'src/app/services/review/course-review.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {

  courseNumber:number = 33698;
  semester:number = 2110;
  section:number = 1;
  response_has_error: boolean = true;
  error_response: string = "";

  constructor(private courseReviewService:CourseReviewService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.courseReviewService.getCourseForReview(this.courseNumber,this.section,this.semester)
    .subscribe({
      next: (course) => {
        this.router.navigate(['/tables',this.courseNumber, this.section, this.semester]);
      },
      error: (e) => this.error_response = "Error " + e.status + " " + e.error
    }); 
  }

}
