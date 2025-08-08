import { useState, useEffect } from "react";
import type { TwitterUserData } from "@/lib/twitter";

export function useTwitterUser(username: string | null) {
  const [userData, setUserData] = useState<TwitterUserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setUserData(null);
      return;
    }

    const fetchUser = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/twitter/user?username=${encodeURIComponent(username)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setUserData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return { userData, isLoading, error };
}
