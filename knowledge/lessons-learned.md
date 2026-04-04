# Lessons Learned

A running log of design mistakes and the rules they produced. Read this before starting any new task.

---

## 2026-04-04 — Don't use generic hero images

**What happened:** Used a stock photo hero image on the workshop landing page.

**What went wrong:** The page felt impersonal and generic -- indistinguishable from any template site. The stock image added visual noise without communicating anything specific about the workshop.

**Solution:** Replaced the hero with a typographic, content-driven layout that lets the title, subtitle, and hook do the work.

**Rule for next time:** Prefer typographic and content-driven heroes for workshop pages. Avoid decorative stock photography unless the image is specifically meaningful to the content.

---

## 2026-04-04 — Always specify CTA destination

**What happened:** Created a "Register Now" button in the landing page prototype.

**What went wrong:** The button had no `href` target or click behavior defined. During review, it was a dead end -- clicking it did nothing. This slipped through because the visual design looked complete.

**Solution:** Added the registration URL and defined the click behavior before marking the component done.

**Rule for next time:** Every button or CTA must have a target URL and click behavior defined at the time of creation. No button ships without a destination.

---

## 2026-04-04 — Check component index before inventing

**What happened:** Built a custom card component from scratch for the "What You'll Learn" section.

**What went wrong:** SDS already had a Cards composition that handled the exact use case. The custom component duplicated work, introduced inconsistency, and would not benefit from future design system updates.

**Solution:** Replaced the custom card with the existing SDS Cards composition from `context/design-system/components/index.md`.

**Rule for next time:** Always check `context/design-system/components/index.md` before building any new component. If SDS already provides it, use it.
