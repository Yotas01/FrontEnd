import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  selectedOption!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.selectedOption !== undefined)
      this.router.navigate(['admin/management/'+this.selectedOption]);
  }

}
