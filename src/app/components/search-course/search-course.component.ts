import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ABETSystemError } from 'src/app/model/Error/ABETSystemError';
import { CourseReviewService } from 'src/app/services/review/course-review.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {

  courseNumber!:number;
  semester!:number;
  section!:number;
  hasSelectedCourseAndSemenster: boolean = false;
  error_response: string = "";
  sections: number[] = [1,2];

  constructor(private courseReviewService:CourseReviewService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.courseReviewService.getCourseForReview(this.courseNumber,this.section,this.semester)
    .subscribe({
      next: (course) => {
        this.router.navigate(['/review',this.courseNumber, this.section, this.semester]);
      },
      error: (e) => {
        console.error("Caught error in component");
        let error:ABETSystemError = e.error;
        this.error_response = "Error " + error.status + " - " + error.issue;
      }
    }); 
  }
}
