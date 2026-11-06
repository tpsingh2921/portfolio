import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { certifications, projects, services, site } from '../../data/site'
import { HeroSkills } from '../components/HeroSkills'
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
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-10 xl:grid-cols-[1.15fr_1fr] xl:gap-14">
            <div>
              <h1 className="font-display text-[clamp(56px,8.8vw,142px)] leading-[0.88] tracking-tight">
                {site.name.split(' ').map((word, i) => (
                  <span key={word} className="block overflow-hidden pb-[0.05em] -mb-[0.05em]">
                    <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}>
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} className="mt-8 border-t border-fg/15 pt-6 sm:mt-10">
                <p className="max-w-xl text-pretty text-[15.5px] leading-relaxed text-muted sm:text-[17px]">{site.intro}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.45, ease }}
              className="w-full lg:pb-2"
            >
              <HeroSkills />
            </motion.div>
          </div>
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

      {/* About teaser */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
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
          </Reveal>
          <div className="flex flex-col justify-center">
            <Lines
              as="h2"
              className="font-display text-balance text-[40px] sm:text-[56px] lg:text-[64px]"
              lines={['From business need', 'to buildable story']}
            />
            <Reveal delay={0.2} className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted">
              <p>
                I came to business analysis from the technical side: a BSc in Computer Science and an MBA in Business Analytics. That means I can sit with stakeholders in the morning and the delivery team in the afternoon without losing the thread.
              </p>
              <p className="mt-4">
                I care about the unglamorous parts: a requirement with a single reading, a matrix that shows where it was tested, and a backlog the team trusts. I am based in {site.location}, India.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8">
              <Link to="/about" className="link-draw inline-flex items-center gap-1.5 text-[15px] font-medium">
                More about me
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
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <Certifications />
      </section>
    </>
  )
}

// Slow colour fields behind the hero: the accent, a coral and a warm peach,
// blurred and drifting, fading into the paper before the intro line. The
// grain keeps it from reading as a flat gradient.
function HeroField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_96%)]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, ease }} className="absolute inset-0">
        <div className="round absolute -top-[25%] right-[-12%] h-[95%] w-[70%] animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.72),transparent)] blur-3xl" />
        <div className="round absolute -top-[10%] left-[-12%] h-[80%] w-[62%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(255_106_61/0.62),transparent)] blur-3xl" />
        <div className="round absolute top-[22%] left-[32%] h-[70%] w-[56%] animate-drift-c rounded-full bg-[radial-gradient(closest-side,rgb(255_196_120/0.7),transparent)] blur-3xl" />
        <div className="round absolute top-[45%] right-[12%] h-[50%] w-[40%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(196_170_255/0.55),transparent)] blur-3xl" />
      </motion.div>
      <div className="grain absolute inset-0" />
    </div>
  )
}

function Services() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="border-t border-line">
      {services.map((s, i) => {
        const isOpen = open === i
        return (
          <li key={s.title} className="border-b border-line">
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)} className="group flex w-full items-center gap-6 py-7 text-left">
              <span className="w-10 shrink-0 text-[14px] tabular-nums text-faint">0{i + 1}</span>
              <span className={cx('font-display flex-1 text-[32px] transition-colors sm:text-[44px]', isOpen ? 'text-fg' : 'text-fg/60 group-hover:text-fg')}>{s.title}</span>
              <span className={cx('grid size-10 shrink-0 place-items-center rounded-[12px] border border-line-strong transition-colors duration-300', isOpen && 'border-fg bg-fg text-bg')}>
                <Plus className={cx('size-4 transition-transform duration-500', isOpen && 'rotate-45')} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} className="overflow-hidden">
                  <p className="max-w-xl pb-8 pl-16 text-pretty text-[16px] leading-relaxed text-muted">{s.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

function Certifications() {
  return (
    <div className="rounded-[32px] bg-fg px-6 py-14 text-bg sm:px-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-[14px] text-bg/60">Certifications &amp; professional development</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {certifications.map((c) => (
            <a
              key={c.title}
              href={c.image}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[20px] border border-bg/15 p-3 transition-colors duration-300 hover:border-bg/45"
            >
              <div className="overflow-hidden rounded-[14px] bg-white">
                <img
                  src={c.image}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.parentElement?.remove()
                  }}
                  className="aspect-[7/5] w-full bg-white object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <p className="font-display text-balance text-[22px] leading-[1.2]">{c.title}</p>
                <p className="mt-2 text-[13.5px] text-bg/60">{c.issuer}</p>
                <p className="text-[13.5px] text-bg/40">{c.issued}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
