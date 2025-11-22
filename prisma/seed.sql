-- シードデータの挿入
-- SupabaseのSQLエディタで実行してください

-- 既存のデータを削除（オプション：既存データをクリアしたい場合）
-- TRUNCATE TABLE users, posts, likes, retweets, follows CASCADE;

-- ユーザーの挿入
-- パスワードは "password123" をbcryptでハッシュ化した値（簡易版）
-- 実際のアプリでは適切なハッシュ化が必要です
INSERT INTO users (id, username, "displayName", password, bio, "profileImage", "coverImage", "createdAt", "updatedAt") VALUES
('550e8400-e29b-41d4-a716-446655440000', 'you', 'あなた', '$2a$10$rOzJqJqJqJqJqJqJqJqJqO', 'SNSアプリ開発中です！', 'https://api.dicebear.com/7.x/avataaars/svg?seed=you', NULL, NOW() - INTERVAL '30 days', NOW()),
('550e8400-e29b-41d4-a716-446655440001', 'tanaka_taro', '田中 太郎', '$2a$10$rOzJqJqJqJqJqJqJqJqJqO', '散歩が好きです', 'https://api.dicebear.com/7.x/avataaars/svg?seed=tanaka', NULL, NOW() - INTERVAL '25 days', NOW()),
('550e8400-e29b-41d4-a716-446655440002', 'sato_hanako', '佐藤 花子', '$2a$10$rOzJqJqJqJqJqJqJqJqJqO', 'カフェ巡りが趣味です', 'https://api.dicebear.com/7.x/avataaars/svg?seed=sato', NULL, NOW() - INTERVAL '20 days', NOW()),
('550e8400-e29b-41d4-a716-446655440003', 'suzuki_ichiro', '鈴木 一郎', '$2a$10$rOzJqJqJqJqJqJqJqJqJqO', 'プログラミング学習中', 'https://api.dicebear.com/7.x/avataaars/svg?seed=suzuki', NULL, NOW() - INTERVAL '15 days', NOW()),
('550e8400-e29b-41d4-a716-446655440004', 'yamada_misaki', '山田 美咲', '$2a$10$rOzJqJqJqJqJqJqJqJqJqO', 'グルメが好きです', 'https://api.dicebear.com/7.x/avataaars/svg?seed=yamada', NULL, NOW() - INTERVAL '10 days', NOW()),
('550e8400-e29b-41d4-a716-446655440005', 'takahashi_kenta', '高橋 健太', '$2a$10$rOzJqJqJqJqJqJqJqJqJqO', '映画好きです', 'https://api.dicebear.com/7.x/avataaars/svg?seed=takahashi', NULL, NOW() - INTERVAL '8 days', NOW()),
('550e8400-e29b-41d4-a716-446655440006', 'ito_sakura', '伊藤 さくら', '$2a$10$rOzJqJqJqJqJqJqJqJqJqO', 'ランニングが日課です', 'https://api.dicebear.com/7.x/avataaars/svg?seed=ito', NULL, NOW() - INTERVAL '5 days', NOW());

-- 投稿の挿入
INSERT INTO posts (id, "userId", content, "replyTo", "replyCount", "createdAt", "updatedAt") VALUES
('660e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440000', 'プロフィールページを作成しました！SNSアプリの開発が順調に進んでいます🎉 #プログラミング #NextJS', NULL, 0, NOW() - INTERVAL '10 minutes', NOW() - INTERVAL '10 minutes'),
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440000', '今日は新しいプロジェクトを始めました。Xのようなタイムライン機能を実装しています✨', NULL, 0, NOW() - INTERVAL '1 hour', NOW() - INTERVAL '1 hour'),
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', '今日は良い天気ですね！☀️ 散歩に行ってきました。', NULL, 0, NOW() - INTERVAL '30 minutes', NOW() - INTERVAL '30 minutes'),
('660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440002', '新しいカフェを発見しました！コーヒーが美味しいです☕ #カフェ巡り', NULL, 0, NOW() - INTERVAL '2 hours', NOW() - INTERVAL '2 hours'),
('660e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440003', 'プログラミングの勉強をしています。ReactとNext.jsを使った開発が楽しい！ #プログラミング #React #Nextjs', NULL, 0, NOW() - INTERVAL '5 hours', NOW() - INTERVAL '5 hours'),
('660e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440004', '本日のお昼ごはん🍱 定食屋さんで食べました。', NULL, 0, NOW() - INTERVAL '8 hours', NOW() - INTERVAL '8 hours'),
('660e8400-e29b-41d4-a716-446655440006', '550e8400-e29b-41d4-a716-446655440005', '週末は映画を見に行く予定です🎬 何かオススメの作品はありますか？', NULL, 0, NOW() - INTERVAL '12 hours', NOW() - INTERVAL '12 hours'),
('660e8400-e29b-41d4-a716-446655440007', '550e8400-e29b-41d4-a716-446655440006', '朝のランニングが気持ちいい🏃‍♀️ 健康的な生活を心がけています！', NULL, 0, NOW() - INTERVAL '15 hours', NOW() - INTERVAL '15 hours');

-- いいねの挿入（一部の投稿にいいねを追加）
INSERT INTO likes (id, "userId", "postId", "createdAt") VALUES
('770e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440000', '660e8400-e29b-41d4-a716-446655440000', NOW() - INTERVAL '9 minutes'),
('770e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440000', NOW() - INTERVAL '8 minutes'),
('770e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440003', NOW() - INTERVAL '1 hour 50 minutes'),
('770e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440003', NOW() - INTERVAL '1 hour 45 minutes'),
('770e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005', '660e8400-e29b-41d4-a716-446655440006', NOW() - INTERVAL '11 hours 30 minutes');

-- リツイートの挿入
INSERT INTO retweets (id, "userId", "postId", "createdAt") VALUES
('880e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440000', '660e8400-e29b-41d4-a716-446655440001', NOW() - INTERVAL '50 minutes'),
('880e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440004', NOW() - INTERVAL '4 hours 30 minutes');

-- フォロー関係の挿入
INSERT INTO follows (id, "followerId", "followingId", "createdAt") VALUES
('990e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001', NOW() - INTERVAL '20 days'),
('990e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440002', NOW() - INTERVAL '18 days'),
('990e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440000', NOW() - INTERVAL '15 days'),
('990e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440000', NOW() - INTERVAL '12 days'),
('990e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440000', NOW() - INTERVAL '10 days');

