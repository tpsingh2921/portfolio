import {
  AxureLogo,
  BalsamiqLogo,
  ConfluenceLogo,
  DrawIoLogo,
  FigmaLogo,
  JiraLogo,
  PostgresLogo,
  RestApiLogo,
  SqlLogo,
  VisioLogo,
} from './BrandLogos'

export function HeroSkills() {
  return (
    <div className="flex flex-col gap-3 sm:gap-3.5">
      {/* 1. Prototyping & Wireframing (Full width top card) */}
      <div className="group rounded-[20px] border border-white/80 bg-gradient-to-r from-white/85 via-white/75 to-rose-50/45 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-md transition-all hover:border-white hover:shadow-[0_12px_36px_rgb(0,0,0,0.06)] sm:rounded-[22px] sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-800 sm:text-[11.5px]">
              PROTOTYPING &amp; WIREFRAMING
            </span>
          </div>
          <span className="rounded-full border border-rose-200/80 bg-rose-100/70 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-rose-600 sm:text-[10px]">
            WIREFRAMING
          </span>
        </div>
        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
            <FigmaLogo className="size-3.5 shrink-0" />
            <span>Figma</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
            <AxureLogo className="size-3.5 shrink-0" />
            <span>Axure</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
            <BalsamiqLogo className="size-3.5 shrink-0" />
            <span>Balsamiq</span>
          </div>
        </div>
      </div>

      {/* Grid: 2 columns on tablet/desktop, 1 column on phone */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
        {/* 2. Modelling Tools */}
        <div className="group rounded-[20px] border border-white/80 bg-gradient-to-br from-white/85 via-white/75 to-amber-50/35 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-md transition-all hover:border-white hover:shadow-[0_12px_36px_rgb(0,0,0,0.06)] sm:rounded-[22px] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.7)]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-800 sm:text-[11.5px]">
                MODELLING TOOLS
              </span>
            </div>
            <span className="rounded-full border border-amber-200/80 bg-amber-100/70 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-amber-700 sm:text-[10px]">
              SYSTEMS
            </span>
          </div>
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
              <DrawIoLogo className="size-3.5 shrink-0" />
              <span>Draw.io</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
              <VisioLogo className="size-3.5 shrink-0" />
              <span>MS Visio</span>
            </div>
          </div>
        </div>

        {/* 3. Database */}
        <div className="group rounded-[20px] border border-white/80 bg-gradient-to-br from-white/85 via-white/75 to-emerald-50/35 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-md transition-all hover:border-white hover:shadow-[0_12px_36px_rgb(0,0,0,0.06)] sm:rounded-[22px] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-800 sm:text-[11.5px]">
                DATABASE
              </span>
            </div>
            <span className="rounded-full border border-emerald-200/80 bg-emerald-100/70 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-emerald-700 sm:text-[10px]">
              DATA
            </span>
          </div>
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
              <SqlLogo className="size-3.5 shrink-0" />
              <span>SQL</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
              <PostgresLogo className="size-3.5 shrink-0" />
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* 4. Project Management */}
        <div className="group rounded-[20px] border border-white/80 bg-gradient-to-br from-white/85 via-white/75 to-blue-50/35 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-md transition-all hover:border-white hover:shadow-[0_12px_36px_rgb(0,0,0,0.06)] sm:rounded-[22px] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-800 sm:text-[11.5px]">
                PROJECT MANAGEMENT
              </span>
            </div>
            <span className="rounded-full border border-blue-200/80 bg-blue-100/70 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-blue-700 sm:text-[10px]">
              AGILE
            </span>
          </div>
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
              <JiraLogo className="size-3.5 shrink-0" />
              <span>JIRA</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
              <ConfluenceLogo className="size-3.5 shrink-0" />
              <span>Confluence</span>
            </div>
          </div>
        </div>

        {/* 5. Integration & Architecture */}
        <div className="group rounded-[20px] border border-white/80 bg-gradient-to-br from-white/85 via-white/75 to-purple-50/35 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-md transition-all hover:border-white hover:shadow-[0_12px_36px_rgb(0,0,0,0.06)] sm:rounded-[22px] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-800 sm:text-[11.5px]">
                INTEGRATION &amp; ARCHITECTURE
              </span>
            </div>
            <span className="rounded-full border border-purple-200/80 bg-purple-100/70 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-purple-700 sm:text-[10px]">
              API
            </span>
          </div>
          <div className="mt-3.5 flex flex-col gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[12.5px] font-medium text-neutral-800 shadow-xs transition-transform hover:-translate-y-0.5 sm:text-[13px]">
                <RestApiLogo className="size-3.5 shrink-0" />
                <span>REST APIs</span>
              </div>
            </div>
            <p className="text-[12px] font-medium text-purple-900/80 sm:text-[12.5px]">
              Microservices &amp; Webhooks
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
