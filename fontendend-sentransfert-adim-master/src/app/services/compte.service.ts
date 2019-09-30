import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Users } from '../models/users';
import { ComptePart } from '../models/compte';


@Injectable({
  providedIn: 'root'
})
export class CompteService  {

  constructor(private  http:HttpClient , private authService: AuthService ,) { }
 host: string = "http://localhost:8000/api/register";



getUser() : Observable<Users[]>  {

  const host = "http://localhost:8000/api/liste/utilisateur";

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  return  this.http.get<Users[]>( host,{headers : headers} );
}


getcomptepartenaire()  : Observable<ComptePart[]> {

  const host="http://localhost:8000/api/liste/compte";
  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  return  this.http.get<ComptePart[]>( host,{headers : headers} );
}

getcompteuser()  : Observable<ComptePart[]> {

  const host="http://localhost:8000/api/compte/compteuser";
  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  return  this.http.get<ComptePart[]>( host,{headers : headers} );
}

}

