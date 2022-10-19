import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';

export interface cdioBloomData{
  cdio:number,
  bloom:number
}

@Component({
  selector: 'app-cdio-bloom-dialog',
  templateUrl: './cdio-bloom-dialog.component.html',
  styleUrls: ['./cdio-bloom-dialog.component.css']
})
export class CdioBloomDialogComponent implements OnInit {

  action!:string
  local!:any
  modified!:number

  constructor(public dialogRef:MatDialogRef<CdioBloomDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:cdioBloomData) { 
      this.local={...data}
      if(this.local.action==1)
        this.action = 'Edit'
      else
        this.action = 'Delete'
    }

  ngOnInit(): void {
  }

  onClick(): void{
    this.modified = this.local.bloom
    this.dialogRef.close({event:this.action,bloom:this.modified,cdio:this.local.cdio})
  }

  onNoClick(): void {
    this.dialogRef.close({event:'cancel'});
  }

}
