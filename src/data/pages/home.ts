import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Cohen 1939 — Steam launch hub for 1939 Birmingham action",
  seoTitle: "Cohen 1939 — Steam top-down twin-stick action game release",
  metaDescription:
    "Cohen 1939 is the Cube of Cube / 2P Games top-down twin-stick action game launching on Steam Sep 29, 2026 for Windows. Set in 1939 Birmingham with English audio.",
  summary:
    "Cohen 1939 is an Action, Adventure and Indie top-down twin-stick shooter from developer Cube of Cube and publisher 2P Games. The single-player game launches on Steam on Sep 29, 2026 for Windows 10 64-bit or later, with Steam AppID 3582120.",
  hero: {
    eyebrow: "Launch hub",
    subtitle:
      "Cohen 1939 launches Sep 29, 2026 on Steam AppID 3582120 from Cube of Cube and 2P Games — a top-down twin-stick shooter set in 1939 Birmingham with English full audio.",
    ctas: [
      { label: "Release Date", href: "/release" },
      { label: "Steam Listing", href: "/steam" },
      { label: "Gameplay", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "Cohen 1939 is an Action, Adventure and Indie top-down twin-stick shooter from developer Cube of Cube and publisher 2P Games. The single-player game launches on Steam on Sep 29, 2026 for Windows 10 64-bit or later, with Steam AppID 3582120. The launch build is set in the criminal side of 1939 Birmingham, with protagonist Elisa leading a revenge arc. English is the only confirmed full-audio track, while English, Simplified Chinese, Traditional Chinese and Russian are the supported interface and subtitle languages.",
  keyFacts: [
    { label: "Release date", value: "Sep 29, 2026 (Steam, Windows)" },
    { label: "Steam AppID", value: "3582120" },
    { label: "Developer", value: "Cube of Cube" },
    { label: "Publisher", value: "2P Games" },
    { label: "Genre", value: "Action / Adventure / Indie top-down twin-stick shooter" },
    { label: "Platform", value: "Windows 10 64-bit or later (Steam only as of 2026-09-30)" },
    { label: "Audio", value: "English full audio only" },
    { label: "UI / subtitles", value: "English, Simplified Chinese, Traditional Chinese, Russian" },
    { label: "Introductory offer", value: "$13.49 (10% off) until October 13, 2026" },
    { label: "Base price", value: "$14.99 after the introductory window" },
  ],
  modules: [
    {
      id: "home-quick-answer",
      type: "prose",
      heading: "What is Cohen 1939",
      body:
        "Cohen 1939 is an Action, Adventure and Indie top-down twin-stick shooter from developer Cube of Cube and publisher 2P Games. The single-player game launches on Steam on Sep 29, 2026 for Windows 10 64-bit or later, with Steam AppID 3582120. The launch build is set in the criminal side of 1939 Birmingham, with protagonist Elisa leading a revenge arc. English is the only confirmed full-audio track, while English, Simplified Chinese, Traditional Chinese and Russian are the supported interface and subtitle languages.",
    },
    {
      id: "home-launch-facts",
      type: "prose",
      heading: "Cohen 1939 launch facts: release, Steam, platforms and price",
      body:
        "The release date is Sep 29, 2026 on Steam, and the introductory offer of $13.49 (10% off) ends October 13, 2026. The base price returns to $14.99 once the introductory window closes. The Steam AppID is 3582120, and the Windows-only launch scope means Windows 10 64-bit or later is the only supported platform as of 2026-09-30; macOS, Linux, console versions and co-op or multiplayer modes are not announced as of 2026-09-30. Steam achievements, Family Sharing and Steam Cloud are all supported on the Steam store page, while the minimum PC spec on the official Steam store lists a Dual Core 2.4 GHz CPU, 8 GB RAM and a GeForce GTX 1060 GPU. The recommended PC specification and the download size are not announced as of 2026-09-30.",
      links: [
        { label: "Release Status", href: "/release", description: "Confirmed Sep 29, 2026 launch window." },
        { label: "Steam Listing", href: "/steam", description: "AppID 3582120 and Steam-only launch." },
        { label: "Platforms", href: "/platforms", description: "Windows 10 64-bit or later only." },
        { label: "Price", href: "/price", description: "$13.49 introductory offer, $14.99 base." },
      ],
    },
    {
      id: "home-pages",
      type: "entity-grid",
      heading: "Launch Pages",
      items: [
        { title: "Overview", summary: "Identity, developer, publisher, genre and launch scope.", href: "/about" },
        { title: "Release Date", summary: "Confirmed Sep 29, 2026 launch window.", href: "/release" },
        { title: "Steam Listing", summary: "AppID 3582120 and Steam-only launch.", href: "/steam" },
        { title: "Platforms", summary: "Windows 10 64-bit or later and what is not announced.", href: "/platforms" },
        { title: "System Requirements", summary: "Minimum spec for the Windows launch build.", href: "/system-requirements" },
        { title: "Languages", summary: "English full audio and four UI / subtitle languages.", href: "/languages" },
        { title: "Story", summary: "Elisa revenge arc and 1939 Birmingham setting.", href: "/story" },
        { title: "Characters", summary: "Four playable characters with unique abilities.", href: "/characters" },
        { title: "Gameplay", summary: "Top-down twin-stick combat and weapon pick-up loop.", href: "/gameplay" },
        { title: "Trailer", summary: "Official Steam store trailer and media.", href: "/trailer" },
        { title: "Achievements", summary: "Steam achievements, Family Sharing and Steam Cloud.", href: "/achievements" },
        { title: "Price", summary: "$13.49 introductory offer, base $14.99, offer window.", href: "/price" },
      ],
    },
  ],
  faqIds: ["cohen-1939-on-steam", "cohen-1939-release-date", "cohen-1939-platforms", "cohen-1939-languages"],
  relatedPageIds: [
    "about",
    "fixed-release-status-en-US",
    "fixed-steam-availability-en-US",
    "fixed-platforms-en-US",
    "fixed-system-requirements-en-US",
    "fixed-languages-en-US",
    "fixed-story-en-US",
    "fixed-characters-en-US",
    "fixed-gameplay-en-US",
    "fixed-trailer-en-US",
    "fixed-achievements-en-US",
    "fixed-price-en-US",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-30",
};
