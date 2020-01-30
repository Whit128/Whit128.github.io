import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.pug',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  Name: string = "David Whitcome";
  Tag: string = "Software Developer";
  header: HTMLElement;

  constructor() {
    window.addEventListener('scroll', this.ParallaxAnimation);
  }

  ngOnInit() {
    this.header = document.getElementById("header");
    this.ParallaxAnimation(); // Set header background to correct position for some browsers.
  }

  ParallaxAnimation() {
    if (parseInt(this.header.style.height) >= 80)
      this.header.style.height = (600 - window.pageYOffset) + "px";
    else
      this.header.style.height = "80px";

    document.getElementById("header-background").style.opacity = (1 - window.pageYOffset/600).toString();
    document.getElementById("header-bottom").style.opacity = (1 - window.pageYOffset/450).toString();
  }
} 