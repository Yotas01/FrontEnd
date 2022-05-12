import { Component, OnInit, Input } from '@angular/core';
import { AssessmentTool } from 'src/app/model/assessmentTool/assessment-tool';
import { SectionReview } from 'src/app/model/sectionReview/section-review';

@Component({
  selector: 'app-assessment-tool',
  templateUrl: './assessment-tool.component.html',
  styleUrls: ['./assessment-tool.component.css']
})
export class AssessmentToolComponent implements OnInit {

  @Input() assessmentTools: AssessmentTool[] = [];
  @Input() sectionReview!: SectionReview;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
