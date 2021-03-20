import React from 'react'
import './hero-header.scss'

interface IState {
  name: string,
  tag: string
}

export default class HeroHeader extends React.Component<{}, IState> {
  state = {
    name: "David Whitcome",
    tag: "Software Developer"
  };

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
};