import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-cagr',
  templateUrl: './cagr.component.html',
  styleUrls: ['./cagr.component.scss']
})
export class CagrComponent implements OnInit {
  epsGrowth: string|undefined

  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/8q0PRKHUgZc");
  }
  calulatEpsgrowth(currentEPS:any,previousEPS:any,time:any){

    this.epsGrowth = (Math.pow(currentEPS/previousEPS,1/time) -1 )*100 +"%"

  }

  ngOnInit(): void {
  }

}
