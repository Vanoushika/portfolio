import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'AI Meeting Assistant',
      description: 'Full-stack AI application that automates meeting documentation, reducing post-meeting admin time by 90%. Processes 1-hour recordings in under 60 seconds with AI-powered summaries.',
      tech: ['Python', 'FastAPI', 'React', 'Vite', 'Groq API', 'Whisper', 'Llama 3.3', 'Resend'],
      features: [
        'Audio transcription using Whisper Large V3 Turbo',
        'AI-powered summaries with key points and action items',
        'Automated email delivery with professional HTML templates',
        'REST API with async endpoints and CORS configuration',
        'Deployed on Render (backend) + Vercel (frontend)'
      ],
      github: 'https://github.com/Vanoushika/ai-meeting-assistant',
      live: 'https://ai-meeting-assistant-tan.vercel.app',
      featured: true
    },
    {
      title: 'AI Customer Support & Ticket Resolution Platform',
      description: 'Agentic AI customer-support platform that analyzes tickets, retrieves knowledge, generates responses, and assists with request routing.',
      tech: ['Python', 'FastAPI', 'React.js', 'LangGraph', 'LangChain', 'RAG', 'PostgreSQL', 'Docker', 'Azure'],
      features: [
        'Multi-step AI agent workflows combining LLM reasoning, RAG, and semantic retrieval',
        'Tool execution and human-in-the-loop approval for ticket routing',
        'React dashboard for ticket management, AI recommendations, and agent review',
        'Containerized deployment on Microsoft Azure with PostgreSQL persistence'
      ],
      github: '#',
      live: null
    },
    {
      title: 'AI Job Application Analytics Dashboard',
      description: 'Full-stack platform to track applications, interview stages, and recruiting activity, with LLM-powered resume-to-job matching.',
      tech: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'LLM APIs', 'Prompt Engineering'],
      features: [
        'LLM-powered resume-to-job matching and job-description analysis',
        'Skill-gap identification and personalized match insights',
        'Analytics APIs and React visualizations for application status and interview progress',
        'Containerized deployment on Microsoft Azure'
      ],
      github: '#',
      live: null
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <span className="featured-badge">⭐ Featured</span>}
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
