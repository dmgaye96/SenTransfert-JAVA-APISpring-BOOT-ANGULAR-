import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addpartanduser',
  templateUrl: './addpartanduser.component.html',
  styleUrls: ['./addpartanduser.component.scss']
})
export class AddpartanduserComponent implements OnInit {

  profils;
  addpartenaire = {} ;
  imageUrl: string="/assets/img/default.png ";
  fileToUpload: File=null;

  constructor(private registersService :RegisterService , private authService :AuthService ,private router: Router) { }

  ngOnInit() {


    this.registersService.getAllProfil().subscribe(
      res=>{
        console.log(res);
        this.profils=res
        if (this.authService.getRole()=='ROLE_ADMINP'  ){
           this.profils=[this.profils[2],this.profils[3] ]
        }
      });

  }


  handleFileInput(File : FileList){
    this.fileToUpload=File.item(0);
   var reader= new FileReader();
   reader.onload=(event:any)=>{
     this.imageUrl=event.target.result;

   }
   reader.readAsDataURL(this.fileToUpload);
  }

  onsubmit (data:any){
    console.log(data);
    console.log(this.fileToUpload);
     this.registersService.adduser(data, this.fileToUpload)
     .subscribe(
       data=>{
         console.log('done');
         Swal.fire({
          type: 'success',
          title: 'Enregistrement effectif',

        })

       }, err=>{

        Swal.fire({
          type: 'success',
          title: 'Enregistrement effectif',

        })
        console.log(err);
       }
     )
   }


}
