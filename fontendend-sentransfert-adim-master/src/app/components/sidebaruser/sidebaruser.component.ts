import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.scss']
})
export class SidebaruserComponent implements OnInit {

  constructor( private authService:AuthService , private _router:Router) { }
  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
    this.authService.loggedIn();
  }
}
