import { useRouterState } from "@tanstack/react-router";
import { AppLink } from "./AppLink";
import { ArrowRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Logo } from "./Logo";
import { LanguageSwitch } from "./LanguageSwitch";
import { SearchOverlay } from "./SearchOverlay";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { industries } from "@/data/industries";
import { insights } from "@/data/insights";
import { cn } from "@/lib/utils";
import type { DictKey } from "@/lib/translations";

type NavItem = { to: string; key: DictKey; panel?: "expertise" | "industries" | "insights" | "about" };

const navItems: NavItem[] = [
  { to: "/about", key: "nav.about", panel: "about" },
  { to: "/expertise", key: "nav.expertise", panel: "expertise" },
  { to: "/industries", key: "nav.industries", panel: "industries" },
  { to: "/training", key: "nav.training" },
  { to: "/insights", key: "nav.insights", panel: "insights" },
  { to: "/careers", key: "nav.careers" },
];

const talkItems: { to: string; key: DictKey; descKey: DictKey }[] = [
  { to: "/contact", key: "nav.talkAdviser", descKey: "nav.talkAdviserDesc" },
  { to: "/rfp", key: "nav.talkRfp", descKey: "nav.talkRfpDesc" },
  { to: "/request-proposal", key: "nav.talkProposal", descKey: "nav.talkProposalDesc" },
  { to: "/locations", key: "nav.talkOffice", descKey: "nav.talkOfficeDesc" },
];


