import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/common/Constants';
import { Mapper } from 'src/app/common/Mapper';
import { CourseReview } from 'src/app/model/courseReview/course-review';
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

  constructor(private route: ActivatedRoute, private searchService: SearchCourseService,
    private reviewService: ReviewSectionService, private router: Router) { }

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
    try {
      this.validateData();
      this.setDraftToFalse();
      this.reviewService.sendSectionReview(this.sectionReview).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/search']);
        },
        error: (e) => this.error="Error " + e.status + " " + e.error
      });
    } catch (e) {
      if(e instanceof Error)
        this.error = e.message;
    }
  }

  saveUnfinished(){
    try {
      this.validateData();
      console.log(this.sectionReview);
    } catch (e) {
      if(e instanceof Error)
        this.error = e.message;
    }
  }

  validateData(){
    let totalStudents = this.courseReview.section.totalStudents;
    if(this.sectionReview.sectionAssessmentTools.some(sat => sat.totalStudents > totalStudents || sat.totalStudents ===0))
      throw new Error("El total de estudiantes de los assessment tool debe ser menor o igual a la cantidad de estudiantes: " + totalStudents + " pero mayor que cero");
      this.sectionReview.sectionAssessmentTools.forEach(sat => {
        let satTotal = sat.totalStudents;
        sat.sectionPerformanceIndicators.forEach(spi => {
          let sum = spi.below + spi.competent + spi.exemplary;
          if(sum != satTotal)
            throw new Error("El total de estudiantes por PI: " + sum + " debe ser igual al total de estudiantes que presentaron el Assessment Tool: " + satTotal);
        })
      })
  }

  setDraftToFalse(){
    this.sectionReview.sectionAssessmentTools.map(sat => {
      sat.draft = false;
      sat.sectionPerformanceIndicators.map(spi => spi.draft = false);
    })
  }
}