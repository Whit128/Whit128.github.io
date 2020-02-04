import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.pug',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  Name: string = "David Whitcome";
  Tag: string = "Software Developer";

  getHeaderHeight(): number {
    let newHeight = 300 - window.pageYOffset;
    return newHeight < 0 ? 0 : newHeight;
  }

  getHeight(): number {
    let newHeight = 22 - window.pageYOffset/10;
    return newHeight < 0 ? 0 : newHeight;
  }

  getOpacity(denominator: number): number {
    let newOpacity = 1 - window.pageYOffset/denominator;
    return newOpacity < 0 ? 0 : newOpacity;
  }

  ngOnInit() {
    window.addEventListener('scroll', function (){});
  }
} 