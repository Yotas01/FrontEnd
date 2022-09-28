import { CDIOService } from 'src/app/services/CRUD/CDIO/cdio.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CDIO } from 'src/app/model/CDIO/cdio';

export interface newData{
  description:string;
  number:number;
}

@Component({
  selector: 'app-new-cdio-dialog',
  templateUrl: './new-cdio-dialog.component.html',
  styleUrls: ['./new-cdio-dialog.component.css']
})
export class NewCdioDialogComponent implements OnInit {

  created:newData={description:'',number:0}
  cdios: CDIO[]=[];
  valid:boolean = true;

  constructor(public dialogRef:MatDialogRef<NewCdioDialogComponent>, private cdioService:CDIOService) { }

  ngOnInit(): void {
    this.cdioService.getAll().subscribe({
      next: (response) => {
        if(response.body)
          this.cdios = response.body
      },
      error: (e) => console.log(e)
    });
  }

  onClick(): void{
    console.log(this.created)
    this.dialogRef.close({desc:this.created.description,num:this.created.number})
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isValid(): void{
    let index = this.cdios.indexOf(this.cdios.find(cdio => cdio.number == this.created.number)!);
    console.log(index)
    if(index!=-1)
      this.valid = false
    console.log(this.valid)
  }
}
