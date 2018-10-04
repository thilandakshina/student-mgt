import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList : Student[];
  selectedStudent : Student;
  constructor(private http : Http) { }

  PostStudent(student : Student){
    console.log('Test');
    var body = JSON.stringify(student);
    console.log(body);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:57679/Student/Create',body,requestOptions).map(x => x.json());
  }
 
  // putEmployee(id, emp) {
  //   var body = JSON.stringify(emp);
  //   var headerOptions = new Headers({ 'Content-Type': 'application/json' });
  //   var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  //   return this.http.put('http://localhost:28750/api/Employee/' + id,
  //     body,
  //     requestOptions).map(res => res.json());
  // }
 
  GetStudentList(){

    console.log("get data");
    this.http.get('http://localhost:57679/Student/GetList')
    .map((data : Response) =>{
      return data.json() as Student[];
    }).toPromise().then(x => {
      this.studentList = x;
    })
  }
 
  UpdateStudent(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:57679/Student/Update',
      body,
      requestOptions).map(res => res.json());
  }

  // deleteEmployee(id: number) {
  //   return this.http.delete('http://localhost:28750/api/Employee/' + id).map(res => res.json());
  // }

}
