'use client';

import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <div className="page-bg about" />
      <Navigation />
      <main className="page-content container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Bio Section */}
          <section className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">
                I'm Sandesh Bhandari, a software engineer and web developer with a passion for creating beautiful, functional, and user-friendly applications. With a strong foundation in modern web technologies and a keen eye for design, I bring ideas to life through code.
              </p>
              <p className="text-lg mb-6">
                My journey in technology began with a fascination for problem-solving and creative expression. Today, I specialize in building robust web applications that combine cutting-edge technology with intuitive user experiences.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>React.js & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                  <li>UI/UX Design Principles</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>RESTful APIs</li>
                  <li>Database Design</li>
                  <li>Cloud Services (AWS)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                <p className="text-text-muted mb-4">Company Name • 2020 - Present</p>
                <ul className="space-y-2 text-text-muted">
                  <li>Developed and maintained web applications using React and Node.js</li>
                  <li>Implemented responsive designs and improved user experience</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Web Developer</h3>
                <p className="text-text-muted mb-4">Previous Company • 2018 - 2020</p>
                <ul className="space-y-2 text-text-muted">
                  <li>Built and maintained client websites using modern web technologies</li>
                  <li>Optimized website performance and implemented SEO best practices</li>
                  <li>Worked directly with clients to understand and meet their needs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Personal Insights */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold mb-8">Personal Insights</h2>
            <div className="card">
              <p className="text-lg mb-4">
                Beyond coding, I'm passionate about design, technology, and continuous learning. I believe in creating solutions that not only solve problems but also provide delightful user experiences.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing and mentoring.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
} 