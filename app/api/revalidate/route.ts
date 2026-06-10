import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const { slug } = await request.json();

    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    revalidatePath("/blog");

    return NextResponse.json({
      revalidated: true,
      slug: slug ?? null,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { message: "Failed to revalidate" },
      { status: 500 },
    );
  }
}
