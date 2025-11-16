import { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: 'user0',
    user: {
      id: 'current_user',
      name: 'あなた',
      username: 'you',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you',
    },
    content: 'プロフィールページを作成しました！SNSアプリの開発が順調に進んでいます🎉 #プログラミング #NextJS',
    timestamp: new Date(Date.now() - 1000 * 60 * 10), // 10分前
    likes: 45,
    retweets: 12,
    replies: 8,
    isLiked: true,
    isRetweeted: false,
  },
  {
    id: 'user0-2',
    user: {
      id: 'current_user',
      name: 'あなた',
      username: 'you',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you',
    },
    content: '今日は新しいプロジェクトを始めました。Xのようなタイムライン機能を実装しています✨',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1), // 1時間前
    likes: 89,
    retweets: 23,
    replies: 15,
    isLiked: false,
    isRetweeted: true,
  },
  {
    id: '1',
    user: {
      id: 'user1',
      name: '田中 太郎',
      username: 'tanaka_taro',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tanaka',
    },
    content: '今日は良い天気ですね！☀️ 散歩に行ってきました。',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30分前
    likes: 24,
    retweets: 5,
    replies: 3,
    isLiked: false,
    isRetweeted: false,
  },
  {
    id: '2',
    user: {
      id: 'user2',
      name: '佐藤 花子',
      username: 'sato_hanako',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sato',
    },
    content: '新しいカフェを発見しました！コーヒーが美味しいです☕ #カフェ巡り',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2時間前
    likes: 156,
    retweets: 42,
    replies: 18,
    isLiked: true,
    isRetweeted: false,
  },
  {
    id: '3',
    user: {
      id: 'user3',
      name: '鈴木 一郎',
      username: 'suzuki_ichiro',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=suzuki',
    },
    content: 'プログラミングの勉強をしています。ReactとNext.jsを使った開発が楽しい！ #プログラミング #React #Nextjs',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5時間前
    likes: 89,
    retweets: 12,
    replies: 7,
    isLiked: false,
    isRetweeted: true,
  },
  {
    id: '4',
    user: {
      id: 'user4',
      name: '山田 美咲',
      username: 'yamada_misaki',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yamada',
    },
    content: '本日のお昼ごはん🍱 定食屋さんで食べました。',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8時間前
    likes: 67,
    retweets: 8,
    replies: 5,
    isLiked: false,
    isRetweeted: false,
  },
  {
    id: '5',
    user: {
      id: 'user5',
      name: '高橋 健太',
      username: 'takahashi_kenta',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=takahashi',
    },
    content: '週末は映画を見に行く予定です🎬 何かオススメの作品はありますか？',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12時間前
    likes: 234,
    retweets: 45,
    replies: 56,
    isLiked: true,
    isRetweeted: false,
  },
  {
    id: '6',
    user: {
      id: 'user6',
      name: '伊藤 さくら',
      username: 'ito_sakura',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ito',
    },
    content: '朝のランニングが気持ちいい🏃‍♀️ 健康的な生活を心がけています！',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 15), // 15時間前
    likes: 312,
    retweets: 78,
    replies: 23,
    isLiked: false,
    isRetweeted: false,
  },
];

