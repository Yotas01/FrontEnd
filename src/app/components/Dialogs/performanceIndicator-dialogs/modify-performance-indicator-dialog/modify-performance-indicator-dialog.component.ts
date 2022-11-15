import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';

export interface piData{
  description:string,
  percentage:number,
  performanceIndicatorId:number
}

@Component({
  selector: 'app-modify-performance-indicator-dialog',
  templateUrl: './modify-performance-indicator-dialog.component.html',
  styleUrls: ['./modify-performance-indicator-dialog.component.css']
})
export class ModifyPerformanceIndicatorDialogComponent implements OnInit {

  action!:string
  local!:any

  constructor(public dialogRef:MatDialogRef<ModifyPerformanceIndicatorDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:piData) {
      this.local = {...data}
      if(this.local.action==1)
        this.action = 'Edit'
      else
        this.action = 'Delete'
    }

  ngOnInit(): void {
  }

  onClick(): void{
    this.dialogRef.close({event:this.action,desc:this.local.description,perc:this.local.percentage,id:this.local.performanceIndicatorId})
  }

  onNoClick(): void {
    this.dialogRef.close({event:'cancel'});
  }

}
