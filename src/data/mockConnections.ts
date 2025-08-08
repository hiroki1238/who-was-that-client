import { Connection } from "@/types/connection";

export const mockConnections: Connection[] = [
  {
    id: "1",
    twitterId: "tabamarine220",
    displayName: "たば",
    username: "@tabamarine220",
    avatarUrl: "https://pbs.twimg.com/profile_images/1234567890/avatar.jpg", // この URL は実際のものに置き換える必要があります
    bio: "エンジニア / 技術ブロガー",
    firstMetDate: "2024-01-15",
    category: { id: "work", name: "仕事関係" },
    tags: ["エンジニア", "Tech", "Next.js"],
    notes: "技術イベントで知り合う",
    lastInteraction: "2024-03-20",
    relationship: "同業者",
    meetingContext: "Tech Conference 2024",
    followUpDate: "2024-04-01",
  },
  // 他のモックデータは後で追加
];
