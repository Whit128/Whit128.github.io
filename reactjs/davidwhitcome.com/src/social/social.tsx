import React from 'react'
import SocialLink from './social-link'
import './social.scss'

interface IState {
    skills: Array<SocialLink>
}

export default class Social extends React.Component<{}, IState> {
    state = {
        skills: [
            new SocialLink("fa fa-github", "GitHub", "https://github.com/Whitcome"),
            new SocialLink("fa fa-linkedin", "LinkedIn", "https://www.linkedin.com/in/dave-whitcome"),
            new SocialLink("fa fa-instagram", "Instagram", "https://www.instagram.com/davidwhitcome25")
        ]
    }

    render = () => (
        <div className='section'>
            <div className='inner'>
                <ul className='block-list hover-list'>
                    {
                        this.state.skills.map(s => 
                        <li key={s.text}>
                            <a href={s.link}>
                            <i className={s.iconClass} aria-hidden='true'></i>
                            <span>{s.text}</span>
                            </a>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}