import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarcaissier',
  templateUrl: './sidebarcaissier.component.html',
  styleUrls: ['./sidebarcaissier.component.scss']
})
export class SidebarcaissierComponent implements OnInit {

  constructor( private authService:AuthService , private _router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
    this.authService.loggedIn();
  }

}
