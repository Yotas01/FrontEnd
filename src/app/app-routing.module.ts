import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCourseComponent } from './components/search-course/search-course.component'
import { DataInputComponent } from './components/data-input/data-input.component';
import { ReportComponent } from './components/report/report.component';
import { ReviewComponent } from './components/review/review.component';


const routes: Routes = [
  {path: 'search',component:SearchCourseComponent},
  {path: 'tables',component:DataInputComponent},
  {path: 'report',component:ReportComponent},
  {path: 'review',component:ReviewComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
