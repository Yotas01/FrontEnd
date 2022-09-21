import { CourseDialogComponent } from '../../Dialogs/course-dialog/course-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseReview } from 'src/app/model/courseReview/course-review';
import { CourseReviewService } from 'src/app/services/review/course-review.service';
import { ReviewSectionService } from 'src/app/services/review/review-section.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogUnfinishedComponent } from '../../Dialogs/course-dialog-unfinished/course-dialog-unfinished.component';
import { CourseDialogLeftComponent } from '../../Dialogs/course-dialog-left/course-dialog-left.component';
import { ABETSystemError } from 'src/app/model/Error/ABETSystemError';

@Component({
  selector: 'app-course-review',
  templateUrl: './course-review.component.html',
  styleUrls: ['./course-review.component.css']
})
export class CourseReviewComponent implements OnInit {

  courseReview!: CourseReview;
  error: string = "";

  constructor(private route: ActivatedRoute, private courseReviewService: CourseReviewService,
    private reviewService: ReviewSectionService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    let courseNumber = parseInt(this.route.snapshot.paramMap.get('course') || "");
    let sectionNumber = parseInt(this.route.snapshot.paramMap.get('section') || "");
    let semester = parseInt(this.route.snapshot.paramMap.get('semester') || "");
    
    this.courseReviewService.getCourseForReview(courseNumber,sectionNumber,semester).subscribe({
      next: (response) => {
        if(response.body){
          this.courseReview = response.body;
          console.log(this.courseReview);
        }
      }
    });
  }

  openDialog(tipo:number){
    if(tipo==0)
      this.dialog.open(CourseDialogComponent);
    else if(tipo==1)
      this.dialog.open(CourseDialogUnfinishedComponent);
    else{
      let dialogRef = this.dialog.open(CourseDialogLeftComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: ' + result);
        if(result=="true")
          this.router.navigate(['/search']);
      });
    }
  }

  onSubmit(){
    try {
      this.validateData();
      this.setDraftToFalse();
      console.log(this.courseReview.sectionReview);
      this.reviewService.sendSectionReview(this.courseReview.sectionReview).subscribe({
        next: (response) => {
          console.log(response);
          this.openDialog(1);
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
    console.log(this.courseReview.sectionReview);
      this.reviewService.sendSectionReview(this.courseReview.sectionReview).subscribe({
        next: (response) => {
          console.log(response);
          this.openDialog
          this.router.navigate(['/search']);
        },
        error: (e) => {
          console.error("Caught error in component");
          let errorResponse:ABETSystemError = e.error;
          this.error = "Error " + errorResponse.status + " - " + errorResponse.issue;
        }
      });
  }

  validateData(){
    let totalStudents = this.courseReview.section.totalStudents;
    if(this.courseReview.sectionReview.sectionAssessmentTools.some(sat => sat.totalStudents > totalStudents || sat.totalStudents ===0))
      throw new Error("El total de estudiantes de los assessment tool debe ser menor o igual a la cantidad de estudiantes: " + totalStudents + " pero mayor que 0");
      this.courseReview.sectionReview.sectionAssessmentTools.forEach(sat => {
        let satTotal = sat.totalStudents;
        sat.sectionPerformanceIndicators.forEach(spi => {
          let sum = spi.below + spi.competent + spi.exemplary;
          if(sum != satTotal)
            throw new Error("El total de estudiantes por PI: " + sum + " debe ser igual al total de estudiantes que presentaron el Assessment Tool: " + satTotal);
        })
      })
  }

  setDraftToFalse(){
    this.courseReview.sectionReview.sectionAssessmentTools.map(sat => {
      sat.draft = false;
      sat.sectionPerformanceIndicators.map(spi => spi.draft = false);
    })
  }
}


