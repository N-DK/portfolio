"use client";

import { useAppStore } from "@/stores/app.store";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Suspense, useEffect, useRef } from "react";

NProgress.configure({
  showSpinner: true,
});

function NProgressTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialLoad = useRef(true);

  const appLoading = useAppStore((state) => state.app_loading);
  const setAppLoading = useAppStore((state) => state.setAppLoading);
  const prevAppLoading = useRef(appLoading);

  useEffect(() => {
    if (appLoading && !prevAppLoading.current) {
      NProgress.start();
    } else if (!appLoading && prevAppLoading.current && !initialLoad.current) {
      NProgress.done();
    }
    prevAppLoading.current = appLoading;
  }, [appLoading]);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    setAppLoading(false);
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams, setAppLoading]);

  return null;
}

export default function NProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <NProgressTracker />
      </Suspense>
      {children}
    </>
  );
}
