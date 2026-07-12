# DESIGN REVIEW — Joe Hliboki / Always Forward Business Coaching

**Date:** 2026-07-11 · **Scope:** Review only, no files changed. · **Question:** Is the site bland — and is the fix more media, or better layout/type/hierarchy?

---

## Part 1 — Inventory

### Palette (all tokenized in `css/style.css`)
| Token | Value | Role |
|---|---|---|
| `--cream` | #FAF7F1 | page background |
| `--paper` | #FFFFFF | cards, form fields |
| `--ink` | #14273D | text, illustration strokes, footer |
| `--blue` | #1E4E8C | primary buttons, H2, logo |
| `--blue-bright` | #2E6FD4 | links, eyebrows, accents |
| `--blue-wash` | #E7EEF7 | tinted section bands, illo fills |
| `--sky` | #A9C4E4 | secondary illo fill, form borders |
| `--line` | #D9D2C5 | hairline dividers |

Effectively a **two-hue system**: warm cream + a navy family. There is no warm accent and no third hue anywhere on the site.

### Type
- **Display:** Source Serif 4 (600/700) — H1 36→52px, H2 27→34px
- **Body:** Public Sans (400/600) — 16→17px, line-height 1.65
- Eyebrows: 13px uppercase tracked. Solid, classic pairing; modest scale throughout.

### Spacing
- `.section` = 64px mobile / 96px desktop vertical padding, **identical on every section of every page**
- `.container` max-width 1120px; `.prose` capped at 68ch
- Rhythm is metronomic: cream band → blue-wash band → cream band, same height feel, same divider glyph between them.

### Media that exists today
- **Zero raster images.** No `images/` folder, no photos of Joe, no book cover photo, no og-image (flagged in HTML comments).
- **A genuinely coherent inline-SVG illustration system**: hand-drawn "rising line + arrowhead" motif — hero illustrations on 5 pages, 3 spot illustrations on home cards, stat marks, section dividers, logo mark. One stroke weight (2.5), three fills.
- **Motion:** hero line draws on load, scroll reveals with stagger, divider draws, card hover lifts, link underline slide. All gated behind `prefers-reduced-motion`. Tasteful and disciplined.

### Where it reads empty, flat, or repetitive
1. **No photograph of Joe anywhere.** The About page is six paragraphs of first-person storytelling with no face. For a personal-brand coaching business this is the single largest absence.
2. **Book page shows a drawing of a book, not the book.** The real cover exists on Amazon.
3. **Coaching page:** 3 of 5 sections are a lone H2 + one 68ch prose block — the right ~40% of the container is dead air at desktop.
4. **Same three spot illustrations reused verbatim** on home cards and blog cards. Coaching and early-career cards have no illustration at all.
5. **Testimonials are bracketed placeholders**; the stat row is three identical arrow glyphs.
6. **Identical divider glyph and identical section padding everywhere** — no crescendo, no page has a peak moment after the hero.

✅ Inventory complete

---

## Part 2 — The Board

*Full panel, design-heavy voices first. Isolated takes; disagreement preserved.*

**Paula Scher** — It's not bland because it's missing photos. It's bland because everything is medium-loud. You have a headline like "Coaching built on thirty years of actually doing the work" — that's a poster, and you're setting it at 52 pixels like a brochure subhead. Make it enormous. Let it crowd the illustration, let it break the grid, let the serif do the work. Strip every image off this site and the type should still say *thirty years, no nonsense* — right now it says *template with good manners*. And stop calling the layout clean like that's a compliment. My reservation: if you answer this problem with a photoshoot instead of with typography, you'll get a nicer-looking bland site.

**Aaron Draplin** — First, credit where it's due: that rising-line system is honest work. One stroke weight, a motif that means something, a logo that'll survive a favicon and a hat. That's craft. But here's the thing that'd stop me cold: this is a guy-you-trust business and there's no guy. Thirty years of stories on the About page and I can't see his face. Get one honest photo — not stock, not LinkedIn-headshot-with-fake-bokeh — Joe at a whiteboard, Joe on a ballfield, something with grit. And the book page kills me: you *drew* a book when the real cover art exists. Show the actual artifact! Nobody buys a drawing of a Field Notes.

**Josh Comeau** — The motion craft here is genuinely good — everything's gated behind `prefers-reduced-motion`, content survives without JS, the hero line-draw is a lovely signature. But it's the *same* signature nine times. Every section: fade-up-and-right reveal, same divider glyph, same 90ms stagger. Uniform motion reads as no motion after the second section. What I'd want: one escalating idea — the rising line could literally travel down the home page, connecting sections, arriving at the CTA. That turns decoration into narrative. My reservation on "add media": a photo won't fix flatness if every element still enters the viewport identically.

