import { ModifyOutcomeDialogComponent } from '../../Dialogs/outcome-dialogs/modify-outcome-dialog/modify-outcome-dialog.component';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Outcome } from 'src/app/model/outcome/outcome';
import { OutcomeService } from 'src/app/services/CRUD/Outcome/outcome.service';
import { NewOutcomeDialogComponent } from '../../Dialogs/outcome-dialogs/new-outcome-dialog/new-outcome-dialog.component';

@Component({
  selector: 'app-outcome-crud',
  templateUrl: './outcome-crud.component.html',
  styleUrls: ['./outcome-crud.component.css']
})
export class OutcomeCRUDComponent implements OnInit {

  displayedColumns: string[] = ['id','description','cdios','action']
  outcomes: Outcome[] = []
  managedOutcome!: Outcome;
  bool: boolean = false;
  newOutcome!:Outcome;

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(private outcomeService: OutcomeService, private dialog:MatDialog) { }

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
    this.newOutcome = {description:'',cdios:[],id:-1}
    let dialogRef = this.dialog.open(NewOutcomeDialogComponent, {
      width:'80%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '+result.data+result.desc);
      this.newOutcome.description = result.desc;
      this.newOutcome.cdios = result.data;
      this.newOutcome.id = this.outcomes.length+1;
      this.outcomes.push(this.newOutcome)
      console.log(this.newOutcome)
      this.table.renderRows();
    });
  }

  openDialog(action:number,element:any){
    element.action = action;
    let dialogRef = this.dialog.open(ModifyOutcomeDialogComponent, {
      width:'60%',
      data:element
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '+result.data+result.desc+result.event+' '+result.id);
      if(result.event=='Edit'){
        for(let i=0;i<this.outcomes.length;i++){
          if(this.outcomes[i].id==result.id){
            this.outcomes[i].cdios=result.data;
            this.outcomes[i].description=result.desc;
            break
          }
        }
      }
      else{
        console.log(this.outcomes)
        for(let i=0;i<this.outcomes.length;i++)
          if(this.outcomes[i].id==result.id){
            this.outcomes.splice(i,1)
          }
        console.log(this.outcomes)
        this.table.renderRows();
      }
    });
  }
}
