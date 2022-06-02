import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course/course';

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.css']
})
export class CourseCRUDComponent implements OnInit {

  courses!: Course[]

  constructor() { }

  ngOnInit(): void {
  }

}
