import { Student } from './../shared/student.model';
import { StudentService } from './../shared/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.studentService.GetStudentList();
  }

  showForEdit(std: Student) {
    this.studentService.selectedStudent = Object.assign({}, std);;
  }
 
 
  
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    console.log('sor');
    this.key = key;
    this.reverse = !this.reverse;
  }  
  // onDelete(id: number) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.employeeService.deleteEmployee(id)
  //     .subscribe(x => {
  //       this.employeeService.getEmployeeList();
  //       this.toastr.warning("Deleted Successfully","Employee Register");
  //     })
  //   }
  // }
}
