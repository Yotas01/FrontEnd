import { Component, Input, OnInit } from '@angular/core';
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
  @Input() raeNumber!: number;
  sectionAssessmentTools!: SectionAssessmentTool[];

  constructor() { }

  ngOnInit(): void {
    this.sectionAssessmentTools = this.sectionReview.sectionAssessmentTools.filter(at => at.raeId == this.rae.raeid);
    this.raeNumber++;
  }

}
