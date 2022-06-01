import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCourseComponent } from './components/search-course/search-course.component'
import { AdminComponent } from './components/Reports/admin/admin.component';
import { ReportComponent } from './components/Reports/report/report.component';
import { CourseReviewComponent } from './components/Course Reviews/course-review/course-review.component';


const routes: Routes = [
  {path: 'search',component:SearchCourseComponent},
  {path: 'tables/:course/:section/:semester',component:CourseReviewComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'report/:reportType/:id/:semester',component:ReportComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
