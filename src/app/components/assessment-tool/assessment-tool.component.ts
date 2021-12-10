import { Component, OnInit, Input } from '@angular/core';
import { AssessmentTool } from 'src/model/AssessmentTool';
import * as AT from 'src/mock/mock-AT';
import { PerformanceIndicator } from 'src/model/PerformanceIndicator';

@Component({
  selector: 'app-assessment-tool',
  templateUrl: './assessment-tool.component.html',
  styleUrls: ['./assessment-tool.component.css']
})
export class AssessmentToolComponent implements OnInit {

  @Input()assessmentTool: AssessmentTool[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
