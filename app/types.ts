export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  timestamp: Date;
  likes: number;
  retweets: number;
  replies: number;
  isLiked: boolean;
  isRetweeted: boolean;
}

