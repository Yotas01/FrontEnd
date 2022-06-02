import { Component, OnInit } from '@angular/core';
import { CRUDs } from 'src/app/common/CRUDs';
import { Outcome } from 'src/app/model/outcome/outcome';
import { OutcomeService } from 'src/app/services/CRUD/Outcome/outcome.service';

@Component({
  selector: 'app-outcome-crud',
  templateUrl: './outcome-crud.component.html',
  styleUrls: ['./outcome-crud.component.css']
})
export class OutcomeCRUDComponent implements OnInit {

  outcomes: Outcome[] = []
  managedOutcome!: Outcome;
  bool: boolean = false;

  constructor(private outcomeService: OutcomeService) { }

  ngOnInit(): void {
    this.outcomeService.getAll().subscribe({
      next: (response) => {
        if(response.body)
          this.outcomes = response.body;
      },
      error: (e) => console.log(e)
    })
  }

  createOutcome(){
    this.outcomes.push(new Outcome(0,"",[]));
  }

  updateOutcome(outcomeId: number){
    this.managedOutcome = this.outcomes.find(out => out.id = outcomeId)!;
  }

  deleteOutcome(outcomeId: number){
    let index = this.outcomes.indexOf(this.outcomes.find(out => out.id = outcomeId)!);
    this.outcomes.splice(index,1);
  }
}
