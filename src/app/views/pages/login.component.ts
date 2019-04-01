import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: Object;
  password: Object;
  active = false;
  incorrect = false;
  
  constructor(
    //private auth: AuthService, 
    private route: Router 
  ) { }

  login() {
    this.active = true;
    /*
    this.auth.login(this.email, this.password).subscribe(
      data => {
        this.route.navigate(['/inicio']);
      },
      error => {
        this.active = false;
        this.incorrect = true;
      }
    );*/
    this.route.navigate(['/inicio']);
  }

  ngOnInit() {
    /*
    if (this.auth.isAuthenticated()) {
      this.route.navigate(['/inicio']);
    }*/
  }

}
