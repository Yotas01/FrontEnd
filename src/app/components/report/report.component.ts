import { Component, Input, OnInit } from '@angular/core';
import { SearchedReport } from 'src/app/searchedReport';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input()
  searchedReport:SearchedReport = new SearchedReport('','','');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
      
  }
}
