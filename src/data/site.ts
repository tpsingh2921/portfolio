// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Tejpal Singh Jodha',
  role: 'Business Analyst',
  location: 'Jodhpur',
  timezone: 'Asia/Kolkata',
  photo: '/images/me-portrait.webp',
  email: 'tpsingh2101@gmail.com',
  phone: '+91 78771 27423',
  linkedin: 'https://www.linkedin.com/in/tpsingh21',
  available: true,
  intro:
    'IT Business Analyst with an MBA in Business Analytics and a B.Sc. in Computer Science. I operate at the intersection of business strategy and software engineering—turning complex stakeholder needs into structured specifications (BRD, FRD, SRS), interactive prototypes, and traceable user backlogs that delivery teams can execute with zero ambiguity. Proficient in Agile Scrum sprint governance, UML/BPMN system modeling, SQL-driven analysis, and end-to-end UAT validation.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tpsingh21' },
    { label: 'Email', href: 'mailto:tpsingh2101@gmail.com' },
  ],
  marquee: ['Requirements elicitation', 'BRD · FRD · SRS', 'Agile Scrum', 'Waterfall', 'UML & wireframes', 'UAT & change requests'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  gallery: { src: string; label: string }[]
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'clientrm',
    title: 'ClientRM',
    client: 'Upskilling project',
    category: 'Agile Scrum',
    year: '2026',
    cover: '/images/clientrm-dashboard.png',
    gallery: [
      { src: '/images/clientrm-dashboard.png', label: 'Revenue dashboard' },
      { src: '/images/clientrm-pipeline.png', label: 'Deals & sales pipeline' },
      { src: '/images/clientrm-contacts.png', label: 'Contacts & leads' },
    ],
    tint: '#e6edfb',
    summary:
      'An enterprise CRM concept built to centralise customer data and streamline the sales pipeline, taken from product backlog to UAT across four Scrum sprints.',
    role: ['Business analyst', 'Agile Scrum', 'JIRA'],
    deliverables: [
      'User stories with acceptance criteria',
      'Product and sprint backlogs',
      'DOR and DOD checklists',
      'Burndown and burn-up charts',
    ],
    body: [
      'ClientRM is an enterprise CRM platform designed to centralise customer data and streamline sales pipelines. I worked as the business analyst alongside a Product Owner and Scrum Master, turning the product vision into a backlog the team could pick up sprint by sprint.',
      'I wrote the user stories and their acceptance criteria, then added them to the product backlog in JIRA. Requirements were prioritised and validated using MoSCoW and FURPS, and the sprint backlog followed that order. With the Product Owner I helped define business value and complexity points, and I built the DOR and DOD checklists the team used before and after every story.',
      'Through the sprint ceremonies I tracked progress on sprint and product burndown and burn-up charts and helped clear blockers, and I took part in product planning and UAT so each sprint component was signed off before release.',
    ],
    size: 'small',
  },
  {
    slug: 'shophere',
    title: 'ShopHere',
    client: 'Upskilling project',
    category: 'Waterfall',
    year: '2026',
    cover: '/images/shophere-home.png',
    gallery: [
      { src: '/images/shophere-home.png', label: 'Storefront' },
      { src: '/images/shophere-product.png', label: 'Product detail' },
      { src: '/images/shophere-checkout.png', label: 'Checkout' },
    ],
    tint: '#f7ece3',
    summary:
      'An e-commerce marketplace concept delivered through the Waterfall lifecycle, from structured elicitation and BRD through UML, RTM and a signed-off UAT.',
    role: ['Business analyst', 'Waterfall', 'Modelling'],
    deliverables: ['BRD, FRD and SRS', 'UML diagrams and wireframes', 'Requirements traceability matrix', 'Test scenarios and UAT sign-off'],
    body: [
      'ShopHere is an e-commerce marketplace platform built to optimise the online shopping experience and streamline administrative operations. It ran as a Waterfall project, so the documentation had to be right before build started.',
      'I gathered requirements using structured elicitation techniques and prepared the Business Requirements Document, then translated the BRD into a Functional Requirements Document and worked with the technical team on the System Requirements Specification. Use case, activity and flow diagrams plus wireframes were produced in MS Visio, Balsamiq and Axure.',
      'I created and maintained the Requirements Traceability Matrix throughout the lifecycle, designed the test case scenarios and facilitated UAT through to sign-off.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Requirements & documentation',
    body: 'Structured elicitation, then BRDs, FRDs and SRS documents that say one thing only. I maintain the RTM through every change request so nothing gets lost between the ask and the test case.',
  },
  {
    title: 'Agile Scrum',
    body: 'User stories with acceptance criteria, product and sprint backlogs prioritised with MoSCoW and FURPS, DOR and DOD checklists, and the burndown and burn-up charts that show whether a sprint is really on track.',
  },
  {
    title: 'Process modelling & prototyping',
    body: 'UML use case, activity and flow diagrams, gap analysis, and wireframes in Axure, Balsamiq and MS Visio, so stakeholders can react to something concrete instead of a paragraph.',
  },
  {
    title: 'Analysis, SQL & reporting',
    body: 'SQL for pulling and shaping data, Power BI and Tableau for the reporting layer, and the stakeholder communication and UAT facilitation that makes the numbers useful.',
  },
]

export const certifications = [
  {
    title: 'Business Analyst — 40 professional development hours',
    issuer: 'COEPD · IIBA Endorsed Education Provider',
    issued: 'Issued 27 July 2026',
    image: '/images/certificate-coepd.jpg',
  },
  {
    title: 'Registered Scrum Basics™',
    issuer: 'Agile Education by Scrum Inc.™',
    issued: 'Issued 20 May 2026',
    image: '/images/certificate-scrum-basics.jpg',
  },
]

export const tools = [
  { label: 'Documentation', value: 'MS Word · Excel · PowerPoint' },
  { label: 'Modelling', value: 'MS Visio · Draw.io' },
  { label: 'Prototyping', value: 'Axure · Balsamiq' },
  { label: 'Delivery', value: 'JIRA · Confluence' },
  { label: 'Data & BI', value: 'SQL · Power BI · Tableau' },
  { label: 'Domain', value: 'IT · CRM' },
]

export const experience = [
  { period: '2025', title: 'MBA, Business Analytics', detail: 'Sir Padampat Singhania University, Udaipur' },
  { period: '2023', title: 'BSc, Computer Science', detail: 'Lachoo Memorial College of Science & Technology, Jodhpur' },
  { period: 'COEPD', title: 'Business Analyst, 40 PD hours', detail: 'IIBA Endorsed Education Provider' },
  { period: 'Scrum Inc.', title: 'Registered Scrum Basics™', detail: 'Agile Education by Scrum Inc.™' },
]
