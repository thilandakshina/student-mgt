import { StudentService } from './../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.studentService.selectedStudent = {
      Id: null,
      FirstName: '',
      LastName: '',
      ParentName: '',
      FullName : '',
      Gender:'',
      DOB: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.Id == null) {
      this.studentService.PostStudent(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.studentService.GetStudentList();
          //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
    }
    else {
      this.studentService.UpdateStudent(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.studentService.GetStudentList();
       // this.toastr.info('Record Updated Successfully!', 'Employee Register');
      });
    }
  }
 

}
