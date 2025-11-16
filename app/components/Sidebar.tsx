'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside className="hidden lg:flex lg:w-64 xl:w-80 flex-col items-end px-4 py-4 sticky top-0 h-screen">
      <div className="w-56 xl:w-72">
        <Link href="/" className="block">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 px-4 cursor-pointer">
            SNS
          </h2>
        </Link>
        <nav className="space-y-2">
          <Link
            href="/"
            className={`flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              isActive('/')
                ? 'text-gray-900 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.197.364.652.5 1.017.303L2 8.806V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V8.806l.543.294c.197.107.41.16.625.16.204 0 .408-.05.598-.163.364-.197.5-.652.303-1.017zM18 19H6V9.09l6-3.25 6 3.25V19z" />
            </svg>
            ホーム
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.25 3.018H4.75A2.753 2.753 0 0 0 2 5.77v12.495a2.754 2.754 0 0 0 2.75 2.753h14.5A2.754 2.754 0 0 0 22 18.265V5.77a2.753 2.753 0 0 0-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367a.81.81 0 0 1-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83a2.265 2.265 0 0 0 2.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z" />
            </svg>
            通知
          </Link>
          <Link
            href="/profile"
            className={`flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              isActive('/profile')
                ? 'text-gray-900 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.168c-.272 2.024-.008 3.46.806 4.392.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.12 3.16-3.12s2.998 1.92 3.16 3.12c.207 1.55.057 2.69-.33 3.314-.277.316-.7.482-1.83.482-1.13 0-1.553-.166-1.83-.482-.387-.624-.537-1.764-.33-3.314zm3.16 5.184c-2.558 0-4.464 1.602-5.41 3.968-.217.58-.334 1.217-.334 1.897 0 2.623 2.317 4.748 5.744 4.748s5.744-2.125 5.744-4.748c0-.68-.117-1.317-.334-1.897-.946-2.366-2.852-3.968-5.41-3.968zm-2.66 6.112c.38-.536.994-1.12 2.66-1.12s2.28.584 2.66 1.12c-.38.536-.994 1.12-2.66 1.12s-2.28-.584-2.66-1.12zm-3.44-4.75c-.35-.114-.55-.477-.44-.827.11-.35.477-.55.827-.44.35.11.55.477.44.827-.11.35-.477.55-.827.44zM18.1 12.05c-.35-.114-.55-.477-.44-.827.11-.35.477-.55.827-.44.35.11.55.477.44.827-.11.35-.477.55-.827.44z" />
            </svg>
            プロフィール
          </Link>
        </nav>
        <button className="w-full mt-4 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors">
          投稿する
        </button>
      </div>
    </aside>
  );
}

