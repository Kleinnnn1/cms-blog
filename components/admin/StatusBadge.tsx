import type { PostStatus } from "@/types";

interface StatusBadgeProps {
  status: PostStatus;
}

const config: Record<PostStatus, { label: string; classes: string }> = {
  published: {
    label: "Published",
    classes: "bg-green-50 text-green-700 ring-green-600/20",
  },
  draft: {
    label: "Draft",
    classes: "bg-amber-50 text-amber-700 ring-amber-600/20",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, classes } = config[status];

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${classes}`}
    >
      {label}
    </span>
  );
}
