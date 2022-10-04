import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ABETSystemError } from 'src/app/model/Error/ABETSystemError';
import { Section } from 'src/app/model/section/section';
import { SectionService } from 'src/app/services/CRUD/Section/section.service';
import { CourseReviewService } from 'src/app/services/review/course-review.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {

  courseNumber!:number;
  semester!:number;
  section!: Section;
  hasSelectedCourseAndSemenster: boolean = false;
  error_response: string = "";
  sections: Section[] = [];
  gotSections: boolean = false;

  constructor(private courseReviewService:CourseReviewService, private router:Router, private sectionService: SectionService) { }

  ngOnInit(): void {
  }

  getSections(): void{
    this.sectionService.getAllCourseSections(this.courseNumber, this.semester)
    .subscribe({
      next: (response) => {
        if(response.body){
          this.sections = response.body;
          console.log(this.sections);
          this.gotSections = true;
        }
      }
    })
  }

  onSubmit(){
    console.log(this.section);
    this.courseReviewService.getCourseForReview(this.courseNumber,this.section.number,this.semester)
    .subscribe({
      next: (course) => {
        this.router.navigate(['/review',this.courseNumber, this.section.number, this.semester]);
      },
      error: (e) => {
        console.error("Caught error in component");
        let error:ABETSystemError = e.error;
        this.error_response = "Error " + error.status + " - " + error.issue;
      }
    }); 
  }

  goToReports(){
    this.router.navigateByUrl('/admin');
  }
}
