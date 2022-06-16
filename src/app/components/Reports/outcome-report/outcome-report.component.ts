import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OutcomeReportDTO } from 'src/app/model/report/OutcomeReportDTO/outcome-report-dto';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-outcome-report',
  templateUrl: './outcome-report.component.html',
  styleUrls: ['./outcome-report.component.css']
})
export class OutcomeReportComponent implements OnInit {

  outcomeReport!: OutcomeReportDTO;
  id!: number;
  semester!: number;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    this.id =  parseFloat(this.route.snapshot.paramMap.get('id') || "");
    this.semester =  parseInt(this.route.snapshot.paramMap.get('semester') || "");
    this.reportService.getOutcomeReport(this.id, this.semester).subscribe({
      next: (response) => {
        if(response.body)
          this.outcomeReport = response.body;
      },
      error: (e) => console.log(e)
    });
  }

}
