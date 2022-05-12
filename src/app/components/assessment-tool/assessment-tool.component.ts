import { Component, OnInit, Input } from '@angular/core';
import { AssessmentTool } from 'src/app/model/assessmentTool/assessment-tool';

@Component({
  selector: 'app-assessment-tool',
  templateUrl: './assessment-tool.component.html',
  styleUrls: ['./assessment-tool.component.css']
})
export class AssessmentToolComponent implements OnInit {

  @Input() assessmentTools: AssessmentTool[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
