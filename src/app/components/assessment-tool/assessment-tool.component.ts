import { Component, OnInit, Input } from '@angular/core';
import { AssessmentTool } from 'src/model/AssessmentTool';
import { RAES } from 'src/mock/mock-RAE';

@Component({
  selector: 'app-assessment-tool',
  templateUrl: './assessment-tool.component.html',
  styleUrls: ['./assessment-tool.component.css']
})
export class AssessmentToolComponent implements OnInit {

  @Input() rae: number = 0;
  assessmentTools: AssessmentTool[] = [];

  constructor() { }

  ngOnInit(): void {
    if(this.rae != 0){
      const temp: AssessmentTool[] | undefined = RAES.find(rae => rae.id == this.rae)?.assessmentTools.map(data => new AssessmentTool(data.rae,data.id,data.description,data.value,data.totalStudents,data.performanceIndicators));
      if(temp !== undefined){
        this.assessmentTools = temp as AssessmentTool[];
      }
    }
  }

  onSubmit(){
      
  }

}
