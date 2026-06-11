"use client";

import { useState, useMemo } from "react";
import { PostCard } from "@/components/blog/PostCard";
import { TagFilter } from "@/components/blog/TagFilter";
import { Spinner } from "@/components/ui/Spinner";
import { usePublishedPosts } from "@/hooks/usePublishedPosts";

export default function BlogPage() {
  const { posts, loading, error } = usePublishedPosts();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => [...new Set(posts.flatMap((p) => p.tags))].sort(),
    [posts],
  );

  const filtered = useMemo(
    () =>
      selectedTag ? posts.filter((p) => p.tags.includes(selectedTag)) : posts,
    [posts, selectedTag],
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold text-neutral-900">
          Blog
        </h1>
        <p className="mt-3 text-neutral-500">
          Thoughts on software development, tech, and everything in between.
        </p>
      </div>

      {allTags.length > 0 && (
        <div className="mb-10">
          <TagFilter
            tags={allTags}
            selected={selectedTag}
            onChange={setSelectedTag}
          />
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Spinner />
        </div>
      ) : error ? (
        <p className="py-16 text-center text-sm text-red-500">{error}</p>
      ) : filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-neutral-500">
          {selectedTag
            ? `No posts tagged "${selectedTag}".`
            : "No posts published yet."}
        </p>
      ) : (
        <div>
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
