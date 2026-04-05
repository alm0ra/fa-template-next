import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type SurfaceProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "default" | "spotlight";
};

export function Surface({
  className,
  tone = "default",
  ...props
}: SurfaceProps) {
  return (
    <section
      className={cn(
        "surface-card",
        tone === "spotlight" && "surface-card-spotlight",
        className
      )}
      {...props}
    />
  );
}
