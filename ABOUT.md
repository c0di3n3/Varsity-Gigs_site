# Varsity Gigs: About (context for Claude Code)

> Put this file in the repo root as `ABOUT.md`, and reference it from `CLAUDE.md` with: "Read ABOUT.md before writing any copy or building the About page or the home-page About section."

## 1. How to use this document
This is the source of truth for what Varsity Gigs is, who it is for, how it sounds and what it may and may not claim. Use it to build:
1. **A full About page** (`/about`)
2. **An About section on the home page** (a short version, linking to `/about`)

Do not invent facts, numbers, testimonials, partner names or logos. Where this file says "placeholder", leave a clearly marked placeholder in the code rather than making something up.

## 2. One-line description
**Varsity Gigs is a South African student work platform: get vetted, get booked, get rated.**

Tagline options (use one consistently): "Get vetted. Get booked. Get rated." (primary, used in the ad and on the shirts)

## 3. The short version (about 60 words, for the home-page section)
Varsity Gigs connects South African students with real, paid gigs: event and promo staffing, tutoring and freelance work. Instead of chasing work in scattered WhatsApp groups, students build one profile, get vetted, and get booked. Organisers get reliable, rated people they can call on, including at short notice. Every gig builds a track record students keep.

## 4. The longer story (for the About page)

### The problem
- Student work in South Africa is mostly found through WhatsApp groups, word of mouth and social media posts. It is scattered, unreliable and often hard to trust.
- Students lose out because good gigs get buried in group chats and there is no way to prove they are reliable.
- Organisers and agencies lose out because last-minute no-shows are common, and finding people they can trust takes time.

### What Varsity Gigs does
- **For students:** one profile in place of many group chats. Get vetted once, get considered for gigs, and build a rating and work history after each job.
- **For organisers and agencies:** a vetted, rated standby pool, so they can fill shifts with people who have been checked and have shown up before.
- **For everyone:** clearer expectations, a record of reliability, and less chasing.

### How it works (three steps; use as a visual row)
1. **Get vetted.** Students join the standby pool and are checked before they are offered gigs.
2. **Get booked.** Organisers request staff; vetted students who fit are offered the work.
3. **Get rated.** After each gig, both sides give feedback, and the student's track record grows.

### Where we are right now (be honest on the page)
Varsity Gigs is early. It started with peer tutoring and freelance work and is now focused on event and promo staffing. The team is validating demand with students and organisers and running small pilots before building the full platform. The vetted standby pool is being assembled now. Make this early-stage status visible (e.g. "Now building our first vetted standby pool") instead of implying a large established network.

### Who is behind it
Varsity Gigs is built by Andile, a student at the University of Witwatersrand (Wits) in Johannesburg who also runs an AI automation agency. Placeholder: add a short founder paragraph and photo only if the founder provides them.

## 5. Audiences
| Audience | What they want | What the page should say |
|---|---|---|
| Students (primary) | Real paid work, flexible around lectures, a fair process | Free to join, get vetted, find gigs in one place, build a rating |
| Event and promo organisers / agencies | Reliable people, fast | A vetted, rated standby pool; short-notice staffing |
| Partners (e.g. student bodies, brands) | Credibility, aligned values | Partner, don't compete; vetted and accountable |

## 6. Principles and promises (can be shown as a values row)
- **Free for students.** Students never pay to join or to be considered for work. (Important: South African employment-agency rules restrict charging work seekers, so never put any fee for students anywhere in the copy or UI.)
- **Vetted, not random.** People are checked before being offered gigs.
- **Rated both ways.** Reliability is recorded and rewarded.
- **Privacy first.** Student details are stored only with their consent and handled in line with POPIA.
- **Built for South Africa.** Designed around how students here actually find work, mainly WhatsApp, and around real campus life.

