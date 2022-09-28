import { ModifySectionDialogComponent } from './../../Dialogs/section-dialogs/modify-section-dialog/modify-section-dialog.component';
import { SectionService } from './../../../services/CRUD/Section/section.service';
import { Section } from './../../../model/section/section';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/CRUD/Course/course.service';
import { Course } from 'src/app/model/course/course';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-section-crud',
  templateUrl: './section-crud.component.html',
  styleUrls: ['./section-crud.component.css']
})
export class SectionCrudComponent implements OnInit {

  displayedColumns: string[] = ['id','number','professor','totalStudents','semester','action']
  courseNumber!:number;
  course!: Course; 
  sections!: Section[];
  newSection!:Section;

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(private router:Router, private route: ActivatedRoute, private courseService: CourseService, private sectionService:SectionService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.courseNumber = parseInt(this.route.snapshot.paramMap.get('courseNumber')!)
    this.courseService.get(this.courseNumber).subscribe({
      next: (response) => {
        if(response.body){
          this.course = response.body
          this.sectionService.getAllCourseSections(this.courseNumber,2110).subscribe({
            next: (serviceResponse) => {
              if(serviceResponse.body)
                this.sections = serviceResponse.body
            }
          })
        }
      },
      error: (e) => console.log(e)      
    })
  } 

  createSection(){} 

  openDialog(action:number,element:any){
    element.action = action
    let dialogRef = this.dialog.open(ModifySectionDialogComponent, {
      width:'80%',
      data:element
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '+result.num+result.prof+result.total)
      if(result.event == 'Edit'){
        let index = this.sections.indexOf(this.sections.find(section => section.number == element.number)!)
        this.sections[index].number = result.num
        this.sections[index].professor = result.prof
        this.sections[index].totalStudents = result.total
      }
      else{
        let index = this.sections.indexOf(this.sections.find(section => section.number == result.num)!)
        this.sections.splice(index,1)
        console.log(this.sections)
        this.table.renderRows()
      }
    })
  }

  onClick(){
    this.router.navigate(['admin/management'])
  }

}
