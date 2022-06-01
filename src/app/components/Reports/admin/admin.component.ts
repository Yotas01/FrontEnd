import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CDIO } from 'src/app/model/CDIO/cdio';
import { Course } from 'src/app/model/course/course';
import { Outcome } from 'src/app/model/outcome/outcome';
import { CDIOService } from 'src/app/services/CRUD/CDIO/cdio.service';
import { CourseService } from 'src/app/services/CRUD/Course/course.service';
import { OutcomeService } from 'src/app/services/CRUD/Outcome/outcome.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  outcomes!: Outcome[];
  cdios!: CDIO[];
  courses!: Course[];
  selected!: string;
  semester!: string;
  id!: number;

  constructor(private outcomeService: OutcomeService, private cdioService: CDIOService,
    private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.outcomeService.getAll().subscribe({
      next: (response) => {
        if(response.body)
          this.outcomes = response.body
      },
      error: (e) => console.log(e)
    });
    this.cdioService.getAll().subscribe({
      next: (response) => {
        if(response.body)
          this.cdios = response.body;
      },
      error: (e) => console.log(e)
    });
    this.courseService.getAll().subscribe({
      next: (response) => {
        if(response.body)
          this.courses = response.body
      },
      error: (e) => console.log(e)
    });
  }

  onSubmit(){
    if(this.selected && this.id && this.semester)
      this.router.navigate(['/report',this.selected,this.id,this.semester]);
  }

}