**Brad Frost** — The system underneath this is better than most agency work — real tokens, consistent components, honest fallbacks. But patterns only prove themselves with real content, and two patterns are failing at the page level: the "section-head + prose" organism leaves half the container empty on desktop (coaching page especially), and the testimonial component has never met real content. Also: blog cards recycling the home cards' spot illustrations verbatim isn't reuse, it's a placeholder wearing a system's clothes. If photography gets added, it needs rules — aspect ratios, a duotone treatment token, alt/width/height conventions — or it'll be the first unsystematized asset class on the site and it'll drift.

**Tobias van Schneider** — There is actually a soul here, which is rare: "always forward," one line rising across every page. Most small sites don't have an idea; this one has an idea executed at half volume. The whitespace isn't confident, it's leftover — a 68ch column with a silent right half is not editorial, it's unfinished. Premium means fewer, bigger moves: a portrait of Joe treated cinematically — navy duotone, large, unapologetic — one oversized pull-quote per page, and a type scale that trusts itself. Would I put my name on it in five years? The illustration system, yes. The layout, not yet. If you remove the logo, I'd know the brand — that's worth protecting while you fix the rest.

**Seth Godin** — The copy is remarkable. "The advice held up under quota. It will hold up for you" — people would quote that. The design's job is to not bury it, and right now the design is safe enough to be invisible. But the real question isn't texture versus photography. It's: the remarkable thing about this business is *Joe* — a specific human with seventeen years at Cisco — and Joe does not appear on his own website. No face, no voice, no sixty-second video of him telling you the truth about your first job. Safe is the risk here.

**Chris Do** — Let me ask the question behind the question. What's the gut feeling this site must produce? *"This guy has actually done it, and he'll tell me the truth."* Now audit the evidence: the words claim it, but there's no face, no client voices (placeholders), and — this is the miss — the proof is already in the copy and never surfaced visually: Cisco, Veeam, Protegrity, Red Lion, FocalPoint, a published book. Those are credibility assets sitting in paragraph text. The media question is really an evidence question. Add proof media — portrait, real book cover, testimonials, a "rooms he's sold in" row — before you add a single decorative pixel.

**Justin Welsh** — Different lens: this site's only owned-channel play, the first-chapter email capture, is buried on one page. Whatever you do visually, that form should be site-wide. On the bland debate — careful. This is a solo coach in Montvale, not a rebrand engagement. The highest-ROI assets are a photo, three testimonials, and a live Formspree ID, all of which cost Joe an afternoon, not a design sprint. Ship those, then art-direct. My pushback to the room: don't let a typography crusade delay a launch that's missing its contact email.

**Armagan Mucahit** — Strategy check before aesthetics: strip the logo and name — would you recognize this site? Actually, yes. Cream, navy, one rising line: that's real recognition shorthand, and most big brands can't say it. Protect it. Two strategic gaps, though. One: the business is named *Always Forward* and that why is hidden in one band on the About page — the philosophy that justifies every visual choice barely appears. Two: a one-hue palette is recognition on hard mode; a single warm accent (used only for the arrowhead moments) would make the shorthand unmistakable without breaking the system. Don't add media until it serves the why.

**Sharpest disagreement on the panel:** Paula says the fix is typography and layout — photography would just decorate a timid design. Draplin, Tobias, Seth, and Chris say a personal-brand coaching site with no photo of the coach is structurally broken and no amount of type scale fixes it. Justin says both camps are overthinking a site that's missing its phone number. Not resolved — see tradeoffs below.

✅ Board critique complete

---

## Part 3 — Prioritized Recommendations

**The verdict on your actual question:** it's both, but not equally. The site does **not** need more *decorative* media — the illustration system is already distinctive and coherent. It needs (a) **evidence media** — a portrait of Joe, the real book cover, testimonials, employer proof — and (b) **more contrast in layout and type** — scale, asymmetry, and rhythm variation. Adding textures or stock photography would dilute the one thing the site already does well.

### HIGH impact

| # | Recommendation | Where | Why | Lift |
|---|---|---|---|---|
| H1 | **Professional portrait of Joe** — one primary environmental shot + one tighter crop. Treat in-brand: navy duotone or photo with the drawn rising line overlapping it, so it joins the system instead of fighting it. | About hero (replace or pair with illo); home "Not a career coach who read about business" section | Coaching is a trust purchase; the face is the product. Board: 7 of 9. Media type: **photography**, art-directed — not stock. | Bigger lift (photoshoot logistics; small code change). Needs Joe. |
| H2 | **Real book cover image** on the book page hero and the home book band. | book.html hero (keep the burst illo as a secondary accent), index.html book band | The cover exists on Amazon; a drawing of the product where the product could be is a conversion leak. Also yields the missing og-image (1200×630). | **Quick win** (get cover file/rights from Joe). |
| H3 | **Turn the type up.** Desktop H1 → 64–76px, tighter line-height (~1.05), slight negative tracking; let the home H1 measure narrow and tall. Consider one oversized serif pull-quote per page ("The advice held up under quota."). | All heroes; one pull-quote per major page | Paula's point: the headline voice is the brand's best asset and it's set at brochure scale. Pure CSS + minor markup. | **Quick win.** |
| H4 | **Surface the proof that's already in the copy.** A quiet credibility row — "Rooms he's sold in: Cisco · Veeam · Protegrity · Red Lion" as styled text (not logos, avoids licensing), plus FocalPoint certification and the book. Replace testimonial placeholders the moment quotes arrive. | Home, below hero or in stat row; coaching page | Chris Do's evidence audit: the strongest trust signals exist only as paragraph prose. | **Quick win** (styled text now; testimonials gated on Joe). |

