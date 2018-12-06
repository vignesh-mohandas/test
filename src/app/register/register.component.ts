import { Component, OnInit } from '@angular/core';
import{NgForm,FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http :HttpClient) { }

  Register(form :NgForm){
    let users;
    
    users=(form.value);
    console.log(JSON.stringify(users));

    this.http.post('http://localhost:8000/register', JSON.stringify(users));
    }
    
 //console.log(users);
  
  
  ngOnInit() {
  }

}
