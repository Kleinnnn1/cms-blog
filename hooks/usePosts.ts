import { useEffect, useState, useCallback } from "react";
import { getAllPosts } from "@/lib/firebase/firestore";
import { useAuth } from "@/hooks/useAuth";
import type { Post } from "@/types";

interface UsePostsReturn {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

export function usePosts(): UsePostsReturn {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    if (!user) {
      setPosts([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await getAllPosts(user.uid);
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load posts");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { posts, loading, error, refresh: fetch };
}
