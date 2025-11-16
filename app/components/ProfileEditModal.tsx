'use client';

import { useState, useEffect } from 'react';
import { User } from '../types';

interface ProfileEditModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: Partial<User> & { bio?: string; location?: string; avatar?: string }) => void;
}

export default function ProfileEditModal({
  user,
  isOpen,
  onClose,
  onSave,
}: ProfileEditModalProps) {
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState('プログラミングとデザインが好きです。Next.jsとReactで開発しています。');
  const [location, setLocation] = useState('東京都');
  const [avatarPreview, setAvatarPreview] = useState<string>(user.avatar);

  useEffect(() => {
    if (isOpen) {
      setName(user.name);
      setUsername(user.username);
      setBio('プログラミングとデザインが好きです。Next.jsとReactで開発しています。');
      setLocation('東京都');
      setAvatarPreview(user.avatar);
    }
  }, [isOpen, user]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // ファイルサイズチェック（5MBまで）
      if (file.size > 5 * 1024 * 1024) {
        alert('画像ファイルは5MB以下である必要があります。');
        return;
      }

      // 画像形式チェック
      if (!file.type.startsWith('image/')) {
        alert('画像ファイルを選択してください。');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatarPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      username,
      avatar: avatarPreview,
      bio,
      location,
    });
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-black rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800 shadow-xl">
        {/* ヘッダー */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-black z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              プロフィールを編集
            </h2>
          </div>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="p-4">
          {/* アバター */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              プロフィール画像
            </label>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-gray-800 bg-gray-300 dark:bg-gray-700 overflow-hidden relative">
                <img
                  src={avatarPreview}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="avatar-upload"
                />
                <label
                  htmlFor="avatar-upload"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm cursor-pointer text-center"
                >
                  画像を選択
                </label>
                {avatarPreview !== user.avatar && (
                  <button
                    type="button"
                    onClick={() => setAvatarPreview(user.avatar)}
                    className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    元に戻す
                  </button>
                )}
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              JPG、PNG、GIF形式の画像（最大5MB）
            </p>
          </div>

          {/* 名前 */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
            >
              表示名
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="表示名"
              maxLength={50}
              required
            />
          </div>

          {/* ユーザー名 */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
            >
              ユーザー名
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                @
              </span>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                className="w-full pl-8 pr-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="username"
                maxLength={15}
                pattern="[a-zA-Z0-9_]+"
                required
              />
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              英数字とアンダースコアのみ使用できます
            </p>
          </div>

          {/* 自己紹介 */}
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
            >
              自己紹介
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="自己紹介を入力..."
              rows={4}
              maxLength={160}
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">
              {bio.length}/160
            </p>
          </div>

          {/* 位置情報 */}
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
            >
              位置情報
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="例: 東京都"
              maxLength={30}
            />
          </div>

          {/* ボタン */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

