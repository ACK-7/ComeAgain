# AI Marketing System — Implementation Guide

**Project:** Come Again Tours & Travels  
**Repository:** `comeagain` (React frontend + Laravel backend)  
**Production:** https://comeagaintoursandtravels.com  
**Last updated:** June 2026

This document describes how to implement an AI-assisted marketing system for Come Again — from the public website through email, social media, lead capture, and analytics. It is written for developers working in this repository and for stakeholders reviewing the technical approach.

---

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [Current state](#2-current-state)
3. [Target architecture](#3-target-architecture)
4. [Technology stack](#4-technology-stack)
5. [Implementation phases](#5-implementation-phases)
6. [Database schema](#6-database-schema)
7. [API specification](#7-api-specification)
8. [Frontend changes](#8-frontend-changes)
9. [Laravel backend changes](#9-laravel-backend-changes)
10. [AI content service](#10-ai-content-service)
11. [Email marketing integration](#11-email-marketing-integration)
12. [Social media integration](#12-social-media-integration)
13. [Analytics and tracking](#13-analytics-and-tracking)
14. [Admin panel (Filament)](#14-admin-panel-filament)
15. [Automation workflows](#15-automation-workflows)
16. [Environment variables](#16-environment-variables)
17. [Security and compliance](#17-security-and-compliance)
18. [Deployment](#18-deployment)
19. [Cost estimates](#19-cost-estimates)
20. [File reference map](#20-file-reference-map)
21. [Checklist](#21-checklist)

---

## 1. Executive summary

Come Again needs a marketing system that:

- **Creates** content (blog posts, social captions, emails, SEO copy) with AI assistance
- **Publishes** to the website, social platforms, and email lists
- **Captures** leads from contact forms, newsletter signups, and WhatsApp
- **Learns** from analytics to improve campaigns over time

The recommended approach is to **extend the existing stack** rather than replace it:

| Layer | Technology |
|-------|------------|
| Public website | React 19 + Vite + TypeScript (existing) |
| Marketing hub | Laravel 13 + MySQL (existing, expanded) |
| Admin UI | Filament PHP (new) |
| Content management | Sanity CMS or Laravel-managed content (new) |
| AI generation | OpenAI or Anthropic API via Laravel (new) |
| Email | Brevo + Laravel Mail (new integration) |
| Social automation | Make.com or n8n + Meta Business Suite (new) |
| Analytics | GA4 + Google Tag Manager + Meta Pixel (extend existing) |

All AI API calls and third-party secrets stay **server-side in Laravel**. The React frontend never holds API keys.

---

## 2. Current state

### What exists today

| Capability | Status | Location |
|------------|--------|----------|
| SEO meta tags | Working | `frontend/src/components/SEO.tsx` |
| Google Analytics 4 | Pageviews only | `frontend/src/components/Analytics.tsx` |
| Contact form | Working (email only) | `frontend/src/pages/Contact.tsx`, `backend/app/Http/Controllers/ContactController.php` |
| WhatsApp button | Working | `frontend/src/components/WhatsAppButton.tsx` |
| Social links | Footer links only | `frontend/src/components/Footer.tsx`, `frontend/src/data/siteData.ts` |
| Blog | UI only, no detail pages | `frontend/src/pages/Blog.tsx` |
| Newsletter | UI only, no backend | `frontend/src/pages/Blog.tsx` |
| Package content | Static TypeScript | `frontend/src/data/siteData.ts` |
| Backend API | Single endpoint | `backend/routes/api.php` → `POST /contact` |

### Gaps to address

- No CMS — content updates require code edits and rebuilds
- No lead database — inquiries are emailed but not stored
- No newsletter backend
- No blog article pages or per-post SEO
- No social media API integration
- No conversion/event tracking in GA4
- No AI content pipeline or approval workflow

---

## 3. Target architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                     PUBLIC WEBSITE (React)                       │
│  Packages · Blog · Contact · Newsletter · Campaign landing pages │
└────────────────────────────┬─────────────────────────────────────┘
                             │ HTTPS /api
┌────────────────────────────▼─────────────────────────────────────┐
│                  LARAVEL MARKETING HUB                           │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────────┐ │
│  │ REST API    │  │ Queue Jobs   │  │ Filament Admin          │ │
│  │ leads       │  │ AI generate  │  │ approve · publish · CRM │ │
│  │ newsletter  │  │ email send   │  │                         │ │
│  │ content     │  │ social sync  │  │                         │ │
│  └─────────────┘  └──────────────┘  └─────────────────────────┘ │
└───┬──────────┬──────────┬──────────┬──────────┬────────────────┘
    │          │          │          │          │
 Sanity/    OpenAI/    Brevo      Make.com    GA4 / GTM /
 Strapi     Claude     (email)    (social)    Meta Pixel
 (CMS)      (AI)
```

### Data flow: AI content creation

```
1. Marketer selects a package or topic in Filament admin
2. Laravel dispatches GenerateMarketingContentJob
3. Job calls OpenAI/Claude with brand prompt + package data
4. Draft saved to `content_drafts` table (status: pending_review)
5. Marketer reviews, edits, approves in Filament
6. On approve:
   - Blog → published to CMS / blog_posts table
   - Social → queued in social_posts table → Make.com webhook
   - Email → queued in email_campaigns → Brevo API
7. Frontend fetches published content via API or CMS
```

### Human-in-the-loop rule

**All AI-generated content must be reviewed before publishing.** This is non-negotiable for a travel brand where pricing, visa rules, and park fees must be accurate.

---

## 4. Technology stack

### Core (existing — keep)

| Technology | Version | Role |
|------------|---------|------|
| React | 19 | Public website UI |
| Vite | 8 | Frontend build |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4 | Styling |
| Laravel | 13 | API, jobs, mail, admin |
| PHP | 8.3+ | Backend runtime |
| MySQL | 8.x | Primary database |
| Apache/cPanel | — | Production hosting |

### New additions

| Technology | Role | Why this choice |
|------------|------|-----------------|
| **Filament PHP** v3 | Admin dashboard | Native Laravel admin for leads, drafts, campaigns |
| **Sanity** (or Strapi) | Headless CMS | Marketing team edits content without redeploying |
| **OpenAI API** or **Anthropic Claude** | Content generation | Blog, social, email, meta copy |
| **Brevo** | Email marketing | Newsletters, automations, transactional sync |
| **Make.com** or **n8n** | Workflow automation | Connect Laravel → social schedulers |
| **Google Tag Manager** | Tag management | Pixels and events without code deploys |
| **Meta Pixel** | Ad retargeting | Facebook/Instagram campaign tracking |
| **Laravel Queues** | Background jobs | AI generation, email sends, webhooks |

### Optional (Phase 3)

| Technology | Role |
|------------|------|
| Crisp / Tidio | Live chat widget |
| Pinecone / pgvector | RAG chatbot over safari content |
| WhatsApp Business API (Twilio / 360dialog) | Automated follow-up messages |
| HubSpot / Zoho CRM | External CRM if sales team scales |

---

## 5. Implementation phases

### Phase 1 — Marketing foundation (4–6 weeks)

**Goal:** Working lead capture, newsletter, blog, and analytics.

| Task | Priority |
|------|----------|
| Create `leads` and `subscribers` database tables | P0 |
| Persist contact form submissions to DB + email | P0 |
| Wire newsletter signup UI to Laravel API | P0 |
| Add `/blog/:slug` routes and article pages | P0 |
| Move blog posts to API or JSON content store | P0 |
| Add GA4 conversion events | P0 |
| Install Filament admin (leads + subscribers view) | P1 |
| Unify social URLs in `siteData.ts` | P1 |

**Deliverable:** Website captures and stores leads; blog is a real SEO channel; newsletter builds a list.

---

### Phase 2 — AI content and email (6–10 weeks)

**Goal:** AI-assisted content with approval workflow and email automations.

| Task | Priority |
|------|----------|
| Integrate OpenAI/Claude API in Laravel | P0 |
| Create `content_drafts` table and approval UI in Filament | P0 |
| Build prompt templates for blog, social, email, SEO | P0 |
| Integrate Brevo API (subscribe, campaigns) | P0 |
| Welcome email automation on newsletter signup | P1 |
| Integrate Sanity CMS (or Laravel blog CRUD) | P1 |
| Campaign landing page template in React | P1 |
| Meta Pixel via GTM | P2 |

**Deliverable:** Staff can generate, approve, and publish AI-drafted content; email list receives automated welcome series.

---

### Phase 3 — Social automation and intelligence (10–16 weeks)

**Goal:** Connected publishing and performance feedback.

| Task | Priority |
|------|----------|
| Set up Make.com workflows (Laravel → Buffer/Meta) | P0 |
| `social_posts` table + scheduling UI in Filament | P0 |
| Content repurpose job (1 blog → N social posts) | P1 |
| GA4 + social performance dashboard (Looker Studio) | P1 |
| On-site chat widget (Crisp or custom Laravel bot) | P2 |
| WhatsApp Business API for lead follow-up | P3 |
| Dynamic sitemap generation | P2 |

**Deliverable:** Approved content flows to social channels; team sees what drives inquiries.

---

## 6. Database schema

Add these migrations in `backend/database/migrations/`.

### `leads`

```sql
CREATE TABLE leads (
    id            BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name    VARCHAR(50)  NOT NULL,
    last_name     VARCHAR(50)  NOT NULL,
    email         VARCHAR(150) NOT NULL,
    phone         VARCHAR(20)  NULL,
    message       TEXT         NOT NULL,
    source        VARCHAR(50)  DEFAULT 'contact_form',  -- contact_form, newsletter, whatsapp, campaign
    package_slug  VARCHAR(100) NULL,
    status        ENUM('new','contacted','qualified','converted','closed') DEFAULT 'new',
    notes         TEXT         NULL,
    utm_source    VARCHAR(100) NULL,
    utm_medium    VARCHAR(100) NULL,
    utm_campaign  VARCHAR(100) NULL,
    created_at    TIMESTAMP    NULL,
    updated_at    TIMESTAMP    NULL
);
```

### `subscribers`

```sql
CREATE TABLE subscribers (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email           VARCHAR(150) NOT NULL UNIQUE,
    first_name      VARCHAR(50)  NULL,
    status          ENUM('active','unsubscribed','bounced') DEFAULT 'active',
    source          VARCHAR(50)  DEFAULT 'website',
    brevo_contact_id VARCHAR(50) NULL,
    subscribed_at   TIMESTAMP    NULL,
    unsubscribed_at TIMESTAMP    NULL,
    created_at      TIMESTAMP    NULL,
    updated_at      TIMESTAMP    NULL
);
```

### `blog_posts`

```sql
CREATE TABLE blog_posts (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    slug            VARCHAR(150) NOT NULL UNIQUE,
    title           VARCHAR(255) NOT NULL,
    excerpt         TEXT         NULL,
    body            LONGTEXT     NOT NULL,
    category        VARCHAR(50)  NOT NULL,
    featured_image  VARCHAR(500) NULL,
    meta_title      VARCHAR(70)  NULL,
    meta_description VARCHAR(160) NULL,
    status          ENUM('draft','published','archived') DEFAULT 'draft',
    published_at    TIMESTAMP    NULL,
    author          VARCHAR(100) NULL,
    read_time_min   TINYINT      NULL,
    created_at      TIMESTAMP    NULL,
    updated_at      TIMESTAMP    NULL
);
```

### `content_drafts`

```sql
CREATE TABLE content_drafts (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    type            ENUM('blog','social','email','seo','ad_copy') NOT NULL,
    title           VARCHAR(255) NULL,
    body            LONGTEXT     NOT NULL,
    metadata        JSON         NULL,  -- hashtags, platform, package_slug, etc.
    source_prompt   TEXT         NULL,
    ai_model        VARCHAR(50)  NULL,
    status          ENUM('pending_review','approved','rejected','published') DEFAULT 'pending_review',
    reviewed_by     BIGINT UNSIGNED NULL,
    reviewed_at     TIMESTAMP    NULL,
    published_ref_id BIGINT UNSIGNED NULL,  -- links to blog_posts.id etc.
    created_at      TIMESTAMP    NULL,
    updated_at      TIMESTAMP    NULL
);
```

### `social_posts`

```sql
CREATE TABLE social_posts (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    platform        ENUM('facebook','instagram','linkedin','tiktok','twitter') NOT NULL,
    caption         TEXT         NOT NULL,
    image_url       VARCHAR(500) NULL,
    scheduled_at    TIMESTAMP    NULL,
    published_at    TIMESTAMP    NULL,
    status          ENUM('draft','scheduled','published','failed') DEFAULT 'draft',
    external_post_id VARCHAR(100) NULL,
    content_draft_id BIGINT UNSIGNED NULL,
    created_at      TIMESTAMP    NULL,
    updated_at      TIMESTAMP    NULL
);
```

### `email_campaigns`

```sql
CREATE TABLE email_campaigns (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(150) NOT NULL,
    subject         VARCHAR(255) NOT NULL,
    body_html       LONGTEXT     NOT NULL,
    status          ENUM('draft','scheduled','sent') DEFAULT 'draft',
    scheduled_at    TIMESTAMP    NULL,
    sent_at         TIMESTAMP    NULL,
    brevo_campaign_id VARCHAR(50) NULL,
    content_draft_id BIGINT UNSIGNED NULL,
    created_at      TIMESTAMP    NULL,
    updated_at      TIMESTAMP    NULL
);
```

---

## 7. API specification

Extend `backend/routes/api.php` with the following endpoints.

### Leads

```
POST   /api/contact          # existing — extend to also save to leads table
GET    /api/leads            # admin only (Filament or sanctum auth)
PATCH  /api/leads/{id}       # admin only — update status/notes
```

### Newsletter

```
POST   /api/newsletter/subscribe
  Body: { email: string, firstName?: string, source?: string }
  Response: { message: string }

POST   /api/newsletter/unsubscribe
  Body: { email: string }
```

### Blog (public)

```
GET    /api/blog                    # list published posts (paginated)
GET    /api/blog/{slug}             # single post by slug
```

### Blog (admin — auth required)

```
POST   /api/admin/blog
PUT    /api/admin/blog/{id}
DELETE /api/admin/blog/{id}
```

### AI content (admin — auth required)

```
POST   /api/admin/ai/generate
  Body: {
    type: "blog" | "social" | "email" | "seo",
    packageSlug?: string,
    topic?: string,
    platform?: string,
    tone?: string
  }
  Response: { draftId: number, preview: string }

POST   /api/admin/ai/drafts/{id}/approve
POST   /api/admin/ai/drafts/{id}/reject
```

### Webhooks (for Make.com / Brevo)

```
POST   /api/webhooks/brevo         # delivery events, unsubscribes
POST   /api/webhooks/make/social   # social post status callbacks
```

### Example: newsletter subscribe controller

```php
// backend/app/Http/Controllers/NewsletterController.php
public function subscribe(Request $request)
{
    $validated = $request->validate([
        'email' => 'required|email|max:150',
        'firstName' => 'nullable|string|max:50',
        'source' => 'nullable|string|max:50',
    ]);

    $subscriber = Subscriber::firstOrCreate(
        ['email' => $validated['email']],
        [
            'first_name' => $validated['firstName'] ?? null,
            'source' => $validated['source'] ?? 'website',
            'subscribed_at' => now(),
        ]
    );

    if ($subscriber->wasRecentlyCreated) {
        dispatch(new SyncSubscriberToBrevoJob($subscriber));
        dispatch(new SendWelcomeEmailJob($subscriber));
    }

    return response()->json(['message' => 'Successfully subscribed.']);
}
```

---

## 8. Frontend changes

### 8.1 Blog detail pages

**New files:**

```
frontend/src/pages/BlogPost.tsx          # Article page
frontend/src/hooks/useBlogPosts.ts       # Fetch from API
frontend/src/types/blog.ts               # Post interfaces
```

**Update `frontend/src/App.tsx`:**

```tsx
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<BlogPost />} />
```

**Blog post page requirements:**

- Fetch post by slug from `GET /api/blog/{slug}`
- Render `SEO` component with `meta_title`, `meta_description`, OG image
- Add JSON-LD `Article` schema
- Related posts section at bottom
- CTA to contact / WhatsApp

### 8.2 Newsletter wiring

**Update `frontend/src/pages/Blog.tsx`:**

Replace the static subscribe handler with an API call:

```tsx
const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();
  const res = await fetch(`${import.meta.env.VITE_API_URL}/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ email, source: 'blog' }),
  });
  // handle success/error UI
};
```

### 8.3 GA4 conversion events

**Update `frontend/src/components/Analytics.tsx`:**

Add a shared helper:

```tsx
// frontend/src/utils/analytics.ts
import ReactGA from 'react-ga4';

export const trackEvent = (name: string, params?: Record<string, string | number>) => {
  ReactGA.event(name, params);
};

// Usage examples:
// trackEvent('contact_form_submit', { source: 'contact_page' });
// trackEvent('newsletter_subscribe', { source: 'blog' });
// trackEvent('whatsapp_click', { page: location.pathname });
// trackEvent('package_view', { slug: packageSlug });
```

**Events to implement:**

| Event | Trigger | Parameters |
|-------|---------|------------|
| `contact_form_submit` | Contact form success | `source` |
| `newsletter_subscribe` | Newsletter signup success | `source` |
| `whatsapp_click` | WhatsApp button click | `page` |
| `package_view` | Package detail page load | `slug`, `title` |
| `blog_read` | Blog post page load | `slug`, `category` |
| `cta_click` | Campaign CTA buttons | `cta_name`, `page` |

### 8.4 Campaign landing pages (Phase 2)

**New file:** `frontend/src/pages/Campaign.tsx`

Route: `/offers/:slug` — fetches campaign data from API/CMS, renders hero, package highlight, testimonial, and contact CTA with UTM parameters preserved.

### 8.5 Content sourcing migration

**Phase 1:** Keep `siteData.ts` for packages; move blog to Laravel API.  
**Phase 2:** Migrate packages and destinations to Sanity CMS; frontend fetches at build time or with React Query.

---

## 9. Laravel backend changes

### 9.1 New packages (Composer)

```bash
cd backend
composer require filament/filament:"^3.0"
composer require openai-php/laravel        # or anthropic SDK
composer require getbrevo/brevo-php       # Brevo API
php artisan filament:install --panels
```

### 9.2 Directory structure (new)

```
backend/
├── app/
│   ├── Http/Controllers/
│   │   ├── ContactController.php       # extend: save lead to DB
│   │   ├── NewsletterController.php    # new
│   │   ├── BlogController.php          # new
│   │   ├── AiContentController.php     # new
│   │   └── WebhookController.php       # new
│   ├── Jobs/
│   │   ├── GenerateMarketingContentJob.php
│   │   ├── SyncSubscriberToBrevoJob.php
│   │   ├── SendWelcomeEmailJob.php
│   │   └── PublishSocialPostJob.php
│   ├── Mail/
│   │   ├── ContactFormMail.php         # existing
│   │   └── WelcomeNewsletterMail.php   # new
│   ├── Models/
│   │   ├── Lead.php
│   │   ├── Subscriber.php
│   │   ├── BlogPost.php
│   │   ├── ContentDraft.php
│   │   ├── SocialPost.php
│   │   └── EmailCampaign.php
│   ├── Services/
│   │   ├── AiContentService.php
│   │   ├── BrevoService.php
│   │   └── SocialPublishService.php
│   └── Filament/
│       └── Resources/
│           ├── LeadResource.php
│           ├── SubscriberResource.php
│           ├── BlogPostResource.php
│           ├── ContentDraftResource.php
│           └── SocialPostResource.php
```

### 9.3 Extend ContactController

After sending email, persist the lead:

```php
Lead::create([
    'first_name'   => $validated['firstName'],
    'last_name'    => $validated['lastName'],
    'email'        => $validated['email'],
    'phone'        => $validated['phone'] ?? null,
    'message'      => $validated['message'],
    'source'       => 'contact_form',
    'utm_source'   => $request->input('utm_source'),
    'utm_medium'   => $request->input('utm_medium'),
    'utm_campaign' => $request->input('utm_campaign'),
]);
```

### 9.4 Queue configuration

In `backend/.env`:

```env
QUEUE_CONNECTION=database
```

Run the queue worker on cPanel via cron:

```bash
* * * * * cd /home/user/comeagain/backend && php artisan schedule:run >> /dev/null 2>&1
* * * * * cd /home/user/comeagain/backend && php artisan queue:work --stop-when-empty >> /dev/null 2>&1
```

---

## 10. AI content service

### 10.1 Service class

```php
// backend/app/Services/AiContentService.php
namespace App\Services;

class AiContentService
{
    public function generate(string $type, array $context): ContentDraft
    {
        $prompt = $this->buildPrompt($type, $context);

        $response = OpenAI::chat()->create([
            'model' => config('services.openai.model', 'gpt-4o'),
            'messages' => [
                ['role' => 'system', 'content' => $this->systemPrompt()],
                ['role' => 'user', 'content' => $prompt],
            ],
        ]);

        return ContentDraft::create([
            'type'          => $type,
            'title'         => $context['title'] ?? null,
            'body'          => $response->choices[0]->message->content,
            'metadata'      => $context,
            'source_prompt' => $prompt,
            'ai_model'      => config('services.openai.model'),
            'status'        => 'pending_review',
        ]);
    }
}
```

### 10.2 Brand system prompt

Store in `backend/config/marketing.php` or database:

```
You are the content writer for Come Again Tours & Travels, a premium East African
safari operator based in Uganda. Tone: warm, adventurous, trustworthy, expert.
Always emphasize authentic experiences, local expertise, and responsible tourism.
Never invent prices, visa requirements, or park fees — use only provided data.
If pricing is not provided, say "contact us for a tailored quote".
Target audience: international travellers planning safaris in Uganda, Rwanda, Kenya, Tanzania.
```

### 10.3 Prompt templates by content type

| Type | Input | Output |
|------|-------|--------|
| `blog` | Package slug or topic | 800–1200 word article with H2 sections |
| `social` | Blog post or package + platform | Caption + 5–10 hashtags + image brief |
| `email` | Package or seasonal theme | Subject line + HTML body (300–500 words) |
| `seo` | Page URL + current content | Meta title (≤60 chars) + meta description (≤155 chars) |
| `ad_copy` | Package + platform | Headline + primary text + CTA (for Meta/Google ads) |

### 10.4 Content source data

Pass package context from `siteData.ts` (Phase 1) or Sanity (Phase 2):

```json
{
  "packageSlug": "uganda-gorilla-safari",
  "title": "Uganda Gorilla Safari",
  "duration": "5 days",
  "destinations": ["Bwindi", "Queen Elizabeth"],
  "highlights": ["Mountain gorilla trekking", "Game drives"],
  "priceFrom": null
}
```

---

## 11. Email marketing integration

### 11.1 Brevo setup

1. Create a Brevo account at https://www.brevo.com
2. Verify sender domain: `comeagaintoursandtravels.com`
3. Create contact list: "Website Subscribers"
4. Create automation: Welcome email (trigger = added to list)

### 11.2 BrevoService

```php
// backend/app/Services/BrevoService.php
class BrevoService
{
    public function addContact(Subscriber $subscriber): void
    {
        // POST to Brevo Contacts API
        // Store returned contact ID on subscriber record
    }

    public function sendCampaign(EmailCampaign $campaign): void
    {
        // Create and send campaign via Brevo API
    }
}
```

### 11.3 Email automations to build

| Automation | Trigger | Content |
|------------|---------|---------|
| Welcome series | Newsletter signup | 3 emails over 7 days: brand intro, top packages, CTA to contact |
| Post-inquiry follow-up | Contact form submit | Thank you + what to expect + WhatsApp link |
| Seasonal campaign | Manual / scheduled | Gorilla season, migration season, holiday offers |

---

## 12. Social media integration

### 12.1 Recommended approach

Do **not** build a custom social scheduler. Use:

1. **AI generates** captions in Laravel (Filament)
2. **Staff approves** in Filament
3. **Make.com** receives webhook on approval
4. **Buffer** or **Meta Business Suite** schedules and publishes

### 12.2 Make.com scenario (example)

```
Trigger: Webhook (POST from Laravel on social_posts.status = scheduled)
  → Router by platform
    → Facebook/Instagram: Meta API module
    → LinkedIn: LinkedIn module
    → TikTok: Manual notification to staff (email/WhatsApp with caption + image)
Callback: POST to /api/webhooks/make/social with published URL and status
```

### 12.3 Content repurpose flow

When a blog post is published:

```
PublishBlogPost
  → Dispatch RepurposeContentJob
    → AI generates:
        - 3 Instagram captions (short, medium, carousel)
        - 2 Facebook posts (story-driven, offer-driven)
        - 1 LinkedIn post (professional tone)
        - 1 email summary
    → Save all as content_drafts (type: social/email)
    → Notify marketer in Filament
```

### 12.4 Social URL cleanup

Ensure all social links in `siteData.ts` use real URLs (not `#` placeholders). Single source of truth:

```ts
// frontend/src/data/siteData.ts
socials: {
  facebook: 'https://facebook.com/...',
  instagram: 'https://instagram.com/...',
  tiktok: 'https://tiktok.com/...',
  linkedin: 'https://linkedin.com/...',
  twitter: 'https://x.com/...',
}
```

Reference this object from Footer, Contact page, and email templates.

---

## 13. Analytics and tracking

### 13.1 Google Tag Manager

1. Create GTM container
2. Add GTM snippet to `frontend/index.html`
3. Configure tags in GTM (not in code):
   - GA4 Configuration
   - Meta Pixel
   - Conversion events

### 13.2 UTM parameter strategy

All campaign links should include UTMs:

```
https://comeagaintoursandtravels.com/offers/gorilla-season
  ?utm_source=facebook
  &utm_medium=social
  &utm_campaign=gorilla-season-2026
```

Store UTMs on lead records when contact form is submitted.

### 13.3 Looker Studio dashboard (Phase 3)

Connect GA4 + Brevo + manual social data to show:

- Website traffic and top pages
- Lead count by source
- Newsletter growth
- Top packages by page views
- Conversion rate: visit → inquiry

---

## 14. Admin panel (Filament)

### 14.1 Install

```bash
composer require filament/filament:"^3.0"
php artisan filament:install --panels
```

Access at: `https://comeagaintoursandtravels.com/admin`

### 14.2 Resources to build

| Resource | Features |
|----------|----------|
| **Leads** | List, filter by status/source, edit notes, mark converted |
| **Subscribers** | List, export, unsubscribe |
| **Blog Posts** | CRUD, rich text editor, publish/unpublish, SEO fields |
| **Content Drafts** | Review AI output, approve/reject, edit before publish |
| **Social Posts** | Schedule, view status, link to platform post |
| **Email Campaigns** | Create, preview, schedule send via Brevo |

### 14.3 Roles

| Role | Access |
|------|--------|
| Admin | Full access |
| Marketer | Content drafts, blog, social, email campaigns |
| Sales | Leads view and update only |

---

## 15. Automation workflows

### Workflow 1: New lead

```
Contact form submitted
  → Save to leads table
  → Send notification email to info@comeagaintoursandtravels.com
  → Send auto-reply to customer
  → Track GA4 event: contact_form_submit
  → (Phase 3) WhatsApp notification to sales team
```

### Workflow 2: Newsletter signup

```
Email submitted on blog
  → Save to subscribers table
  → Sync to Brevo contact list
  → Trigger Brevo welcome automation
  → Track GA4 event: newsletter_subscribe
```

### Workflow 3: AI blog creation

```
Marketer clicks "Generate blog post" in Filament
  → Selects package or enters topic
  → GenerateMarketingContentJob runs
  → Draft appears in Content Drafts (pending_review)
  → Marketer edits and approves
  → Blog post created (published)
  → RepurposeContentJob creates social drafts
  → Sitemap updated
```

### Workflow 4: Social publishing

```
Marketer approves social draft
  → social_posts record created (scheduled)
  → Webhook to Make.com
  → Make.com posts to Buffer/Meta
  → Callback updates status to published
```

---

## 16. Environment variables

### Backend (`backend/.env`)

```env
# Existing
APP_URL=https://comeagaintoursandtravels.com
MAIL_MAILER=smtp
MAIL_HOST=
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM_ADDRESS=info@comeagaintoursandtravels.com

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=comeagain
DB_USERNAME=
DB_PASSWORD=

# Queue
QUEUE_CONNECTION=database

# AI (choose one or both)
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o
ANTHROPIC_API_KEY=sk-ant-...

# Brevo
BREVO_API_KEY=xkeysib-...
BREVO_LIST_ID=1

# Make.com webhooks
MAKE_WEBHOOK_SOCIAL=https://hook.eu1.make.com/...
MAKE_WEBHOOK_SECRET=random-secret-string

# Sanity (Phase 2)
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_TOKEN=

# Marketing config
MARKETING_BRAND_NAME="Come Again Tours & Travels"
MARKETING_CONTACT_EMAIL=info@comeagaintoursandtravels.com
MARKETING_WHATSAPP=+256786016031
```

### Frontend (`frontend/.env.production`)

```env
VITE_API_URL=https://comeagaintoursandtravels.com/api
VITE_GA_TRACKING_ID=G-R9262FDR2V
VITE_GTM_ID=GTM-XXXXXXX
VITE_SANITY_PROJECT_ID=          # Phase 2
```

**Never commit `.env` files.** Add new keys to `.env.example` with empty placeholders.

---

## 17. Security and compliance

### API security

- All `/api/admin/*` routes protected with Laravel Sanctum or Filament auth
- Webhook endpoints validate shared secrets or signatures
- Rate-limit public endpoints (`/contact`, `/newsletter/subscribe`)
- Validate and sanitize all AI output before storing

### API keys

- OpenAI, Brevo, and Make.com keys live **only** in `backend/.env`
- Never expose keys in React code or client-side bundles

### Data privacy

- Add privacy policy link near newsletter and contact forms
- Store consent timestamp on subscriber records
- Honor unsubscribe requests within 48 hours
- Do not send subscriber emails to third parties beyond Brevo

### AI content accuracy

- Human review required before publish (enforced by `pending_review` status)
- Prompt instructs AI not to invent prices or visa rules
- Package data passed to AI must come from verified CMS/siteData sources

### CORS

Existing config at `backend/config/cors.php` — ensure production domain and local Vite dev URL are allowed.

---

## 18. Deployment

### Current setup

- **Frontend:** Vite build → static files on Apache (cPanel)
- **Backend:** Laravel in `backend/public/` served at `/api`
- **Deploy:** Manual (no CI/CD detected)

### Recommended deploy flow

```bash
# Frontend
cd frontend
npm run build
# Upload dist/ to cPanel public_html

# Backend
cd backend
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan queue:restart
```

### Post-deploy checks

- [ ] `POST /api/contact` saves lead and sends email
- [ ] `POST /api/newsletter/subscribe` works
- [ ] `GET /api/blog` returns posts
- [ ] Filament admin accessible at `/admin`
- [ ] Queue worker running (cron)
- [ ] GA4 events firing in DebugView
- [ ] Brevo contact sync working

### Future: CI/CD (optional)

Add GitHub Actions to build frontend and run Laravel tests on push to `main`. Deploy via cPanel Git deployment or FTP sync.

---

## 19. Cost estimates

Monthly tool costs (excluding ad spend):

| Service | Plan | Est. cost |
|---------|------|-----------|
| OpenAI API | Pay-as-you-go | $10–30 |
| Brevo | Free → Lite | $0–25 |
| Sanity | Free tier | $0 |
| Make.com | Core | $9–16 |
| Buffer | Essentials | $6–12 |
| Crisp (chat) | Free tier | $0 |
| **Total** | | **~$25–95/mo** |

Development effort:

| Phase | Est. hours |
|-------|------------|
| Phase 1 | 60–80 |
| Phase 2 | 80–120 |
| Phase 3 | 60–100 |

---

## 20. File reference map

### Existing files to modify

| File | Changes |
|------|---------|
| `frontend/src/pages/Blog.tsx` | Wire newsletter, link to `/blog/:slug` |
| `frontend/src/App.tsx` | Add blog detail and campaign routes |
| `frontend/src/components/Analytics.tsx` | Add conversion event helpers |
| `frontend/src/pages/Contact.tsx` | Pass UTM params, track submit event |
| `frontend/src/components/WhatsAppButton.tsx` | Track click event |
| `frontend/src/pages/PackageDetail.tsx` | Track package view event |
| `frontend/src/data/siteData.ts` | Unify social URLs; later migrate to CMS |
| `backend/routes/api.php` | Add new endpoints |
| `backend/app/Http/Controllers/ContactController.php` | Persist leads |
| `backend/.env.example` | Document new env vars |
| `frontend/index.html` | Add GTM snippet |

### New files to create

| File | Purpose |
|------|---------|
| `frontend/src/pages/BlogPost.tsx` | Blog article page |
| `frontend/src/utils/analytics.ts` | GA4 event helpers |
| `backend/app/Http/Controllers/NewsletterController.php` | Newsletter API |
| `backend/app/Http/Controllers/BlogController.php` | Blog API |
| `backend/app/Http/Controllers/AiContentController.php` | AI generation API |
| `backend/app/Services/AiContentService.php` | AI prompt + API calls |
| `backend/app/Services/BrevoService.php` | Email marketing sync |
| `backend/app/Jobs/GenerateMarketingContentJob.php` | Async AI generation |
| `backend/app/Models/Lead.php` | Lead model |
| `backend/app/Models/Subscriber.php` | Subscriber model |
| `backend/app/Models/BlogPost.php` | Blog post model |
| `backend/app/Models/ContentDraft.php` | AI draft model |
| `backend/config/marketing.php` | Brand prompts and settings |
| `backend/database/migrations/*` | New tables |

---

## 21. Checklist

### Phase 1

- [ ] Create database migrations (leads, subscribers, blog_posts)
- [ ] Extend ContactController to save leads
- [ ] Build NewsletterController and wire Blog.tsx
- [ ] Build BlogController and BlogPost.tsx page
- [ ] Add `/blog/:slug` route
- [ ] Install Filament and create Lead + Subscriber resources
- [ ] Add GA4 conversion events
- [ ] Fix social URL placeholders in siteData.ts
- [ ] Update `.env.example` files
- [ ] Test end-to-end on staging

### Phase 2

- [ ] Install OpenAI/Claude SDK
- [ ] Build AiContentService and prompt templates
- [ ] Create ContentDraft model and Filament resource
- [ ] Build approval workflow (pending → approved → published)
- [ ] Integrate Brevo API
- [ ] Set up welcome email automation
- [ ] Evaluate and integrate Sanity CMS
- [ ] Build campaign landing page template
- [ ] Add GTM and Meta Pixel

### Phase 3

- [ ] Set up Make.com scenarios
- [ ] Build SocialPost model and scheduling UI
- [ ] Implement content repurpose job
- [ ] Build Looker Studio dashboard
- [ ] Add on-site chat widget
- [ ] Evaluate WhatsApp Business API
- [ ] Dynamic sitemap generation
- [ ] Set up CI/CD pipeline

---

## Support and ownership

| Area | Owner |
|------|-------|
| Frontend (React) | Development team |
| Backend (Laravel) | Development team |
| AI prompt tuning | Marketing + development |
| Brevo email templates | Marketing team |
| Social posting approval | Marketing team |
| Analytics dashboards | Marketing team |
| Infrastructure (cPanel) | DevOps / hosting admin |

For questions about this implementation plan, refer to this document and the codebase paths listed in [Section 20](#20-file-reference-map).
