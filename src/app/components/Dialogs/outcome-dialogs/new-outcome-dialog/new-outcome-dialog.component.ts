import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CDIO } from 'src/app/model/CDIO/cdio';
import { CDIOService } from 'src/app/services/CRUD/CDIO/cdio.service';

export interface newData{
  description:string;
  cdios:number[];
}

export interface forCheck{
  id:number;
  select:boolean;
  name:number;
  desc:string
}

@Component({
  selector: 'app-new-outcome-dialog',
  templateUrl: './new-outcome-dialog.component.html',
  styleUrls: ['./new-outcome-dialog.component.css']
})
export class NewOutcomeDialogComponent implements OnInit {

  created:newData={description:'',cdios:[]};
  listOfCdios!:CDIO[];
  options:Array<forCheck>=[];

  constructor(public dialogRef:MatDialogRef<NewOutcomeDialogComponent>,private cdioService: CDIOService) { }

  ngOnInit(): void {
    this.cdioService.getAll().subscribe({
      next: (response) => {
        if(response.body){
          this.listOfCdios = response.body
          for(let i = 0; i<this.listOfCdios.length;i++){
            let t:forCheck = {id:0,select:false,name:0,desc:""};
            t.id=i;
            t.select=false;
            t.name=this.listOfCdios[i].number;
            t.desc=this.listOfCdios[i].description
            this.options.push(t);
          }
        }
      },
      error: (e) => console.log(e)
    });
  }

  onClick(): void{
    for(let i = 0; i < this.options.length; i++)
      if(this.options[i].select)
        this.created.cdios.push(this.options[i].name)
    console.log(this.created)
    this.dialogRef.close({desc:this.created.description,data:this.created.cdios})
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
