import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CDIOReportDTO } from 'src/app/model/report/cdioReportDTO/cdioreport-dto';
import { CDIOSummary } from 'src/app/model/report/cdioSummary/cdio-summary';
import { CDIOSummaryForCourse } from 'src/app/model/report/CDIOSummaryForCourse/cdiosummary-for-course';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-cdio-report',
  templateUrl: './cdio-report.component.html',
  styleUrls: ['./cdio-report.component.css']
})
export class CdioReportComponent implements OnInit {

  displayedColumnsSummary: string[] = ['Exemplary','Competent','Below'];
  displayedColumnsCourses: string[] = ['courseId','exemplary','competent','below'];
  cdioReport!: CDIOReportDTO;
  cdioSummaryData: CDIOSummary[] = [];
  cdioCourseData: CDIOSummaryForCourse[] = [];
  id!: number;
  semester!: number;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    this.id =  parseFloat(this.route.snapshot.paramMap.get('id') || "");
    this.semester =  parseInt(this.route.snapshot.paramMap.get('semester') || "");
    this.reportService.getCDIOReport(this.id,this.semester).subscribe({
      next: (response) => {
        if(response.body)
          this.cdioReport = response.body;
          this.cdioSummaryData.push(this.cdioReport.cdioSummary);
          this.cdioCourseData = this.cdioReport.cdioSummaryForCourseList;
      },
      error: (e) => console.log(e)
    });
  }

  getCumulative(option:number):number{
    let cumulative = 0
    if(option == 1)
      cumulative = this.cdioSummaryData[0].exemplary
    else if(option == 2)
      cumulative = this.cdioSummaryData[0].exemplary+this.cdioSummaryData[0].competent
    else(option == 3)
      cumulative = this.cdioSummaryData[0].exemplary+this.cdioSummaryData[0].competent+this.cdioSummaryData[0].below
    return cumulative
  }

}
