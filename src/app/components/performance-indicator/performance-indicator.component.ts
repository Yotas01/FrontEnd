import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { PerformanceIndicator } from 'src/model/PerformanceIndicator';
import { ASSESSMENT_TOOLS } from 'src/mock/mock-AT';
import { MensajePI } from 'src/app/model/mensajePI/mensajePI';

@Component({
  selector: 'app-performance-indicator',
  templateUrl: './performance-indicator.component.html',
  styleUrls: ['./performance-indicator.component.css']
})
export class PerformanceIndicatorComponent implements OnInit {

  @Input() rae: number = 0;
  @Input() at: number = 0;
  performanceIndicators: PerformanceIndicator[] = [];
  @Output() coso = new EventEmitter();
  
  @Input() mensaje: MensajePI = new MensajePI(0,0,0,0);

  constructor() {}

  ngOnInit(): void {
    if(this.at != 0 && this.rae != 0){
      const temp: PerformanceIndicator[] | undefined = ASSESSMENT_TOOLS.
      find(data => data.rae == this.rae && data.id == this.at)?.performanceIndicators
      .map(data => new PerformanceIndicator(data.rae,data.assessmentTool,data.description,data.percentage));
      if(temp !== undefined){
        this.performanceIndicators = temp as PerformanceIndicator[];
      }
    }
  }

  addNewItem(){
    this.coso.emit( this.mensaje );
  } 
}
