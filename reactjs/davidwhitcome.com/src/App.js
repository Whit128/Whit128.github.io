import './App.scss';
import HeroHeader from './hero-header/hero-header'
import Skills from './skills/skills'

function App() {
  return (
    <div id="body-content">
      <HeroHeader/>
      <Skills/>
      {/* <div class="ios-bar"></div>
      <app-hero-header></app-hero-header>
      <app-skills></app-skills>
      <app-main-card></app-main-card>
      <app-social></app-social>
      <app-footer></app-footer>
      <router-outlet></router-outlet> */}
    </div>
  );
}

export default App;
