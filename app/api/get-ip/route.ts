import { NextResponse, NextRequest, userAgent } from "next/server";

export async function GET(req: NextRequest) {
  const { ua } = userAgent(req);

  const data = {
    ok: true,
    ip_address: req.ip,
    user_agent: ua,
  };

  return NextResponse.json(data, { status: 200 });
}
