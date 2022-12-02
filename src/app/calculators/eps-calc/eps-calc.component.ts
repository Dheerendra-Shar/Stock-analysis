import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-eps-calc',
  templateUrl: './eps-calc.component.html',
  styleUrls: ['./eps-calc.component.scss']
})
export class EpsCalcComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  epssssssss: number|undefined

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/8q0PRKHUgZc");

  }

  calulatEps(netincome:any,totalshare:any){


    this.epssssssss = netincome/totalshare;


  }

  ngOnInit(): void {
  }

}
