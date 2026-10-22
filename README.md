# GOBIQ LTD — Professional Domestic Construction Corporate Website

A premium, fully responsive corporate website for **GOBIQ LTD**, a UK-based construction company specialising in domestic building construction (SIC 41202).

Designed with the clarity of a corporate SaaS platform combined with the architectural elegance, British typography, and credibility of a high-end UK domestic building contractor.

---

## 🏛️ Company Information (Verified)

| Detail | Specification |
| :--- | :--- |
| **Company Name** | GOBIQ LTD |
| **Business Classification** | SIC 41202 — Construction of domestic buildings |
| **Companies House No.** | 17428577 |
| **Company Status** | Active |
| **Incorporation Date** | 31 August 2026 |
| **Registered Office** | 78 Toll End Road, Tipton, England, DY4 0EU |
| **Direct Telephone** | 07796 195206 (`tel:+447796195206`) |
| **Direct Email** | [gobiuk1989@gmail.com](mailto:gobiuk1989@gmail.com) |
| **Website** | [www.gobiq.co.uk](https://www.gobiq.co.uk) |

*Note: In accordance with professional standards, unverified awards, fabricated testimonials, fake project claims, and artificial completion guarantees have been omitted.*

---

## 🎨 Brand Identity & Colour Palette

| Colour | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Forest Green** | `#183D32` | Primary brand colour, primary buttons, hero accents, footer |
| **Warm Ivory** | `#F7F5EF` | Core page background, clean warmth |
| **Champagne Gold** | `#C5A46D` | Premium accent, geometric logo highlights, badges |
| **Charcoal** | `#252923` | High-contrast readable body and heading typography |
| **White** | `#FFFFFF` | Content cards, modals, contrast sections |
| **Muted Sage** | `#DCE5DC` | Subtle section backgrounds and secondary borders |

**Typography**:
- **Headings**: Manrope (via Google Fonts)
- **Body & Interfaces**: Inter (via Google Fonts)

---

## 📂 Multi-Page Website Architecture

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial hero, company intro, 4 service cards, 4 honest values, featured projects gallery, forest-green CTA |
| `/about` | **About Us** | Domestic building philosophy, methodology pillars, verified Companies House panel |
| `/services` | **Our Services** | Detailed alternating layout (New-Builds, Extensions, Renovations, Structural Works), requirements checklist, interactive FAQ accordion |
| `/projects` | **Our Projects** | Filterable portfolio (All, New Builds, Extensions, Renovations, Structural) with detailed interactive inspection modal |
| `/contact` | **Contact Us** | Two-column layout with verified contact details, interactive Tipton DY4 0EU Google Maps embed, and comprehensive project consultation form |
| `/privacy` | **Privacy Policy** | Statutory UK GDPR and Data Protection Act 2018 privacy policy |
| `/cookies` | **Cookie Policy** | UK PECR compliant cookie statement with interactive preference center |
| `*` | **404 Not Found** | Custom branded error page with quick links back to homepage and services |

---

## ⚙️ Tech Stack

- **React 18/19** with **Vite**
- **TypeScript** with strict type safety and `verbatimModuleSyntax` support
- **Tailwind CSS** with custom architectural color palette
- **React Router DOM** for client-side multi-page routing with scroll-to-top automation
- **Lucide React** for icons
- **Schema.org** JSON-LD (`GeneralContractor` structured data)
- **OpenGraph & Twitter Cards** for social sharing

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v18+` or `v20+` (tested with Node `v25.2.1`)
- npm `v9+` or `v11+`

### 2. Installation
```bash
# Clone or navigate to the project directory
cd project

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:5173/` (or next available port).

### 4. Production Build & Validation
```bash
# Type check and generate production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Content Management & Central Data

All business content, service items, and project case studies are structured in centralized data files for easy updates:

- `src/data/company.ts`: Update phone numbers, email addresses, registered office address, and hours.
- `src/data/services.ts`: Add, remove, or modify domestic building services and FAQs.
- `src/data/projects.ts`: Replace illustrative sample projects with genuine completed client project photos and specifications as GOBIQ LTD finishes site builds.

---

## 🛡️ UK Compliance & Form Handling

- **Enquiry Form**: Validates all fields inline with accessible ARIA tags, prevents duplicate submissions, and stores submitted enquiries in local storage (`gobiq_enquiries`) with unique reference codes (`GBQ-XXXXXX`).
- **Direct Mail Fallback**: A development notice provides a one-click button opening the user's email client with pre-filled details to `gobiuk1989@gmail.com`.
- **Cookie Consent**: Complies with UK PECR and GDPR with essential vs analytics category controls and persistent local storage (`gobiq_cookie_consent`).

---

## 🌐 Deploying to Render (Free Static Site)

This website is optimized to run as a **Free Static Site** on [Render](https://render.com).

### Method A: Automatic Deployment using Blueprint (`render.yaml`)
1. Push your project to GitHub or GitLab.
2. In the Render Dashboard, click **New +** and select **Blueprint**.
3. Connect your repository. Render will automatically detect [`render.yaml`](file:///c:/Users/user/Downloads/project/render.yaml) and configure:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `./dist`
   - **SPA Routing Rewrite**: `/*` &rarr; `/index.html` (vital for React Router multi-page navigation)
4. Click **Apply**.

### Method B: Manual Setup via Render Dashboard
1. Go to [dashboard.render.com](https://dashboard.render.com) and click **New +** &rarr; **Static Site**.
2. Connect your Git repository.
3. Configure the following settings:
   - **Name**: `gobiq-ltd-website`
   - **Branch**: `main` (or your default branch)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. **Important for React Router (Single Page Application)**:
   - Go to the **Redirects/Rewrites** tab under your site's settings.
   - Click **Add Rule**:
     - **Type**: `Rewrite`
     - **Source**: `/*`
     - **Destination**: `/index.html`
5. Click **Save Changes** / **Create Static Site**.

