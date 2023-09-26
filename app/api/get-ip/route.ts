import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  if (!req.ip) {
    return NextResponse.json(
      { message: "No! Ip address found" },
      { status: 404 }
    );
  }

  const data = {
    ok: true,
    ip: req.ip,
    userAgent: req.headers.get("user-agent"),
  };
  return NextResponse.json(data, { status: 200 });
}
