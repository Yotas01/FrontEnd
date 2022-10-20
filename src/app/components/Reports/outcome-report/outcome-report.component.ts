import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CDIOSummary } from 'src/app/model/report/cdioSummary/cdio-summary';
import { OutcomeReportDTO } from 'src/app/model/report/OutcomeReportDTO/outcome-report-dto';
import { OutcomeSummary } from 'src/app/model/report/OutcomeSummary/outcome-summary';
import { SemesterReport } from 'src/app/model/SemesterReport/semester-report';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-outcome-report',
  templateUrl: './outcome-report.component.html',
  styleUrls: ['./outcome-report.component.css']
})
export class OutcomeReportComponent implements OnInit {

  displayedColumnsSummary: string[] = ['Exemplary','Competent','Below']
  displayedColumnsCDIOSummary: string[] = ['cdioNumber','exemplary','competent','below']
  outcomeReport!: OutcomeReportDTO;
  outcomeSummaryData:OutcomeSummary[] = [];
  outcomeCDIOData: CDIOSummary[] =[];
  id!: number;
  semester!: number;
  semesterReport!: SemesterReport;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    this.id =  parseFloat(this.route.snapshot.paramMap.get('id') || "");
    this.semester =  parseInt(this.route.snapshot.paramMap.get('semester') || "");
    this.reportService.getOutcomeReport(this.id, this.semester).subscribe({
      next: (response) => {
        if(response.body){
          this.outcomeReport = response.body;
          this.outcomeSummaryData.push(this.outcomeReport.outcomeSummary);
          this.outcomeCDIOData = this.outcomeReport.cdioSummaries;
        }
      },
      error: (e) => console.log(e)
    });
    this.reportService.getSemesterReport(this.semester).subscribe({
      next: (respose) => {
        if(respose.body){
          this.semesterReport = respose.body;
        }
      }
    });
  }

  saveSemesterReport(): void{
    console.log(this.semesterReport);
    this.reportService.saveSemesterReport(this.semesterReport).subscribe({
      next: (respone) => {
        if(respone.status == 200){
          console.log("Se guardó correctamente");
        }
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

}
