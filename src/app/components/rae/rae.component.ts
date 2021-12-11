import { Component, OnInit } from '@angular/core';
import { RAE } from 'src/model/RAE';
import { RAES } from 'src/mock/mock-RAE';
import { AssessmentTool } from 'src/model/AssessmentTool';
import { PerformanceIndicator } from 'src/model/PerformanceIndicator';

@Component({
  selector: 'app-rae',
  templateUrl: './rae.component.html',
  styleUrls: ['./rae.component.css']
})
export class RaeComponent implements OnInit {


  raes: RAE[] = RAES.map(data => new RAE(data.id,data.description,data.assessmentTools
    .map(data => new AssessmentTool(data.rae,data.id,data.description,data.value,data.totalStudents,data.performanceIndicators
      .map(data => new PerformanceIndicator(data.rae,data.assessmentTool,data.description,data.percentage,data.exemplary,data.competent,data.below))))));

  constructor() { }

  ngOnInit(): void {
  }

}
