# Twinky Hung — Personal Portfolio Website

## Master Build Specification — V1

## Document purpose

This document is the source of truth for building Twinky Hung’s personal portfolio website.

The coding agent should assume it has no access to previous design conversations, brainstorming sessions, or Figma Make explorations.

The structure, content hierarchy, visual direction, and core interactions described here have already been considered and should be implemented faithfully first.

Do not redesign the portfolio from scratch, introduce generic portfolio patterns, or add new sections without a clear reason.

A separate visual reference image will be provided. That image is the primary art-direction reference for the website.

## 1. Project Goal

Build a professional personal portfolio for Twinky Hung.

This is not intended to be:

- an online CV
- a job-search landing page tied to one specific role
- a personal lifestyle website
- a developer-only portfolio
- a highly experimental design showcase

It should function as Twinky’s long-term professional home and remain useful for:

- employment opportunities
- product/data/technology roles
- freelance work
- collaborations
- future projects

The portfolio itself should also demonstrate Twinky’s ability to think about:

- product
- user experience
- information hierarchy
- data
- technology
- visual communication
- interaction design

The website should therefore feel intentionally designed rather than assembled from a standard portfolio template.

## 2. Core Professional Identity

The main positioning is:

Product × Data × Technology

Twinky’s background spans:

- consulting and business problem solving
- data analytics
- product thinking and delivery
- hands-on software development

The portfolio should communicate that she can work between business needs, product thinking, data, and engineering.

However, do not turn this into four separate disciplines in the visual identity.

The simplified public-facing identity remains:

Product × Data × Technology

This positioning should feel broad enough to remain relevant as Twinky’s career evolves.

## 3. Overall Story

The portfolio should not feel like:

About → Skills → Experience → Projects → Contact

even though those are technically the sections.

The visitor should instead experience:

How I think

↓

How I work

↓

How I got here

↓

What I have made

↓

What we could create next

A recurring conceptual theme is moving from:

questions → clarity → something real

The website should show this through transformations and interactions, rather than repeatedly explaining it in copy.

## 4. Design Personality

The desired personality is:

Structured × Expressive × Thoughtful

with:

- a calm foundation
- modern digital-product sensibility
- soft colour
- intelligent visual hierarchy
- subtle playfulness
- meaningful interaction
- enough personality to be memorable

The site should feel like:

Editorial sophistication × Digital product studio × Soft human touch

However, it should not become a pure editorial-minimal portfolio.

The site should have visible creative character.

A useful internal principle:

Calm on the surface. Playful underneath.

## 5. Primary Visual Reference

A separate screenshot/mockup will be supplied as:

visual-direction-reference.png

This is the PRIMARY VISUAL / ART-DIRECTION REFERENCE.

Use it to understand:

- overall atmosphere
- colour balance
- typography relationship
- visual softness
- spacing
- composition
- decorative language
- level of expressiveness

Do not assume that the exact content, project structure, experience entries, copy, dates, or layout shown in that image are current.

This specification overrides the reference image whenever there is a conflict.

### Preserve from the visual reference

- warm off-white / soft neutral canvas
- deep navy or similarly dark, softer-than-black typography
- restrained pastel colours
- soft blue
- soft green
- blush / pale pink
- lavender
- translucent colour forms
- elegant display serif typography
- clean sans-serif typography for body/interface information
- fine curved lines
- occasional handwritten annotations
- deliberate asymmetry
- structured composition with selected elements breaking the grid
- generous but controlled breathing room
- calm, polished and creative atmosphere

### Do not copy literally

Do not copy old:

- section copy
- experience entries
- dates
- project layouts
- obsolete information
- card structures
- old interactions

The reference is about art direction, not current information architecture.

## 6. What NOT to Design

Avoid:

- generic SaaS landing-page aesthetics
- generic developer portfolio templates
- black “hacker” aesthetics
- corporate blue-heavy design
- excessive gradients
- glassmorphism everywhere
- oversized bento grids
- skill progress bars
- skill ratings
- giant software-logo walls
- excessive pill tags
- excessive cards inside cards
- highly cute/student-project aesthetics
- Behance/Awwwards-style visual excess
- huge custom cursors
- constant parallax
- mouse-following effects
- scroll-jacking
- forced snap scrolling
- excessive blur
- animation purely for decoration
- overly minimal layouts with little visual personality

