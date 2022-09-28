import { SectionReviewCommentComponent } from './components/Course Reviews/section-review-comment/section-review-comment.component';
import { MaterialModule } from './material/material.module';
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
import { CourseDialogComponent } from './components/Dialogs/course-dialogs/course-dialog/course-dialog.component';
import { CourseDialogUnfinishedComponent } from './components/Dialogs/course-dialogs/course-dialog-unfinished/course-dialog-unfinished.component';
import { CourseDialogLeftComponent } from './components/Dialogs/course-dialogs/course-dialog-left/course-dialog-left.component';
import { NewOutcomeDialogComponent } from './components/Dialogs/outcome-dialogs/new-outcome-dialog/new-outcome-dialog.component';
import { ModifyOutcomeDialogComponent } from './components/Dialogs/outcome-dialogs/modify-outcome-dialog/modify-outcome-dialog.component';
import { NewCdioDialogComponent } from './components/Dialogs/cdio-dialogs/new-cdio-dialog/new-cdio-dialog.component';
import { ModifyCdioDialogComponent } from './components/Dialogs/cdio-dialogs/modify-cdio-dialog/modify-cdio-dialog.component';
import { SectionCrudComponent } from './components/CRUDs/section-crud/section-crud.component';
import { ModifySectionDialogComponent } from './components/Dialogs/section-dialogs/modify-section-dialog/modify-section-dialog.component';
import { NewSectionDialogComponent } from './components/Dialogs/section-dialogs/new-section-dialog/new-section-dialog.component';

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
    CourseDialogLeftComponent,
    NewOutcomeDialogComponent,
    ModifyOutcomeDialogComponent,
    NewCdioDialogComponent,
    ModifyCdioDialogComponent,
    SectionCrudComponent,
    ModifySectionDialogComponent,
    NewSectionDialogComponent,
    SectionReviewCommentComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent,CourseDialogUnfinishedComponent,CourseDialogLeftComponent]
})
export class AppModule { }
