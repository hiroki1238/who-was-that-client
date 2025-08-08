export interface Connection {
  id: string;
  twitterId: string;
  displayName: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  firstMetDate?: string;
  category: ConnectionCategory;
  tags: string[];
  notes?: string;
  lastInteraction?: string;
  relationship?: string;
  contactInfo?: {
    email?: string;
    phone?: string;
    other?: string;
  };
  meetingContext?: string;
  followUpDate?: string;
}

export type ConnectionCategory = {
  id: string;
  name: string;
  description?: string;
};

// カテゴリーの定義
export const DEFAULT_CATEGORIES: ConnectionCategory[] = [
  { id: "all", name: "すべての繋がり" },
  { id: "friends", name: "友人" },
  { id: "work", name: "会社" },
  { id: "work", name: "仕事関連" },
  { id: "event", name: "イベント" },
  { id: "community", name: "野球" },
  { id: "other", name: "その他" },
];
