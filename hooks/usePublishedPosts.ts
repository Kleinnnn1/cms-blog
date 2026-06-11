import { useEffect, useState } from "react";
import { getPublishedPosts } from "@/lib/firebase/firestore";
import type { Post } from "@/types";

interface UsePublishedPostsReturn {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export function usePublishedPosts(): UsePublishedPostsReturn {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetch() {
      setLoading(true);
      setError(null);
      try {
        const data = await getPublishedPosts();
        if (!cancelled) setPosts(data);
      } catch (err) {
        if (!cancelled)
          setError(err instanceof Error ? err.message : "Failed to load posts");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetch();
    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading, error };
}
