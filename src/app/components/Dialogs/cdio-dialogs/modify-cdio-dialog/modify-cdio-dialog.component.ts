import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';

export interface cdioData{
  description:string,
  number:number
}

@Component({
  selector: 'app-modify-cdio-dialog',
  templateUrl: './modify-cdio-dialog.component.html',
  styleUrls: ['./modify-cdio-dialog.component.css']
})
export class ModifyCdioDialogComponent implements OnInit {

  action!:string;
  local!:any;

  constructor(public dialogRef: MatDialogRef<ModifyCdioDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: cdioData) {
      this.local = {...data}
      if(this.local.action==1)
        this.action = 'Edit'
      else
        this.action = 'Delete'
    }

  ngOnInit(): void {
  }

  onClick(): void{
    this.dialogRef.close({event:this.action,desc:this.local.description,num:this.local.number})
  }

  onNoClick(): void {
    this.dialogRef.close({event:'cancel'});
  }

}
