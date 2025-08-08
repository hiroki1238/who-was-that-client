import { TwitterApi } from "twitter-api-v2";

export interface TwitterUserData {
  id: string;
  username: string;
  name: string;
  profileImageUrl: string;
  description?: string;
}

export async function getTwitterUserByUsername(
  username: string
): Promise<TwitterUserData | null> {
  try {
    // ユーザー名から@を削除
    const cleanUsername = username.replace("@", "");

    console.log(
      "Bearer Token:",
      process.env.TWITTER_BEARER_TOKEN
        ? "設定されています"
        : "設定されていません"
    );
    console.log("Fetching user:", cleanUsername);

    // APIリクエストを直接実行
    const response = await fetch(
      `https://api.twitter.com/2/users/by/username/${cleanUsername}?user.fields=profile_image_url,description,name,username`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Twitter API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Response:", data);

    if (!data.data) {
      console.log("No user data found");
      return null;
    }

    const userData = {
      id: data.data.id,
      username: data.data.username,
      name: data.data.name,
      profileImageUrl: data.data.profile_image_url || "",
      description: data.data.description,
    };

    console.log("Processed user data:", userData);
    return userData;
  } catch (error) {
    console.error("Error fetching Twitter user:", error);
    throw error;
  }
}
