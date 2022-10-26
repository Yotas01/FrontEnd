import { CDIOService } from 'src/app/services/CRUD/CDIO/cdio.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { CDIO } from 'src/app/model/CDIO/cdio';


export interface cdiosUsed{
  cdio:number,
  bloom:number
}

@Component({
  selector: 'app-add-cdio-to-course-dialog',
  templateUrl: './add-cdio-to-course-dialog.component.html',
  styleUrls: ['./add-cdio-to-course-dialog.component.css']
})
export class AddCdioToCourseDialogComponent implements OnInit {

  bloom!:number
  cdios!:CDIO[]
  listOfCdios!:CDIO[]
  local!:any[]
  options:number[]=[]
  descs:string[]=[]
  newCdio!:number

  constructor(private cdioService:CDIOService,public dialogRef:MatDialogRef<AddCdioToCourseDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:cdiosUsed[]) {
      this.local = {...data}
    }

  ngOnInit(): void {
    let numbers:number[]=[]
    for(let i = 0; i < this.data.length;i++)
      numbers.push(this.local[i].cdio)
    this.cdioService.getAll().subscribe({
      next: (response) => {
        if(response.body){
          this.cdios = response.body
          for(let i = 0; i<this.cdios.length;i++){
            if(!numbers.includes(this.cdios[i].number)){
              this.options.push(this.cdios[i].number)
              this.descs.push(this.cdios[i].description)
            }
          }
        }
      },
      error: (e) => console.log(e)
    });
  }

  onClick(): void{
    this.dialogRef.close({cdioNumber:this.newCdio,newBloom:this.bloom,event:'ok'})
  }

  onNoClick(): void {
    this.dialogRef.close({event:'cancel'});
  }

}
