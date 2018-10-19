import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logged: any;
  constructor(private authService: AuthService, private route: Router) {
    this.logged = false;
    this.authService.getAuthState().subscribe( user => {
      if (user) {
        this.logged = true;
      }
    });
  }

  logOut() {
    this.authService.SignOut().then(response => {
      this.logged = false;
      this.route.navigate(['/login']);
    })
  }

  logInPage() {
    this.route.navigate(['/login']);
  }

  ngOnInit() {
  }

}
