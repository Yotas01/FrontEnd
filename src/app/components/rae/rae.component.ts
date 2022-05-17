import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AssessmentTool } from 'src/app/model/assessmentTool/assessment-tool';
import { RAE } from 'src/app/model/rae/RAE';
import { SectionAssessmentTool } from 'src/app/model/sectionReview/section-assessment-tool';
import { SectionReview } from 'src/app/model/sectionReview/section-review';

@Component({
  selector: 'app-rae',
  templateUrl: './rae.component.html',
  styleUrls: ['./rae.component.css']
})
export class RaeComponent implements OnInit {

  @Input() rae!: RAE;
  @Input() sectionReview!: SectionReview;
  sectionAssessmentTools!: SectionAssessmentTool[];

  constructor() { }

  ngOnInit(): void {
    this.sectionAssessmentTools = 
    this.sectionReview.sectionAssessmentTools
    .filter(at => at.raeId == this.rae.raeid);
  }

}
