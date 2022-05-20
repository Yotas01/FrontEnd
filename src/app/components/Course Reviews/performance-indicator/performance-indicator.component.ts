import { Component, Input, OnInit } from '@angular/core';
import { PerformanceIndicator } from 'src/app/model/performanceIndicator/performance-indicator';
import { SectionPerformanceIndicator } from 'src/app/model/sectionReview/section-performance-indicator';

@Component({
  selector: 'app-performance-indicator',
  templateUrl: './performance-indicator.component.html',
  styleUrls: ['./performance-indicator.component.css']
})
export class PerformanceIndicatorComponent implements OnInit {

  @Input() performanceIndicator!: PerformanceIndicator;
  @Input() sectionPI!: SectionPerformanceIndicator;

  constructor() {}

  ngOnInit(): void {
  }

}
