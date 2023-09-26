import { NextResponse, NextRequest, userAgent } from "next/server";

export async function GET(req: NextRequest) {
  const response = await fetch("https://geolocation-db.com/json/");
  if (!response.ok) {
    console.error("failed to fetch");
  }

  const { IPv4 } = await response.json();
  const { ua } = userAgent(req);

  const data = {
    ok: true,
    ip_address: IPv4,
    user_agent: ua,
  };

  return NextResponse.json(data, { status: 200 });
}
