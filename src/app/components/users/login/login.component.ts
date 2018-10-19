import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;
  updatedUser: any;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  singInWithGoogle() {
    this.authService.loginWithGoogle().then( response => {
      if (response.user.displayName != undefined) {
        this.router.navigate(['books']);
      }
    });
  }
}
