'use client';

import { useState } from 'react';

interface PostFormProps {
  onSubmit: (content: string) => void;
}

export default function PostForm({ onSubmit }: PostFormProps) {
  const [content, setContent] = useState('');
  const maxLength = 280;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && content.length <= maxLength) {
      onSubmit(content);
      setContent('');
    }
  };

  const remainingChars = maxLength - content.length;
  const isDisabled = !content.trim() || content.length > maxLength;

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 px-4 py-3">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          {/* アバター */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-400 text-xl">👤</span>
            </div>
          </div>

          {/* 入力エリア */}
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="いまどうしてる？"
              className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg resize-none outline-none mb-3"
              rows={3}
            />

            {/* ボタンと文字数カウント */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {remainingChars < 20 && (
                  <span
                    className={
                      remainingChars < 0
                        ? 'text-red-500'
                        : remainingChars < 20
                        ? 'text-orange-500'
                        : ''
                    }
                  >
                    {remainingChars}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 dark:disabled:bg-gray-700 dark:disabled:text-gray-600 text-white font-semibold rounded-full transition-colors disabled:cursor-not-allowed"
              >
                投稿
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

