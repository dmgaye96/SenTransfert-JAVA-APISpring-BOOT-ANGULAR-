import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pro-dashboard-angular';

  constructor(private appService: AppService , private authService:AuthService) {}
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

  ngOnInit() : void {
  //  this.authService.loadToken();

  }
   isAdmin(){
    return this.authService.isAdmin();
  }

  isUser(){
    return this.authService.isUser();
  }

  isAdminP(){
    return this.authService.isAdminP();
  }

  isCaissier(){
    return this.authService.isCaissier();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }
  logOut(){
    this.authService.logout();
  }
}
