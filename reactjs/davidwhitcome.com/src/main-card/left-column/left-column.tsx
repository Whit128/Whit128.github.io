import React from 'react'
import './left-column.scss'
import profilePic from '../../images/me.jpg'

interface IState {
    name: string
}

export default class LeftColumn extends React.Component<{}, IState> {
    state = { name: 'Dave' };

    render = () => (
        <div className="left-column"><img className="me" src={profilePic} alt="" />
            <h3>{this.state.name}</h3>
            <p> Even when I was little, developing computer programs interested me. I became involved in
                computer science when I started building small computer games in <a href="https://en.wikipedia.org/wiki/GameMaker_Studio">Game Maker</a>. As I dove into the world of programming at 14 years old, I developed
                websites and started writing simple code. I learned the basics of HTML, CSS, JavaScript,
                and PHP to show off the small video games that I made.</p>
            <p>I've developed numerous applications being used in the real world - from small programs to
                this website. You can find some of my active projects and the code for this website on <a href="https://github.com/Whitcome">GitHub</a>.</p>
            <p>In my free time, I like to play guitar, sing, and master music in post production. You can
                find some of my music on <a href="https://soundcloud.com/davebpm128">SoundCloud</a>. I
                won first place for the song "<a href="https://soundcloud.com/davebpm128/tradition">Tradition</a>" in McHenry County College's Voices Magazine in 2015. I'm also a proud Eagle Scout in the
                Boy Scouts of America as of August 2014.</p>
        </div>
    );
};