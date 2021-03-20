import React from 'react'
import './main-card.scss'
import LeftColumn from './left-column/left-column'

export default class MainCard extends React.Component {
  render = () => (
    <div className="section">
      <div className="flex-content inner">
        <LeftColumn/>
        {/* <app-left-column></app-left-column>
        <app-right-column></app-right-column> */}
      </div>
    </div>
  );
};