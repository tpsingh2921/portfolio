# Tejpal Singh Jodha — IT Business Analyst Portfolio

[![Firebase Hosting](https://img.shields.io/badge/Hosted%20On-Firebase%20Hosting-FFA611?style=for-the-badge&logo=firebase&logoColor=white)](https://my-portfolio-1c97b.web.app)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloud Firestore](https://img.shields.io/badge/Cloud%20Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/docs/firestore)
[![Resend](https://img.shields.io/badge/Email%20API-Resend-000000?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com)

> **Live Portfolio**: [https://my-portfolio-1c97b.web.app](https://my-portfolio-1c97b.web.app)  
> **GitHub Repository**: [https://github.com/tpsingh2921/portfolio](https://github.com/tpsingh2921/portfolio)

---

## 👨‍💼 About Me

I am an **IT Business Analyst** with an **MBA in Business Analytics** and a **B.Sc. in Computer Science**. Coming from a technical engineering background allows me to bridge the gap between business stakeholders and technical delivery teams without losing nuance or intent.

I specialize in the parts of a project where ambiguity turns into clear, actionable requirements: structured stakeholder elicitation, authoring formal BRDs, FRDs, and SRS documents, modeling business workflows with UML and BPMN, maintaining 100% test traceability through RTMs, and leading Agile Scrum ceremonies with well-defined Definition of Ready (DOR) and Definition of Done (DOD) quality gates.

* **Location**: Jodhpur, Rajasthan, India *(Available for on-site, hybrid, or remote roles)*
* **Availability**: Open to full-time Business Analyst opportunities
* **Education**:
  * **MBA in Business Analytics** — Sir Padampat Singhania University, Udaipur (2025)
  * **B.Sc. in Computer Science** — Lachoo Memorial College of Science & Technology, Jodhpur (2023)

---

## 🛠️ Core Competencies & Toolkit

### Business Analysis & SDLC
* **Requirements Engineering**: Structured Stakeholder Elicitation, Business Requirements Documents (BRD), Functional Requirements Documents (FRD), System Requirements Specifications (SRS), Gap Analysis, RACI Governance Matrices, Change Impact Assessment.
* **Agile Scrum Delivery**: INVEST User Stories, Acceptance Criteria (Gherkin `Given-When-Then`), MoSCoW & FURPS+ Prioritization, Product Backlog Refinement, Sprint Planning, Burndown/Burn-up Tracking, Definition of Ready (DOR), Definition of Done (DOD).
* **Systems Modeling & Prototyping**: UML 2.5 Use Case Diagrams, Activity Flows, Sequence Diagrams, BPMN 2.0 Swimlane Workflows, Wireframing (Axure RP, Balsamiq, MS Visio, Draw.io).
* **Quality & Validation**: Requirements Traceability Matrix (RTM) linking business requirements to UAT test scripts, UAT Facilitation, Sign-off Protocol.

### Technical & Data Tools
| Area | Tools & Technologies |
| :--- | :--- |
| **Documentation & Office** | MS Word, MS Excel (VLOOKUP, Pivot, Advanced Modeling), PowerPoint |
| **Process Modeling** | MS Visio, Draw.io, Axure RP, Balsamiq |
| **Agile & Delivery** | JIRA, Confluence, Git, GitHub |
| **Data & Analytics** | SQL (DDL, DML, Complex Joins), Power BI, Tableau |
| **Web & APIs** | REST API testing (Postman), JSON schema inspection |

---

## 📂 Featured Case Studies

### 1. [ClientRM — Enterprise RevOps & Lead Routing CRM](https://my-portfolio-1c97b.web.app/work/clientrm)
* **Lifecycle**: Agile Scrum (4 Sprint Cadences)
* **Problem**: 20% warm lead drop-off rate caused by unlinked spreadsheets, undefined sales stages, and uncontacted inbound inquiries exceeding 48 hours.
* **Deliverables**:
  * Authored 20+ INVEST user stories with Gherkin acceptance criteria in JIRA.
  * Formulated Definition of Ready (DOR) and Definition of Done (DOD) quality gates.
  * Designed automated ICP scoring rules and round-robin lead allocation with a 15-minute SLA timer.
  * Tracked sprint velocity using sprint burndown and release burn-up charts.
* **Impact**: 90% Month-1 user adoption, 40% faster inbound lead response time.

### 2. [ShopHere — Multi-Vendor Merchant Portal & Order Fulfillment](https://my-portfolio-1c97b.web.app/work/shophere)
* **Lifecycle**: Waterfall SDLC
* **Problem**: Retail vendors struggling with high digital onboarding friction, uncoordinated multi-carrier shipping, split-cart fulfillment errors, and delayed escrow settlement.
* **Deliverables**:
  * Conducted formal stakeholder elicitation workshops with merchants and warehouse operations.
  * Authored the comprehensive Business Requirements Document (BRD), Functional Requirements Document (FRD), and System Requirements Specification (SRS).
  * Modeled UML 2.5 Use Case diagrams, Activity flows, and BPMN 2.0 merchant KYC swimlane diagrams in MS Visio and Axure.
  * Developed an end-to-end Requirements Traceability Matrix (RTM) tying 35+ business needs to functional specs and UAT test cases.
  * Facilitated multi-vendor escrow settlement and 3PL courier API integration sign-off.
* **Impact**: Onboarding reduced to under 48 hours, 85% fewer fulfillment exceptions, 100% RTM traceability.

---

## 📜 Professional Accreditations

* **IT Business Analyst Professional Training** (40 Professional Development Hours)  
  *Accredited by the Center of Excellence for Professional Development (COEPD)*  
  *IIBA Endorsed Education Provider | ISO 9001:2015 Certified*  
  *Grounded in the BABOK® Guide v3 knowledge areas.*
* **Registered Scrum Basics™ (RSB)**  
  *Agile Education by Scrum Inc.™ (Co-created by Dr. Jeff Sutherland)*  
  *Validates mastery of Scrum framework ceremonies, backlog prioritization, and servant leadership.*

---

## 💻 Portfolio Application Architecture

This web application was custom-built to deliver an executive, spatial, and responsive portfolio experience without bloat or external template dependencies.

* **Frontend**:
  * **React 19** & **TypeScript** with **Vite** bundler.
  * **Tailwind CSS v4** tokenized design system (paper canvas, ink text, squircle geometry via `corner-shape`).
  * **Motion** for subtle kinetic typography, masked reveals, and counted tab preloader.
  * Accessible navigation with client-side **React Router** SPA routing.
* **Backend & Integrations**:
  * **Cloud Firestore**: Real-time serverless persistence for recruiter interview requests and inquiries (`interview_requests` collection).
  * **Resend Email API**: Automated transactional email delivery forwarding inquiries instantly to `tpsingh2101@gmail.com`.
  * **Cloudflare Workers / Hono**: Edge runtime managing `/api/contact` and `/api/health`.
  * **Firebase Hosting**: Globally distributed CDN hosting with clean HTTPS delivery and SPA route fallback.
* **Security Discipline**:
  * All API credentials isolated in environment variables (`.env`, git-ignored).
  * Cloud Firestore Security Rules ([firestore.rules](file:///d:/PF/firestore.rules)) enforcing strict schema validation and prohibiting unauthorized reads.
  * Zero plain text secrets in the version-controlled codebase.

---

## 🚀 Local Development Setup

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v20+ recommended)
* `npm` (v10+) or `bun`

### 2. Clone & Install
```bash
git clone https://github.com/tpsingh2921/portfolio.git
cd portfolio
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env` and fill in your credentials:
```bash
cp .env.example .env
```

```env
# Resend Email API
RESEND_API_KEY=your_resend_api_key
RESEND_FROM=onboarding@resend.dev
ADMIN_NOTIFY_EMAIL=tpsingh2101@gmail.com

# Firebase / Cloud Firestore Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=my-portfolio-1c97b.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=my-portfolio-1c97b
VITE_FIREBASE_STORAGE_BUCKET=my-portfolio-1c97b.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=965850226521
VITE_FIREBASE_APP_ID=1:965850226521:web:cd59df7209f88a3da1f648
```

### 4. Run Locally
```bash
# Start local dev server (http://localhost:5173)
npm run dev

# Run TypeScript type check
npm run typecheck

# Production build
npm run build
```

### 5. Deploy to Firebase
```bash
# Deploy to Firebase Hosting and Firestore Security Rules
npx firebase deploy --only hosting,firestore
```

---

## 📬 Contact & Connect

* **Email**: [tpsingh2101@gmail.com](mailto:tpsingh2101@gmail.com)
* **Phone**: [+91 78771 27423](tel:+917877127423)
* **LinkedIn**: [linkedin.com/in/tpsingh21](https://www.linkedin.com/in/tpsingh21)
* **Live Website**: [https://my-portfolio-1c97b.web.app](https://my-portfolio-1c97b.web.app)

---
© 2026 Tejpal Singh Jodha. All rights reserved.
