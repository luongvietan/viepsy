/** Tỷ lệ tab gốc trên artboard 440×336 (hero) */
const BASE_TAB_W = 116;
const BASE_TAB_DEPTH = 44;
const BASE_INNER_A = 104;
const BASE_INNER_B = 92;
const BASE_CORNER = 40;

export type FolderTabSide = "left" | "right";

export type FolderPathOptions = {
  width: number;
  height: number;
  tabWidth: number;
  tabHeight: number;
};

export type FolderTabLayout = {
  path: string;
  /** Độ sâu khuyết (px) — dùng padding-top nội dung */
  tabDepthPx: number;
  tabWidthPx: number;
};

function scaleCoords(W: number, H: number, tabWidth: number, tabHeight: number) {
  const sx = W / 440;
  const sy = H / 336;

  const tabEnd = Math.max(BASE_TAB_W, tabWidth / sx);
  const tabDepth = Math.max(BASE_TAB_DEPTH, tabHeight / sy, tabEnd * 0.32);
  const innerA = tabEnd * (BASE_INNER_A / BASE_TAB_W);
  const innerB = tabEnd * (BASE_INNER_B / BASE_TAB_W);
  const corner = Math.min(BASE_CORNER, tabEnd * 0.34);

  const s = (x: number, y: number) => `${(x * sx).toFixed(2)} ${(y * sy).toFixed(2)}`;

  const path = `
    M ${s(440 - corner, 0)}
    C ${s(422, 0)} ${s(440, 18)} ${s(440, corner)}
    L ${s(440, 336 - corner)}
    C ${s(440, 318)} ${s(422, 336)} ${s(440 - corner, 336)}
    L ${s(corner, 336)}
    C ${s(18, 336)} ${s(0, 318)} ${s(0, 336 - corner)}
    L ${s(0, tabDepth + corner * 0.75)}
    Q ${s(0, tabDepth + corner * 0.35)} ${s(corner * 0.3, tabDepth + corner * 0.35)}
    L ${s(innerB, tabDepth + corner * 0.35)}
    Q ${s(innerA, tabDepth + corner * 0.35)} ${s(innerA, tabDepth * 0.45)}
    Q ${s(innerA, 0)} ${s(tabEnd, 0)}
    L ${s(440 - corner, 0)}
    Z
  `
    .replace(/\s+/g, " ")
    .trim();

  return {
    path,
    tabDepthPx: Math.ceil(tabDepth * sy),
    tabWidthPx: Math.ceil(tabEnd * sx),
  };
}

export function computeFolderTabLayout(options: FolderPathOptions): FolderTabLayout {
  const { path, tabDepthPx, tabWidthPx } = scaleCoords(
    options.width,
    options.height,
    options.tabWidth,
    options.tabHeight,
  );
  return { path, tabDepthPx, tabWidthPx };
}

/** @deprecated Dùng computeFolderTabLayout */
export function buildFolderPath(options: FolderPathOptions): string {
  return computeFolderTabLayout(options).path;
}

export const DEFAULT_FOLDER_SIZE = { width: 360, height: 260 } as const;
export const DEFAULT_TAB_SIZE = { width: 88, height: 48 } as const;

/** Kích thước tab thống nhất theo ngữ cảnh section */
export const FOLDER_TAB_PRESETS = {
  audience: { width: 68, height: 56 },
  service: { width: 108, height: 56 },
  process: { width: 88, height: 40 },
  hero: { width: 72, height: 40 },
} as const;
