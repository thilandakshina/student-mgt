import { NgModule } from '@angular/core';
import{Routes,RouterModule}from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentRegComponent } from './students/student-reg/student-reg.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseRegisterComponent } from './courses/course-register/course-register.component';
import { MainComponent } from './main/main.component';

const routes: Routes=[
  {
    path:'',
    component:MainComponent
    //,
    // children:[
    //   {path:"flightTab",component:MainBodySearchareaFlightComponent},
    //   {path:"hotelTab",component:MainBodySearchareaHotelComponent},
    // ]
  },
  {path:'students',component:StudentsComponent},
  {path:'courses',component:CoursesComponent},
  {path:'studentreg',component:StudentRegComponent},
  {path:'studentlist',component:StudentListComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule { }
export const routingCompnents=[MainComponent,StudentsComponent,CoursesComponent,StudentRegComponent]
