import { NextResponse, NextRequest, userAgent } from "next/server";
import requestIp from "request-ip";

export async function GET(req: Request) {
  // @ts-ignore
  const detectedIp = requestIp.getClientIp(req);

  const data = {
    ok: true,
    ip: detectedIp,
    userAgent: req.headers.get("user-agent"),
  };
  return NextResponse.json(data, { status: 200 });
}
