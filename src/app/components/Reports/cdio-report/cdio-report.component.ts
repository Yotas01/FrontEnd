import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CDIOSummary } from 'src/app/model/report/cdioSummary/cdio-summary';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-cdio-report',
  templateUrl: './cdio-report.component.html',
  styleUrls: ['./cdio-report.component.css']
})
export class CdioReportComponent implements OnInit {

  displayedColumns: string[] = ['Exemplary','Competent','Below']
  cdioSummary!: CDIOSummary;
  cdioUtil:CDIOSummary[] = []
  id!: number;
  semester!: number;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    this.id =  parseFloat(this.route.snapshot.paramMap.get('id') || "");
    this.semester =  parseInt(this.route.snapshot.paramMap.get('semester') || "");
    this.reportService.getCDIOReport(this.id,this.semester).subscribe({
      next: (response) => {
        if(response.body)
          this.cdioSummary = response.body;
          this.cdioUtil.push(this.cdioSummary)
      },
      error: (e) => console.log(e)
    });
  }

}
