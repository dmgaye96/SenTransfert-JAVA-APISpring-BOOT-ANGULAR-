import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( private authService:AuthService , private _router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
    this.authService.loggedIn();
  }
}
