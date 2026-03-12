import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <strong>Full-Stack Engineer</strong> with 2+ years of experience building scalable backend services 
              and responsive frontend applications. Currently pursuing my Master's in Computer Science at 
              Youngstown State University with a perfect 4.0 GPA.
            </p>
            <p>
              My journey includes roles at <strong>Capgemini</strong> and <strong>Amdocs</strong>, where I've:
            </p>
            <ul>
              <li>Built REST APIs and microservices that improved system throughput by 40%</li>
              <li>Reduced API response latency by 60% through optimized database indexing</li>
              <li>Implemented async data pipelines that reduced processing delays by 22%</li>
              <li>Integrated LLM features improving semantic retrieval by ~25%</li>
            </ul>
            <p>
              I'm passionate about <strong>clean architecture</strong>, <strong>API design</strong>, 
              and building systems that solve real problems. Recently, I built an AI Meeting Assistant 
              that reduces meeting documentation time from 30 minutes to under 60 seconds!
            </p>
            <div className="about-cta">
              <a href="/anoushikavennamaneniresume.pdf" target="_blank" className="btn btn-primary">
                Download Resume
              </a>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎓 Education</h3>
              <p><strong>Master's in CS</strong></p>
              <p>Youngstown State University</p>
              <p className="gpa">GPA: 4.0/4.0</p>
            </div>
            <div className="highlight-card">
              <h3>💼 Experience</h3>
              <p><strong>2+ Years</strong></p>
              <p>Full-Stack Development</p>
              <p>Capgemini, Amdocs, YSU</p>
            </div>
            <div className="highlight-card">
              <h3>☁️ Certifications</h3>
              <p><strong>AWS Certified</strong></p>
              <p>Cloud Practitioner</p>
              <p>Developer - Associate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
