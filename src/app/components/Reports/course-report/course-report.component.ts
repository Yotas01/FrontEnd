import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseReportDTO } from 'src/app/model/report/courseReportDTO/course-report-dto';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-course-report',
  templateUrl: './course-report.component.html',
  styleUrls: ['./course-report.component.css']
})
export class CourseReportComponent implements OnInit {

  displayedColumns: string[] = ['rae','assessmentTools','Exemplary','Competent','Below']
  displayedColumnsCDIO: string[] = ['cdio','Exemplary','Competent','Below']
  courseReport!: CourseReportDTO;
  id!: number;
  semester!: number;

  constructor(private router:Router, private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    this.id =  parseFloat(this.route.snapshot.paramMap.get('id') || "");
    this.semester =  parseInt(this.route.snapshot.paramMap.get('semester') || "");
    this.reportService.getCourseReport(this.id, this.semester).subscribe({
      next: (response) => {
        if(response.body)
          this.courseReport = response.body;
      },
      error: (e) => console.log(e)
    });
  }

  onClick(){
    this.router.navigate(['admin'])  
  }

}