Do not make the portfolio look primarily like a developer portfolio.

Do not make it look primarily like a data analyst dashboard.

Do not make it look primarily like a freelance agency website.

## 7. Global Layout

Desktop-first, but fully responsive.

Main navigation:

Twinky Hung

About

Experience

Work

Contact

Do not include:

- dark-mode toggle in V1
- language toggle in V1

The initial website is English only.

Navigation should be clean and understated.

On mobile, use a compact navigation pattern appropriate for touch.

Do not rely on hover for essential functionality.

## 8. Page Architecture

The landing page contains:

1. Header
2. Hero
3. About / Product × Data × Technology
4. Experience
5. Selected Work introduction
6. MoodWalk
7. PeraFlash
8. Contact

## 9. Minimal footer

Order must remain:

Hero → About → Experience → Work → Contact

Do not add WeLab to the landing-page Experience section.

Do not add separate:

- Skills section
- Education section
- Testimonials
- Services
- Blog
- hobbies
- personal lifestyle content

unless requested later.

9. Global Motion Philosophy

Motion is an important part of the portfolio, but it should be purposeful.

Primary rule:

Movement should reveal meaning, not decorate the page.

Secondary principle:

Transformation tells the story.

There are three types of motion.

### 9.1 Signature transformations

These are the most important:

1. Hero circles → About Venn diagram
2. MoodWalk question → reframed question
3. PeraFlash AI conversation → flashcard

These should receive the most design attention.

### 9.2 Narrative motion

Used to connect ideas:

- About intersection → Experience connection line
- connection line progressively passes through career chapters

### 9.3 Microinteractions

Examples:

- link arrow movement
- button feedback
- nav hover
- circle focus
- subtle opacity changes
- extremely subtle image scale

These should remain restrained.

Do not apply the same generic fade-up animation to every element.

## 10. Scrolling Behaviour

Scrolling must always remain natural.

Do not:

- trap the visitor inside sections
- require repeated scroll gestures to complete animations
- use scroll snapping
- lock scrolling while animations play

Project storytelling animations should trigger automatically when the relevant section enters the viewport.

They should complete quickly and leave behind a static, understandable final state.

## 11. Hero

### Copy

Small/name:

TWINKY HUNG

Main heading:

Product × Data × Technology

Supporting copy:

I make sense of messy problems, find clarity in data, and turn ideas into something real.

Do not rewrite this copy without explicit instruction.

## 12. Hero Visual

The Hero contains three large, soft, translucent coloured circles / organic circular forms.

They represent:

- Product
- Data
- Technology

However, their meaning should not initially be explicit.

### Initial state

The circles should:

- contain no text
- contain no icons
- contain no labels
- contain no visible border
- feel soft and atmospheric
- have restrained blur
- be partially offset / loosely positioned
- possibly extend partially beyond the viewport
- sit behind or around the typography without compromising readability

They should not dominate the Hero.

The Hero text remains the primary focus.

## 13. Hero Ambient Motion

Before scrolling, the three forms may move extremely subtly.

Suggested behaviour:

- approximately 8–15 px drift
- approximately 8–14 second cycles
- slightly different timing for each circle
- optional tiny scale change around 1 → 1.02 → 1
- unsynchronised movement

Do not:

- rotate them
- make them bounce
- make them chase the cursor
- create large floating movements
- use distracting looping animation

The visitor should almost not consciously notice the movement.

## 14. Hero Text Entrance

On initial page load:

1. TWINKY HUNG
2. Product × Data × Technology
3. supporting sentence

should softly appear using a restrained staggered:

- opacity
- slight upward movement

Total sequence should take approximately:

0.8–1 second

Do not use:

- typing animation
- letter-by-letter animation
- long intro sequence
- splash screen

The visitor should never have to wait to use the page.

## 15. Hero → About Transformation

As the visitor approaches the About section, the three abstract Hero circles reveal their meaning.

The circles:

- move toward each other
- reduce blur
- gain slightly stronger definition
- become more structured
- overlap
- transition into a Venn-style composition

Labels are revealed:

### PRODUCT

### DATA

### TECHNOLOGY

This transformation should make the visitor realise:

the decorative Hero forms represented Twinky’s three working disciplines.

