export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">
            Anoushika Vennamaneni
          </h1>

          <p className="text-lg text-gray-600">
            Full-Stack Engineer
          </p>

          <p className="text-gray-700 max-w-2xl">
            I design and build web applications with attention to performance,
            accessibility, and delightful details. Currently focused on
            React + Tailwind workflows and component-driven design.
          </p>

          {/* LINKS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/vanoushika"
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              className="text-blue-600 underline"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">
          Projects
        </h2>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">
              TaskFlow — Workflow Management System
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              React · Next.js · Redis · Kafka
            </p>
            <p className="mt-2 text-gray-700">
              Full-stack workflow system with real-time processing and
              CI/CD pipelines using Docker and Kubernetes.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">
              FinTrack — Growth & Insights Platform
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Node.js · GraphQL · Redis
            </p>
            <p className="mt-2 text-gray-700">
              Analytics platform with dashboards, caching, and scalable
              microservices.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">
              AI-Powered Code Reviewer
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Python · LLMs · C++
            </p>
            <p className="mt-2 text-gray-700">
              LLM-based static analysis tool reducing manual review time
              by 40%.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>FastAPI</span>
            <span>Node.js</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>AWS</span>
            <span>Redis</span>
            <span>GraphQL</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Contact
        </h2>

        <p className="text-gray-700">
          I’m available for freelance and contract work.
        </p>

        <p className="mt-2">
          📧{" "}
          <a
            href="mailto:anoushikav009@gmail.com"
            className="text-blue-600 underline"
          >
            anoushikav009@gmail.com
          </a>
        </p>

        <p className="mt-1 text-gray-600">
          Location: Remote
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} Anoushika Vennamaneni
      </footer>
    </div>
  );
}
