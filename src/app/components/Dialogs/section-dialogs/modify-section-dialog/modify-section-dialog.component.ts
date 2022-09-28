import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';

export interface sectionData{
  number:number,
  professor:string,
  totalStudents:number
}

@Component({
  selector: 'app-modify-section-dialog',
  templateUrl: './modify-section-dialog.component.html',
  styleUrls: ['./modify-section-dialog.component.css']
})
export class ModifySectionDialogComponent implements OnInit {

  action!:string;
  local!:any;

  constructor(public dialogRef: MatDialogRef<ModifySectionDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:sectionData) {
      this.local = {...data}
      if(this.local.action==1)
        this.action = 'Edit'
      else
        this.action = 'Delete'
    }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log(this.local.number+" "+this.local.professor+" "+this.local.totalStudents)
    this.dialogRef.close({event:this.action,num:this.local.number,prof:this.local.professor,total:this.local.totalStudents})
  }

  onNoClick(): void {
    this.dialogRef.close({event:'cancel'});
  }

}