Do not transform the circles into the literal text:

Product × Data × Technology

The Hero already states that.

The visual reveal should happen through the circles themselves.

## 16. About

### Heading

The most interesting problems rarely fit into one box.

### Body

My background spans consulting, data analytics, and hands-on product development. Along the way, I’ve learned to look at problems from different angles — understanding the need, finding evidence in the data, and figuring out how to make an idea actually work.

### Handwritten annotation

Use as a small secondary human detail:

Same curiosity.

Different lenses.

More possibilities.

The annotation should not compete with the main copy.

Use handwritten treatment sparingly across the entire site.

## 17. About — Venn Diagram

The three circles represent:

### PRODUCT

Default text:

Shape the right solution.

### DATA

Default text:

Find evidence behind decisions.

### TECHNOLOGY

Default text:

Turn ideas into something real.

There should currently be no text in the central overlap.

Do not invent a label for the overlap.

## 18. About — Desktop Interaction

When the user hovers over one circle:

### Selected circle

- gently enlarge by approximately 5%
- slightly increase opacity / definition
- reduce blur if appropriate
- maintain the soft translucent visual language

Inside the selected circle, replace the default description with capabilities.

### PRODUCT hover

Problem Framing · Requirements Gathering · Prioritisation · Rapid Prototyping

### DATA hover

Analytics · Data Modelling · ETL · Visualisation

### TECHNOLOGY hover

Full-stack Development · API Integration · AI Prototyping · Deployment

Suggested transition:

- circle expansion: approximately 300–400ms
- content swap: approximately 200–300ms

Use soft easing.

### Important

When one circle is selected:

Do not:

- shrink the other circles
- move the other circles away
- dramatically fade the other circles
- make the composition unstable

Focus should come from strengthening the selected element, not weakening everything else.

Mouse leave restores the default description.

## 19. About — Mobile Interaction

Hover cannot be required.

On mobile:

- tap a circle to focus it
- tap reveals capabilities
- tap another circle to switch
- layout must remain readable
- touch targets must be comfortable

The interaction should degrade gracefully if animation is unavailable.

## 20. About → Experience Transition

A thin visual line should emerge from the Product/Data/Technology intersection area and continue into Experience.

The line represents:

different experiences gradually connecting into Twinky’s current way of working.

It should feel:

- elegant
- slightly organic
- soft
- intentional

Do not make it look like:

- a literal road
- a subway map
- a process diagram
- a heavy timeline

The line should progressively draw as the visitor naturally scrolls.

## 21. Experience

### Main heading

A journey shaped by questions, people and possibilities.

### Intro

From consulting to analytics to hands-on building, each chapter has changed the way I approach problems — and gradually shaped how I work today.

### Handwritten annotation

Different experiences.

A clearer me.

## 22. Experience Structure

The Experience section is a curated professional journey, not a complete CV chronology.

Do not show years.

Do not show locations.

Do not show professional photos.

Do not add WeLab.

The three chapters are:

Deloitte → Publicis Groupe → Le Wagon

## 23. Experience Chapter 1

Label:

Consulting

Copy:

I started close to the business — turning ambiguous needs into requirements, data solutions, and something technical teams could actually build.

Company:

Deloitte

## 24. Experience Chapter 2

Label:

Data & Analytics

Copy:

Working with analytics products taught me to look beyond the request — asking what people actually needed to understand, decide, or do differently.

Company:

Publicis Groupe

## 25. Experience Chapter 3

Label:

Building

Copy:

I wanted to get closer to how ideas become products, so I moved from defining and analysing solutions to prototyping, coding, and shipping them myself.

Organisation:

Le Wagon

## 26. Experience Interaction

The connection line should not appear fully completed when the section loads.

As normal scrolling progresses:

1. line extends
2. first node / chapter becomes visible
3. Deloitte content reveals
4. line continues
5. Publicis content reveals
6. line continues
7. Le Wagon content reveals

Use restrained opacity/position transitions.

The visitor must still be able to fast-scroll through the entire section normally.

Do not trap scrolling.

## 27. Résumé Link

A subtle link such as:

View résumé ↗

may be included around the Experience section if it fits the final composition.

This should link to the supplied current CV.

It should remain secondary.

Do not reproduce the full CV on the website.

