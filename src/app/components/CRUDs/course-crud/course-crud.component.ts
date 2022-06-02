import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course/course';
import { CourseHasCDIO } from 'src/app/model/CourseHasCDIO/course-has-cdio';
import { CourseService } from 'src/app/services/CRUD/Course/course.service';
import { CourseHasCDIOService } from 'src/app/services/CRUD/Relations/Course-CDIO/course-has-cdio.service';

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.css']
})
export class CourseCRUDComponent implements OnInit {

  courseNumber!: number;
  course!: Course; 
  cdiosWithValues: Map<number,number> = new Map();

  constructor(private route: ActivatedRoute, private courseService: CourseService, private relationService: CourseHasCDIOService) { }

  ngOnInit(): void {
    this.courseNumber = parseInt(this.route.snapshot.paramMap.get('courseNumber')!);
    this.courseService.get(this.courseNumber).subscribe({
      next: (response) => {
        if(response.body){
          this.course = response.body;
          this.course.cdioList.forEach(cdio => this.getBloomValue(cdio));
        }
      },
      error: (e) => console.log(e)
    })
  }

  getBloomValue(cdioNumber: number){
    this.relationService.getCourseHasCDIO(this.courseNumber,cdioNumber).subscribe({
      next: (response) => {
        if(response.body){
          let courseHasCdio = response.body;
          this.cdiosWithValues.set(courseHasCdio.cdio,courseHasCdio.value);
        }
      }
    })
  }

}
