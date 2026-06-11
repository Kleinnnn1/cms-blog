"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { getUserProfile } from "@/lib/firebase/firestore";
import { Spinner } from "@/components/ui/Spinner";
import type { UserProfile } from "@/types";

export default function AuthorAboutPage({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = use(params);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserProfile(uid).then((data) => {
      setProfile(data);
      setLoading(false);
    });
  }, [uid]);

  if (loading)
    return (
      <div className="flex justify-center py-16">
        <Spinner />
      </div>
    );
  if (!profile) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-neutral-900">
          About {profile.displayName}
        </h1>
      </div>

      <div className="prose prose-neutral max-w-none">
        <p className="text-lg text-neutral-700 leading-relaxed">
          {profile.bio || `Hi, I'm ${profile.displayName}.`}
        </p>
      </div>
    </div>
  );
}
