import React from 'react'
import './skills.scss'

interface IState {
  skills: Array<SkillIcon>
}

class Skills extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      skills: new Array<SkillIcon>()
    }
    this.state.skills.push(
      new SkillIcon("devicon-java-plain", "Java"),
      new SkillIcon("devicon-csharp-plain", "C#"),
      new SkillIcon("devicon-dot-net-plain", ".NET"),
      new SkillIcon("devicon-angularjs-plain", "Angular"),
      new SkillIcon("devicon-typescript-plain", "TypeScript"),
      new SkillIcon("devicon-visualstudio-plain", "Visual Studio"),
      new SkillIcon("devicon-git-plain", "Git"),
      new SkillIcon("devicon-html5-plain", "HTML"),
      new SkillIcon("devicon-css3-plain", "CSS"),
      new SkillIcon("fa fa-database", "SQL & CQL")
    );
  }

  render() {
    return (
      <div className="section">
        <div className="inner">
          <ul className="block-list">
          {
            this.state.skills.map(s => 
              <li key={s.text}>
                  <i className={s.iconClass} aria-hidden="true"></i>
                  <span>{s.text}</span>
              </li>
            )
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default Skills;

class SkillIcon {
  private _iconClass: string;
  private _text: string;
  
  constructor(iconClass: string, text: string) {
    this._iconClass = iconClass;
    this._text = text;
  }

  get iconClass(): string {
    return this._iconClass;
  }

  get text(): string {
    return this._text;
  }
}