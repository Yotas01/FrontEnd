import { BoundDirectivePropertyAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseReportDTO } from 'src/app/model/report/courseReportDTO/course-report-dto';
import { Section } from 'src/app/model/section/section';
import { SectionService } from 'src/app/services/CRUD/Section/section.service';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-course-report',
  templateUrl: './course-report.component.html',
  styleUrls: ['./course-report.component.css']
})
export class CourseReportComponent implements OnInit {

  courseReport!: CourseReportDTO;
  id!: number;
  semester!: number;
  sections!: Section[];

  constructor(private route: ActivatedRoute, private reportService: ReportService, private sectionService: SectionService) { }

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
    this.sectionService.getAllCourseSections(this.id, this.semester).subscribe({
      next: (response) =>{
        if(response.body)
          this.sections = response.body;
      },
      error: (e) => console.log(e)
    });
  }

}
