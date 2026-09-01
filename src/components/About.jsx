import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an <strong>AI Full-Stack Engineer</strong> with 3+ years of experience spanning Python full-stack 
              engineering and Generative AI application development. I hold a Master's in Computer Science from 
              Youngstown State University.
            </p>
            <p>
              My journey includes roles at <strong>IQVIA</strong>, <strong>Youngstown State University</strong>, 
              and <strong>Wunderman Thompson Commerce</strong>, where I've:
            </p>
            <ul>
              <li>Designed end-to-end RAG pipelines supporting 10,000+ enterprise documents</li>
              <li>Built agentic AI workflows with LangGraph and LangChain, including human-in-the-loop approval</li>
              <li>Improved acceptable LLM response rates from ~78% to 91% through prompt engineering and evaluation</li>
              <li>Built asynchronous FastAPI microservices supporting 5,000+ API requests per day</li>
            </ul>
            <p>
              I'm passionate about <strong>Retrieval-Augmented Generation</strong>, <strong>agentic AI</strong>, 
              and building production-ready systems that solve real problems.
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
            </div>
            <div className="highlight-card">
              <h3>💼 Experience</h3>
              <p><strong>3+ Years</strong></p>
              <p>AI Full-Stack Development</p>
              <p>IQVIA, Wunderman Thompson, YSU</p>
            </div>
            <div className="highlight-card">
              <h3>☁️ Certifications</h3>
              <p><strong>AWS Certified</strong></p>
              <p>Developer - Associate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