### MEDIUM impact

| # | Recommendation | Where | Why | Lift |
|---|---|---|---|---|
| M1 | **Fix the half-empty prose sections.** Give every "H2 + prose" section a right-column occupant: a pull-quote, a spot illustration, or an offset asymmetric layout (heading left, prose right). | coaching.html (3 sections), about.html story, early-career.html | Tobias: whitespace should be confident, not leftover. This is the main *layout* source of "bland." | Medium (CSS grid + a few spot illos from the existing system). |
| M2 | **Break the metronome.** Vary section rhythm: one full-bleed navy (`--ink`) section per page as a peak moment (the final CTA band is the natural candidate — white type on ink, big), and vary the divider so the line "climbs" differently as the page progresses. | Final CTA bands site-wide; dividers | Every page currently flatlines after the hero. A dark peak section creates crescendo with zero new assets. | Medium (CSS + minor markup). |
| M3 | **One signature motion idea** — the rising line travels: connect sections on the home page with a continuous drawn line that arrives at the CTA arrowhead. | index.html | Josh: converts nine identical reveals into one narrative gesture. Keep reduced-motion gating. | Bigger lift (SVG path + scroll logic). |
| M4 | **Spot illustrations for the card sets that have none**, and unique spots per blog post. | coaching.html "Who this is for," early-career.html "Formats," blog cards | Brad: reuse the *system* (stroke, fills, motif) with new instances; verbatim recycling reads as placeholder. | Medium (drawing time, no new tech). |
| M5 | **Single warm accent color** (e.g., a muted brass/orange) reserved exclusively for arrowheads and one CTA state. | Tokens; arrow glyphs; possibly `.btn-solid:hover` | Armagan: makes the recognition shorthand unmistakable. Used sparingly it sharpens rather than breaks the two-hue system. | **Quick win** (one token + a few selectors) — but see tradeoffs. |

### LOW impact

| # | Recommendation | Where | Why | Lift |
|---|---|---|---|---|
| L1 | **Site-wide first-chapter email capture** band (currently book page only). | Above footer on home/blog | Justin: the only owned channel deserves more surface. Conversion > decoration. | Quick win (component exists). |
| L2 | **Subtle paper-grain texture on cream background** (tiny tiled SVG noise, ~2–3% opacity). | body background | Adds tactile depth cheaply; fits "warm paper" concept. Board split — see tradeoffs. | Quick win. |
| L3 | **Divider/stat-mark variation** — 2–3 alternate glyphs in rotation. | Site-wide | Reduces repetition fatigue at low cost. | Quick win. |
| L4 | **60-second intro video of Joe** on home or about. | Home hero area or About | Seth's "remarkable" play; highest trust density per second. | Big lift (production, hosting) — future phase. |

### Where the board split — tradeoffs for Jon

1. **Photography vs. typography as the primary fix.** Paula: bigger, braver type solves blandness without a photoshoot; a portrait added to a timid layout is lipstick. Majority: no face = structural gap that type can't close. **Tradeoff:** H3 is free and immediate; H1 needs Joe's cooperation and a photographer. Do H3 now, H1 as soon as Joe can be shot — they're not competing budgets.
2. **Warm accent color.** Armagan/Paula pro (recognition, energy); Tobias cautious (the restrained two-hue palette *is* part of the premium feel; a bad orange cheapens it instantly). **Tradeoff:** try it on arrowheads only, behind a token — trivially reversible.
3. **Background texture.** Draplin/Tobias mildly pro (warmth, tactility); Brad against-ish (a new unsystematized asset class; the flat cream is already distinctive). **Tradeoff:** lowest stakes on the list; skip it if in doubt.
4. **Scope discipline.** Justin vs. everyone: the site is missing email, phone, LinkedIn URL, Formspree IDs, testimonials, and an og-image. Those launch-blockers cost Joe one afternoon and beat every aesthetic item on ROI. **Recommendation:** run the content-collection ask to Joe in parallel with the quick-win CSS work (H3, H4, M5, L1, L3).

---

*Review only — no site files were modified. Prepared for Jon Wolf, Live Web Studios.*
