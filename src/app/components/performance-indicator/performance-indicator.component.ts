import { Component, OnInit } from '@angular/core';
import { PerformanceIndicator } from 'src/model/PerformanceIndicator';
import * as PI from 'src/mock/mock-PI';
@Component({
  selector: 'app-performance-indicator',
  templateUrl: './performance-indicator.component.html',
  styleUrls: ['./performance-indicator.component.css']
})
export class PerformanceIndicatorComponent implements OnInit {

  //performanceIndicator: PerformanceIndicator[] = PI.map(data => new PerformanceIndicator(data.description,data.percentage,data.exemplary,data.competent,data.below));

  constructor() {}

  ngOnInit(): void {
  }

}
