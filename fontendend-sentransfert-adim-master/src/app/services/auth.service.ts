import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


host: string = "http://localhost:8080/authenticate";
jwt:string;
username:string;
roles:Array<string>;

  constructor(private http:HttpClient , private router: Router) { }

  login(data){


    return this.http.post<any>(this.host ,data,{observe: 'response'});

  }
   saveToken(jwt :any){
    localStorage.setItem("token" ,jwt['token']);

    this.jwt=jwt['token'];
    this.parseJWT();

  }

  parseJWT(){
    let jwtHelper= new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.obj;
    this.roles=objJWT.roles;
    localStorage.setItem('role', objJWT.roles);

  }
  getRole(){

    return localStorage.getItem('role');
  }



  getToken() {

    return localStorage.getItem('token')
  }

  isAdmin(){
    return this.roles.indexOf('ROLE_SUPERADMIN')>=0;
  }
  isCaissier(){
    return this.roles.indexOf('ROLE_CAISSIER')>=0;
   }

    isAdminP(){
      return this.roles.indexOf('ROLE_ADMINP')>=0;
      }

  isUser(){
    return this.roles.indexOf('ROLE_USER')>=0;
  }
  isAuthenticated(){
   return this.roles && ( this.isAdmin() || this.isUser() || this.isAdminP() || this.isCaissier() );
  }
  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
  logout(){


      localStorage.removeItem('token');
      this.initParams();

      return  this.router.navigate(['auth', 'signin']);

  }


  initParams(){
    this.jwt=undefined;
   this.username=undefined;
    this.roles=undefined;

}

}
