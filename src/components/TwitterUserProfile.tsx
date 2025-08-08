import { useTwitterUser } from "@/hooks/useTwitterUser";
import Image from "next/image";

interface TwitterUserProfileProps {
  username: string;
}

export function TwitterUserProfile({ username }: TwitterUserProfileProps) {
  const { userData, isLoading, error } = useTwitterUser(username);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        プロフィールの読み込みに失敗しました
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="text-gray-500 text-center p-4">
        ユーザーが見つかりませんでした
      </div>
    );
  }

  // プロフィール画像URLから_normal.jpgを取り除いて高解像度版を取得
  const highResImageUrl = userData.profileImageUrl.replace("_normal", "");

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="relative w-24 h-24">
          <Image
            src={highResImageUrl}
            alt={userData.name}
            fill
            className="rounded-full object-cover"
            sizes="96px"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold text-gray-900 truncate">
            {userData.name}
          </h2>
          <a
            href={`https://twitter.com/${userData.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary"
          >
            @{userData.username}
          </a>
        </div>
        {userData.description && (
          <p className="mt-1 text-gray-500">{userData.description}</p>
        )}
      </div>
    </div>
  );
}
