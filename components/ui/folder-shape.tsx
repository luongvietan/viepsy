"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils/cn";
import {
  computeFolderTabLayout,
  DEFAULT_FOLDER_SIZE,
  DEFAULT_TAB_SIZE,
  type FolderTabSide,
} from "@/lib/folder-path";

type TabMetrics = { width: number; height: number };

type FolderShapeContextValue = {
  registerTab: (metrics: TabMetrics) => void;
  tabSide: FolderTabSide;
  uniformTab: boolean;
  tabWidthPx: number;
  tabDepthPx: number;
};

const FolderShapeContext = createContext<FolderShapeContextValue | null>(null);

function metricsEqual(a: TabMetrics, b: TabMetrics) {
  return a.width === b.width && a.height === b.height;
}

type FolderShapeProps = {
  tab?: FolderTabSide;
  fillClassName: string;
  className?: string;
  tabMinWidth?: number;
  tabMinHeight?: number;
  /** Tab cố định — đồng bộ trong grid, không đo lại từng card */
  uniformTab?: boolean;
  padContent?: boolean;
  children: ReactNode;
};

export function FolderShape({
  tab = "left",
  fillClassName,
  className,
  tabMinWidth = DEFAULT_TAB_SIZE.width,
  tabMinHeight = DEFAULT_TAB_SIZE.height,
  uniformTab = false,
  padContent = true,
  children,
}: FolderShapeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ width: number; height: number }>(
    DEFAULT_FOLDER_SIZE,
  );
  const [tabMetrics, setTabMetrics] = useState<TabMetrics>({
    width: tabMinWidth,
    height: tabMinHeight,
  });

  const registerTab = useCallback(
    (metrics: TabMetrics) => {
      if (uniformTab) return;
      const next = {
        width: Math.ceil(metrics.width),
        height: Math.ceil(metrics.height),
      };
      setTabMetrics((prev) => (metricsEqual(prev, next) ? prev : next));
    },
    [uniformTab],
  );

  const effectiveTabW = Math.max(
    uniformTab ? tabMinWidth : tabMetrics.width,
    tabMinWidth,
  );
  const effectiveTabH = Math.max(
    uniformTab ? tabMinHeight : tabMetrics.height,
    tabMinHeight,
  );

  const layout = useMemo(
    () =>
      computeFolderTabLayout({
        width: box.width,
        height: box.height,
        tabWidth: effectiveTabW,
        tabHeight: effectiveTabH,
      }),
    [box.width, box.height, effectiveTabW, effectiveTabH],
  );

  const contextValue = useMemo(
    () => ({
      registerTab,
      tabSide: tab,
      uniformTab,
      tabWidthPx: layout.tabWidthPx,
      tabDepthPx: layout.tabDepthPx,
    }),
    [registerTab, tab, uniformTab, layout.tabWidthPx, layout.tabDepthPx],
  );

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      if (w <= 0 || h <= 0) return;
      setBox((prev) =>
        prev.width === w && prev.height === h ? prev : { width: w, height: h },
      );
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const mirrorTab = tab === "right";

  const contentPadStyle = padContent
    ? ({
        paddingTop: layout.tabDepthPx,
        paddingRight: tab === "right" ? layout.tabWidthPx : 0,
        paddingLeft: tab === "left" ? layout.tabWidthPx : 0,
      } as React.CSSProperties)
    : undefined;

  return (
    <FolderShapeContext.Provider value={contextValue}>
      <div ref={containerRef} className={cn("relative isolate", className)}>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${box.width} ${box.height}`}
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g
            transform={
              mirrorTab
                ? `scale(-1 1) translate(${-box.width} 0)`
                : undefined
            }
          >
            <path d={layout.path} className={fillClassName} />
          </g>
        </svg>
        <div
          className="relative z-10 flex min-h-full w-full flex-col"
          style={contentPadStyle}
        >
          {children}
        </div>
      </div>
    </FolderShapeContext.Provider>
  );
}

type FolderTabSlotProps = {
  side?: FolderTabSide;
  className?: string;
  children: ReactNode;
};

/** Nằm trong vùng khuyết tab — căn góc trên trái/phải */
export function FolderTabSlot({
  side = "right",
  className,
  children,
}: FolderTabSlotProps) {
  const ctx = useContext(FolderShapeContext);
  const registerTab = ctx?.registerTab;
  const tabSide = ctx?.tabSide ?? side;
  const slotRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ctx?.uniformTab && registerTab && slotRef.current) {
      const el = slotRef.current;
      const measure = () => {
        const rect = el.getBoundingClientRect();
        registerTab({
          width: Math.ceil(rect.width),
          height: Math.ceil(rect.height),
        });
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
  }, [ctx?.uniformTab, registerTab]);

  return (
    <div
      ref={slotRef}
      className={cn(
        "absolute top-0 z-20 flex items-center justify-center",
        tabSide === "right" ? "right-0" : "left-0",
        className,
      )}
      style={
        ctx
          ? {
              width: ctx.tabWidthPx,
              height: ctx.tabDepthPx,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
