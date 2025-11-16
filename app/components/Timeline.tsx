'use client';

import { useState } from 'react';
import { Post } from '../types';
import Tweet from './Tweet';
import PostForm from './PostForm';

interface TimelineProps {
  initialPosts: Post[];
}

export default function Timeline({ initialPosts }: TimelineProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      user: {
        id: 'current_user',
        name: 'あなた',
        username: 'you',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you',
      },
      content,
      timestamp: new Date(),
      likes: 0,
      retweets: 0,
      replies: 0,
      isLiked: false,
      isRetweeted: false,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-black min-h-screen">
      {/* ヘッダー */}
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 z-10">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          ホーム
        </h1>
      </div>

      {/* 投稿フォーム */}
      <PostForm onSubmit={handleNewPost} />

      {/* タイムライン */}
      <div>
        {posts.map((post) => (
          <Tweet key={post.id} post={post} />
        ))}
      </div>

      {/* フッター */}
      <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
        これ以上表示する投稿はありません
      </div>
    </div>
  );
}

