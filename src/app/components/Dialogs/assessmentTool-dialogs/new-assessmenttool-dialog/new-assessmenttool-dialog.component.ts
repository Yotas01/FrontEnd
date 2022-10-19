import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

export interface newData{
  description:string;
  value:number
}

@Component({
  selector: 'app-new-assessmenttool-dialog',
  templateUrl: './new-assessmenttool-dialog.component.html',
  styleUrls: ['./new-assessmenttool-dialog.component.css']
})
export class NewAssessmenttoolDialogComponent implements OnInit {

  created:newData={description:'',value:0}

  constructor(public dialogRef:MatDialogRef<NewAssessmenttoolDialogComponent>) { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.dialogRef.close({desc:this.created.description,val:this.created.value})
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
