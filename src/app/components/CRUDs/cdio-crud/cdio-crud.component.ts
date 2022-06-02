import { Component, OnInit } from '@angular/core';
import { CDIO } from 'src/app/model/CDIO/cdio';
import { CDIOService } from 'src/app/services/CRUD/CDIO/cdio.service';

@Component({
  selector: 'app-cdio-crud',
  templateUrl: './cdio-crud.component.html',
  styleUrls: ['./cdio-crud.component.css']
})
export class CdioCRUDComponent implements OnInit {

  cdios!: CDIO[];

  constructor(private cdioService: CDIOService) { }

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
    this.cdios.push(new CDIO("nuevo",0,[],[],[]));
    console.log(this.cdios);
  }

  updateCDIO(cdioNumber: number){

  }

  deleteCDIO(cdioNumber: number){
    let index = this.cdios.indexOf(this.cdios.find(cdio => cdio.number == cdioNumber)!);
    this.cdios.splice(index,1);
  }

}
