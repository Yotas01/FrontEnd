import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OutcomeSummary } from 'src/app/model/report/OutcomeSummary/outcome-summary';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-outcome-report',
  templateUrl: './outcome-report.component.html',
  styleUrls: ['./outcome-report.component.css']
})
export class OutcomeReportComponent implements OnInit {

  displayedColumns: string[] = ['Exemplary','Competent','Below']
  outcomeSummary!: OutcomeSummary;
  outcomeUtil:OutcomeSummary[] = [];
  id!: number;
  semester!: number;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    this.id =  parseFloat(this.route.snapshot.paramMap.get('id') || "");
    this.semester =  parseInt(this.route.snapshot.paramMap.get('semester') || "");
    this.reportService.getOutcomeReport(this.id, this.semester).subscribe({
      next: (response) => {
        if(response.body)
          this.outcomeSummary = response.body;
          this.outcomeUtil.push(this.outcomeSummary)
      },
      error: (e) => console.log(e)
    });
  }

}
