import { getPlatformContext } from "@/lib/platform";

export async function GET(_request: Request, context?: { env?: Record<string, string> }) {
  const platform = getPlatformContext(context?.env);

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
