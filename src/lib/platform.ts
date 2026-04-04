export type PlatformContext = {
  siteUrl: string;
  projectId: string;
  version: string;
  runtimeLane: string;
  databasePath: string;
};

export function getPlatformContext(): PlatformContext {
  return {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:8080",
    projectId: process.env.PROJECT_ID || "project-demo",
    version: process.env.VERSION || "2",
    runtimeLane: process.env.RUNTIME_LANE || "shared",
    databasePath: process.env.DATABASE_PATH || "/data/db/project-demo/app.db",
  };
}
