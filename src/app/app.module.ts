import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentRegComponent } from './students/student-reg/student-reg.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseRegisterComponent } from './courses/course-register/course-register.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule ,routingCompnents} from './/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentRegComponent,
    StudentListComponent,
    CoursesComponent,
    CourseListComponent,
    CourseRegisterComponent,
    MainComponent,
    routingCompnents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
