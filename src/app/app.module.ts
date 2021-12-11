import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerformanceIndicatorComponent } from './components/performance-indicator/performance-indicator.component';
import { AssessmentToolComponent } from './components/assessment-tool/assessment-tool.component';
import { RaeComponent } from './components/rae/rae.component';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceIndicatorComponent,
    AssessmentToolComponent,
    RaeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
