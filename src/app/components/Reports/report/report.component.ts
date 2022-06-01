import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/model/report/report';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  report!: Report;
  reportType!: string;
  id!: number;
  semester!: number;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportType = this.route.snapshot.paramMap.get('reportType') || "";
    this.id =  parseFloat(this.route.snapshot.paramMap.get('id') || "");
    this.semester =  parseInt(this.route.snapshot.paramMap.get('semester') || "");
    this.reportService.getReport(this.reportType, this.id, this.semester).subscribe({
      next: (response) => {
        if(response.body)
          this.report = response.body;
      },
      error: (e) => console.log(e)
    })
  }

}
