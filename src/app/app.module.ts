import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { AdminComponent } from './components/Reports/admin/admin.component';
import { ReportComponent } from './components/Reports/report/report.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerformanceIndicatorComponent } from './components/Course Reviews/performance-indicator/performance-indicator.component';
import { AssessmentToolComponent } from './components/Course Reviews/assessment-tool/assessment-tool.component';
import { RaeComponent } from './components/Course Reviews/rae/rae.component';
import { CourseReviewComponent } from './components/Course Reviews/course-review/course-review.component';
import { CRUDComponent } from './components/CRUDs/crud/crud.component';
import { OutcomeCRUDComponent } from './components/CRUDs/outcome-crud/outcome-crud.component';
import { CdioCRUDComponent } from './components/CRUDs/cdio-crud/cdio-crud.component';
import { CourseCRUDComponent } from './components/CRUDs/course-crud/course-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceIndicatorComponent,
    AssessmentToolComponent,
    RaeComponent,
    SearchCourseComponent,
    AdminComponent,
    ReportComponent,
    CourseReviewComponent,
    CRUDComponent,
    OutcomeCRUDComponent,
    CdioCRUDComponent,
    CourseCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
