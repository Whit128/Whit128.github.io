import React from 'react'
import './hero-header.scss'

interface IState {
  name: string,
  tag: string,
}

export default class HeroHeader extends React.Component<{}, IState> {
  state = {
    name: "David Whitcome",
    tag: "Software Developer"
  };

  constructor(props: {}) {
    super(props);
    this.ParallaxAnimation(); // Set header background to correct position for some browsers.
    window.addEventListener('scroll', this.ParallaxAnimation);
  }

  render = () => (
    <div id="header">
      <div id="header-background-wrapper">
        <div id="header-background"></div>
      </div>
      <div className="ie10-fix">
        <div id="header-centered">
          <h1>{this.state.name}</h1>
          <h2>{this.state.tag}</h2>
        </div>
      </div>
    </div>
  );

  ParallaxAnimation() {
    var headerBackground = document.getElementById("header-background-wrapper");
    if (headerBackground != null) {
      var backgroundPosition: number = window.pageYOffset / 4;
      if (backgroundPosition >= 0)
        headerBackground.style.marginTop = backgroundPosition + "px";
      else
        headerBackground.style.marginTop = "0px";
    }
  }
};