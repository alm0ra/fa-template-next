export type PlatformContext = {
  siteUrl: string;
  projectId: string;
  version: string;
  runtimeLane: string;
  databasePath: string;
};

export function getPlatformContext(env?: Record<string, string>): PlatformContext {
  const e = env || process.env;
  return {
    siteUrl: e.NEXT_PUBLIC_SITE_URL || "http://localhost:8080",
    projectId: e.PROJECT_ID || "project-demo",
    version: e.VERSION || "2",
    runtimeLane: e.RUNTIME_LANE || "shared",
    databasePath: e.DATABASE_PATH || "/data/db/project-demo/app.db",
  };
}
