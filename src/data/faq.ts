import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "cohen-1939-on-steam",
    question: "Is Cohen 1939 on Steam?",
    answer:
      "Yes. Cohen 1939 is on Steam under AppID 3582120, published by 2P Games and developed by Cube of Cube. The Steam store page is the canonical listing as of 2026-09-30.",
    pageIds: ["home", "about", "fixed-steam-availability-en-US", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "cohen-1939-release-date",
    question: "When does Cohen 1939 release?",
    answer:
      "The Cohen 1939 launch date is Sep 29, 2026 on Steam for Windows 10 64-bit or later. The $13.49 introductory offer runs until October 13, 2026, after which the base price returns to $14.99.",
    pageIds: ["home", "fixed-release-status-en-US", "fixed-price-en-US", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "cohen-1939-platforms",
    question: "What platforms is Cohen 1939 on?",
    answer:
      "Cohen 1939 launches on Windows 10 64-bit or later PCs only via Steam as of 2026-09-30. macOS, Linux, console versions and co-op or multiplayer modes are not announced as of 2026-09-30.",
    pageIds: ["home", "about", "fixed-platforms-en-US", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "cohen-1939-languages",
    question: "What languages does Cohen 1939 support?",
    answer:
      "English is the only confirmed full-audio language. Interface and subtitle support covers English, Simplified Chinese, Traditional Chinese and Russian.",
    pageIds: ["home", "fixed-languages-en-US", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
