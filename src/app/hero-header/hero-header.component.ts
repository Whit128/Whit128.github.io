import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.pug',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  Name: string = "David Whitcome";
  Tag: string = "Software Developer";

  constructor() {
    window.addEventListener('scroll', this.ParallaxAnimation);
  }

  ngOnInit() {
    this.ParallaxAnimation(); // Set header background to correct position for some browsers.
  }

  ParallaxAnimation() {
    var headerBackground: HTMLElement = document.getElementById("header");
    headerBackground.style.height = (600 - window.pageYOffset) + "px";
    document.getElementById("header-background").style.opacity = (1 - window.pageYOffset/600).toString();
  }
}