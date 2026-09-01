import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'AI Full Stack Engineer',
      company: 'IQVIA',
      location: 'Charlotte, NC (Remote)',
      period: 'Feb 2026 - Present',
      achievements: [
        'Engineer production-grade Generative AI applications using Python, FastAPI, React.js, and LLM APIs for healthcare and life-sciences workflows, cutting manual information-retrieval time by ~35%',
        'Design end-to-end RAG pipelines supporting 10,000+ enterprise documents, covering ingestion, chunking, embeddings, retrieval, reranking, and grounded response generation',
        'Develop agentic AI workflows using LangGraph and LangChain, orchestrating LLM reasoning, tool calling, and human-in-the-loop approval for multi-step business processes',
        'Build asynchronous FastAPI microservices supporting 5,000+ API requests per day, improving acceptable LLM response rates from ~78% to 91%'
      ],
      tech: 'Python, FastAPI, React.js, LangChain, LangGraph, RAG, Docker, Kubernetes, Azure, PostgreSQL, CI/CD'
    },
    {
      title: 'Graduate Assistant',
      company: 'Youngstown State University',
      location: 'Youngstown, OH',
      period: 'Aug 2024 - Aug 2025',
      achievements: [
        'Developed 3 AI-enabled academic prototypes, including a document Q&A app using Python, FastAPI, React.js, and LLM APIs',
        'Implemented prototype RAG workflows using FAISS/Chroma for context-aware responses from academic documents',
        'Experimented with 30+ prompt variations using LangChain to evaluate context handling and response relevance',
        'Built 10+ FastAPI REST endpoints and reusable React components for document upload, processing, and retrieval'
      ],
      tech: 'Python, FastAPI, React.js, LangChain, RAG, FAISS, Chroma, PostgreSQL, Docker, Azure, Git'
    },
    {
      title: 'Full Stack Developer',
      company: 'Wunderman Thompson Commerce',
      location: 'Noida, India',
      period: 'May 2022 - Nov 2023',
      achievements: [
        'Developed and maintained Django full-stack commerce applications for 4 client brands, serving 50,000+ monthly active users',
        'Designed and integrated 20+ RESTful APIs for product catalogs, checkout, accounts, and order processing',
        'Built 25+ reusable React.js components, improving frontend consistency and reducing duplicate development effort',
        'Optimized Django ORM queries and PostgreSQL data models, improving response times by ~25%'
      ],
      tech: 'Python, Django, React.js, PostgreSQL, JWT, OAuth 2.0, Docker, Kubernetes, Azure, Jenkins, CI/CD'
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
