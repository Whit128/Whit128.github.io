import React from 'react'
import './hero-header.scss'

interface IState {
  name: string,
  tag: string
}

class HeroHeader extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "David Whitcome",
      tag: "Software Developer"
    }
  }

  render() {
    return (
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
    )
  }
}

export default HeroHeader;