import { Connection } from "@/types/connection";

export const mockConnections: Connection[] = [
  {
    id: "1",
    twitterId: "tabamarine220",
    displayName: "たば",
    username: "@tabamarine220",
    avatarUrl: "https://pbs.twimg.com/profile_images/1234567890/avatar.jpg", // この URL は実際のものに置き換える必要があります
    bio: "エンジニア / フルスタック",
    firstMetDate: "2024-01-15",
    category: { id: "work", name: "仕事関係" },
    tags: ["エンジニア", "Tech", "React", "Go"],
    notes: "猫を飼っている。",
    lastInteraction: "2024-03-20",
    relationship: "同業者",
    meetingContext: "Go Conference 2024",
    followUpDate: "2025-04-01",
  },
  // 他のモックデータは後で追加
];
