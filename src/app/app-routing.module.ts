import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCourseComponent } from './components/search-course/search-course.component'
import { DataInputComponent } from './components/data-input/data-input.component';
import { ReportComponent } from './components/report/report.component';


const routes: Routes = [
  {path: 'search',component:SearchCourseComponent},
  {path: 'tables',component:DataInputComponent},
  {path: 'report',component:ReportComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