## 28. Selected Work Introduction

Eyebrow:

SELECTED WORK

Heading:

From questions to working products.

No supporting paragraph is required.

Do not add:

- 01 — MoodWalk
- 02 — PeraFlash

Project numbering is intentionally excluded.

## 29. Project Presentation Philosophy

There are currently only two selected public projects.

Do not use a conventional card grid.

Each project should feel like a substantial visual chapter.

Each should occupy approximately a large section / near-viewport composition.

The two project layouts should create rhythm rather than looking like duplicated templates.

Use real product screenshots.

Do not redesign the actual products to make them prettier.

Art-direction around the screenshots is allowed, but the product itself must remain authentic.

## 30. MoodWalk

### Project title

### MoodWalk

### Metadata

Product Lead · Full-stack Developer

3-person team · 1.5 weeks

Metadata should be visually secondary to the project name/story.

## 31. MoodWalk Layout

Desktop composition:

Story / text LEFT × Actual MoodWalk UI RIGHT

The section should feel spacious and visual rather than text-heavy.

The actual MoodWalk UI is the primary visual proof.

Use a curated supplied screenshot.

Device/browser framing may be used if it fits the overall art direction.

Do not make it look like a generic App Store mockup.

## 32. MoodWalk Story Copy

Initial question:

“I want to go for a walk… but where do I go?”

Small transition label:

reframed as

Resulting question:

“How do I want to feel?”

Positioning:

A walking experience designed around how you want to feel — not where you need to go.

CTA, when a case-study destination exists:

Explore case study →

Do not add additional feature lists or explanatory paragraphs on the landing page.

## 33. MoodWalk Transformation

The central product-thinking story is:

destination question → feeling question

This should be communicated through a short automatic animation.

When the section first enters the viewport:

1. initial question is visible
2. subtle transition occurs
3. reframed as appears
4. resulting question replaces / resolves the original question
5. MoodWalk UI softly reveals or gains presence

Suggested duration:

approximately 1–1.5 seconds

The animation should play once.

Afterwards, the final state remains static.

Do not make this interaction scroll-controlled.

Do not require the visitor to click anything to understand the story.

## 34. MoodWalk Visual Restraint

Do not initially add:

- Product Insight cards
- Outcome cards
- multiple annotations
- many feature callouts
- route callout labels
- floating UI explanations
- AI badges
- excessive device mockups

Start with:

strong story + one strong real product visual

If later visual review shows the section needs more depth, one or two subtle supporting elements may be introduced.

## 35. PeraFlash

### Project title

### PeraFlash

### Metadata

Full-stack Developer

3-person team · 1 week

## 36. PeraFlash Layout

Reverse the MoodWalk composition.

Desktop:

Actual-product-based visual LEFT × Text RIGHT

This creates page rhythm:

MoodWalk:

text → visual

PeraFlash:

visual → text

Do not simply duplicate MoodWalk’s section template.

## 37. PeraFlash Copy

Use:

Useful learning moments can easily get lost in an AI conversation. PeraFlash captures them and turns them into structured, editable flashcards that can be saved and exported to Anki.

CTA, when destination exists:

Explore case study →

Keep the section concise.

## 38. PeraFlash Visual Story

The main concept is:

AI conversation → useful learning moment → structured flashcard

Use supplied actual PeraFlash UI as the basis.

Do not create fake conceptual cards that no longer resemble the real product.

The final visual can art-direct real product elements into a polished composition.

## 39. PeraFlash Transformation

When the section first enters the viewport:

1. show one or two AI conversation fragments
2. visually identify / highlight a useful learning point
3. conversation content subtly reorganises / extracts
4. that content transforms into an actual PeraFlash flashcard
5. optionally one or two additional cards appear behind it
6. final state becomes a small deck / flashcard composition

Suggested duration:

approximately 1.5–2 seconds

Play once.

Stop at the flashcard/deck state.

Do not animate all the way into Anki export.

The landing page is storytelling, not a complete product demo.

## 40. Relationship Between Project Animations

The two projects should demonstrate different forms of thinking.

### MoodWalk

Question → Reframe

### PeraFlash

Information → Structure

This distinction is intentional.

Do not force both projects into an identical:

Problem → Solution → Outcome

template.

## 41. Contact

Heading:

Let’s create something together.

