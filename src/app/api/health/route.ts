import { NextResponse } from "next/server";
import { getPlatformContext } from "@/lib/platform";

export async function GET() {
  const context = getPlatformContext();

  return NextResponse.json({
    ok: true,
    service: "fa-template-next",
    version: context.version,
    runtimeLane: context.runtimeLane,
    projectId: context.projectId,
    databasePath: context.databasePath,
    timestamp: new Date().toISOString(),
  });
}
