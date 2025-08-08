import { useTwitterUser } from "@/hooks/useTwitterUser";
import Image from "next/image";

interface TwitterProfileImageProps {
  twitterId: string;
  size?: number;
}

export function TwitterProfileImage({
  twitterId,
  size = 40,
}: TwitterProfileImageProps) {
  const { userData, isLoading, error } = useTwitterUser(twitterId);

  // ローディング中やエラー時のフォールバック表示
  if (isLoading || error || !userData) {
    return (
      <div
        className={`relative rounded-full bg-gray-200 flex items-center justify-center`}
        style={{ width: size, height: size }}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-1/2 w-1/2 border-b-2 border-primary"></div>
        ) : (
          <svg
            className="w-1/2 h-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </div>
    );
  }

  // プロフィール画像URLから_normal.jpgを取り除いて高解像度版を取得
  const highResImageUrl = userData.profileImageUrl.replace("_normal", "");

  return (
    <div
      className="relative rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      <Image
        src={highResImageUrl}
        alt={`${userData.name}のプロフィール画像`}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
}
