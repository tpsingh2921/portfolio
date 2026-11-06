import { ArrowUpRight } from 'lucide-react'

import { certifications, experience, site, tools } from '../../data/site'
import { EmailLogo, LinkedInLogo } from '../components/BrandLogos'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Business analyst,', 'engineer by training']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
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
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link-draw inline-flex items-center gap-2 text-muted transition-colors hover:text-fg">
                  {s.label === 'LinkedIn' ? <LinkedInLogo className="size-4 shrink-0" /> : <EmailLogo className="size-4 shrink-0" />}
                  <span>{s.label}</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I am an entry-level business analyst with an MBA in Business Analytics and a BSc in Computer Science, and I like the part of a project where the ambiguity gets written down and disappears.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              I came in from the technical side, which makes me careful about what I ask a team to build. Across two upskilling projects I have written BRDs, FRDs and SRS documents, drawn UML diagrams and wireframes, maintained an RTM, run backlog refinement in JIRA and supported UAT through to sign-off.
            </p>
            <p>
              I have worked in both Agile Scrum and Waterfall, so I know what a sprint backlog owes a delivery team and what a Waterfall phase owes its sign-off. I am looking for an entry-level business analyst role on an IT or CRM team, in {site.location} or remote.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Education &amp; certifications</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.18} className="mt-16">
            <h2 className="text-[14px] text-muted">Tools</h2>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {tools.map((t) => (
                <div key={t.label} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr]">
                  <dt className="text-[14px] text-faint">{t.label}</dt>
                  <dd className="text-[15px]">{t.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 grid grid-cols-3 gap-6">
            {[
              ['2', 'end-to-end projects'],
              ['9', 'core competencies'],
              [String(certifications.length), 'certifications'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{value}</p>
                <p className="mt-2 text-[14px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
