import React from 'react'
import './footer.scss'

interface IState {
    year: string
}

export default class Footer extends React.Component<{}, IState> {
    state = {
        year: new Date().getFullYear().toString()
    };

    render = () => (
        <div id="footer">© {this.state.year} David Whitcome</div>
    );
}