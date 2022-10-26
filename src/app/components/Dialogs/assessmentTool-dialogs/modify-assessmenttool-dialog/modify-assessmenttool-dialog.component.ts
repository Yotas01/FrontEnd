import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NewAssessmenttoolDialogComponent } from '../new-assessmenttool-dialog/new-assessmenttool-dialog.component';

export interface assessData{
  description:string,
  value:number
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

  constructor(public dialogRef: MatDialogRef<ModifyAssessmenttoolDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:assessData, private dialog:MatDialog) {
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
    //let dialogRef = this.dialog.open()
  }

  createPI(){
    let dialogRef = this.dialog.open(NewAssessmenttoolDialogComponent, {
      width:'60%'
    })
    dialogRef.afterClosed().subscribe(result => {

    })
  }

}
