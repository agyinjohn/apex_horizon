import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { mapMarkets } from "@/data/markets";
import { cn } from "@/lib/utils";

const W = 660;
const H = 700;
const LON_MIN = -19;
const LON_MAX = 53;
const LAT_MIN = -36;
const LAT_MAX = 38;

const project = (lat: number, lon: number) => ({
  x: ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W,
  y: ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H,
});

/** Coarse continental outline (lat, lon), clockwise from north-west Africa. */
const outline: [number, number][] = [
  [35.9, -5.9],
  [37.0, 10.2],
  [32.9, 13.2],
  [30.9, 19.6],
  [31.2, 29.9],
  [29.9, 32.6],
  [22.0, 36.8],
  [15.6, 39.5],
  [11.6, 43.1],
  [11.8, 51.3],
  [2.0, 45.4],
  [-4.7, 39.2],
  [-10.3, 40.6],
  [-19.8, 34.8],
  [-25.9, 32.9],
  [-33.9, 25.6],
  [-34.8, 20.0],
  [-33.9, 18.4],
  [-28.6, 16.5],
  [-22.9, 14.5],
  [-16.5, 11.8],
  [-8.8, 13.2],
  [-6.0, 12.3],
  [-0.6, 8.9],
  [3.9, 9.7],
  [4.3, 6.0],
  [6.4, 3.4],
  [6.2, 1.2],
  [5.6, -0.2],
  [4.9, -2.0],
  [5.3, -4.0],
  [4.6, -7.5],
  [7.7, -13.2],
  [10.6, -14.9],
  [13.5, -16.6],
  [16.0, -16.5],
  [20.8, -17.0],
  [27.1, -13.4],
  [31.0, -9.8],
  [33.6, -7.6],
];

const outlinePath = `${outline
  .map(([lat, lon], i) => {
    const { x, y } = project(lat, lon);
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  })
  .join(" ")} Z`;

export function AfricaMap() {
  const { t, pick } = useLang();
  const [active, setActive] = useState<string | null>("ghana");
  const activeMarket = mapMarkets.find((m) => m.key === active) ?? null;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={t("footprint.mapLabel")}
          className="h-auto w-full max-w-[520px]"
        >
          <path
            d={outlinePath}
            fill="var(--brand-pale)"
            stroke="var(--brand-mid)"
            strokeOpacity="0.45"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {mapMarkets.map((m) => {
            const { x, y } = project(m.lat, m.lon);
            const isActive = active === m.key;
            const isOffice = m.type === "office";
            return (
              <g key={m.key}>
                {isActive && (
                  <circle
                    cx={x}
                    cy={y}
                    r={isOffice ? 17 : 13}
                    fill="var(--brand)"
                    fillOpacity="0.14"
                  />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={isOffice ? 7.5 : 5}
                  fill={isOffice ? "var(--navy)" : "var(--brand-mid)"}
                  stroke="#fff"
                  strokeWidth={isOffice ? 2 : 1.4}
                  className="cursor-pointer transition-[r] duration-300"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={20}
                  fill="transparent"
                  tabIndex={0}
                  role="button"
                  aria-label={`${pick(m.country)} — ${pick(m.city)}`}
                  onMouseEnter={() => setActive(m.key)}
                  onFocus={() => setActive(m.key)}
                  onClick={() => setActive(m.key)}
                  className="cursor-pointer outline-none"
                />
                {isOffice && (
                  <text
                    x={x - 12}
                    y={y + 22}
                    textAnchor="end"
                    className="fill-navy text-[13px] font-semibold tracking-[0.14em]"
                  >
                    {pick(m.city).toUpperCase()}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div>
        <div className="min-h-[124px] border-t border-navy/20 pt-6">
          {activeMarket ? (
            <div key={activeMarket.key} className="reveal" data-visible="true">
              <span className="eyebrow text-primary">
                {activeMarket.type === "office" ? t("footprint.office") : t("footprint.experience")}
              </span>
              <p className="mt-3 font-display text-2xl font-bold text-navy">
                {pick(activeMarket.country)}
              </p>
              <p className="mt-1 text-[0.9375rem] text-muted-foreground">
                {pick(activeMarket.city)} · {pick(activeMarket.detail)}
              </p>
            </div>
          ) : (
            <p className="text-[0.9375rem] text-muted-foreground">{t("footprint.hint")}</p>
          )}
        </div>

        <ul className="mt-8 space-y-3">
          {[
            { color: "bg-navy", label: t("footprint.legendOffice") },
            { color: "bg-brand-mid", label: t("footprint.legendSelected") },
            { color: "bg-brand-pale", label: t("footprint.legendOther") },
          ].map((l) => (
            <li key={l.label} className="flex items-center gap-3 text-[0.8125rem] text-muted-foreground">
              <span className={cn("size-2.5 shrink-0 rounded-full", l.color)} />
              {l.label}
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-hairline pt-6">
          {mapMarkets.map((m) => (
            <li key={m.key}>
              <button
                type="button"
                onMouseEnter={() => setActive(m.key)}
                onClick={() => setActive(m.key)}
                className={cn(
                  "py-1.5 text-left text-[0.8125rem] transition-colors",
                  active === m.key ? "text-primary" : "text-muted-foreground hover:text-navy",
                )}
              >
                {pick(m.country)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
