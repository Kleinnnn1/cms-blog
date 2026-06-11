export type PostStatus = "draft" | "published";

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string | null;
  tags: string[];
  status: PostStatus;
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
}

export type PostPayload = Omit<Post, "id" | "createdAt" | "updatedAt">;

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  bio: string;
  createdAt: string;
}
