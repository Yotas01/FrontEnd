import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CDIOReportDTO } from 'src/app/model/report/cdioReportDTO/cdioreport-dto';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-cdio-report',
  templateUrl: './cdio-report.component.html',
  styleUrls: ['./cdio-report.component.css']
})
export class CdioReportComponent implements OnInit {

  cdioReport!: CDIOReportDTO;
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
      },
      error: (e) => console.log(e)
    });
  }

}
