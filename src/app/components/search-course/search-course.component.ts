import { Component, Input, OnInit } from '@angular/core';
import { SearchedCourse } from 'src/app/searchedCourse';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  @Input()
  searchedCourse:SearchedCourse = new SearchedCourse('','','');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
      
  }
}
