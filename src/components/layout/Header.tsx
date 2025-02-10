import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()

  return (
    <header className="h-nav-height md:h-mobile-nav-height bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto h-full px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-brand font-bold text-primary">
            15Minutes
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <select
            className="bg-transparent border-none focus:ring-0"
            value={router.locale}
            onChange={(e) => {
              router.push(router.pathname, router.pathname, {
                locale: e.target.value,
              })
            }}
          >
            <option value="en">EN</option>
            <option value="zh-CN">简体中文</option>
            <option value="zh-TW">繁體中文</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
          </select>
        </div>
      </div>
    </header>
  )
} 