'use client';

import { Post } from '../types';
import { useState } from 'react';

interface TweetProps {
  post: Post;
}

export default function Tweet({ post }: TweetProps) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [retweets, setRetweets] = useState(post.retweets);
  const [isRetweeted, setIsRetweeted] = useState(post.isRetweeted);

  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds}秒前`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}分前`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours}時間前`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days}日前`;
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleRetweet = () => {
    if (isRetweeted) {
      setRetweets(retweets - 1);
    } else {
      setRetweets(retweets + 1);
    }
    setIsRetweeted(!isRetweeted);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
      <div className="flex gap-3">
        {/* アバター */}
        <div className="flex-shrink-0">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-12 h-12 rounded-full"
          />
        </div>

        {/* コンテンツ */}
        <div className="flex-1 min-w-0">
          {/* ユーザー情報 */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-gray-900 dark:text-white hover:underline">
              {post.user.name}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              @{post.user.username}
            </span>
            <span className="text-gray-500 dark:text-gray-400">·</span>
            <span className="text-gray-500 dark:text-gray-400">
              {formatTimeAgo(post.timestamp)}
            </span>
          </div>

          {/* 投稿内容 */}
          <p className="text-gray-900 dark:text-white mb-3 whitespace-pre-wrap break-words">
            {post.content}
          </p>

          {/* アクションボタン */}
          <div className="flex items-center justify-between max-w-md mt-1">
            {/* 返信 */}
            <button className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <svg
                className="w-5 h-5 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 rounded-full p-1 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {post.replies > 0 && (
                <span className="text-sm">{post.replies}</span>
              )}
            </button>

            {/* リツイート */}
            <button
              onClick={handleRetweet}
              className={`group flex items-center gap-2 transition-colors ${
                isRetweeted
                  ? 'text-green-500 dark:text-green-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400'
              }`}
            >
              <svg
                className={`w-5 h-5 rounded-full p-1 transition-colors ${
                  isRetweeted
                    ? 'bg-green-100 dark:bg-green-900/30'
                    : 'group-hover:bg-green-100 dark:group-hover:bg-green-900/30'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {retweets > 0 && <span className="text-sm">{retweets}</span>}
            </button>

            {/* いいね */}
            <button
              onClick={handleLike}
              className={`group flex items-center gap-2 transition-colors ${
                isLiked
                  ? 'text-red-500 dark:text-red-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400'
              }`}
            >
              <svg
                className={`w-5 h-5 rounded-full p-1 transition-colors ${
                  isLiked
                    ? 'bg-red-100 dark:bg-red-900/30'
                    : 'group-hover:bg-red-100 dark:group-hover:bg-red-900/30'
                }`}
                fill={isLiked ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {likes > 0 && <span className="text-sm">{likes}</span>}
            </button>

            {/* 共有 */}
            <button className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <svg
                className="w-5 h-5 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 rounded-full p-1 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

