import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact page for Cohen 1939 — corrections, official source updates, and site feedback.",
    summary:
      "A trust page for corrections, official source updates, and site feedback for the Cohen 1939 launch hub.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, official source updates, and feedback channels for the Cohen 1939 launch hub.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "The Cohen 1939 launch hub does not currently publish a direct contact channel. Use the Steam store page for AppID 3582120 or the developer / publisher pages if you need to reach the creators directly.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Game contact", value: "Cube of Cube / 2P Games via the Steam store page" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "The Cohen 1939 launch hub does not currently publish a direct contact channel. For corrections or source updates, please reference the Steam store page for AppID 3582120 or the developer and publisher pages.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "If you spot a factual error, send a Steam Community hub thread for AppID 3582120 or an official store page link. Do not share private account credentials or game account information.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "fixed-steam-availability-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Cohen 1939 launch hub — analytics, hosting, and contact channels.",
    summary:
      "A starter privacy policy page for analytics, logs, and contact messages on the Cohen 1939 launch hub.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the Cohen 1939 launch hub collects, why it is used, and how visitors can reach the site.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This page should be reviewed periodically and updated to match the deployed site's analytics, hosting, and contact setup.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts in V1" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a contact method is added, messages may include the information visitors choose to send. Do not request sensitive personal information.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the Cohen 1939 launch hub — unofficial status, informational use, and acceptable use.",
    summary:
      "A starter terms page for the unofficial Cohen 1939 launch hub.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "These terms apply to the unofficial Cohen 1939 launch hub and should be reviewed periodically for accuracy.",
    keyFacts: [
      { label: "Use", value: "Informational launch guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Update before launch" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with Cube of Cube, 2P Games, Valve, or Steam unless explicitly stated. All game facts are sourced from the Steam store page for AppID 3582120 and the dated SteamDB snapshot as of 2026-09-30.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
];
