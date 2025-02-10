export default function Footer() {
  return (
    <footer className="h-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto h-full px-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div>
          © {new Date().getFullYear()} 15Minutes Timer. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/yourusername/15-minutes-timer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
} 