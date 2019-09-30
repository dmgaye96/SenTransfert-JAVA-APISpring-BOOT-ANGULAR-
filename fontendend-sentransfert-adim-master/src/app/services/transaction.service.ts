import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient, ) { }


  Envoi(envoi){

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    const host = "http://localhost:8000/api/user/envoi";

    const formData: FormData= new FormData();

    formData.append('nomE', envoi.nomE);
    formData.append('prenomE', envoi.prenomE);
    formData.append('telephoneE', envoi.telephoneE);
    formData.append('Numeropiece', envoi.Numeropiece);
    formData.append('montant', envoi.montant);
    formData.append('nomB', envoi.nomB);
    formData.append('prenomB', envoi.prenomB);
    formData.append('telephoneB', envoi.telephoneB);



    return this.http.post(host, formData , {headers : headers} );
  }





getCode(data) {

  const host = "http://localhost:8000/api/user/findcode";

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));



  return  this.http.post( host, data,{headers : headers} );
}


Retrait(retrait){
  const hostD ="http://localhost:8000/api/user/retrait";

  const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));


  const formData: FormData = new FormData();

  formData.append('code', retrait.code);
  formData.append('numeropiece', retrait.numeropiece);
  formData.append('typedepiece', retrait.typedepiece);

  return this.http.post(hostD, formData , {headers : headers} );



}

}
