import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/Reports/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { PerformanceIndicatorComponent } from './components/Course Reviews/performance-indicator/performance-indicator.component';
import { AssessmentToolComponent } from './components/Course Reviews/assessment-tool/assessment-tool.component';
import { RaeComponent } from './components/Course Reviews/rae/rae.component';
import { CourseReviewComponent } from './components/Course Reviews/course-review/course-review.component';
import { CRUDComponent } from './components/CRUDs/crud/crud.component';
import { OutcomeCRUDComponent } from './components/CRUDs/outcome-crud/outcome-crud.component';
import { CdioCRUDComponent } from './components/CRUDs/cdio-crud/cdio-crud.component';
import { CourseCRUDComponent } from './components/CRUDs/course-crud/course-crud.component';
import { RaeCRUDComponent } from './components/CRUDs/rae-crud/rae-crud.component';
import { AssessmentToolCRUDComponent } from './components/CRUDs/assessmentTool-crud/assessment-tool-crud.component';
import { PerformanceIndicatorCRUDComponent } from './components/CRUDs/performanceIndicator-crud/performance-indicator-crud.component';
import { CourseReportComponent } from './components/Reports/course-report/course-report.component';
import { CdioReportComponent } from './components/Reports/cdio-report/cdio-report.component';
import { OutcomeReportComponent } from './components/Reports/outcome-report/outcome-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseDialogComponent } from './components/Dialogs/course-dialog/course-dialog.component';
import { CourseDialogUnfinishedComponent } from './components/Dialogs/course-dialog-unfinished/course-dialog-unfinished.component';
import { CourseDialogLeftComponent } from './components/Dialogs/course-dialog-left/course-dialog-left.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceIndicatorComponent,
    AssessmentToolComponent,
    RaeComponent,
    SearchCourseComponent,
    AdminComponent,
    CourseReviewComponent,
    CRUDComponent,
    OutcomeCRUDComponent,
    CdioCRUDComponent,
    CourseCRUDComponent,
    RaeCRUDComponent,
    AssessmentToolCRUDComponent,
    PerformanceIndicatorCRUDComponent,
    CourseReportComponent,
    CdioReportComponent,
    OutcomeReportComponent,
    CourseDialogComponent,
    CourseDialogUnfinishedComponent,
    CourseDialogLeftComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent,CourseDialogUnfinishedComponent,CourseDialogLeftComponent]
})
export class AppModule { }
