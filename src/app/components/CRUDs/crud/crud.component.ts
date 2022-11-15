import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Course } from 'src/app/model/course/course';
import { CourseService } from 'src/app/services/CRUD/Course/course.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  selectedOption!: string;
  courses: Course[] = [];
  courseNumber!: number;

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe({
      next: (response) => {
        if(response.body)
          this.courses = response.body
      },
      error: (e) => console.log(e)
    });
  }

  onClick(option:number){
    if(this.selectedOption === "courses")
      this.router.navigate(['admin/management/courses',this.courseNumber]);
    else if(this.selectedOption === "sections")
      this.router.navigate(['admin/management/sections',this.courseNumber]);
    else
      this.router.navigate(['admin/management/'+this.selectedOption]);
    if(option==1)
      this.router.navigate(['admin'])  
  }

}
