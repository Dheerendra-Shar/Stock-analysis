import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-intrinsic-value',
  templateUrl: './intrinsic-value.component.html',
  styleUrls: ['./intrinsic-value.component.scss']
})
export class IntrinsicValueComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  intrinsic: number|undefined



  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/TVliZHfa9HI");

  }

  calulateIe(eps:any,growthrate:any,peratio:any){
    this.intrinsic = eps *(parseInt(growthrate)+1)*peratio

  }

  ngOnInit(): void {
  }

}