Supporting copy:

Open to interesting roles, collaborations, and ideas worth exploring.

Provide:

- Email
- LinkedIn
- GitHub

Use actual links supplied separately.

Do not write:

- Based in Hong Kong
- Based in Tokyo
- Open to opportunities
- Available for work
- Available for freelance

The supporting sentence already communicates openness without turning the portfolio into a temporary job-search page.

## 42. Contact Visual Motif

Three small circles may reappear around the beginning of the Contact section.

They should subtly echo:

Product · Data · Technology

Do not necessarily label them.

The concept is:

Hero

three large abstract forms

↓

About

three meaningful overlapping disciplines

↓

End

three small quiet visual marks

This gives the site a subtle visual loop.

The three circles should feel intentional, not like random decoration.

Their final exact placement may be refined during visual implementation.

## 43. Footer

Keep the footer extremely quiet.

Current preferred content:

Twinky Hung

and:

Product × Data × Technology

Do not currently include:

- location
- availability
- long copyright sentence
- social bio
- additional navigation
- newsletter
- large CTA

A year is not required.

If implementation later needs a copyright treatment, keep it visually secondary and easy to remove.

## 44. Typography

Use the supplied visual reference to guide typography.

Desired relationship:

### Display

Elegant serif.

Use for:

- major section headings
- selected expressive statements
- project storytelling moments

### Sans serif

Clean contemporary sans-serif.

Use for:

- navigation
- body copy
- metadata
- labels
- capabilities
- interface information

### Handwritten accent

May be used sparingly for:

- Same curiosity. Different lenses. More possibilities.
- Different experiences. A clearer me.
- occasional tiny visual annotations

Do not turn handwritten typography into a major third type system.

It is an accent.

Do not invent decorative handwritten sentences throughout the page.

## 45. Colour

Use the primary visual reference as the strongest guide.

General palette:

- warm off-white background
- deep navy / soft near-black text
- pastel blue
- pale green
- blush / soft pink
- lavender

Colours should feel:

- sophisticated
- soft
- slightly playful
- modern

Avoid:

- saturated rainbow palettes
- strong corporate blue
- neon colours
- black-heavy backgrounds
- overly cute pastel styling

Colour should support structure and transformation rather than become decoration everywhere.

## 46. Shape Language

Primary shapes:

- circles
- soft organic circular forms
- fine curved lines
- slightly rounded UI containers where necessary

Corners should generally be:

slightly rounded

Avoid both extremes:

- completely sharp corporate rectangles
- excessively rounded bubbly UI

The page should remain structured.

## 47. Grid

Use a strong underlying grid.

However, one or two elements in key compositions may intentionally break alignment.

Desired feeling:

structured, but not rigid

Avoid layouts where every section is perfectly centred and symmetrical.

Also avoid arbitrary asymmetry with no visual logic.

## 48. Spacing

Use generous breathing room, but do not create an ultra-minimal site where each section contains only one sentence floating in huge empty space.

Sections should feel substantial.

Important compositions should have enough visual density to feel intentionally designed.

## 49. Responsive Design

Do not simply shrink the desktop layout.

Each breakpoint should be intentionally composed.

### Desktop

Use:

- asymmetric compositions
- overlapping forms
- split layouts
- richer spatial relationships

### Tablet

Preserve the conceptual relationships while reducing overlap where necessary.

### Mobile

Prioritise:

- readability
- touch interaction
- clear content sequence
- product screenshots at useful size
- simplified motion where needed

MoodWalk and PeraFlash may stack vertically on mobile.

Preserve story order.

Essential information must not depend on hover.

## 50. Reduced Motion

Respect:

prefers-reduced-motion

When reduced motion is requested:

- skip large transformations
- avoid ambient drifting
- show final states directly
- preserve all information
- keep minimal opacity transitions if appropriate

The website must remain understandable without animation.

## 51. Accessibility

Minimum requirements:

- semantic HTML
- keyboard-accessible navigation
- visible keyboard focus states
- sufficient text contrast
- alt text for meaningful images
- decorative shapes hidden from screen readers
- buttons and links must be semantically correct
- comfortable touch targets
- no information available only through colour
- no essential interaction dependent only on hover

The Product/Data/Technology capability interaction must be keyboard accessible.

## 52. Performance