export function SiteHeader() {
  const { t, pick } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [openPanel, setOpenPanel] = useState<NavItem["panel"] | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);


  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenPanel(null);
    setTalkOpen(false);

  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const panelContent = useMemo(
    () => ({
      about: [
        {
          to: "/about",
          label: t("nav.about"),
          meta: "01",
          desc: pick({
            en: "Who we are, how we work and the standards we hold ourselves to.",
            fr: "Qui nous sommes, comment nous travaillons et les normes que nous nous imposons.",
          }),
        },
        {
          to: "/people",
          label: t("nav.ourPeople"),
          meta: "02",
          desc: pick({
            en: "Leadership profiles and the charter that shapes how our teams work.",
            fr: "Profils de la direction et charte qui guide le travail de nos équipes.",
          }),
        },
        {
          to: "/locations",
          label: t("nav.locations"),
          meta: "03",
          desc: pick({
            en: "Accra and Abidjan, serving Anglophone and Francophone markets.",
            fr: "Accra et Abidjan, au service des marchés anglophones et francophones.",
          }),
        },
      ],
      expertise: [
        ...expertise.map((e) => ({
          to: `/expertise/${e.slug}`,
          label: pick(e.title),
          meta: e.number,
          desc: pick(e.summary),
        })),
        {
          to: "/case-studies",
          label: pick({ en: "Our Work", fr: "Nos réalisations" }),
          meta: pick({ en: "Case studies", fr: "Études de cas" }),
          desc: pick({
            en: "Selected engagements across sectors and markets.",
            fr: "Missions sélectionnées, par secteur et par marché.",
          }),
        },
      ],
      industries: industries.map((i) => ({
        to: `/industries/${i.slug}`,
        label: pick(i.name),
        meta: i.number,
        desc: pick(i.overview),
      })),
      insights: insights.slice(0, 4).map((i) => ({
        to: `/insights/${i.slug}`,
        label: pick(i.title),
        meta: pick(i.category),
        desc: pick(i.standfirst),
      })),
    }),
    [pick, t],
  );


  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
          overHero
            ? "border-b border-white/15 bg-transparent"
            : "border-b border-border bg-background/95 backdrop-blur",
        )}
        onMouseLeave={() => setOpenPanel(null)}
      >
        <div className="container-apex">
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-all duration-500",
              scrolled ? "h-16" : "h-20 lg:h-24",
            )}
          >
            <Logo tone={overHero ? "light" : "dark"} />

            <nav
              aria-label="Main"
              className="hidden items-center gap-7 lg:flex xl:gap-9"
              onFocus={() => setOpenPanel(null)}
            >
              {navItems.map((item) => (
                <div key={item.to} onMouseEnter={() => setOpenPanel(item.panel ?? null)}>
                  <AppLink
                    to={item.to}
                    className={cn(
                      "relative py-2 text-[0.8125rem] font-medium tracking-wide transition-colors",
                      overHero ? "text-white/85 hover:text-white" : "text-foreground/80",
                      !overHero && "hover:text-primary",
                    )}
                    activeProps={{
                      className: cn(
                        "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full",
                        overHero
                          ? "text-white after:bg-white"
                          : "text-primary after:bg-primary",
                      ),
                    }}
                  >
                    {t(item.key)}
                  </AppLink>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3 sm:gap-4">
              <LanguageSwitch tone={overHero ? "light" : "dark"} />
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label={t("nav.search")}
                className={cn(
                  "flex min-h-11 min-w-11 items-center justify-center transition-colors",
                  overHero ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-primary",
                )}
              >
                <Search className="size-[18px]" strokeWidth={1.6} />
              </button>
              <div
                className="relative hidden md:block"
                onMouseEnter={() => {
                  setOpenPanel(null);
                  setTalkOpen(true);
                }}
                onMouseLeave={() => setTalkOpen(false)}
              >
                <AppLink
                  to="/engage"
                  aria-expanded={talkOpen}
                  onFocus={() => setTalkOpen(true)}
                  className={cn(
                    "inline-flex items-center gap-2 border px-5 py-3 text-[0.75rem] font-semibold tracking-[0.08em] uppercase transition-colors",
                    overHero
                      ? "border-white/40 text-white hover:bg-white hover:text-navy"
                      : "border-primary bg-primary text-primary-foreground hover:bg-navy hover:border-navy",
                  )}
                >
                  {t("nav.engage")}
                  <ArrowRight className="size-3.5" strokeWidth={2} />
                </AppLink>

                <div
                  className={cn(
                    "absolute top-full right-0 w-[26rem] origin-top-right border border-border bg-background shadow-[0_28px_56px_-32px_rgba(23,45,82,0.4)] transition-all duration-200",
                    talkOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0",
                  )}
                >
                  <ul className="p-2">
                    {talkItems.map((item) => (
                      <li key={item.to}>
                        <AppLink
                          to={item.to}
                          onClick={() => setTalkOpen(false)}
                          className="group block px-5 py-4 transition-colors hover:bg-brand-pale/30"
                        >
                          <span className="flex items-center gap-2 font-display text-[0.9375rem] font-bold text-navy transition-colors group-hover:text-primary">
                            {t(item.key)}
                            <ArrowRight
                              className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                              strokeWidth={2}
                            />
                          </span>
                          <span className="mt-1 block text-[0.8125rem] leading-relaxed text-muted-foreground">
                            {t(item.descKey)}
                          </span>
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label={t("nav.menu")}
                aria-expanded={mobileOpen}
                className={cn(
                  "flex min-h-11 min-w-11 flex-col items-center justify-center gap-[5px] lg:hidden",
                  overHero ? "text-white" : "text-navy",
                )}
              >
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-6 bg-current" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega menu */}
        {openPanel && (
          <div className="hidden border-t border-border bg-background shadow-[0_24px_48px_-32px_rgba(23,45,82,0.35)] lg:block">
            <div className="container-apex grid grid-cols-3 gap-x-12 gap-y-8 py-10">
              {panelContent[openPanel].map((entry) => (
                <AppLink
                  key={entry.to}
                  to={entry.to}
                  className="group block border-t border-hairline pt-4"
                >
                  <span className="eyebrow text-primary">{entry.meta}</span>
                  <span className="mt-2 block font-display text-[1.0625rem] font-bold text-navy transition-colors group-hover:text-primary">
                    {entry.label}
                  </span>
                  <span className="mt-1.5 line-clamp-2 block text-[0.8125rem] leading-relaxed text-muted-foreground">
                    {entry.desc}
                  </span>
                </AppLink>
              ))}
              <div className="col-span-3 flex justify-end">
                <AppLink
                  to={openPanel === "insights" ? "/insights" : `/${openPanel}`}
                  className="inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.1em] text-primary uppercase"
                >
                  {t(openPanel === "insights" ? "insights.all" : "generic.overview")}
                  <ArrowRight className="size-3.5" />
                </AppLink>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile full-screen navigation */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-navy text-navy-foreground transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="container-apex flex h-20 items-center justify-between">
          <Logo tone="light" onNavigate={() => setMobileOpen(false)} />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label={t("nav.close")}
            className="flex min-h-11 min-w-11 items-center justify-center text-white/80"
          >
            <X className="size-6" strokeWidth={1.5} />
          </button>
        </div>
        <nav aria-label="Mobile" className="container-apex flex-1 overflow-y-auto pt-6 pb-12">
          <ul className="space-y-0">
            {[
              { to: "/", key: "nav.home" as DictKey },
              ...navItems,
              { to: "/people", key: "nav.ourPeople" as DictKey },
              { to: "/locations", key: "nav.locations" as DictKey },
              { to: "/case-studies", key: "nav.cases" as DictKey },
            ].map((item) => (
              <li key={item.to} className="border-b border-white/12">
                <AppLink
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-5 font-display text-2xl font-bold text-white"
                >
                  {t(item.key)}
                </AppLink>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-white/25 pt-6">
            <span className="eyebrow text-white/45">{t("nav.engage")}</span>
            <ul className="mt-4 space-y-0">
              {talkItems.map((item) => (
                <li key={item.to} className="border-b border-white/12">
                  <AppLink
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="block font-display text-[1.0625rem] font-bold text-white">
                        {t(item.key)}
                      </span>
                      <span className="mt-1 block text-[0.8125rem] leading-relaxed text-white/60">
                        {t(item.descKey)}
                      </span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-white/60" strokeWidth={2} />
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <LanguageSwitch tone="light" />
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setSearchOpen(true);
              }}
              className="inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.1em] text-white/80 uppercase"
            >
              <Search className="size-4" strokeWidth={1.6} />
              {t("nav.search")}
            </button>
          </div>
          <p className="mt-10 text-[0.6875rem] tracking-[0.18em] text-white/45 uppercase">
            {pick({ en: "Accra · Abidjan", fr: "Accra · Abidjan" })}
          </p>
        </nav>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
