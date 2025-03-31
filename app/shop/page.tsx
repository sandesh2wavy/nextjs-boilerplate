'use client';

import Navigation from "../components/Navigation";

export default function Shop() {
  const products = [
    {
      name: "Web Development Course",
      price: "$99.99",
      description: "A comprehensive course covering modern web development techniques and best practices.",
      category: "Course"
    },
    {
      name: "Design System Template",
      price: "$49.99",
      description: "A complete design system template with components and documentation.",
      category: "Template"
    },
    {
      name: "React Components Library",
      price: "$79.99",
      description: "A collection of reusable React components with TypeScript support.",
      category: "Code"
    },
    {
      name: "Portfolio Template",
      price: "$39.99",
      description: "A customizable portfolio template built with Next.js and Tailwind CSS.",
      category: "Template"
    },
    {
      name: "UI/UX Design Guide",
      price: "$29.99",
      description: "A comprehensive guide to modern UI/UX design principles and practices.",
      category: "Guide"
    },
    {
      name: "API Development Course",
      price: "$89.99",
      description: "Learn to build scalable and secure APIs with Node.js and Express.",
      category: "Course"
    }
  ];

  return (
    <>
      <div className="page-bg shop" />
      <Navigation />
      <main className="page-content container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <section className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
            <p className="text-lg text-text-muted">
              Digital products and resources to help you build better web applications.
            </p>
          </section>

          {/* Categories */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap gap-4">
              {['All', 'Course', 'Template', 'Code', 'Guide'].map((category, index) => (
                <button
                  key={index}
                  className={`btn-japanese ${index === 0 ? '' : 'bg-card-bg/50'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="card animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="aspect-video bg-background/50 rounded-md mb-6"></div>
                  <span className="text-accent text-sm font-medium mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-text-muted mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{product.price}</span>
                    <button className="btn-japanese">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <span className="text-accent text-sm font-medium mb-2 block">Featured Bundle</span>
                  <h2 className="text-2xl font-bold mb-4">Complete Web Development Package</h2>
                  <p className="text-text-muted mb-6">
                    Get all the resources you need to become a full-stack developer.
                    Includes courses, templates, and premium support.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold">$199.99</span>
                    <span className="text-text-muted line-through">$399.99</span>
                    <button className="btn-japanese">Learn More</button>
                  </div>
                </div>
                <div className="md:w-1/2 aspect-video bg-background/50 rounded-md"></div>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="card text-center p-8">
              <h2 className="text-2xl font-bold mb-4">Get 10% off your first purchase</h2>
              <p className="text-text-muted mb-6">
                Subscribe to our newsletter and receive exclusive offers and updates.
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