import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCourseComponent } from './components/search-course/search-course.component'
import { AdminComponent } from './components/Reports/admin/admin.component';
import { ReportComponent } from './components/Reports/report/report.component';
import { CourseReviewComponent } from './components/Course Reviews/course-review/course-review.component';
import { CRUDComponent } from './components/CRUDs/crud/crud.component';
import { OutcomeCRUDComponent } from './components/CRUDs/outcome-crud/outcome-crud.component';
import { CdioCRUDComponent } from './components/CRUDs/cdio-crud/cdio-crud.component';
import { CourseCRUDComponent } from './components/CRUDs/course-crud/course-crud.component';


const routes: Routes = [
  {path: 'search',component:SearchCourseComponent},
  {path: 'tables/:course/:section/:semester',component:CourseReviewComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'admin/management',component:CRUDComponent},
  {path: 'admin/management/outcomes',component:OutcomeCRUDComponent},
  {path: 'admin/management/cdios',component:CdioCRUDComponent},
  {path: 'admin/management/courses',component:CourseCRUDComponent},
  {path: 'report/:reportType/:id/:semester',component:ReportComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
