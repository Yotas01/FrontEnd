import { ModifyCdioDialogComponent } from './../../Dialogs/cdio-dialogs/modify-cdio-dialog/modify-cdio-dialog.component';
import { NewCdioDialogComponent } from './../../Dialogs/cdio-dialogs/new-cdio-dialog/new-cdio-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CDIO } from 'src/app/model/CDIO/cdio';
import { CDIOService } from 'src/app/services/CRUD/CDIO/cdio.service';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cdio-crud',
  templateUrl: './cdio-crud.component.html',
  styleUrls: ['./cdio-crud.component.css']
})
export class CdioCRUDComponent implements OnInit {

  displayedColumns: string[] = ['number','description','outcomes','action']
  cdios!: CDIO[];
  newCdio!:CDIO;

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(private cdioService: CDIOService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.cdioService.getAll().subscribe({
      next: (response) => {
        if(response.body)
          this.cdios = response.body
      },
      error: (e) => console.log(e)
    });
  }

  createCDIO(){
    this.newCdio = new CDIO("",0,[],[],[])
    let dialogRef = this.dialog.open(NewCdioDialogComponent, {
      width:'80%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '+result.desc+result.num)
      this.newCdio.description = result.desc;
      this.newCdio.number = result.num;
      this.cdios.push(this.newCdio)
      this.cdioService.createCDIO(this.newCdio).subscribe({
        error: (e) => console.error(e)
      })
      console.log(this.newCdio)
      this.table.renderRows();
    })
    console.log(this.cdios);
  }

  openDialog(action:number,element:any){
    element.action = action;
    let dialogRef = this.dialog.open(ModifyCdioDialogComponent, {
      width:'80%',
      data:element
    }); 
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '+result.event+result.desc+result.num)
      if(result.event=='Edit'){
        let index = this.cdios.indexOf(this.cdios.find(cdio => cdio.number == element.number)!);
        this.cdios[index].description = result.desc;
        this.cdios[index].number = result.num;
        this.cdioService.updateCDIO(this.cdios[index], this.cdios[index].number).subscribe({
          error: (e) => console.error(e)
        })
      }
      else if(result.event=="Delete"){
        let index = this.cdios.indexOf(this.cdios.find(cdio => cdio.number == result.num)!);
        this.cdioService.deleteCDIO(this.cdios[index].number).subscribe({
          error: (e) => console.error(e)
        });
        this.cdios.splice(index,1)
        console.log(this.cdios)
        this.table.renderRows()
      }
    })
  }

}
