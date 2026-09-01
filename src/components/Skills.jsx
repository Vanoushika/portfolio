import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'SQL', 'Java', 'C++']
    },
    {
      title: 'AI & Generative AI',
      skills: ['LLMs', 'RAG', 'Agentic AI', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Vector Search', 'LLM Evaluation']
    },
    {
      title: 'Backend & Frontend',
      skills: ['FastAPI', 'Django', 'Django REST Framework', 'React.js', 'HTML5', 'CSS3']
    },
    {
      title: 'Databases & Vector Stores',
      skills: ['PostgreSQL', 'FAISS', 'Chroma']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Microsoft Azure', 'Azure OpenAI', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD']
    },
    {
      title: 'Security & Testing',
      skills: ['JWT', 'OAuth 2.0', 'RBAC', 'PyTest', 'Postman', 'Git']
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
