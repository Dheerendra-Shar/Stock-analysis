import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-analysis';
  safeSrc: SafeResourceUrl;
  eps:number|undefined

  epsGrowth: any |undefined
  pe: number|undefined
  epssssssss: number|undefined
  intrinsic: number|undefined
  date: Date;
  intialincome: any;
  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/8q0PRKHUgZc");
    this.date = new Date()
  }

  calulatEps(netincome:any,totalshare:any){


    this.epssssssss = netincome/totalshare;


  }

  calulatEpsgrowth(currentEPS:any,previousEPS:any,time:any){

    this.epsGrowth = (Math.pow(currentEPS/previousEPS,1/time) -1 )*100 +"%"

  }

  calulatePe(marketvalue:any,eps:any){

    this.pe= marketvalue/eps

  }

  calulateIe(eps:any,growthrate:any,peratio:any){
    this.intrinsic = eps *(parseInt(growthrate)+1)*peratio

  }

  calulateIncome(cagr:any,timevalue:any,netincome:any){
   let value =  (Math.pow(parseFloat(cagr)+1,timevalue))+ ''

    this.intialincome = parseFloat(value)*netincome
  }
}
