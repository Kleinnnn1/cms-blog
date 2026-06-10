import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border-b border-neutral-200 py-8 last:border-0">
      <Link href={`/blog/${post.slug}`} className="block space-y-3">
        {/* Cover image */}
        {post.coverImage && (
          <div className="overflow-hidden rounded-lg">
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="font-display text-xl font-bold text-neutral-900 transition-colors group-hover:text-blue-600">
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm leading-relaxed text-neutral-500 line-clamp-2">
            {post.excerpt}
          </p>
        )}

        {/* Date */}
        <p className="text-xs text-neutral-400">{formatDate(post.createdAt)}</p>
      </Link>
    </article>
  );
}
