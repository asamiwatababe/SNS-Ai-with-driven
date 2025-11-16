import Timeline from './components/Timeline';
import Sidebar from './components/Sidebar';
import { mockPosts } from './data/mockPosts';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="flex">
        {/* サイドバー（左） */}
        <Sidebar />

        {/* メインコンテンツ */}
        <main className="flex-1 border-x border-gray-200 dark:border-gray-800">
          <Timeline initialPosts={mockPosts} />
        </main>

        {/* サイドバー（右） */}
        <aside className="hidden xl:block xl:w-80 p-4 sticky top-0 h-screen">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4 mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              トレンド
            </h3>
            <div className="space-y-4">
              <div className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                <p className="text-sm text-gray-500 dark:text-gray-400">トレンド</p>
                <p className="font-bold text-gray-900 dark:text-white">#プログラミング</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1,234件の投稿</p>
              </div>
              <div className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                <p className="text-sm text-gray-500 dark:text-gray-400">トレンド</p>
                <p className="font-bold text-gray-900 dark:text-white">#NextJS</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">567件の投稿</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              フォロー中
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">ユーザー名</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">@username</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
