import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/common/Constants';
import { Mapper } from 'src/app/common/Mapper';
import { CourseReview } from 'src/app/model/courseReview/course-review';
import { RAE } from 'src/app/model/rae/RAE';
import { SectionReview } from 'src/app/model/sectionReview/section-review';
import { ReviewSectionService } from 'src/app/services/review/review-section.service';
import { SearchCourseService } from 'src/app/services/search/search-course.service';

@Component({
  selector: 'app-course-review',
  templateUrl: './course-review.component.html',
  styleUrls: ['./course-review.component.css']
})
export class CourseReviewComponent implements OnInit {

  title = 'Reportes ABET';
  courseReview: CourseReview = Constants.courseReviewBase;
  sectionReview!: SectionReview;
  error: string = "";

  constructor(private route: ActivatedRoute, private searchService: SearchCourseService, private reviewService: ReviewSectionService) { }

  ngOnInit(): void {
    let courseNumber = parseInt(this.route.snapshot.paramMap.get('course') || "");
    let sectionNumber = parseInt(this.route.snapshot.paramMap.get('section') || "");
    let semester = parseInt(this.route.snapshot.paramMap.get('semester') || "");
    
    this.searchService.getCourseForReview(courseNumber,sectionNumber,semester)
    .subscribe(response => {
      if(response.body){
        this.courseReview = response.body;
        console.log(this.courseReview);
        this.sectionReview = Mapper.createFromCourseReview(this.courseReview);
        console.log(this.sectionReview);
      }
    })
  }
  onSubmit(){
    console.log("FORM SUBBMITED");
    console.log(this.sectionReview);
    /*
    this.reviewService.sendSectionReview(this.sectionReview).subscribe({
      next: (response) => console.log(response),
      error: (e) => this.error="Error " + e.status + " " + e.error
    })
    */
  }
  saveUnfinished(){
    console.log("FORM submited for later");
  }
}