Animations should primarily use performant properties such as:

- transform
- opacity

Avoid expensive continuous layout recalculation.

Optimise supplied screenshots appropriately.

Use responsive image loading.

Avoid adding large animation libraries unless they materially improve implementation.

Do not introduce a heavy framework solely for simple motion.

## 53. Project Assets

The implementation will receive curated project screenshots.

Use these as actual product evidence.

### MoodWalk

Expected assets may include:

- homepage / desired feeling
- route preview
- walking experience
- completion / walk history

Not every supplied image must appear on the landing page.

Choose the image that best supports the composition.

### PeraFlash

Expected assets may include:

- AI conversation
- generated flashcard
- flashcard/deck interface

Again, do not turn the landing page into a gallery.

## 54. CV Usage

A current CV PDF will be supplied separately.

The CV is a:

factual reference

It is not:

- a content template
- an information architecture reference
- a visual reference
- a reason to add every employment entry

Important:

Even if the CV includes WeLab Bank, do not add WeLab to the landing-page Experience section.

The landing page intentionally presents the curated narrative:

Deloitte → Publicis Groupe → Le Wagon

## 55. Project Technology

The coding agent may use the CV / project documentation for factual technology information if needed later.

Do not add large technology stacks to the landing page unless specifically requested.

The portfolio should prioritise:

thinking + decisions + actual work

over:

lists of tools.

## 56. Case Study Links

The landing page may visually reserve:

Explore case study →

However:

If no case-study route/page exists yet:

- do not create a broken link
- do not create an empty placeholder page merely to satisfy the CTA
- hide or omit the CTA until the destination exists

Dedicated case-study pages are outside the current V1 scope unless explicitly requested.

## 57. Header Behaviour

Header should remain clean and lightweight.

Possible behaviour:

- static at top
- or restrained sticky behaviour if visually appropriate

Do not create:

- giant floating navigation
- highly animated menu
- oversized pill navigation

Navigation should support the experience, not become a feature itself.

## 58. Links

External links should clearly communicate external navigation where appropriate.

Subtle arrow treatment:

↗

is acceptable.

Arrow may shift slightly on hover.

Keep interaction restrained.

## 59. Cursor

Use normal browser cursor behaviour.

Do not introduce:

- large custom circle cursor
- cursor-following text
- magnetic cursor effects across the entire page

Small local pointer interactions are sufficient.

## 60. Interaction Density

Not every section needs a special interaction.

Priority:

High interaction

- Hero → About
- About circles
- Experience connection
- MoodWalk transformation
- PeraFlash transformation

Low interaction

- Selected Work intro
- Contact
- Footer
- ordinary paragraphs

This contrast is important.

If everything moves, nothing feels meaningful.

## 61. Visual Hierarchy

The visitor should be able to understand the portfolio through scanning.

Priority should generally be:

1. expressive heading
2. visual idea / product
3. concise explanation
4. metadata
5. secondary annotation

Do not give metadata equal visual weight to project names or key statements.

## 62. Copy Rules

Do not rewrite confirmed copy merely to make it sound more:

- corporate
- polished
- technical
- marketing-oriented

The voice should remain:

- clear
- thoughtful
- human
- concise
- confident without hard selling

Avoid:

- “passionate”
- “results-driven”
- “innovative professional”
- “leveraging synergies”
- generic AI-generated portfolio language

Preserve simple language such as:

messy problems

rather than replacing it with:

complex cross-functional business challenges.

## 63. Content Density

The landing page should not explain everything.

Use progressive disclosure.

Landing page:

identity → thinking → journey → selected proof

Detailed project explanation belongs in future case studies.

Avoid long paragraphs.

## 64. Desktop Experience Target

The desktop website should feel visually considered enough that the website itself demonstrates Twinky’s product/design sense.

However, do not sacrifice usability to create an experimental experience.

The visitor should always know:

- where they are
- what they are reading
- what can be interacted with
- how to continue

## 65. Mobile Experience Target

Mobile should feel like the same identity, not a broken-down desktop page.

Simplify:

- overlaps
- complex spatial relationships
- large movement

while retaining:

- typography
- colours
- visual motifs
- storytelling
- project authenticity

## 66. Initial Build Priority

Build in this order:

### Phase 1 — Foundation

