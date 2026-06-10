"use client";

import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";

export function AdminHeader() {
  const { user, signOut } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4">
      <div />

      <div className="flex items-center gap-4">
        {user?.email && (
          <span className="text-sm text-neutral-500">{user.email}</span>
        )}
        <button
          onClick={signOut}
          className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          aria-label="Sign out"
        >
          <LogOut size={14} aria-hidden="true" />
          Sign out
        </button>
      </div>
    </header>
  );
}
