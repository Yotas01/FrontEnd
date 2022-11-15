import { PerformanceIndicatorService } from './../../../../services/CRUD/PerformanceIndicator/performance-indicator.service';
import { PerformanceIndicator } from './../../../../model/performanceIndicator/performance-indicator';
import { ModifyPerformanceIndicatorDialogComponent } from './../../performanceIndicator-dialogs/modify-performance-indicator-dialog/modify-performance-indicator-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional, QueryList, ViewChildren } from '@angular/core';
import { NewAssessmenttoolDialogComponent } from '../new-assessmenttool-dialog/new-assessmenttool-dialog.component';
import { MatTable } from '@angular/material/table';

export interface assessData{
  description:string,
  value:number,
  performanceIndicators:PerformanceIndicator[],
  courseNumber:number
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
  newPI!:PerformanceIndicator

  @ViewChildren(MatTable) table!: QueryList<MatTable<any>>;

  constructor(public dialogRef: MatDialogRef<ModifyAssessmenttoolDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:assessData, private dialog:MatDialog,private piService:PerformanceIndicatorService) {
      this.local = {...data}
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
    element.courseNumber = this.local.courseNumber
    element.raeId = this.local.raeId
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
        this.piService.updatePI(this.local.courseNumber,this.local.raeId,this.local.assessmentToolId,result.id,result.desc,result.perc).subscribe({
          error: (e) => console.error(e)
        })
      }
      else if(result.event == 'Delete'){
        let index = this.data.performanceIndicators.indexOf(this.data.performanceIndicators.find( pi => pi.performanceIndicatorId == result.id)!)
        this.piService.deletePI(this.local.courseNumber,this.local.raeId,this.local.assessmentToolId,result.id).subscribe({
          error: (e) => console.error(e)
        })
        this.local.performanceIndicators.splice(index,1)
        this.table.last.renderRows()
      }
    })
  }

  createPI(){
    this.newPI = new PerformanceIndicator(-1,"",-1,this.local.assessmentToolId)
    let dialogRef = this.dialog.open(NewAssessmenttoolDialogComponent, {
      width:'60%'
    })
    dialogRef.afterClosed().subscribe(result => {
      this.newPI.description = result.desc
      this.newPI.percentage = result.val
      this.piService.createPI(this.local.courseNumber,this.local.raeId,this.local.assessmentToolId,result.desc,result.val).subscribe({
        next:(response) => {
          if(response.body){
            this.newPI.performanceIndicatorId = response.body.performanceIndicatorId
          }
        }
      })
      this.local.performanceIndicators.push(this.newPI)
      this.table.last.renderRows()
    })
  }

}
