import React from 'react'
import './hero-header.scss'

interface IState {
    name: string,
    tag: string,
    headerBackground: React.RefObject<HTMLDivElement>
}

export default class HeroHeader extends React.Component<{}, IState> {
    state = {
        name: "David Whitcome",
        tag: "Software Developer",
        headerBackground: React.createRef<HTMLDivElement>()
    };

    constructor(props: {}) {
        super(props);
        this.ParallaxAnimation(this.state.headerBackground.current); // Set header background to correct position for some browsers.
        window.addEventListener('scroll', () =>
            this.ParallaxAnimation(this.state.headerBackground.current));
    }

    render = () => (
        <div id="header">
        <div id="header-background-wrapper" ref={this.state.headerBackground}>
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

    ParallaxAnimation(element: HTMLDivElement | null) {
        if (element == null)
            return;
        var backgroundPosition: number = window.pageYOffset / 4;
        if (backgroundPosition >= 0)
            element.style.marginTop = backgroundPosition + "px";
        else
            element.style.marginTop = "0px";
    }
};