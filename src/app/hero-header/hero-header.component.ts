import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.pug',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent {
  Name: string = "David Whitcome";
  Tag: string = "Software Developer";

  originalHeight: number = 300;
  headerHeight: number;
  opacity: number;
  h2Height: number;

  getVhInPixels = (percent: number) => document.documentElement.clientHeight * percent/100;

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onScroll() {
    this.headerHeight = Math.max(0, this.getVhInPixels(65) - window.pageYOffset);
    this.opacity = Math.max(0, 1 - window.pageYOffset/(this.getVhInPixels(65)/1.2));
    this.h2Height = Math.max(0, 22 - window.pageYOffset/10);
  }

} 