## 7. Claims you must NOT make
- No fabricated stats ("1,000+ students", "100+ events"), awards, press mentions or partner logos.
- No testimonials unless supplied and approved in writing. A small pilot with a student run club helped place students at a well-known brand's event. Do not name the brand or the club, and do not quote anyone, until written permission is given. If asked for social proof, use a placeholder such as "Pilot results coming soon".
- No suggestion that partners (e.g. StuSta, agencies) endorse or work with Varsity Gigs until confirmed.
- No promises of income amounts or guaranteed work.
- Do not describe Varsity Gigs as a registered employment agency unless that is confirmed.

## 8. Voice and tone
- Friendly, confident, direct: a switched-on student talking to another student, but professional enough for an organiser to trust.
- Short sentences. Plain English. No corporate jargon.
- Light South African flavour is fine ("gigs", "campus"). Avoid heavy slang or anything that could date quickly.
- Lead with benefit, then proof, then action.

Good: "Stop hunting for gigs in group chats. One profile. Real bookings."
Avoid: "Leveraging a synergistic ecosystem for talent acquisition."

## 9. Brand and design
- **Colours:** teal `#1F4E5F` (primary), dark teal `#163B47` (backgrounds and depth), amber `#F2A93B` (accent and calls to action).
- **Font:** Poppins. Bold or Semi-Bold for headings, Regular or Medium for body.
- **Logo:** use the supplied logo files as they are (`Varsity_Gigs_Education_Logo.png`, `primary_horizontal_logo.png`). Do not redraw or alter them.
- **Look:** clean, modern, generous spacing, rounded corners. Teal for structure, amber for the one main action per section.
- Accessibility: keep text contrast readable (white or very light text on teal, dark teal text on light backgrounds), use real heading structure and add alt text to images.

## 10. Calls to action
- **Students:** "Join the standby pool" links to the intake form: https://tally.so/r/q54a08 (a vetting step follows).
- **Organisers / agencies:** "Request vetted staff" or "Partner with us". Placeholder: use a contact email or form supplied by the founder. Do not invent an email address.
- Use one primary CTA per section. Amber button, teal text or white text per contrast.
- Add a short consent line near the form link: "By joining, you agree to us storing your details to match you with gigs (POPIA)."

## 11. Content specification

### A. Home page "About" section (build this)
- Layout: two columns on desktop, stacked on mobile.
- Content: small label "About Varsity Gigs", headline, the 60-word short version (section 3), the three-step row (Get vetted, Get booked, Get rated), one amber button "Read our story" linking to `/about`.
- Suggested headline: "Gigs, but make it reliable."
- Keep it under about 120 words visible, with no fabricated numbers.

### B. About page (`/about`) structure
1. **Hero:** headline "Student work, done properly." with a subline from the one-line description, plus the primary CTA.
2. **The problem:** 3 short points (section 4).
3. **What we do:** two cards, one for students and one for organisers.
4. **How it works:** the three steps.
5. **Where we are now:** the honest early-stage block, with a "pilot results coming soon" placeholder if no proof exists.
6. **Our promises:** the values row (section 6).
7. **Who is behind it:** founder paragraph placeholder.
8. **Final CTA band:** two buttons (student, organiser), on a dark teal background.
- Include a short FAQ (3 to 5 items): Is it free for students? How does vetting work? How do organisers book? Is my data safe? Which cities or campuses? (Answer the last as "Starting in Johannesburg, expanding soon" only if the founder confirms.)

## 12. SEO and meta (suggested)
- Title: "About Varsity Gigs | Vetted student gigs in South Africa"
- Meta description: "Varsity Gigs connects South African students with vetted, rated gigs in events, promo staffing, tutoring and freelance work. Get vetted. Get booked. Get rated."
- One `h1` per page. Use semantic landmarks (`header`, `main`, `section`, `footer`).

## 13. Open items to confirm with the founder (leave as placeholders until answered)
- Organiser contact email or form
- Founder photo and bio wording
- Cities and campuses served
- Whether the standby pool is accepting sign-ups publicly or by invitation
- Whether any pilot partner or brand has given written permission to be named
- Agency registration and compliance status
