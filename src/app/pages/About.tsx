import { ArrowUpRight, CheckCircle2, Layers, Cpu, BarChart3, FileText } from 'lucide-react'
import { Link } from 'react-router'

import { experience, site, tools } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <div className="mb-6 flex items-center gap-2 text-[14px] text-muted">
        <span className="round size-2 rounded-full bg-accent" />
        <span>About Tejpal Singh Jodha · IT Business Analyst</span>
      </div>

      <Lines
        as="h1"
        className="font-display text-balance text-[clamp(44px,7.5vw,112px)]"
        lines={['Business analyst,', 'technologist by training']}
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        {/* Left Column: Portrait & Quick Meta */}
        <Reveal>
          <div className="sticky top-28">
            <Parallax
              src={site.photo}
              alt={site.name}
              className="aspect-[3/4] rounded-image"
              frameClassName="portrait-backdrop"
              strength={3}
              zoom={1.06}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />

            {/* Credential Tags */}
            <div className="mt-6 flex flex-wrap gap-2 text-[13px]">
              <span className="rounded-control border border-line bg-surface px-3 py-1.5 font-medium text-fg">
                MBA · Business Analytics
              </span>
              <span className="rounded-control border border-line bg-surface px-3 py-1.5 font-medium text-fg">
                B.Sc. · Computer Science
              </span>
              <span className="rounded-control border border-line bg-surface px-3 py-1.5 font-medium text-muted">
                COEPD (IIBA Endorsed)
              </span>
              <span className="rounded-control border border-line bg-surface px-3 py-1.5 font-medium text-muted">
                Scrum Inc.™ Certified
              </span>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                    {s.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-card border border-line bg-surface/60 p-6 text-[14px]">
              <p className="font-medium text-fg">Current Availability</p>
              <p className="mt-1 text-muted">Open to Business Analyst opportunities in IT, CRM, and enterprise SaaS teams. Available for on-site (Jodhpur, Rajasthan), hybrid, or remote.</p>
              <a href={`mailto:${site.email}`} className="link-draw mt-4 inline-flex items-center gap-1.5 font-medium text-fg">
                Get in touch directly
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Full Narrative & Competencies */}
        <div className="flex flex-col gap-12">
          {/* Executive Overview */}
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I am an entry-level IT Business Analyst with an <strong>MBA in Business Analytics</strong> and a <strong>B.Sc. in Computer Science</strong>. I specialize in the critical stage where loose business intent gets translated into unambiguous specifications, testable user stories, and engineered software.
            </p>
          </Reveal>

          {/* Deep Narrative */}
          <Reveal delay={0.1} className="flex flex-col gap-6 text-[17px] leading-relaxed text-muted">
            <div>
              <h2 className="font-display text-[28px] text-fg sm:text-[34px]">The Technical Bridge</h2>
              <p className="mt-3">
                Most software delivery issues do not stem from bad coding—they trace back to a translation gap between what business stakeholders thought they requested and what developers assumed was meant.
              </p>
              <p className="mt-3">
                Coming from a computer science background gives me architectural empathy. I read relational database schemas, inspect REST API payload contracts, evaluate data types and validation rules, and identify technical constraints before a ticket ever enters a sprint backlog. When I speak with software engineers, we speak the same language.
              </p>
            </div>

            <div className="border-t border-line pt-6">
              <h2 className="font-display text-[28px] text-fg sm:text-[34px]">Data-Driven Prioritization</h2>
              <p className="mt-3">
                My MBA in Business Analytics equips me to look at backlogs through commercial ROI and operational impact. Instead of prioritizing features by the loudest voice in the room, I evaluate user stories by <strong>Business Value (BV) vs. Cost of Delay (CD3)</strong>, MoSCoW rankings, and FURPS+ architectural criteria.
              </p>
              <p className="mt-3">
                I work closely with Product Owners to ensure engineering velocity is spent where it yields the highest business dividend—whether that means reducing inbound lead response times or automating multi-vendor payout reconciliations.
              </p>
            </div>

            <div className="border-t border-line pt-6">
              <h2 className="font-display text-[28px] text-fg sm:text-[34px]">Methodology Fluency</h2>
              <p className="mt-3">
                I do not treat Agile and Waterfall as opposing religions, but as complementary delivery methodologies adapted to project needs:
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-[16px]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                  <span>
                    <strong className="text-fg">Agile Scrum (ClientRM)</strong>: Authored 20+ INVEST user stories with Gherkin scenarios (<code>Given-When-Then</code>), led product backlog grooming, formulated Definition of Ready (DOR) and Definition of Done (DOD) quality gates, and tracked velocity using burndown and burn-up charts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                  <span>
                    <strong className="text-fg">Waterfall SDLC (ShopHere)</strong>: Conducted formal requirements elicitation, authored the complete Business Requirements Document (BRD), Functional Requirements Document (FRD), and System Requirements Specification (SRS), maintained 100% test coverage with a Requirements Traceability Matrix (RTM), and facilitated UAT through to sign-off.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* 4 Pillars Grid */}
          <Reveal delay={0.15}>
            <h2 className="text-[14px] text-muted">How I Work · 4 Core Pillars</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-line bg-surface/50 p-6">
                <FileText className="size-6 text-accent" />
                <h3 className="mt-4 font-medium text-fg text-[17px]">Requirements Engineering</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  Structured elicitation workshops, BRD, FRD, and SRS authoring with zero ambiguity, error branches, and boundary conditions clearly documented.
                </p>
              </div>

              <div className="rounded-card border border-line bg-surface/50 p-6">
                <Layers className="size-6 text-accent" />
                <h3 className="mt-4 font-medium text-fg text-[17px]">Agile Scrum Governance</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  INVEST user stories, Gherkin acceptance criteria, sprint ceremonies, MoSCoW prioritization, and strict DOR/DOD quality gates.
                </p>
              </div>

              <div className="rounded-card border border-line bg-surface/50 p-6">
                <Cpu className="size-6 text-accent" />
                <h3 className="mt-4 font-medium text-fg text-[17px]">Systems &amp; Process Modeling</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  UML 2.5 Use Case diagrams, Activity flows, Sequence interactions, BPMN 2.0 swimlane workflows, and interactive wireframes.
                </p>
              </div>

              <div className="rounded-card border border-line bg-surface/50 p-6">
                <BarChart3 className="size-6 text-accent" />
                <h3 className="mt-4 font-medium text-fg text-[17px]">Data Analysis &amp; UAT</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  SQL queries, Power BI reporting, and complete Requirements Traceability Matrix (RTM) tracking every feature directly to UAT sign-off.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Education & Certifications Timeline */}
          <Reveal delay={0.18}>
            <h2 className="text-[14px] text-muted">Education &amp; accreditations</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium text-fg">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Tools & Platform Stack */}
          <Reveal delay={0.2}>
            <h2 className="text-[14px] text-muted">Tools &amp; technologies</h2>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {tools.map((t) => (
                <div key={t.label} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr]">
                  <dt className="text-[14px] text-faint">{t.label}</dt>
                  <dd className="text-[15px] font-medium text-fg">{t.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Quantified Impact Numbers */}
          <Reveal delay={0.22} className="grid grid-cols-3 gap-6 rounded-card border border-line bg-surface/60 p-6 sm:p-8">
            {[
              ['2', 'Enterprise SDLC Systems'],
              ['40+', 'BABOK v3 Hours'],
              ['100%', 'RTM Test Traceability'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[44px] leading-none sm:text-[60px] text-fg">{value}</p>
                <p className="mt-2 text-[13.5px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>

          {/* Next Steps CTA */}
          <Reveal delay={0.25} className="rounded-card border border-fg/20 bg-fg p-8 text-bg">
            <h3 className="font-display text-[32px] sm:text-[40px]">Ready to build together?</h3>
            <p className="mt-3 text-[16px] text-bg/80 max-w-lg leading-relaxed">
              I am available for IT Business Analyst roles where I can help your product and engineering teams eliminate ambiguity and deliver measurable software.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link to="/#contact" className="inline-flex h-12 items-center gap-2 rounded-[14px] bg-bg px-6 text-[15px] font-medium text-fg transition-colors hover:bg-surface-2">
                Send an interview inquiry
                <ArrowUpRight className="size-4" />
              </Link>
              <a href={`mailto:${site.email}`} className="link-draw text-[15px] font-medium text-bg/90 hover:text-bg">
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  )
}
