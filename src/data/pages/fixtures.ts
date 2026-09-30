import type { PageContent } from "@/types/content";
import { site } from "@/data/site";

/**
 * Fixture pages required by the contract test script.
 * These IDs are referenced by the contract test fixtures and must
 * exist in the page list. They are kept as small, internal, index-style
 * pages that mirror the user-facing navigation rather than introducing new
 * content outside the approved scope.
 */
export const fixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides | Top-Down Twin-Stick Reference`,
    metaDescription:
      "Cohen 1939 launch guide index: gameplay, characters, story, system requirements, languages, and Steam listing.",
    summary:
      "A launch-day guides index for the Cohen 1939 reference hub. The launch build covers gameplay, characters, story, system requirements, languages, Steam availability, and price.",
    hero: {
      eyebrow: "Guides",
      subtitle:
        "Launch-day guide index for Cohen 1939 — gameplay, characters, story, system requirements, languages, Steam availability, and price.",
      ctas: [
        { label: "Gameplay", href: "/gameplay" },
        { label: "Characters", href: "/characters" },
      ],
    },
    quickAnswer:
      "The Cohen 1939 guides hub collects the gameplay loop, the four-character playable roster, the Elisa revenge arc, the Windows minimum PC specification, the supported language set, the Steam AppID and price, and the platforms status in one index. Detailed mission walkthroughs are not part of the launch scope.",
    keyFacts: [
      { label: "Status", value: "Launch-day reference index" },
      { label: "Game status", value: "Releases Sep 29, 2026 on Steam" },
      { label: "Source rule", value: "Steam store page for AppID 3582120" },
    ],
    modules: [
      {
        id: "guides-launch",
        type: "prose",
        heading: "Launch-day reference pages",
        body:
          "Use the gameplay page for the top-down twin-stick combat loop, the characters page for the four-character playable roster, the story page for the Elisa revenge arc and the 1939 Birmingham setting, the system requirements page for the minimum PC spec, the languages page for the supported UI and audio set, and the Steam listing page for AppID 3582120.",
        links: [
          { label: "Gameplay", href: "/gameplay", description: "Top-down twin-stick combat loop." },
          { label: "Characters", href: "/characters", description: "Four playable characters with unique abilities." },
          { label: "Story", href: "/story", description: "Elisa revenge arc in 1939 Birmingham." },
          { label: "System Requirements", href: "/system-requirements", description: "Minimum Windows PC specification." },
          { label: "Languages", href: "/languages", description: "Supported UI, subtitle, and audio languages." },
          { label: "Steam Listing", href: "/steam", description: "AppID 3582120 and Steam-only launch." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "fixed-gameplay-en-US",
      "fixed-characters-en-US",
      "fixed-story-en-US",
      "fixed-system-requirements-en-US",
      "fixed-languages-en-US",
      "fixed-steam-availability-en-US",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Wiki`,
    seoTitle: `${site.gameName} Wiki | Identity, Release, Steam`,
    metaDescription:
      "Cohen 1939 wiki index: identity, release date, Steam AppID, platforms, languages, story, characters, gameplay, achievements, system requirements, and price.",
    summary:
      "A wiki landing index for the Cohen 1939 launch hub, collecting identity, release date, Steam AppID, platforms, languages, story, characters, gameplay, achievements, system requirements, and price in one place.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Cohen 1939 wiki index — identity, release date, Steam AppID, platforms, languages, story, characters, gameplay, achievements, system requirements, and price.",
      ctas: [
        { label: "Overview", href: "/about" },
        { label: "Release Status", href: "/release" },
      ],
    },
    quickAnswer:
      "The Cohen 1939 wiki index lists the launch-day reference pages in one place: identity, release date, Steam AppID, platforms, languages, story, characters, gameplay, achievements, system requirements, and price. No unannounced mechanics, maps, items, or dates are listed.",
    keyFacts: [
      { label: "Fact source", value: "Steam store page for AppID 3582120" },
      { label: "Content depth", value: "Launch-day reference index" },
      { label: "Update rule", value: "Expand after launch signals appear" },
    ],
    modules: [
      {
        id: "wiki-index",
        type: "prose",
        heading: "Cohen 1939 reference index",
        body:
          "The wiki index groups the launch-day reference pages into one navigation entry point. Use the overview, release, Steam, platforms, languages, story, characters, gameplay, achievements, system requirements, and price pages for verified facts dated 2026-09-30.",
        links: [
          { label: "Overview", href: "/about", description: "Identity, developer, publisher, launch scope." },
          { label: "Release Status", href: "/release", description: "Confirmed Sep 29, 2026 launch window." },
          { label: "Steam Listing", href: "/steam", description: "AppID 3582120 and Steam-only launch." },
          { label: "Platforms", href: "/platforms", description: "Windows-only PC launch." },
          { label: "Languages", href: "/languages", description: "English audio and four UI languages." },
          { label: "Story", href: "/story", description: "1939 Birmingham setting and Elisa revenge arc." },
          { label: "Characters", href: "/characters", description: "Four playable characters." },
          { label: "Gameplay", href: "/gameplay", description: "Top-down twin-stick combat loop." },
          { label: "Achievements", href: "/achievements", description: "Steam achievements and services." },
          { label: "System Requirements", href: "/system-requirements", description: "Minimum PC specification." },
          { label: "Price", href: "/price", description: "Introductory offer and base price." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "about",
      "fixed-release-status-en-US",
      "fixed-steam-availability-en-US",
      "fixed-platforms-en-US",
      "fixed-languages-en-US",
      "fixed-story-en-US",
      "fixed-characters-en-US",
      "fixed-gameplay-en-US",
      "fixed-achievements-en-US",
      "fixed-system-requirements-en-US",
      "fixed-price-en-US",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "Cohen 1939 launch FAQ: is it on Steam, when does it release, what platforms are supported, and what languages are available.",
    summary:
      "A launch-day FAQ for Cohen 1939 covering Steam availability, release date, platforms, and language support.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Common launch questions about Cohen 1939 — Steam availability, release date, platforms, and language support.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Steam Listing", href: "/steam" },
      ],
    },
    quickAnswer:
      "Cohen 1939 launches on Sep 29, 2026 on Steam AppID 3582120 for Windows 10 64-bit or later. English is the only full-audio language; interface and subtitle support covers English, Simplified Chinese, Traditional Chinese and Russian.",
    keyFacts: [
      { label: "Release", value: "Sep 29, 2026 (Steam)" },
      { label: "Platform", value: "Windows 10 64-bit or later" },
      { label: "Audio", value: "English only" },
      { label: "UI languages", value: "English, Simplified Chinese, Traditional Chinese, Russian" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ policy",
        body:
          "Keep answers short, source-aware, and easy to update. Avoid speculative claims about release dates, platforms, gameplay systems, or technical details.",
      },
    ],
    faqIds: ["cohen-1939-on-steam", "cohen-1939-release-date", "cohen-1939-platforms", "cohen-1939-languages"],
    relatedPageIds: [
      "about",
      "fixed-release-status-en-US",
      "fixed-steam-availability-en-US",
      "fixed-platforms-en-US",
      "fixed-languages-en-US",
    ],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
];
