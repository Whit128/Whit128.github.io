import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.pug',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  Name: string = "David Whitcome";
  Tag: string = "Software Developer";
  HeaderHeight: number;

  constructor() {
    window.addEventListener('scroll', this.ParallaxAnimation);
  }

  ngOnInit() {
    this.ParallaxAnimation(); // Set header background to correct position for some browsers.
  }

  ParallaxAnimation() {
    var header: HTMLElement = document.getElementById("header");
    console.log(parseInt(header.style.height));

    if (parseInt(header.style.height) >= 80)
      header.style.height = (600 - window.pageYOffset) + "px";
    else
      header.style.height = "80px";

    document.getElementById("header-background").style.opacity = (1 - window.pageYOffset/600).toString();
    document.getElementById("header-bottom").style.opacity = (1 - window.pageYOffset/450).toString();
  }
}