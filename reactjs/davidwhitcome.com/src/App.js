import './App.scss';
import HeroHeader from './hero-header/hero-header'
import Skills from './skills/skills'
import MainCard from './main-card/main-card'

export default function App() {
  return (
    <div id="body-content">
      <div className="ios-bar"></div>
      <HeroHeader/>
      <Skills/>
      <MainCard/>
      {/* <div class="ios-bar"></div>
      <app-social></app-social>
      <app-footer></app-footer>
      <router-outlet></router-outlet> */}
    </div>
  );
}