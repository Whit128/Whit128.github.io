import React from 'react'
import './main-card.scss'

class MainCard extends React.Component<{}, {}> {
  render() {
    return (
      <div className="section">
        <div className="flex-content inner">
          <span>test</span>
          {/* <app-left-column></app-left-column>
          <app-right-column></app-right-column> */}
        </div>
      </div>
    )
  }
}

export default MainCard;