import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCourseComponent } from './components/search-course/search-course.component'
import { ReportComponent } from './components/report/report.component';
import { ReviewComponent } from './components/review/review.component';
import { CourseReviewComponent } from './components/course-review/course-review.component';


const routes: Routes = [
  {path: 'search',component:SearchCourseComponent},
  {path: 'tables/:course/:section/:semester',component:CourseReviewComponent},
  {path: 'admin',component:ReportComponent},
  {path: 'review',component:ReviewComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
