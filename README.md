# 10N Consulting Website

Static website for [10N Pte Ltd](https://www.10nconsulting.com) — senior operations consulting for startups and SMEs across Southeast Asia.

## File Structure

```
├── index.html        # Homepage
├── services.html     # Services detail page
├── about.html        # About Neeraj + career
├── style.css         # All styles (design system)
├── script.js         # Interactions (nav, cards, form)
├── content.js        # ← EDIT THIS to change any text or contact details
├── sitemap.xml       # For search engines and AI crawlers
├── robots.txt        # Crawler permissions
└── README.md         # This file
```

## How to Update Content

**To change any text on the site:**
1. Open `content.js`
2. Find the relevant section (clearly labelled with comments)
3. Change the text inside the quote marks
4. Save → commit to GitHub → site updates automatically

**To update contact details (email, phone):**
Edit the `contact` block at the top of `content.js`:
```js
contact: {
  email: "your-new-email@10nconsulting.com",  // ← change here
  phone: "+65 9477 6736",
  ...
}
```

## Deploying Changes

```bash
git add .
git commit -m "Brief description of what you changed"
git push
```
Netlify auto-deploys within ~30 seconds.

## Tech Stack

- Pure HTML/CSS/JS — no frameworks, no build step
- Hosted on Netlify (free tier)
- Forms via Netlify Forms
- GEO-optimised with JSON-LD structured data
- Inter Tight font via Google Fonts
