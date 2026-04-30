import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  contact: z.string().min(5),
  preferredChannel: z.enum(["wechat", "phone", "email"]),
  topic: z.string().min(1),
  note: z.string().max(4000).optional(),
  paid: z.boolean(),
});

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "consultations.jsonl");

async function appendRecord(record: Record<string, unknown>) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.appendFile(
    DATA_FILE,
    JSON.stringify(record) + "\n",
    { encoding: "utf-8" }
  );
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const record = {
    ...parsed.data,
    submittedAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent") ?? null,
    ip: req.headers.get("x-forwarded-for") ?? null,
  };

  try {
    await appendRecord(record);
  } catch (err) {
    console.error("Failed to persist consultation record", err);
    return NextResponse.json(
      { error: "Server storage error" },
      { status: 500 }
    );
  }

  // TODO: send email / WeCom notification to advisors.
  // Intentionally left as a no-op for MVP; wire Payload/Resend/etc. later.

  return NextResponse.json({ ok: true });
}
