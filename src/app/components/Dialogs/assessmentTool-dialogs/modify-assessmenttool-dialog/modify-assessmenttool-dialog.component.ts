import { PerformanceIndicator } from './../../../../model/performanceIndicator/performance-indicator';
import { ModifyPerformanceIndicatorDialogComponent } from './../../performanceIndicator-dialogs/modify-performance-indicator-dialog/modify-performance-indicator-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional, QueryList, ViewChildren } from '@angular/core';
import { NewAssessmenttoolDialogComponent } from '../new-assessmenttool-dialog/new-assessmenttool-dialog.component';
import { MatTable } from '@angular/material/table';

export interface assessData{
  description:string,
  value:number,
  performanceIndicators:PerformanceIndicator[]
}

@Component({
  selector: 'app-modify-assessmenttool-dialog',
  templateUrl: './modify-assessmenttool-dialog.component.html',
  styleUrls: ['./modify-assessmenttool-dialog.component.css']
})
export class ModifyAssessmenttoolDialogComponent implements OnInit {

  displayedColumns:string[]=['id','description','percentage','action']
  action!:string
  local!:any

  @ViewChildren(MatTable) table!: QueryList<MatTable<any>>;

  constructor(public dialogRef: MatDialogRef<ModifyAssessmenttoolDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:assessData, private dialog:MatDialog) {
      this.local = {...data}
      console.log(this.local)
      if(this.local.action==1)
        this.action = 'Edit'
      else
        this.action = 'Delete'
    }

  ngOnInit(): void {
  }

  onClick(){
    this.dialogRef.close({event:this.action,desc:this.local.description,val:this.local.value})
  }

  onNoClick(){
    this.dialogRef.close({event:'cancel'});
  }

  openDialog(action:number,element:any){
    element.action = action
    console.log(this.local)
    let dialogRef = this.dialog.open(ModifyPerformanceIndicatorDialogComponent,{
      width:'60%',
      data:element
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '+result.event)
      if(result.event == 'Edit'){
        let index = this.data.performanceIndicators.indexOf(this.data.performanceIndicators.find( pi => pi.performanceIndicatorId == result.id)!)
        this.local.performanceIndicators[index].description = result.desc 
        this.local.performanceIndicators[index].percentage = result.perc
      }
      else if(result.event == 'Delete'){
        let index = this.data.performanceIndicators.indexOf(this.data.performanceIndicators.find( pi => pi.performanceIndicatorId == result.id)!)
        this.local.performanceIndicators.splice(index,1)
        this.table.last.renderRows()
      }
    })
  }

  createPI(){
    let dialogRef = this.dialog.open(NewAssessmenttoolDialogComponent, {
      width:'60%'
    })
    dialogRef.afterClosed().subscribe(result => {

    })
  }

}
