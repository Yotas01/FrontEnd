import { AddCdioToCourseDialogComponent } from './../../Dialogs/cdio-dialogs/add-cdio-to-course-dialog/add-cdio-to-course-dialog.component';
import { CdioBloomDialogComponent } from './../../Dialogs/cdio-dialogs/cdio-bloom-dialog/cdio-bloom-dialog.component';
import { CourseDialogUnfinishedComponent } from './../../Dialogs/course-dialogs/course-dialog-unfinished/course-dialog-unfinished.component';
import { NewRaeDialogComponent } from './../../Dialogs/rae-dialogs/new-rae-dialog/new-rae-dialog.component';
import { MatTable } from '@angular/material/table';
import { ModifyRaeDialogComponent } from './../../Dialogs/rae-dialogs/modify-rae-dialog/modify-rae-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RAE } from './../../../model/rae/RAE';
import { RAEService } from './../../../services/CRUD/RAE/rae.service';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course/course';
import { CourseService } from 'src/app/services/CRUD/Course/course.service';
import { CourseHasCDIOService } from 'src/app/services/CRUD/Relations/Course-CDIO/course-has-cdio.service';

export interface cdioBloom{
  cdio:number,
  bloom:number
}

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.css']
})
export class CourseCRUDComponent implements OnInit {

  displayedColumns: string[] = ['CDIO','Bloom','action']
  displayedColumns2: string[] = ['id','description','action']
  courseNumber!: number;
  course!: Course; 
  cdiosBloom:cdioBloom[]=[]
  raes!:RAE[]
  newRae!:RAE
  newCdio!:cdioBloom

  @ViewChildren(MatTable) table!: QueryList<MatTable<any>>;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private relationService: CourseHasCDIOService, private raeService:RAEService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.courseNumber = parseInt(this.route.snapshot.paramMap.get('courseNumber')!);
    this.courseService.get(this.courseNumber).subscribe({
      next: (response) => {
        if(response.body){
          this.course = response.body;
          console.log(this.course.cdioList.forEach(cdio => this.getBloomValue(cdio)));
        }
      },
      error: (e) => console.log(e)
    })
    this.raeService.getRAESFromCourse(this.courseNumber).subscribe({
      next: (response) => {
        if(response.body){
          this.raes = response.body
        }
      },
      error: (e) => console.log(e)
    })
  }

  getBloomValue(cdioNumber: number){
    this.relationService.getCourseHasCDIO(this.courseNumber,cdioNumber).subscribe({
      next: (response) => {
        if(response.body){
          let courseHasCdio = response.body;
          let temp:cdioBloom = {cdio:0,bloom:0}
          temp.cdio = courseHasCdio.cdio
          temp.bloom = courseHasCdio.value
          console.log(this.cdiosBloom)
          this.cdiosBloom.push(temp)
        }
      }
    })
  }

  openDialogCDIO(action:number,element?:any){
    element.action = action
    console.log(element)
    let dialogRef = this.dialog.open(CdioBloomDialogComponent,{
      width:'80%',
      data:element
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result.event=='Edit'){
        let index = this.cdiosBloom.indexOf(this.cdiosBloom.find(cdio => cdio.cdio == result.cdio)!)
        this.cdiosBloom[index].bloom = result.bloom
      }
      else if(result.event=='Delete'){
        let index = this.cdiosBloom.indexOf(this.cdiosBloom.find(cdio => cdio.cdio == result.cdio)!)
        this.cdiosBloom.splice(index,1)
        this.table.first.renderRows()
      }
    })
  }

  openDialogRAE(action:number,element:any){
    element.action = action
    let dialogRef = this.dialog.open(ModifyRaeDialogComponent,{
      width:'80%',
      data:element
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ')
      if(result.event=='Edit'){
        let index = this.raes.indexOf(this.raes.find(rae => rae.raeId == result.id)!)
        this.raes[index].description = result.desc
      }
      else if(result.event=="Delete"){
        let index = this.raes.indexOf(this.raes.find(rae => rae.raeId == result.id)!)
        this.raes.splice(index,1)
        console.log(this.raes)
        this.table.last.renderRows()
      }
    })
  }

  addCDIO(){
    this.newCdio={cdio:0,bloom:0}
    let dialogRef = this.dialog.open(AddCdioToCourseDialogComponent, {
      width:'80%',
      data:this.cdiosBloom
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'ok'){
        this.newCdio.cdio = result.cdioNumber
        this.newCdio.bloom = result.newBloom
        this.cdiosBloom.push(this.newCdio)
        this.table.first.renderRows()
      }
    })
  }

  createRAE(){
    this.newRae = new RAE(-1,"",this.course.CourseId,[],[])
    let dialogRef = this.dialog.open(NewRaeDialogComponent, {
      width:'80%'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '+result.data+result.desc)
      this.newRae.description = result.desc
      this.newRae.cdioList = result.data
      this.raes.push(this.newRae)
      this.table.last.renderRows()
    })
  }

}
