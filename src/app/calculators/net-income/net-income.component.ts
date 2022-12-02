import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-net-income',
  templateUrl: './net-income.component.html',
  styleUrls: ['./net-income.component.scss']
})
export class NetIncomeComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  intialincome: number|undefined
  date: Date;



  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/8q0PRKHUgZc");
    this.date = new Date()

  }

  calulateIncome(cagr:any,timevalue:any,netincome:any){
    let value =  (Math.pow(parseFloat(cagr)+1,timevalue))+ ''
    this.intialincome = parseFloat(value)*netincome
   }

  ngOnInit(): void {
  }

}
