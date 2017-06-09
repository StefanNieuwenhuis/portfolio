import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: string = "login works!";

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login().subscribe(() => {
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';

        this.router.navigate([redirect]);
      }
    });
  }

  logout(){
    this.authService.logout();
  }

}
