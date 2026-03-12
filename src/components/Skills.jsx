import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'Go', 'SQL']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Node.js', 'HTML5', 'CSS3', 'Vite', 'Responsive Design']
    },
    {
      title: 'Backend & APIs',
      skills: ['FastAPI', 'Flask', 'Django', 'Spring Boot', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Cassandra', 'Vector DBs']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Jenkins']
    },
    {
      title: 'Tools & Systems',
      skills: ['Kafka', 'WebSockets', 'Event-driven', 'LLMs', 'Agile', 'System Design']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
