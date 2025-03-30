'use client';

import { useTheme } from "./providers";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-black relative transition-colors duration-200">
      <button
        onClick={toggleTheme}
        className="fixed top-8 right-8 p-3 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        )}
      </button>
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-6xl font-bold text-black dark:text-white transition-colors duration-200">
          Sandesh Bhandari
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl transition-colors duration-200">
          Software Engineer & Web Developer
        </p>
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <a
            href="https://github.com/sandesh2wavy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sandeshbhandari171/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0077B5] text-white rounded-full hover:opacity-90 transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:sandeshbhandari171@gmail.com"
            className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
