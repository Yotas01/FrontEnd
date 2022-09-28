import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCourseComponent } from './components/search-course/search-course.component'
import { AdminComponent } from './components/Reports/admin/admin.component';
import { CourseReviewComponent } from './components/Course Reviews/course-review/course-review.component';
import { CRUDComponent } from './components/CRUDs/crud/crud.component';
import { OutcomeCRUDComponent } from './components/CRUDs/outcome-crud/outcome-crud.component';
import { CdioCRUDComponent } from './components/CRUDs/cdio-crud/cdio-crud.component';
import { CourseCRUDComponent } from './components/CRUDs/course-crud/course-crud.component';
import { CourseReportComponent } from './components/Reports/course-report/course-report.component';
import { CdioReportComponent } from './components/Reports/cdio-report/cdio-report.component';
import { OutcomeReportComponent } from './components/Reports/outcome-report/outcome-report.component';
import { SectionCrudComponent } from './components/CRUDs/section-crud/section-crud.component';

const routes: Routes = [
  {path: 'search',component:SearchCourseComponent},
  {path: 'review/:course/:section/:semester',component:CourseReviewComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'admin/management',component:CRUDComponent},
  {path: 'admin/management/outcomes',component:OutcomeCRUDComponent},
  {path: 'admin/management/cdios',component:CdioCRUDComponent},
  {path: 'admin/management/courses/:courseNumber',component:CourseCRUDComponent},
  {path: 'admin/management/sections/:courseNumber',component:SectionCrudComponent},
  {path: 'report/course/:id/:semester',component:CourseReportComponent},
  {path: 'report/cdio/:id/:semester',component:CdioReportComponent},
  {path: 'report/outcome/:id/:semester',component:OutcomeReportComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
