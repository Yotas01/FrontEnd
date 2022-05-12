import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/common/Constants';
import { CourseReview } from 'src/app/model/courseReview/course-review';
import { RAE } from 'src/app/model/rae/RAE';
import { Section } from 'src/app/model/section/section';
import { SectionReview } from 'src/app/model/sectionReview/section-review';
import { SearchCourseService } from 'src/app/services/search/search-course.service';

@Component({
  selector: 'app-course-review',
  templateUrl: './course-review.component.html',
  styleUrls: ['./course-review.component.css']
})
export class CourseReviewComponent implements OnInit {

  title = 'Reportes ABET';
  courseReview: CourseReview = Constants.courseReviewBase;
  raes: RAE[] = [new RAE(1,"",1,[],[]),new RAE(2,"",1,[],[])];
  sectionReview!: SectionReview;

  constructor(private route: ActivatedRoute, private searchService: SearchCourseService) { }

  ngOnInit(): void {
    let courseNumber = parseInt(this.route.snapshot.paramMap.get('course') || "");
    let sectionNumber = parseInt(this.route.snapshot.paramMap.get('section') || "");
    let semester = parseInt(this.route.snapshot.paramMap.get('semester') || "");
    
    this.searchService.getCourseForReview(courseNumber,sectionNumber,semester)
    .subscribe(response => {
      if(response.body){
        this.courseReview = response.body;
        this.sectionReview = Constants.createFromCourseReview(this.courseReview);
        console.log(this.sectionReview);
        this.raes = this.courseReview.raes;
      }
      console.log(this.courseReview)
    })
  }

}
