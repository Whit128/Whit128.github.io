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

  getOpacity = (denominator: number): number => 1 - window.pageYOffset/denominator;

  ngOnInit() {
    window.addEventListener('scroll', function (){});
  }
} 