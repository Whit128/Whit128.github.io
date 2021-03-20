import React from 'react'
import './right-column.scss'

export default class RightColumn extends React.Component<{}, {}> {
  render = () => (
    <div className="right-column">
      <h3><i className="fa fa-briefcase" aria-hidden="true"></i>Work Experience</h3>
      <h4>Uline</h4>
      <div className="info-block">
          <h5>Software Developer</h5>
          <p>Dec 2019 - Today</p>
      </div>
      <div className="info-block">
          <h5>Associate Software Developer</h5>
          <p>Aug 2018 - Dec 2019</p>
      </div>
      <div className="info-block">
          <h5>Information Technology Intern</h5>
          <p>May 2018 - Aug 2018</p>
      </div>
      <p>Uline is a large supplier of boxes, business supplies, and packing materials. As a
          member of the web development team, I'm working on programming applications, fixing bugs,
          and improving the main website at <a href="https://www.uline.com">Uline.com</a>.</p>
      <h4>Power Electronics International, Inc.</h4>
      <div className="info-block">
          <h5>IT Intern</h5>
          <p>May 2017 - Aug 2017</p>
          <p>Power Electronics International is known for manufacturing their high quality Variable
              Speed Drives, Soft-Start Controls, and Control Panels. As an information technology
              intern, I focused on keeping internal systems running as well as developing
              applications and tools for employees to use inside the company.</p>
      </div>
      <h3 className="separator"><i className="fa fa-graduation-cap" aria-hidden="true"></i>Education</h3>
      <h4>Northern Illinois University - DeKalb, Illinois</h4>
      <p>Aug 2016 - Aug 2018</p>
      <p>My junior year of college began at NIU during the Fall of 2016. I graduated with a
          Bachelor's degree in Computer Science with an emphasis on Enterprise Software. I also
          earned a minor in Economics.</p>
      <h4>McHenry County College - Crystal Lake, Illinois</h4>
      <p>Aug 2014 - May 2016</p>
      <p>My time enrolled in MCC was spent working towards an Associate's of Science Degree. In May
          of 2016, I finished taking all the required classes for the program, allowing me to
          transfer to a four-year university. After spending the summer working, I transferred to
          Northern Illinois University to continue my education in Computer Science.</p>
    </div>
  )
}