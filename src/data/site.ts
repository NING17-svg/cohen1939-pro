import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Cohen 1939 Guide",
  brandMark: "C39",
  gameName: "Cohen 1939",
  domain: "cohen1939.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://cohen1939.pro").replace(/\/$/, ""),
  description:
    "Independent launch reference hub for Cohen 1939 — release date, Steam AppID, Windows-only platform scope, supported languages, story and characters, top-down twin-stick gameplay, system requirements, and price.",
  tagline:
    "Launch reference for Cohen 1939 — release date, Steam scope, story, characters, top-down twin-stick gameplay, and Windows PC specs.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Cohen 1939 Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Cohen 1939 on Steam",
      href: "https://store.steampowered.com/app/3582120",
      description:
        "Official Steam store page for Cohen 1939 (AppID 3582120 by Cube of Cube / 2P Games).",
    },
    {
      label: "Cohen 1939 on SteamDB",
      href: "https://steamdb.info/app/3582120/",
      description:
        "Dated SteamDB snapshot for Cohen 1939 (AppID 3582120) — used as wiki/reference dated source.",
    },
    {
      label: "Cohen 1939 Steam Community hub",
      href: "https://steamcommunity.com/app/3582120",
      description:
        "Steam Community hub for Cohen 1939 — community/video demand signal only, not a primary current-game fact.",
    },
  ],
  disclaimer:
    "Cohen 1939 is an independent, unofficial fan guide. It is not affiliated with Cube of Cube, 2P Games, Valve, or Steam. All game facts are sourced from the Steam store page for AppID 3582120 and the dated SteamDB snapshot as of 2026-09-30.",
};
