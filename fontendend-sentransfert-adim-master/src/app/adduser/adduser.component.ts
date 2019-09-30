import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as jsPDF from 'jspdf';
import { Router } from '@angular/router'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor(private route:Router  ) { }

  ngOnInit() {
  }

@ViewChild('content', {static: false}) content:ElementRef;
/*   @ViewChild ('content') content: ElementRef;
 */
public downloadPDF(){
  let doc=new jsPDF();

  let specialElementHandlers={
    '#editor': function(element, renderer){
      return true;
    }
  };

  let content=this.content.nativeElement;

  doc.fromHTML(content.innerHTML, 15, 15,{
    'width':190,
    'elementHandlers': specialElementHandlers
  });

  doc.save('test.pdf')
}

}


