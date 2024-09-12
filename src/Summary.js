import React from 'react';
import Profile from './image/vvakil1@asu.edu-de981ac5.jpg'

function Summary() {
  return (
    <section id="summary" className="py-5">
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={Profile} alt="Profile" className="img-fluid rounded-circle square-image" />
          </div>
          <div className="col-md-8">
            <h2>Summary</h2>
            <p style={{"float": "justify"}}>Software Developer and Data Scientist | Open Source Contributor | Automation Enthusiast<br />Passionate about technology, open-source development, and automation. Experienced in software development, data science, data visualization, ETL processes, ML/AI, Internet of Things (IoT), embedded systems, control systems, industrial automation, web development and software automation. Collaborated with renowned Open Source organizations such as Fossasia, Sugar Labs, Zulip, and more during Google Code-In 2016. Won Gold Cup in a national-level automation competition. Filed a patent in Mumbai, India for developing an autonomous medical tablet inspection system. Recognized with a prestigious Best Project Award for developing an Advanced Vein Detection Device, funded by and recognized by Nirma University. Let's connect and drive positive change together.<br /><br />Causes:<br />- Education: Dedicated America Reads tutor, empowering students through education.<br />- Open Source: Contributed to renowned organizations such as Fossasia, Sugar Labs, Zulip, and more during Google Code-In 2016.<br />- Sustainability: Contributed to a solar-powered waste management project named "Ingenious Garbage Mate" - an innovative solution for a greener future.<br />- Social Impact: Mentored and provided education to underprivileged children at TIDE Organization and AJA Education and Foundation.<br />- Graduate Student Advocacy: Advocating for the rights and well-being of graduate students as an elected Assembly member in GPSA.</p>
            <a href='https://drive.google.com/file/d/1ErYjwtAvZEUGjQl2RMCaf4Deo1k01kwQ/view?usp=sharing' target="_blank" rel="noreferrer" download className="btn btn-secondary">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
