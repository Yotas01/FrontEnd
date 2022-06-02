import { Component, Input, OnInit } from '@angular/core';
import { RAE } from 'src/app/model/rae/RAE';
import { RAEService } from 'src/app/services/CRUD/RAE/rae.service';

@Component({
  selector: 'app-rae-crud',
  templateUrl: './rae-crud.component.html',
  styleUrls: ['./rae-crud.component.css']
})
export class RaeCRUDComponent implements OnInit {

  @Input() raeId!: number;
  @Input() courseNumber!: number;
  rae!: RAE;

  constructor(private raeService: RAEService) { }

  ngOnInit(): void {
    this.raeService.getRAEFromCourse(this.courseNumber,this.raeId).subscribe({
      next: (response) => {
        if(response.body)
          this.rae = response.body;
      },
      error: (e) => console.log(e)
    })
  }

}
