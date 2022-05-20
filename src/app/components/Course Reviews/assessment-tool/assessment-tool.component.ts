import { Component, OnInit, Input } from '@angular/core';
import { AssessmentTool } from 'src/app/model/assessmentTool/assessment-tool';
import { SectionAssessmentTool } from 'src/app/model/sectionReview/section-assessment-tool';

@Component({
  selector: 'app-assessment-tool',
  templateUrl: './assessment-tool.component.html',
  styleUrls: ['./assessment-tool.component.css']
})
export class AssessmentToolComponent implements OnInit {

  @Input() assessmentTool!: AssessmentTool;
  @Input() sectionAssessmentTool!: SectionAssessmentTool;

  constructor() { }

  ngOnInit(): void {
  }

}
