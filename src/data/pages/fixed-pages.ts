import type { PageContent } from "@/types/content";

export const fixedPages: PageContent[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // /about — Identity & "what is this game"
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "about",
    translationKey: "overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "hub" },
    h1: "What is Cohen 1939 — Cube of Cube top-down action game",
    seoTitle: "What is Cohen 1939 — Cube of Cube / 2P Games top-down shooter",
    metaDescription:
      "Cohen 1939 is a single-player top-down twin-stick action game from developer Cube of Cube and publisher 2P Games, launching on Steam AppID 3582120 on Sep 29, 2026.",
    summary:
      "Cohen 1939 is a single-player top-down twin-stick action game developed by Cube of Cube and published by 2P Games. It launches on Steam AppID 3582120 on Sep 29, 2026 for Windows 10 64-bit or later PCs.",
    hero: {
      eyebrow: "Overview",
      subtitle:
        "Identify the Cohen 1939 Steam title: the Cube of Cube / 2P Games top-down twin-stick shooter launching in 1939 Birmingham on Sep 29, 2026.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Story", href: "/story" },
        { label: "Gameplay", href: "/gameplay" },
        { label: "Characters", href: "/characters" },
      ],
    },
    quickAnswer:
      "Cohen 1939 is a single-player top-down twin-stick action game from developer Cube of Cube and publisher 2P Games. It launches on Steam AppID 3582120 on Sep 29, 2026 for Windows 10 64-bit or later, set in the rain-soaked 1939 Birmingham criminal underworld with protagonist Elisa leading a revenge arc. English is the only full-audio language; the UI and subtitle set covers English, Simplified Chinese, Traditional Chinese and Russian.",
    keyFacts: [
      { label: "Developer", value: "Cube of Cube" },
      { label: "Publisher", value: "2P Games" },
      { label: "Release date", value: "Sep 29, 2026 (Steam)" },
      { label: "Steam AppID", value: "3582120" },
      { label: "Genre", value: "Action / Adventure / Indie top-down twin-stick shooter" },
      { label: "Setting", value: "1939 Birmingham criminal underworld" },
      { label: "Protagonist", value: "Elisa (revenge arc)" },
      { label: "Platforms", value: "Windows 10 64-bit or later (Steam only as of 2026-09-30)" },
      { label: "Audio language", value: "English only" },
      { label: "UI languages", value: "English, Simplified Chinese, Traditional Chinese, Russian" },
    ],
    modules: [
      {
        id: "overview-identity",
        type: "prose",
        heading: "Cohen 1939 identity, developer, and publisher",
        body:
          "Cohen 1939 is developed by Cube of Cube and published by 2P Games. The Steam store page for AppID 3582120 is the canonical listing, and SteamDB's dated snapshot confirms the same AppID identity. The launch build is positioned as an original Cube of Cube / 2P Games Steam release; the unrelated academic \"Cohen 1939\" paper and the Cohen surname search surface are explicitly out of scope for this site.",
      },
      {
        id: "overview-launch-window",
        type: "prose",
        heading: "Launch window and platforms",
        body:
          "Cohen 1939 launches on Sep 29, 2026 on Steam for Windows 10 64-bit or later PCs. The introductory offer of $13.49 (10% off) ends October 13, 2026 and the base price returns to $14.99 once that window closes. macOS, Linux, console versions, and co-op or multiplayer modes are not announced as of 2026-09-30.",
      },
      {
        id: "overview-story",
        type: "prose",
        heading: "Story snapshot and protagonist",
        body:
          "The launch build is set in the criminal side of 1939 Birmingham. Protagonist Elisa leads the revenge arc, hunting the criminals responsible for her husband's murder through rain-soaked streets and smoke-filled hideouts. The atmosphere is described on the Steam store page as Peaky Blinders-inspired gangster with a Hotline Miami-style lethal top-down combat loop.",
      },
    ],
    faqIds: ["cohen-1939-on-steam", "cohen-1939-platforms"],
    relatedPageIds: [
      "fixed-release-status-en-US",
      "fixed-steam-availability-en-US",
      "fixed-platforms-en-US",
      "fixed-story-en-US",
      "fixed-gameplay-en-US",
      "fixed-characters-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /release — Release date & launch window
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-release-status-en-US",
    translationKey: "release-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 release date and launch window on Steam",
    seoTitle: "Cohen 1939 release date — Sep 29, 2026 Steam launch day",
    metaDescription:
      "Cohen 1939 release date is Sep 29, 2026 on Steam. The Cube of Cube top-down action game launches with a $13.49 introductory offer that ends October 13, 2026.",
    summary:
      "Cohen 1939 releases on Sep 29, 2026 on Steam AppID 3582120 for Windows 10 64-bit or later. The introductory offer of $13.49 (10% off) runs until October 13, 2026; the base price returns to $14.99.",
    hero: {
      eyebrow: "Release Status",
      subtitle:
        "Confirm the Sep 29, 2026 launch day and the introductory offer window that ends October 13, 2026.",
      ctas: [
        { label: "Steam Listing", href: "/steam" },
        { label: "Platforms", href: "/platforms" },
        { label: "Price", href: "/price" },
      ],
    },
    quickAnswer:
      "Cohen 1939 releases on Sep 29, 2026 on Steam AppID 3582120 for Windows 10 64-bit or later PCs. The introductory offer of $13.49 (10% off) runs until October 13, 2026; the base price returns to $14.99 once that window closes. There is no announced delay as of the 2026-09-30 research date.",
    keyFacts: [
      { label: "Release date", value: "Sep 29, 2026" },
      { label: "Storefront", value: "Steam (AppID 3582120)" },
      { label: "Platform", value: "Windows 10 64-bit or later" },
      { label: "Introductory offer", value: "$13.49 (10% off) until Oct 13, 2026" },
      { label: "Base price", value: "$14.99 after the introductory window" },
      { label: "Delay status", value: "No announced delay as of 2026-09-30" },
    ],
    modules: [
      {
        id: "release-launch-day",
        type: "prose",
        heading: "Launch day",
        body:
          "The release date is confirmed on the Steam store page for AppID 3582120 as Sep 29, 2026. The single-player launch scope covers Windows 10 64-bit or later PCs only; macOS, Linux, console versions and co-op or multiplayer modes are not announced as of 2026-09-30. Steam achievements, Family Sharing and Steam Cloud are listed on the Steam store page for the launch build.",
      },
      {
        id: "release-offer",
        type: "prose",
        heading: "Introductory offer and base price",
        body:
          "The introductory offer of $13.49 (10% off) runs until October 13, 2026. After that window closes the base price returns to $14.99. The Steam store page is the source for both prices.",
      },
    ],
    faqIds: ["cohen-1939-release-date"],
    relatedPageIds: ["fixed-steam-availability-en-US", "fixed-platforms-en-US", "fixed-price-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /steam — Steam availability and AppID
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-steam-availability-en-US",
    translationKey: "steam-availability",
    locale: "en-US",
    routeKind: "fixed",
    slug: "steam",
    url: "/steam",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 Steam availability and AppID 3582120",
    seoTitle: "Cohen 1939 steam page — AppID 3582120 and Steam-only launch",
    metaDescription:
      "Cohen 1939 steam page is on AppID 3582120. The Cube of Cube top-down action game launches Sep 29, 2026 as a Steam-only release for Windows 10 64-bit or later PCs.",
    summary:
      "Cohen 1939 launches on Steam under AppID 3582120 on Sep 29, 2026 for Windows 10 64-bit or later PCs. Steam Community hub presence is community/video demand signal only.",
    hero: {
      eyebrow: "Steam Listing",
      subtitle:
        "Confirm the Cohen 1939 Steam availability on AppID 3582120 and the Steam-only launch scope.",
      ctas: [
        { label: "System Requirements", href: "/system-requirements" },
        { label: "Release Status", href: "/release" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Cohen 1939 is on Steam under AppID 3582120. The launch is Steam-only for Windows 10 64-bit or later PCs. SteamDB's dated snapshot for AppID 3582120 is used as a wiki/reference source, and the Steam Community hub is community/video demand signal only.",
    keyFacts: [
      { label: "Storefront", value: "Steam only (as of 2026-09-30)" },
      { label: "AppID", value: "3582120" },
      { label: "Steam Community hub", value: "Present, community/video signal only" },
      { label: "Steam services", value: "Achievements, Family Sharing, Steam Cloud" },
    ],
    modules: [
      {
        id: "steam-appid",
        type: "prose",
        heading: "AppID 3582120 and Steam-only launch",
        body:
          "The Steam store page for AppID 3582120 is the canonical listing for Cohen 1939. SteamDB's dated snapshot for the same AppID is used as a wiki/reference source. The Steam Community hub for AppID 3582120 is treated as community/video demand signal only and never as primary current-game fact.",
      },
      {
        id: "steam-services",
        type: "prose",
        heading: "Steam services supported",
        body:
          "The Steam store page lists Steam achievements, Family Sharing and Steam Cloud as supported on the launch build. The number of achievements is not announced as of 2026-09-30 on the Steam store page; per-achievement names are not announced as of 2026-09-30.",
      },
    ],
    faqIds: ["cohen-1939-on-steam"],
    relatedPageIds: ["fixed-system-requirements-en-US", "fixed-release-status-en-US", "fixed-platforms-en-US", "fixed-achievements-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /platforms — Platforms at launch
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-platforms-en-US",
    translationKey: "platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms",
    url: "/platforms",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 platforms — Windows-only PC launch",
    seoTitle: "Cohen 1939 platforms — Windows 10 64-bit PC at launch only",
    metaDescription:
      "Cohen 1939 platforms at launch are Windows 10 64-bit or later PCs only. macOS, Linux, console and co-op or multiplayer versions are not announced as of 2026-09-30.",
    summary:
      "Cohen 1939 launches as a Windows 10 64-bit or later PC title on Steam. macOS, Linux, console versions, and co-op or multiplayer modes are not announced as of 2026-09-30.",
    hero: {
      eyebrow: "Platforms",
      subtitle:
        "Confirm Cohen 1939's Windows-only PC launch scope and what is not announced on 2026-09-30.",
      ctas: [
        { label: "Steam Listing", href: "/steam" },
        { label: "Release Status", href: "/release" },
        { label: "System Requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "Cohen 1939 launches on Windows 10 64-bit or later PCs only, via Steam AppID 3582120. The launch scope is single-player. macOS, Linux, console versions, and co-op or multiplayer modes are not announced as of 2026-09-30.",
    keyFacts: [
      { label: "Confirmed platform", value: "Windows 10 64-bit or later (Steam)" },
      { label: "macOS", value: "Not announced as of 2026-09-30" },
      { label: "Linux", value: "Not announced as of 2026-09-30" },
      { label: "Console versions", value: "Not announced as of 2026-09-30" },
      { label: "Co-op / multiplayer", value: "Not announced as of 2026-09-30" },
      { label: "Scope", value: "Single-player launch build" },
    ],
    modules: [
      {
        id: "platforms-windows",
        type: "prose",
        heading: "Windows PC at launch",
        body:
          "The Steam store page for AppID 3582120 lists Windows 10 64-bit or later as the only supported platform for the launch build. This makes the launch a Steam-only, Windows-only PC title.",
      },
      {
        id: "platforms-not-announced",
        type: "prose",
        heading: "What is not announced on 2026-09-30",
        body:
          "macOS, Linux, console versions and co-op or multiplayer modes are not announced as of 2026-09-30. Console-specific plans and post-launch co-op announcements are not part of the launch scope.",
      },
    ],
    faqIds: ["cohen-1939-platforms"],
    relatedPageIds: ["fixed-steam-availability-en-US", "fixed-release-status-en-US", "fixed-system-requirements-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /system-requirements — Minimum PC spec
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-system-requirements-en-US",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 System Requirements",
    seoTitle: "Cohen 1939 System Requirements: PC Specs You Need",
    metaDescription:
      "Check the Cohen 1939 system requirements for Windows PC, including the published minimum spec table, unannounced recommended specs, and download size status.",
    summary:
      "Cohen 1939 minimum Windows PC spec is published on the Steam store page. Recommended specs and download size are not announced as of 2026-09-30.",
    hero: {
      eyebrow: "System Requirements",
      subtitle:
        "Check the Cohen 1939 Windows minimum PC spec table and what is not announced as of 2026-09-30.",
      ctas: [
        { label: "Steam Listing", href: "/steam" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "The official Steam store page lists the Cohen 1939 minimum spec as Windows 10 64-bit or later, Dual Core 2.4 GHz CPU, 8 GB RAM and a GeForce GTX 1060 GPU. Recommended PC specification and download size are not announced as of 2026-09-30.",
    keyFacts: [
      { label: "OS", value: "Windows 10 64-bit or later" },
      { label: "CPU", value: "Dual Core 2.4 GHz" },
      { label: "RAM", value: "8 GB" },
      { label: "GPU", value: "GeForce GTX 1060" },
      { label: "Recommended spec", value: "Not announced as of 2026-09-30" },
      { label: "Download size", value: "Not announced as of 2026-09-30" },
    ],
    modules: [
      {
        id: "spec-minimum",
        type: "data-table",
        heading: "Cohen 1939 minimum PC specification",
        columns: [
          { key: "category", label: "Component" },
          { key: "requirement", label: "Minimum requirement" },
        ],
        rows: [
          { category: "Operating system", requirement: "Windows 10 64-bit or later" },
          { category: "Processor", requirement: "Dual Core 2.4 GHz" },
          { category: "Memory", requirement: "8 GB RAM" },
          { category: "Graphics", requirement: "GeForce GTX 1060" },
        ],
      },
      {
        id: "spec-unannounced",
        type: "prose",
        heading: "Recommended specs and download size",
        body:
          "The recommended PC specification and the download size are not announced as of 2026-09-30 on the Steam store page. Both items are tracked as dated \"not announced as of research date\" notes rather than placeholder or TBD lines.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-steam-availability-en-US", "fixed-platforms-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /languages — Supported languages
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-languages-en-US",
    translationKey: "languages",
    locale: "en-US",
    routeKind: "fixed",
    slug: "languages",
    url: "/languages",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 Languages",
    seoTitle: "Cohen 1939 Languages: Supported UI, Subtitles, Audio",
    metaDescription:
      "Cohen 1939 languages cover four UI/subtitle tracks plus English-only full audio. See the confirmed list and unannounced status.",
    summary:
      "Cohen 1939 ships with English full audio and English, Simplified Chinese, Traditional Chinese and Russian interface and subtitle support.",
    hero: {
      eyebrow: "Languages",
      subtitle:
        "Confirm Cohen 1939's English full-audio track and the four confirmed UI and subtitle languages.",
      ctas: [
        { label: "Overview", href: "/about" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Cohen 1939 ships with English as the only confirmed full-audio language. Interface and subtitle support covers English, Simplified Chinese, Traditional Chinese and Russian. No additional UI / audio language pairs are announced on the Steam store page as of 2026-09-30.",
    keyFacts: [
      { label: "Full audio", value: "English only" },
      { label: "Interface / subtitles", value: "English, Simplified Chinese, Traditional Chinese, Russian" },
      { label: "Additional UI languages", value: "Not announced as of 2026-09-30" },
      { label: "Additional audio languages", value: "Not announced as of 2026-09-30" },
    ],
    modules: [
      {
        id: "languages-audio",
        type: "prose",
        heading: "Full audio",
        body:
          "English is the only confirmed full-audio language on the Cohen 1939 Steam store page for AppID 3582120 as of 2026-09-30. Additional audio languages are not announced as of 2026-09-30.",
      },
      {
        id: "languages-ui",
        type: "prose",
        heading: "Interface and subtitles",
        body:
          "Interface and subtitle support covers English, Simplified Chinese, Traditional Chinese and Russian. SteamDB's dated snapshot for AppID 3582120 is the wiki/reference source for the same language list.",
      },
    ],
    faqIds: ["cohen-1939-languages"],
    relatedPageIds: ["about", "fixed-platforms-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /story — Setting and Elisa's revenge arc
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-story-en-US",
    translationKey: "story",
    locale: "en-US",
    routeKind: "fixed",
    slug: "story",
    url: "/story",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 Story",
    seoTitle: "Cohen 1939 Story: Setting, Elisa, And Tone Explained",
    metaDescription:
      "Read the Cohen 1939 story: 1939 Birmingham criminal underworld, Elisa's revenge arc, and the Peaky Blinders-inspired tone.",
    summary:
      "Cohen 1939 is set in the criminal side of 1939 Birmingham. Protagonist Elisa hunts the criminals responsible for her husband's murder through rain-soaked streets and smoke-filled hideouts.",
    hero: {
      eyebrow: "Story",
      subtitle:
        "Read the Cohen 1939 story snapshot: 1939 Birmingham setting, Elisa revenge arc, Peaky Blinders-inspired tone.",
      ctas: [
        { label: "Overview", href: "/about" },
        { label: "Characters", href: "/characters" },
        { label: "Gameplay", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "Cohen 1939 is set in the criminal side of 1939 Birmingham. Protagonist Elisa leads a revenge arc after her husband's murder, with rain-soaked streets and smoke-filled hideouts framing the Peaky Blinders-inspired gangster atmosphere. Detailed beat-by-beat plot points are not announced as of 2026-09-30.",
    keyFacts: [
      { label: "Setting", value: "1939 Birmingham criminal underworld" },
      { label: "Protagonist", value: "Elisa" },
      { label: "Motivation", value: "Revenge for her husband's murder" },
      { label: "Tone", value: "Peaky Blinders-inspired gangster atmosphere" },
      { label: "Detail level", value: "Setting and motivation confirmed; deeper beats not announced as of 2026-09-30" },
    ],
    modules: [
      {
        id: "story-setting",
        type: "prose",
        heading: "Setting — 1939 Birmingham criminal underworld",
        body:
          "The launch build is set in the criminal side of 1939 Birmingham, with rain-soaked streets and smoke-filled hideouts. The Steam store page describes the atmosphere as Peaky Blinders-inspired gangster.",
      },
      {
        id: "story-elisa",
        type: "prose",
        heading: "Protagonist — Elisa and the revenge arc",
        body:
          "Protagonist Elisa hunts the criminals responsible for her husband's murder. The launch build is positioned as a self-contained single-player release with a narrative-driven single-player gangster mission loop.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "fixed-characters-en-US", "fixed-gameplay-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /characters — Playable roster
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-characters-en-US",
    translationKey: "characters",
    locale: "en-US",
    routeKind: "fixed",
    slug: "characters",
    url: "/characters",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 Characters",
    seoTitle: "Cohen 1939 Characters: Playable Roster And Abilities",
    metaDescription:
      "Meet the Cohen 1939 characters: four playable characters (Elisa lead plus three others), single-player character-switch framing, and unique ability hooks for each.",
    summary:
      "Cohen 1939 has four playable characters — Elisa plus three additional playable characters — each with a unique ability hook. Per-character ability lists are not announced as of 2026-09-30.",
    hero: {
      eyebrow: "Characters",
      subtitle:
        "Read the Cohen 1939 playable roster: Elisa lead, three additional playable characters, unique ability hooks per character.",
      ctas: [
        { label: "Story", href: "/story" },
        { label: "Gameplay", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "Cohen 1939 has four playable characters. Elisa is the lead protagonist, with three additional playable characters joining the single-player character-switch framing. Each playable character carries a unique ability hook. Per-character ability lists, individual names for the three supporting playable characters, and character-specific moveset details are not announced as of 2026-09-30.",
    keyFacts: [
      { label: "Playable count", value: "Four playable characters" },
      { label: "Lead", value: "Elisa" },
      { label: "Supporting", value: "Three additional playable characters" },
      { label: "Ability framing", value: "Each playable character carries a unique ability hook" },
      { label: "Per-character details", value: "Not announced as of 2026-09-30" },
    ],
    modules: [
      {
        id: "characters-roster",
        type: "prose",
        heading: "Cohen 1939 playable roster",
        body:
          "The launch build ships with four playable characters. Elisa is the lead protagonist and the centre of the revenge arc; three additional playable characters fill out the single-player character-switch framing. Each playable character carries a unique ability hook that shapes how a given encounter unfolds.",
      },
      {
        id: "characters-unannounced",
        type: "prose",
        heading: "What is not announced on 2026-09-30",
        body:
          "The names of the three supporting playable characters, full per-character ability lists, individual moveset details, and chapter-by-chapter character availability are not announced as of 2026-09-30. The Cohen 1939 Steam store page does not publish these details at launch.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-story-en-US", "fixed-gameplay-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /gameplay — Top-down twin-stick loop
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-gameplay-en-US",
    translationKey: "gameplay",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gameplay",
    url: "/gameplay",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 Gameplay",
    seoTitle: "Cohen 1939 Gameplay: Top-Down Loop And Weapons",
    metaDescription:
      "Learn how Cohen 1939 gameplay works: top-down twin-stick shooter framing, Peaky Blinders atmosphere, and the four-character empty-gun loop.",
    summary:
      "Cohen 1939 is a top-down twin-stick shooter pairing a Peaky Blinders-style gangster atmosphere with Hotline Miami-style lethal top-down combat. The core loop is built around a four-character playable roster with unique ability hooks.",
    hero: {
      eyebrow: "Gameplay",
      subtitle:
        "Read the Cohen 1939 gameplay loop: top-down twin-stick shooter framing, four-character empty-gun weapon pick-up loop, and the Peaky Blinders / Hotline Miami atmosphere mix.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "Story", href: "/story" },
        { label: "Trailer", href: "/trailer" },
      ],
    },
    quickAnswer:
      "Cohen 1939 is a top-down twin-stick shooter with a Peaky Blinders-style gangster atmosphere and a Hotline Miami-style lethal top-down combat system. The launch build supports four playable characters with unique ability hooks, weapon pick-up across the rain-soaked 1939 Birmingham streets, and beat 'em up / shoot 'em up tags alongside a third-person shooter variant tag.",
    keyFacts: [
      { label: "Camera", value: "Top-down twin-stick" },
      { label: "Atmosphere", value: "Peaky Blinders-inspired gangster" },
      { label: "Combat", value: "Hotline Miami-style lethal top-down" },
      { label: "Playable characters", value: "Four, each with a unique ability hook" },
      { label: "Weapon loop", value: "Empty-gun stun → grab fresh weapon → keep moving" },
      { label: "Tags", value: "Action / Adventure / Indie, beat 'em up / shoot 'em up, third-person shooter variant" },
    ],
    modules: [
      {
        id: "gameplay-loop",
        type: "prose",
        heading: "Cohen 1939 combat loop",
        body:
          "Cohen 1939 is a top-down twin-stick shooter that pairs a Peaky Blinders-style gangster atmosphere with Hotline Miami-style lethal top-down combat. The moment-to-moment loop revolves around an empty-gun stun → grab fresh weapon → keep moving rhythm across the rain-soaked 1939 Birmingham streets. Steam tags on the official store page list beat 'em up / shoot 'em up alongside a third-person shooter variant tag for the action, adventure and indie release.",
      },
      {
        id: "gameplay-characters",
        type: "prose",
        heading: "Four-character ability roster",
        body:
          "The launch build ships with four playable characters. Each playable character carries a unique ability hook that shapes how a given encounter unfolds. Per-character ability lists and weapon stat lines are not announced as of 2026-09-30.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-characters-en-US", "fixed-story-en-US", "fixed-trailer-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /trailer — Official trailer and media
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-trailer-en-US",
    translationKey: "trailer",
    locale: "en-US",
    routeKind: "fixed",
    slug: "trailer",
    url: "/trailer",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 Trailer: Official Steam Store Video",
    seoTitle: "Cohen 1939 Trailer: Official Steam Video & Media",
    metaDescription:
      "Watch the official Cohen 1939 trailer on the Steam store page for AppID 3582120 and find the same video shared on the Steam Community hub.",
    summary:
      "The official Cohen 1939 trailer is hosted on the Steam store page for AppID 3582120. The same video is shared on the Steam Community hub. Third-party embeds are not used.",
    hero: {
      eyebrow: "Trailer",
      subtitle:
        "Find the official Cohen 1939 trailer on the Steam store page for AppID 3582120.",
      ctas: [
        { label: "Overview", href: "/about" },
        { label: "Gameplay", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "The official Cohen 1939 trailer is hosted on the Steam store page for AppID 3582120. The same trailer is shared on the Steam Community hub for the same AppID. No third-party embed is used in this launch build.",
    keyFacts: [
      { label: "Official trailer host", value: "Steam store page (AppID 3582120)" },
      { label: "Mirror", value: "Steam Community hub (AppID 3582120)" },
      { label: "Embed policy", value: "Link-only, no third-party iframe" },
    ],
    modules: [
      {
        id: "trailer-official",
        type: "prose",
        heading: "Official Steam trailer",
        body:
          "The Cohen 1939 official trailer is hosted on the Steam store page for AppID 3582120. The Steam Community hub for the same AppID mirrors the same trailer. This launch build links out to the official Steam-hosted trailer rather than embedding a third-party player.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "fixed-gameplay-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /achievements — Steam achievements, Family Sharing, Cloud
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-achievements-en-US",
    translationKey: "achievements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "achievements",
    url: "/achievements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 Achievements, Family Sharing, and Cloud",
    seoTitle: "Cohen 1939 Achievements: Steam Support Confirmed",
    metaDescription:
      "Cohen 1939 achievements are supported on Steam, with Family Sharing and Steam Cloud also confirmed for AppID 3582120 on the official store page.",
    summary:
      "Cohen 1939 supports Steam achievements, Family Sharing and Steam Cloud on AppID 3582120. The total achievement count and individual achievement names are not announced as of 2026-09-30.",
    hero: {
      eyebrow: "Achievements",
      subtitle:
        "Confirm Cohen 1939 Steam services: achievements, Family Sharing and Steam Cloud support on AppID 3582120.",
      ctas: [
        { label: "Steam Listing", href: "/steam" },
        { label: "Overview", href: "/about" },
      ],
    },
    quickAnswer:
      "Cohen 1939 supports Steam achievements, Family Sharing and Steam Cloud on AppID 3582120. The total achievement count and individual achievement names are not announced as of 2026-09-30 on the Steam store page.",
    keyFacts: [
      { label: "Steam achievements", value: "Supported" },
      { label: "Family Sharing", value: "Supported" },
      { label: "Steam Cloud", value: "Supported" },
      { label: "Achievement count", value: "Not announced as of 2026-09-30" },
      { label: "Achievement names", value: "Not announced as of 2026-09-30" },
    ],
    modules: [
      {
        id: "achievements-services",
        type: "prose",
        heading: "Steam services supported on AppID 3582120",
        body:
          "The Steam store page for AppID 3582120 lists Steam achievements, Family Sharing and Steam Cloud as supported on the launch build. SteamDB's dated snapshot for the same AppID confirms the same set of Steam services.",
      },
      {
        id: "achievements-unannounced",
        type: "prose",
        heading: "What is not announced on 2026-09-30",
        body:
          "The total number of Steam achievements, individual achievement names, and per-achievement unlock conditions are not announced as of 2026-09-30. The Cohen 1939 Steam store page does not publish these details at launch.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-steam-availability-en-US", "about"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /price — Steam price and introductory offer
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-price-en-US",
    translationKey: "price",
    locale: "en-US",
    routeKind: "fixed",
    slug: "price",
    url: "/price",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Cohen 1939 Price on Steam: Intro and Base Price",
    seoTitle: "Cohen 1939 Price: $13.49 Intro and $14.99 Base",
    metaDescription:
      "Cohen 1939 price on Steam is $13.49 introductory with 10% off until October 13, 2026, then $14.99 base. Region: US Steam store.",
    summary:
      "Cohen 1939 is priced at $13.49 with a 10% introductory offer on the US Steam store until October 13, 2026. After the introductory window closes, the base price returns to $14.99.",
    hero: {
      eyebrow: "Price",
      subtitle:
        "Confirm the Cohen 1939 Steam introductory offer ($13.49 until Oct 13, 2026) and base price ($14.99) for the US Steam store.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Steam Listing", href: "/steam" },
      ],
    },
    quickAnswer:
      "Cohen 1939 is priced at $13.49 with a 10% introductory offer on the US Steam store until October 13, 2026. After the introductory window closes, the base price returns to $14.99. Prices reflect the US Steam store snapshot on 2026-09-30.",
    keyFacts: [
      { label: "Introductory price", value: "$13.49 (10% off)" },
      { label: "Introductory end date", value: "October 13, 2026" },
      { label: "Base price", value: "$14.99" },
      { label: "Region", value: "US Steam store (snapshot 2026-09-30)" },
    ],
    modules: [
      {
        id: "price-intro",
        type: "prose",
        heading: "Introductory offer",
        body:
          "The Cohen 1939 introductory offer on the US Steam store is $13.49 with 10% off the $14.99 base price. The introductory offer runs until October 13, 2026.",
      },
      {
        id: "price-base",
        type: "prose",
        heading: "Base price after the introductory window",
        body:
          "After October 13, 2026 the Cohen 1939 base price returns to $14.99 on the US Steam store. Both prices reflect the US Steam store snapshot on 2026-09-30.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-release-status-en-US", "fixed-steam-availability-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-30",
  },
];
