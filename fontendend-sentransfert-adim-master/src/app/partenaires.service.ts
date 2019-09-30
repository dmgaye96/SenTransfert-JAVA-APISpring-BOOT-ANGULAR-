import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './services/auth.service';
import { IPartenaire } from './models/partenaire';
import { AddPartenaire } from './models/addpartenaire';

@Injectable({
  providedIn: 'root'
})

export class PartenaireService {


   partenaires:AddPartenaire[] =[];
   partenairesSubject = new Subject<AddPartenaire[]>();

  public ListepartUrl = "http://localhost:8000/api/liste/partenaireliste";

  public addpartenaire = "http://localhost:8000/api/partenaire/new";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPartenaires() :Observable<IPartenaire[]> {

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    return this.http.get<IPartenaire[]>(this.ListepartUrl  , {headers : headers}  );
  }



  addPartenaire(partenaire, fileToUpload){

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    const host = "http://localhost:8000/api/user/newadmin ";
    const formData: FormData= new FormData();
    formData.append('login', partenaire.login);
    formData.append('raisonsociale', partenaire.raisonsociale);
    formData.append('ninea', partenaire.ninea);
    formData.append('adresse', partenaire.adresse);
    formData.append('nom', partenaire.nom);
    formData.append('telephone', partenaire.telephone);
    formData.append('password', partenaire.password);
    formData.append('email', partenaire.email);
    formData.append('telephone', partenaire.telephone);
    formData.append('imageName', fileToUpload, fileToUpload.name);

    return this.http.post(host, formData , {headers : headers} );
  }





blocker(id: number) {
  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));


  const hostbloc ="http://localhost:8000/apipartenaires/bloquer/"+id;



  return this.http.get(hostbloc , {headers : headers} );

}
blocker1(id: number) {
  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));


  const hostbloc ="http://localhost:8000/api/utilisateur/bloque/"+id;



  return this.http.get(hostbloc , {headers : headers} );

}



}
