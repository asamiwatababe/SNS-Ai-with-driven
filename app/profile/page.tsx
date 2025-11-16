'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { currentUser as initialUser } from '../data/mockUser';
import { mockPosts } from '../data/mockPosts';
import Tweet from '../components/Tweet';
import ProfileEditModal from '../components/ProfileEditModal';
import { User } from '../types';

export default function ProfilePage() {
  const [user, setUser] = useState<User>(initialUser);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [bio, setBio] = useState('プログラミングとデザインが好きです。Next.jsとReactで開発しています。');
  const [location, setLocation] = useState('東京都');

  // 現在のユーザーの投稿のみをフィルター（実際のアプリではAPIから取得）
  const userPosts = mockPosts.filter((post) => post.user.id === user.id);

  const handleSaveProfile = (updatedData: Partial<User> & { bio?: string; location?: string; avatar?: string }) => {
    setUser((prev) => ({
      ...prev,
      ...updatedData,
    }));
    if (updatedData.bio) {
      setBio(updatedData.bio);
    }
    if (updatedData.location) {
      setLocation(updatedData.location);
    }
    // アバターは updatedData.avatar で自動的に setUser に含まれる
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="flex">
        {/* サイドバー（左） */}
        <Sidebar />

        {/* メインコンテンツ */}
        <main className="flex-1 border-x border-gray-200 dark:border-gray-800">
          <div className="bg-white dark:bg-black">
            {/* ヘッダー */}
            <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 z-10 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span className="font-semibold">ホームに戻る</span>
              </Link>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                プロフィール
              </h1>
              <div className="w-24"></div> {/* バランス用のスペーサー */}
            </div>

            {/* プロフィール情報 */}
            <div className="px-4 pb-4 pt-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div className="w-32 h-32 rounded-full border-4 border-white dark:border-black bg-gray-300 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="mt-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  プロフィールを編集
                </button>
              </div>

              <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {user.name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  @{user.username}
                </p>
                <p className="text-gray-900 dark:text-white mb-4">
                  {bio}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>2024年1月より参加</span>
                  </div>
                </div>
              </div>

              {/* 統計情報 */}
              <div className="flex gap-6">
                <div className="cursor-pointer hover:underline">
                  <span className="font-semibold text-gray-900 dark:text-white">156</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">フォロー中</span>
                </div>
                <div className="cursor-pointer hover:underline">
                  <span className="font-semibold text-gray-900 dark:text-white">1,234</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">フォロワー</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">{userPosts.length}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">投稿</span>
                </div>
              </div>
            </div>

            {/* タブ */}
            <div className="flex border-b border-gray-200 dark:border-gray-800">
              <button className="flex-1 px-4 py-3 font-semibold text-gray-900 dark:text-white border-b-2 border-blue-500">
                投稿
              </button>
              <button className="flex-1 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                返信
              </button>
              <button className="flex-1 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                メディア
              </button>
              <button className="flex-1 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                いいね
              </button>
            </div>

            {/* ユーザーの投稿一覧 */}
            <div>
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <Tweet key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <p className="text-lg font-semibold mb-2">まだ投稿がありません</p>
                  <p className="text-sm">最初の投稿をしてみましょう！</p>
                </div>
              )}
            </div>
          </div>
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
        </aside>
      </div>

      {/* プロフィール編集モーダル */}
      <ProfileEditModal
        user={user}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveProfile}
      />
    </div>
  );
}

