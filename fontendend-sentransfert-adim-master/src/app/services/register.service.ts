import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


private url:string = "http://localhost:8000/api/liste/profile";

  constructor(private http: HttpClient, private authService: AuthService ,private router:Router) { }


  getAllProfil() : Observable<any[]>  {


    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return  this.http.get<any>(this.url , {headers : headers} );
 }


  addregister(register, fileToUpload){

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    const host = "http://localhost:8000/api/register";

    const formData: FormData= new FormData();
    formData.append('login', register.login);
    formData.append('nom', register.nom);
   // formData.append('telephone', register.telephone);
    formData.append('password', register.password);
    formData.append('email', register.email);
    formData.append('telephone', register.telephone);
    formData.append('imageName', fileToUpload, fileToUpload.name);
    formData.append('Profile', register.Profile);

    return this.http.post(host, formData , {headers : headers} );
  }


  getAllcompte() : Observable<any[]>  {

    const host = "http://localhost:8000/api/liste/partenaireliste";

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return  this.http.get<any>( host, {headers : headers} );
 }
addCompt(compte){

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  const hostC = "http://localhost:8000/api/compte/new";



  const formData: FormData= new FormData();

  formData.append('partenaire', compte.partenaire);

  return this.http.post(hostC, formData , {headers : headers} );

}


getAllcomptess(data) {

  const host = "http://localhost:8000/api/liste/compteall";

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  return  this.http.post( host, data,{headers : headers} );
}


getDepocaissier(data) {

  const host ="http://localhost:8000/api/liste/depot";

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  return  this.http.post( host, data,{headers : headers} );
}


addDepot(depot){

const hostD ="http://localhost:8000/api/depot/new";

const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));


const formData: FormData = new FormData();

formData.append('montant', depot.montant);
formData.append('compte', depot.compte);

return this.http.post(hostD, formData , {headers : headers} );



}


adduser(partenaire, fileToUpload){

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  const host = "http://localhost:8000/api/user/newuser";
  const formData: FormData= new FormData();
  formData.append('login', partenaire.login);
  formData.append('nom', partenaire.nom);
  formData.append('telephone', partenaire.telephone);
  formData.append('password', partenaire.password);
  formData.append('email', partenaire.email);
  formData.append('telephone', partenaire.telephone);
  formData.append('imageName', fileToUpload, fileToUpload.name);
  formData.append('Profile', partenaire.Profile);

  return this.http.post(host, formData , {headers : headers} );
}




getinfouser(data) {

  const host = "http://localhost:8000/api/liste/utilisateurbyusername";

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  return  this.http.post( host, data,{headers : headers} );
}



allouer(allouer){

  const hostD ="http://localhost:8000/api/compte/addCompte ";

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));


  const formData: FormData = new FormData();

  formData.append('login', allouer.login);
  formData.append('compte', allouer.compte);

  return this.http.post(hostD, formData , {headers : headers} );



  }


}
