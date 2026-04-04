import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getPlatformContext } from "@/lib/platform";

const demoInputSchema = z.object({
  title: z.string().min(2).max(120),
  intent: z.string().min(2).max(240),
});

const demoCards = [
  {
    id: "landing",
    title: "سایت شرکتی",
    description: "صفحه اصلی، معرفی خدمات، فرم تماس، محتوای قابل توسعه.",
  },
  {
    id: "store",
    title: "فروشگاه سفارشی",
    description: "کاتالوگ، سبد خرید و checkout فقط وقتی واقعا نیاز باشند.",
  },
  {
    id: "dashboard",
    title: "پنل مدیریت",
    description: "صفحات خصوصی و APIهای داخلی روی همین ساختار اضافه می‌شوند.",
  },
];

export async function GET() {
  const context = getPlatformContext();

  return NextResponse.json({
    ok: true,
    context,
    cards: demoCards,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = demoInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "invalid_payload",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const context = getPlatformContext();

  return NextResponse.json(
    {
      ok: true,
      message: "payload_received",
      context,
      draft: {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        ...parsed.data,
      },
    },
    { status: 201 },
  );
}
