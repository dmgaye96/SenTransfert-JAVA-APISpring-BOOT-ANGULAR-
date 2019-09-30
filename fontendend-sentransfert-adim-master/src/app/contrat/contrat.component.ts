import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  constructor( private authService: AuthService,
    private router: Router ) {

  }

  ngOnInit() {
  }


  @ViewChildren('content') content :ElementRef;


public downloadPDF (){

let doc = new jsPDF();

let specialElementHandlers = {
  '#editor': function ( element , renderer) {
    return true;
  }
};
let content = this.content.nativeElement;

doc.fromHTML(content.innerHTML , 15,15 ,{
  'width':198,
  'elementHandlers' :specialElementHandlers
});

doc.save('test.pdf');
}

}
