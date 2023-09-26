import { NextResponse, NextRequest, userAgent } from "next/server";
import { headers } from "next/headers";
export async function GET(req: NextRequest) {
  const { ua } = userAgent(req);

  const headersList = headers();
  const ip = headersList.get("x-forwarded-for");

  const data = {
    ok: true,
    ip_address: ip,
    user_agent: ua,
  };

  return NextResponse.json(data, { status: 200 });
}
