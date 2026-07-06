# Four-Week Reflection

Over the past four weeks I built three React projects: a recipe/cookbook
site (Washoku Cookbook), an e-commerce storefront (Washoku Shop), and this
portfolio site. Looking back at the commit history across all three, here's
where I've grown.

## What I can build now that I couldn't four weeks ago

Four weeks ago I could put together a single static page. Now I can build a
multi-page React app with real functionality: category filtering on the
cookbook's recipe and notes pages, product search and category filtering on
the shop page, and a shopping cart with add/remove state managed through
React Context and shared across pages. I can structure a project into
reusable components — card components (`RecipeCard`, `ArticleCard`,
`ProductCard`, `ProjectCard`) that render a list from a single data file
instead of hand-writing markup for every item — and I can carry the same
design-token approach (CSS variables for color, spacing, radius, shadow)
across separate projects so a new site doesn't start from zero. I also went
through a full asset pipeline for the first time: naming product images
consistently, wiring them into product data, and writing a small Node script
with `sharp` to batch-compress them (the shop's product images dropped from
about 34MB to about 10.7MB total with no visible quality loss). And all three
projects are set up to build and deploy through Vite and Vercel, with the
cookbook and shop both live.

## What I learned about the "why" behind a build

Four weeks ago I would have just started writing components. Now I
understand more of the reasoning that comes before and after that step. The
shop started from a written spec (`ecommerce specification`) rather than
code first, which made the build itself faster because the product data
shape and pages were already decided. I saw firsthand why reusable
components matter beyond saving keystrokes: when the cookbook's card styling
needed a fix, it happened in one place and applied everywhere it was used.
Search and filter features turned out to be as much a data-modeling problem
as a UI problem — categories and tags had to exist consistently on every
product/recipe object before a filter dropdown was meaningful. A code review
pass on the shop caught a real bug I hadn't noticed by eye: product photos
were non-square but the image container forced a 1:1 crop with
`object-fit: cover`, silently cutting off parts of several images — fixed by
switching to `object-fit: contain`. That same review is what surfaced the
oversized image files. None of the three projects were built once and left
alone — the cookbook went through a v1-to-v2 rebuild and a review-fix pass,
and the shop went through a UI polish pass, a photography redesign, and an
image-pipeline fix, each addressing something the previous pass exposed.

## What I'd like to build next

Everything so far has run on static, hardcoded data — a JS array of products
or recipes, no server behind it. The next step is a real backend: a database
to store products, recipes, and orders instead of a data file, and an API
layer for the frontend to read and write through instead of importing a
static array directly. On top of that, I want to add user authentication so
accounts, saved recipes, and order history are possible, and real payment
processing for the shop's cart so checkout results in an actual transaction
instead of a client-side total. That combination — database, API,
authentication, and payments — is the piece that would turn these from
front-end demos into applications someone could actually use.
