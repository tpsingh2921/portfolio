import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { certifications, projects, services, site } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'
import { WorkCard } from '../components/WorkCard'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <HeroField />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
          <h1 className="font-display text-[clamp(64px,13.5vw,210px)]">
            {site.name.split(' ').map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} className="mt-10 border-t border-fg/15 pt-6">
            <p className="max-w-md text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]">{site.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line py-5" aria-hidden>
        <ul className="font-display flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[28px] text-fg/70 sm:text-[36px]">
          {[...site.marquee, ...site.marquee].map((item, i) => (
            <li key={i} className="flex items-center gap-10">
              {item}
              <span className="round size-2 rounded-full bg-accent" />
            </li>
          ))}
        </ul>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="flex items-end justify-between">
          <Lines as="h2" className="font-display text-[44px] sm:text-[64px]" lines={['Selected projects']} />
          <Reveal className="hidden text-[14px] text-muted sm:block">
            {projects.length} business analysis projects, 2026
          </Reveal>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <Reveal>
            <Parallax
              src={site.photo}
              alt={site.name}
              className="aspect-[3/4] max-w-[460px] rounded-image"
              frameClassName="portrait-backdrop"
              strength={3}
              zoom={1.06}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            {/* Academic & Certification Badges */}
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
          </Reveal>

          <div className="flex flex-col justify-center">
            <Lines
              as="h2"
              className="font-display text-balance text-[40px] sm:text-[56px] lg:text-[64px]"
              lines={['From business need', 'to buildable software']}
            />
            <Reveal delay={0.2} className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted">
              <p>
                I am an IT Business Analyst with an <strong>MBA in Business Analytics</strong> and a <strong>B.Sc. in Computer Science</strong>. I operate at the intersection of business strategy and engineering execution—turning loose stakeholder requirements into structured specifications, testable user stories, and complete traceability.
              </p>
              <p className="mt-4">
                Because I came in from computer science, I understand relational data structures, API contracts, and architectural trade-offs. I can sit with department leaders in the morning to unpack their operational pain points, and collaborate with software engineers in the afternoon without losing context or intent.
              </p>
              <p className="mt-4">
                Across both Agile Scrum and Waterfall lifecycles, I care about the unglamorous parts that keep projects on schedule: a specification with a single interpretation, a matrix tying every need to a test script, and a backlog the delivery team trusts.
              </p>
            </Reveal>

            {/* Core BA Pillars Preview */}
            <Reveal delay={0.25} className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-line bg-surface/60 p-5">
                <p className="text-[15px] font-medium text-fg">Zero Ambiguity in Scope</p>
                <p className="mt-1 text-[13.5px] leading-normal text-muted">
                  Formal BRDs, FRDs, and SRS documents with functional rules and failure branches mapped out to prevent rework.
                </p>
              </div>
              <div className="rounded-card border border-line bg-surface/60 p-5">
                <p className="text-[15px] font-medium text-fg">Full RTM Traceability</p>
                <p className="mt-1 text-[13.5px] leading-normal text-muted">
                  Every business requirement linked directly to functional specifications and verified UAT test cases.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 flex items-center gap-6">
              <Link to="/about" className="link-draw inline-flex items-center gap-1.5 text-[15px] font-medium">
                Detailed background, education &amp; methodology
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Lines as="h2" className="font-display text-[40px] sm:text-[56px]" lines={['Core competencies']} />
            <Reveal delay={0.1} className="mt-4 max-w-xs text-[15px] text-muted">
              Requirements, backlogs and the documents that keep a project honest.
            </Reveal>
          </div>
          <Services />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="flex items-end justify-between">
          <Lines as="h2" className="font-display text-[40px] sm:text-[56px]" lines={['Certifications']} />
          <Reveal className="hidden text-[14px] text-muted sm:block">Endorsed education &amp; agile credentials</Reveal>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className="group flex flex-col justify-between rounded-card border border-line bg-surface/50 p-6 sm:p-8 transition-colors hover:border-fg/30">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-image bg-surface-2">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display mt-6 text-[26px] sm:text-[30px]">{c.title}</h3>
                <p className="mt-2 text-[14px] text-muted">{c.issuer}</p>
              </div>
              <p className="mt-6 text-[13px] text-faint">{c.issued}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

function Services() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <ul className="divide-y divide-line border-y border-line">
      {services.map((s, i) => {
        const isOpen = open === i
        return (
          <li key={s.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-7 text-left transition-colors hover:text-accent"
              aria-expanded={isOpen}
            >
              <span className="font-display text-[26px] sm:text-[36px]">{s.title}</span>
              <span className={cx('round flex size-10 items-center justify-center rounded-full border border-line transition-transform duration-300', isOpen && 'rotate-45')}>
                <Plus className="size-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }}>
                  <div className="pb-8 pr-12 text-[16px] leading-relaxed text-muted">
                    <p>{s.body}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

function HeroField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -left-[20%] -top-[25%] size-[75vw] max-w-[1000px] rounded-full bg-[#f8d4bb] opacity-70 blur-[110px] animate-drift-a" />
      <div className="absolute -right-[15%] top-[10%] size-[65vw] max-w-[900px] rounded-full bg-[#c7d7f7] opacity-80 blur-[120px] animate-drift-b" />
      <div className="absolute bottom-[-20%] left-[20%] size-[70vw] max-w-[950px] rounded-full bg-[#ecd5ea] opacity-60 blur-[130px] animate-drift-c" />
      <div className="grain absolute inset-0" />
    </div>
  )
}
