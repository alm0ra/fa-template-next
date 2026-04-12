import { getPlatformContext } from "@/lib/platform";

export async function GET() {
  const platform = getPlatformContext();

  return Response.json({
    ok: true,
    service: "fa-template-next",
    version: platform.version,
    runtimeLane: platform.runtimeLane,
    projectId: platform.projectId,
    databasePath: platform.databasePath,
    timestamp: new Date().toISOString(),
  });
}
