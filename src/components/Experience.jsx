import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Graduate Assistant',
      company: 'Youngstown State University',
      location: 'Ohio, USA',
      period: 'Jan 2024 - May 2025',
      achievements: [
        'Built React and FastAPI tools for organizational workflows, improving clarity and usability for 60+ users',
        'Created SQL and NoSQL indexes for analytics-style queries, reducing API response latency by 60%',
        'Integrated LLM features and vector search into backend services, improving semantic retrieval relevance by ~25%',
        'Improved cloud deployments with Docker, Kubernetes, and Git, increasing release stability by 40%'
      ],
      tech: 'Python, React, FastAPI, SQL, NoSQL, Docker, Kubernetes, Git, AWS'
    },
    {
      title: 'Software Engineer',
      company: 'Capgemini',
      location: 'Hyderabad, India',
      period: 'Dec 2022 – Dec 2023',
      achievements: [
        'Built full-stack product features using Java, Spring Boot, and React, improving workflow automation by 30%',
        'Developed REST APIs with Spring Boot and Redis caching, increasing system throughput and data reliability by 40%',
        'Built async data pipelines with Kafka and MongoDB, reducing processing delays by 22% and improving throughput',
        'Developed Java backend services with Git and CI/CD, reducing deployment defects and rollbacks by 25%'
      ],
      tech: 'Java, React, Spring Boot, REST APIs, Kafka, Redis, Kubernetes, Docker, CI/CD, AWS, MongoDB'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Amdocs',
      location: 'Noida, India',
      period: 'Mar 2022 – June 2022',
      achievements: [
        'Built Python backend services with logging and metrics, improving error detection and reliability by 20%',
        'Built REST APIs with FastAPI and Flask, improving reliability and service stability by 18% through testing',
        'Enhanced SQL workflows with PostgreSQL, reducing data-related defects impacting users by 15%',
        'Containerized services using Docker and supported CI builds with Jenkins, accelerating delivery speed by 40%'
      ],
      tech: 'Python, React, FastAPI, Flask, REST APIs, PostgreSQL, Docker, Jenkins, Kubernetes, Azure, Git'
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company} | {exp.location}</h4>
                <p className="period">{exp.period}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                <div className="tech-used">
                  <strong>Technologies:</strong> {exp.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
