import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AssessmentTool } from 'src/app/model/assessmentTool/assessment-tool';
import { RAE } from 'src/app/model/rae/RAE';

@Component({
  selector: 'app-rae',
  templateUrl: './rae.component.html',
  styleUrls: ['./rae.component.css']
})
export class RaeComponent implements OnInit {

  @Input() raes: RAE[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
