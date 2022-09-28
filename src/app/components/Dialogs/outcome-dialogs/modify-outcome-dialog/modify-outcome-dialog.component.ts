import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { CDIO } from 'src/app/model/CDIO/cdio';
import { CDIOService } from 'src/app/services/CRUD/CDIO/cdio.service';

export interface outcomeData{
  description:string,
  cdios:number[]
}

export interface forCheck{
  id:number;
  select:boolean;
  name:number;
}

@Component({
  selector: 'app-modify-outcome-dialog',
  templateUrl: './modify-outcome-dialog.component.html',
  styleUrls: ['./modify-outcome-dialog.component.css']
})
export class ModifyOutcomeDialogComponent implements OnInit {

  action!:string;
  local!:any;
  cdios!: CDIO[];
  options:Array<forCheck>=[];
  modified:outcomeData={description:'',cdios:[]}

  constructor(private cdioService: CDIOService,public dialogRef: MatDialogRef<ModifyOutcomeDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: outcomeData) {
      this.local={...data}
      if(this.local.action==1)
        this.action='Edit'
      else
        this.action='Delete'
    }

  ngOnInit(): void {
    this.cdioService.getAll().subscribe({
      next: (response) => {
        if(response.body){
          this.cdios = response.body
          for(let i = 0; i<this.cdios.length;i++){
            let t:forCheck = {id:0,select:false,name:0};
            t.id=i;
            t.name=this.cdios[i].number;
            if(this.local.cdios.includes(t.name))
              t.select=true;
            else
              t.select=false
            this.options.push(t);
          }
        }
      },
      error: (e) => console.log(e)
    });
  }

  onClick(): void{
    this.modified.description = this.local.description
    for(let i = 0; i < this.options.length; i++)
      if(this.options[i].select)
        this.modified.cdios.push(this.options[i].name)
    console.log(this.modified)
    this.dialogRef.close({event:this.action,desc:this.modified.description,data:this.modified.cdios,id:this.local.id})
  }

  onNoClick(): void {
    this.dialogRef.close({event:'cancel'});
  }

}
