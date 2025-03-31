'use client';

import Navigation from "../components/Navigation";

export default function Work() {
  return (
    <>
      <div className="page-bg work" />
      <Navigation />
      <main className="page-content container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <section className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Work</h1>
            <p className="text-lg text-text-muted">
              A collection of projects that showcase my skills and passion for web development.
            </p>
          </section>

          {/* Featured Projects */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="aspect-video bg-background/50 rounded-md mb-6"></div>
                <h3 className="text-xl font-bold mb-2">Project One</h3>
                <p className="text-text-muted mb-4">
                  A web application that combines modern design with powerful functionality.
                  Built with React, Node.js, and MongoDB.
                </p>
                <div className="flex gap-4">
                  <button className="btn-japanese">View Project</button>
                  <button className="btn-japanese bg-card-bg/50">Source Code</button>
                </div>
              </div>

              <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="aspect-video bg-background/50 rounded-md mb-6"></div>
                <h3 className="text-xl font-bold mb-2">Project Two</h3>
                <p className="text-text-muted mb-4">
                  An e-commerce platform with a focus on user experience and performance.
                  Built with Next.js and Stripe integration.
                </p>
                <div className="flex gap-4">
                  <button className="btn-japanese">View Project</button>
                  <button className="btn-japanese bg-card-bg/50">Source Code</button>
                </div>
              </div>
            </div>
          </section>

          {/* Other Projects */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="card animate-fade-in"
                  style={{ animationDelay: `${0.1 * (i + 3)}s` }}
                >
                  <h3 className="text-lg font-bold mb-2">Project {i + 2}</h3>
                  <p className="text-text-muted mb-4">
                    A brief description of the project and the technologies used.
                  </p>
                  <div className="flex gap-2">
                    <button className="btn-japanese text-sm">View</button>
                    <button className="btn-japanese bg-card-bg/50 text-sm">Code</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Open Source */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8">Open Source Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold mb-2">Repository One</h3>
                <p className="text-text-muted mb-4">
                  Contributed to improving documentation and adding new features.
                </p>
                <button className="btn-japanese">View on GitHub</button>
              </div>
              <div className="card animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <h3 className="text-xl font-bold mb-2">Repository Two</h3>
                <p className="text-text-muted mb-4">
                  Fixed bugs and implemented performance improvements.
                </p>
                <button className="btn-japanese">View on GitHub</button>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-text-muted mb-8">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a href="/contact" className="btn-japanese inline-flex items-center gap-2">
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </section>
        </div>
      </main>
    </>
  );
} 