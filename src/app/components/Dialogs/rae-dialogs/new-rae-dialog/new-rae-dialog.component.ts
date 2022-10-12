import { CDIOService } from './../../../../services/CRUD/CDIO/cdio.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AssessmentTool } from './../../../../model/assessmentTool/assessment-tool';
import { Component, OnInit } from '@angular/core';
import { CDIO } from 'src/app/model/CDIO/cdio';

export interface newData{
  description:string,
  cdios:number[],
  assess:AssessmentTool[]
}

export interface forCheck{
  id:number;
  select:boolean;
  name:number;
}

@Component({
  selector: 'app-new-rae-dialog',
  templateUrl: './new-rae-dialog.component.html',
  styleUrls: ['./new-rae-dialog.component.css']
})
export class NewRaeDialogComponent implements OnInit {

  created:newData={description:'',cdios:[],assess:[]}
  listOfCdios:CDIO[]=[]
  options:Array<forCheck>=[];

  constructor(public dialogRef:MatDialogRef<NewRaeDialogComponent>, private cdioService:CDIOService) { }

  ngOnInit(): void {
    this.cdioService.getAll().subscribe({
      next: (response) => {
        if(response.body)
          this.listOfCdios = response.body
          for(let i = 0; i<this.listOfCdios.length;i++){
            let t:forCheck = {id:0,select:false,name:0};
            t.id=i;
            t.select=false;
            t.name=this.listOfCdios[i].number;
            this.options.push(t);
          }
      },
      error: (e) => console.log(e)
    })
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
