import { Component, OnInit } from '@angular/core';
import { COURSE } from 'src/mock/mock-course';
import { Course } from 'src/model/Course';
import { Subject } from 'src/model/Subject';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Subject = COURSE;

  constructor() { }

  ngOnInit(): void {
  }

}
