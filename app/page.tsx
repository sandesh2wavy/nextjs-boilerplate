import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-black">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-6xl font-bold text-black dark:text-white">
          Sandesh Bhandari
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Welcome to my website
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/sandesh2wavy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