- global typography
- colour tokens
- spacing
- responsive grid
- header
- all section structure
- final copy

### Phase 2 — Static visual compositions

- Hero
- About Venn
- Experience
- MoodWalk
- PeraFlash
- Contact

Before adding complex motion, verify that the static website already looks strong.

### Phase 3 — Signature interactions

Implement:

1. Hero → About
2. About capability interactions
3. Experience line
4. MoodWalk transformation
5. PeraFlash transformation

### Phase 4 — Polish

- microinteractions
- responsive refinements
- reduced motion
- performance
- accessibility
- spacing/typography tuning

Do not start by building elaborate animation before the static composition is correct.

## 67. Important Implementation Principle

When visual reference and written specification conflict:

The written specification wins for content and structure.

The visual reference wins for:

art direction, visual atmosphere and stylistic interpretation.

Actual project screenshots win for:

what the products really look like.

CV wins for:

factual professional/project information only.

## 68. Do Not Infer Missing Information

If a required factual item is missing, use a clearly marked placeholder or ask for it.

Do not invent:

- email address
- social URLs
- project URLs
- GitHub URLs
- employment dates
- project metrics
- client names
- technologies
- qualifications
- case-study URLs

## 69. Acceptance Criteria

The first strong implementation should satisfy all of the following.

### Identity

A visitor can quickly understand:

Twinky works across Product × Data × Technology.

### Personality

The site feels:

calm, creative, thoughtful and professionally polished.

### Visual design

It visibly relates to the supplied primary visual reference without copying obsolete content.

### Career narrative

Experience communicates:

Consulting → Data & Analytics → Building

through:

Deloitte → Publicis Groupe → Le Wagon.

No WeLab appears in the landing Experience.

### Skills

Product/Data/Technology capabilities are discoverable through the Venn interaction without a separate generic skills section.

### MoodWalk

The section communicates the product-thinking reframe:

“Where do I go?” → “How do I want to feel?”

using actual MoodWalk UI.

### PeraFlash

The section communicates:

AI conversation → useful learning → structured flashcard

using actual PeraFlash product visuals.

### Motion

Animations:

- explain
- connect
- respond

rather than decorate.

### Scrolling

No scroll trapping or forced section snapping.

### Mobile

All content remains usable without hover.

### Accessibility

Keyboard and reduced-motion behaviour are supported.

### Contact

The page ends with:

Let’s create something together.

and:

Open to interesting roles, collaborations, and ideas worth exploring.

### Overall

The finished page should not feel like:

“a CV placed on a website.”

It should feel like:

a coherent professional story expressed through product thinking, visual design and interaction.

## 70. Assets Expected Alongside This Specification

The coding agent should receive the following files.

```text
twinky-portfolio/
│
├── portfolio-master-spec.md
│
├── references/
│   └── visual-direction-reference.png
│
├── cv/
│   └── Twinky-Hung-CV.pdf
│
├── moodwalk/
│   ├── home.png
│   ├── preview.png
│   ├── walking.png
│   └── history.png
│
├── peraflash/
│   ├── conversation.png
│   ├── flashcard.png
│   └── deck.png
│
└── links.md
```

Exact asset filenames may differ.

## 71. links.md

Supply a small file containing factual destinations:

```markdown
# Portfolio Links

## Contact
Email:
LinkedIn:
GitHub:

## MoodWalk
Live site:
GitHub repository:
Case study:

## PeraFlash
Live site:
GitHub repository:
Case study:
```

Leave unavailable destinations blank.

Do not invent them.

## 72. Reference Priority

When making implementation decisions, use this hierarchy:

1 — Master Build Specification

Source of truth for structure, copy, behaviour and requirements.

2 — Primary visual-direction screenshot

Source of truth for art direction and visual feeling.

3 — Actual MoodWalk / PeraFlash screenshots

Source of truth for actual product appearance.

4 — Current CV

Source of truth for factual professional background.

Do not use unrelated portfolio templates as a stronger reference than these materials.

## 73. Final Design Principle

When uncertain whether to add an element, ask:

Does this help explain how Twinky thinks, connect the story, show real work, or make the experience clearer?

If not, it probably does not need to be there.

The goal is not maximum decoration or maximum information.

The goal is:

Simple enough to scan. Interesting enough to remember.
