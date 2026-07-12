# NEEDS-ASSETS — Joe Hliboki site

Placeholders are live in the pages below (dashed-border frames labeled "see NEEDS-ASSETS.md").
Drop the real files into `images/` and swap each placeholder `<div class="img-placeholder …">` for an
`<img>` with `alt`, `width`, `height`, and `loading="lazy"` (hero placements get `<link rel="preload">` instead).

## 1. Portrait of Joe Hliboki
- **Where:** `about.html` story section (right column) · `index.html` "Not a career coach…" section (right column)
- **Spec:** one environmental portrait, minimum 1600px on the long edge, cropped to **4:5** (e.g. 1200×1500).
  Displayed at max 400px wide, so 800×1000 is the floor; shoot bigger.
- **Subject:** Joe, not stock. Environmental beats studio — at a whiteboard, at a table mid-conversation,
  or on a ballfield. Warm, natural light. Joe angled slightly toward the page content (facing left in frame).
- **Treatment:** will be given a navy-duotone / brand-toned treatment so it sits inside the cream-and-navy
  system; deliver the untreated original.
- **File:** `images/joe-portrait.jpg` (JPG q82, metadata stripped, per LWS optimization rules)

## 2. Book cover — *Bursting the Bubble*
- **Where:** `book.html` hero (main placement, ~280px wide) · `index.html` book band (small, ~160px wide)
- **Spec:** front cover, **2:3** aspect, minimum 800×1200 px, flat scan/export (no 3D mockup — the drawn
  burst accent is already provided by the site).
- **Source:** Joe's publisher files, or the artwork behind the Amazon listing (confirm rights with Joe).
- **File:** `images/book-cover.jpg`

## 3. Open Graph image (pre-existing gap, still open)
- **Where:** every page references `images/og-image.jpg` (flagged in HTML comments since first build)
- **Spec:** **1200×630 px** JPG. Recommended: brand lockup on cream with the rising-line mark, or the book
  cover on a cream field once asset #2 arrives.
- **File:** `images/og-image.jpg`

## 4. LWS "Verified & Secured" badge (flagged by /powered-by)
- `verifiedsecured.png` does not exist in this project (no `images/` folder yet), so the badge could not be
  placed or dimension-locked. Per the no-downloads rule for this task it was not fetched.
- **Action for Jon:** drop `images/verifiedsecured.png` into the project, then add the `.footer-badge` anchor
  to the footers and set `.footer-badge img { width/height }` to its exact intrinsic pixels.
- The "Powered by Live Web Studios" text credit IS in place on all 10 pages with
  `target="_blank" rel="noopener"`.

## Deferred by design (not placeholders, just noted)
- **60-second intro video of Joe** (review item L4) — recommended future phase; no placeholder was added.
