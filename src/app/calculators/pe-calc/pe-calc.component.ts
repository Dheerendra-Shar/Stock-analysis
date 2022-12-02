import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-pe-calc',
  templateUrl: './pe-calc.component.html',
  styleUrls: ['./pe-calc.component.scss']
})
export class PeCalcComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  pe: number|undefined


  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/slCcfY1yJsM");

  }
  calulatePe(marketvalue:any,eps:any){

    this.pe= marketvalue/eps

  }

  ngOnInit(): void {
  }

}
