import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebaradminp',
  templateUrl: './sidebaradminp.component.html',
  styleUrls: ['./sidebaradminp.component.scss']
})
export class SidebaradminpComponent implements OnInit {
  constructor( private authService:AuthService , private _router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
    this.authService.loggedIn();
  }
}
