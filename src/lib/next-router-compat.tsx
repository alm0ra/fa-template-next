import React, { useCallback, useMemo } from "react";
import NextLink from "next/link";
import { usePathname, useRouter, useSearchParams as useNextSearchParams, useParams as useNextParams } from "next/navigation";

type SearchInit = URLSearchParams | string | Record<string, string | number | boolean | null | undefined>;

function toSearchParams(input: SearchInit): URLSearchParams {
  if (input instanceof URLSearchParams) {
    return new URLSearchParams(input);
  }
  if (typeof input === "string") {
    return new URLSearchParams(input);
  }

  const params = new URLSearchParams();
  Object.entries(input).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  });
  return params;
}

export function BrowserRouter({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Routes({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Route({ element }: { element?: React.ReactNode; path?: string; [key: string]: unknown }) {
  return <>{element ?? null}</>;
}

export function useNavigate() {
  const router = useRouter();
  return useCallback(
    (to: string | number) => {
      if (typeof to === "number") {
        if (to < 0) {
          router.back();
          return;
        }
        if (to > 0) {
          router.forward();
          return;
        }
        return;
      }
      router.push(to);
    },
    [router],
  );
}

export function useParams<T extends Record<string, string | string[] | undefined>>() {
  return useNextParams<T>();
}

export function useLocation() {
  const pathname = usePathname();

  return {
    pathname: pathname ?? "/",
    search: typeof window !== "undefined" ? window.location.search : "",
    hash: typeof window !== "undefined" ? window.location.hash : "",
  };
}

export function useSearchParams(): [URLSearchParams, (nextInit: SearchInit) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const safePathname = pathname ?? "/";
  const current = useNextSearchParams();

  const params = useMemo(() => new URLSearchParams(current?.toString() ?? ""), [current]);

  const setSearchParams = useCallback(
    (nextInit: SearchInit) => {
      const next = toSearchParams(nextInit);
      const qs = next.toString();
      router.push(qs ? `${safePathname}?${qs}` : safePathname);
    },
    [safePathname, router],
  );

  return [params, setSearchParams];
}

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
};

export function Link({ to, children, ...props }: LinkProps) {
  return (
    <NextLink href={to} {...props}>
      {children}
    </NextLink>
  );
}
