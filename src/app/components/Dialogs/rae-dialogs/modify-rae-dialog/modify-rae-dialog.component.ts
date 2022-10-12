import { NewAssessmenttoolDialogComponent } from './../../assessmentTool-dialogs/new-assessmenttool-dialog/new-assessmenttool-dialog.component';
import { CourseDialogUnfinishedComponent } from './../../course-dialogs/course-dialog-unfinished/course-dialog-unfinished.component';
import { ModifyAssessmenttoolDialogComponent } from './../../assessmentTool-dialogs/modify-assessmenttool-dialog/modify-assessmenttool-dialog.component';
import { AssessmentTool } from './../../../../model/assessmentTool/assessment-tool';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

export interface raeData{
  raeId:number,
  description:string,
  assessmentTools:AssessmentTool[]
}

@Component({
  selector: 'app-modify-rae-dialog',
  templateUrl: './modify-rae-dialog.component.html',
  styleUrls: ['./modify-rae-dialog.component.css']
})
export class ModifyRaeDialogComponent implements OnInit {

  displayedColumns:string[]=['id','description','value','action']
  action!:string
  local!:any
  newAssess!:AssessmentTool

  @ViewChildren(MatTable) table!: QueryList<MatTable<any>>;

  constructor(public dialogRef:MatDialogRef<ModifyRaeDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: raeData, private dialog:MatDialog) {
      this.local = {...data}
      if(this.local.action==1)
        this.action = 'Edit'
      else
        this.action = 'Delete'
      console.log(this.local.assessmentTools)
    }

  ngOnInit(): void {
  }

  onClick(): void{
    this.dialogRef.close({event:this.action,desc:this.local.description,id:this.local.raeId})
  }

  onNoClick(): void {
    this.dialogRef.close({event:'cancel'});
  }

  createAssess(){

  }

  openDialog(action:number,element:any){
    element.action = action
    let dialogRef = this.dialog.open(ModifyAssessmenttoolDialogComponent, {
      width:'70%',
      data:element
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '+result.event)
      if(result.event=='Edit'){
        let index = this.data.assessmentTools.indexOf(this.data.assessmentTools.find( assess => assess.assessmentToolId == element.assessmentToolId)!)
        this.data.assessmentTools[index].description = result.desc;
        this.data.assessmentTools[index].value = result.val;
      }
      else if(result.event=="Delete"){
        let index = this.data.assessmentTools.indexOf(this.data.assessmentTools.find( assess => assess.assessmentToolId == element.assessmentToolId)!)
        this.data.assessmentTools.splice(index,1)
        this.table.last.renderRows()
      }
    })
  }
}