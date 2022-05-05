import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerformanceIndicatorComponent } from './components/performance-indicator/performance-indicator.component';
import { AssessmentToolComponent } from './components/assessment-tool/assessment-tool.component';
import { RaeComponent } from './components/rae/rae.component';
import { CourseComponent } from './components/course/course.component';
import { DataInputComponent } from './components/data-input/data-input.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { ReportComponent } from './components/report/report.component';
import { ReviewComponent } from './components/review/review.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceIndicatorComponent,
    AssessmentToolComponent,
    RaeComponent,
    CourseComponent,
    DataInputComponent,
    SearchCourseComponent,
    ReportComponent,
    ReviewComponent
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
