'use client';

import Navigation from "../components/Navigation";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development...",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Building Scalable Applications with Next.js",
      excerpt: "A comprehensive guide to creating performant and scalable web applications using Next.js...",
      date: "March 10, 2024",
      category: "Development",
      readTime: "8 min read"
    },
    {
      title: "Design Systems in Modern Web Development",
      excerpt: "How to create and maintain a consistent design system for your web applications...",
      date: "March 5, 2024",
      category: "Design",
      readTime: "6 min read"
    },
    {
      title: "The Impact of AI on Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we write and maintain code...",
      date: "February 28, 2024",
      category: "AI",
      readTime: "7 min read"
    }
  ];

  return (
    <>
      <div className="page-bg blog" />
      <Navigation />
      <main className="page-content container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <section className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-text-muted">
              Thoughts, insights, and experiences from my journey in web development.
            </p>
          </section>

          {/* Featured Post */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <span className="text-accent text-sm font-medium mb-2 block">Featured Post</span>
                  <h2 className="text-2xl font-bold mb-4">Understanding Modern Web Architecture</h2>
                  <p className="text-text-muted mb-6">
                    A deep dive into the architecture of modern web applications, exploring best practices,
                    common patterns, and emerging technologies that are shaping the future of web development.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span>March 20, 2024</span>
                    <span>•</span>
                    <span>10 min read</span>
                  </div>
                </div>
                <div className="md:w-1/3 aspect-video bg-background/50 rounded-md"></div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="card animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <span className="text-accent text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-text-muted mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">{post.date}</span>
                    <span className="text-text-muted">{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-2xl font-bold mb-8">Categories</h2>
            <div className="flex flex-wrap gap-4">
              {['All', 'Technology', 'Development', 'Design', 'AI', 'Career'].map((category, index) => (
                <button
                  key={index}
                  className={`btn-japanese ${index === 0 ? '' : 'bg-card-bg/50'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="card text-center p-8">
              <h2 className="text-2xl font-bold mb-4">Subscribe to my newsletter</h2>
              <p className="text-text-muted mb-6">
                Get the latest posts and updates delivered directly to your inbox.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="btn-japanese">Subscribe</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
} 