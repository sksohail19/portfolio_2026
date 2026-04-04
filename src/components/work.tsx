import getExperienceText from '@/utils/getExpDate'

export type Work = {
  designation: string
  company: string
  description: string
  startDate: Date
  endDate: Date
  technologies: string[]
  tags: string[]
}

function formatWorkSpan(start: Date, end: Date) {
  const opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
  const startStr = start.toLocaleDateString('en-US', opts)
  const now = new Date()
  const isOngoing =
    end.getFullYear() === now.getFullYear() &&
    end.getMonth() === now.getMonth() &&
    end.getDate() === now.getDate()
  const endStr = isOngoing ? 'Present' : end.toLocaleDateString('en-US', opts)
  return `${startStr} — ${endStr}`
}

const WORK: Work[] = [
  {
    designation: 'Associate Software Engineer',
    company: 'Agivant Technologies',
    description:
      'I was a part of the Agivant Technologies team where I was responsible for the development of the website for there client. I have used React JS, Tailwind CSS, Node JS, & Express JS  for the creation of there website. ',
    startDate: new Date(2025, 8, 25),
    endDate: new Date(),
    technologies: ['React JS', 'Node JS', 'Express JS', 'Tailwind CSS'],
    tags: [
      'Full Stack Development',
      'Backend Development',
      'Frontend Development',
      'Database',
    ],
  },
]

export default function Work() {
  return (
    <section
      id="experience"
      className="font-sora scroll-mt-24 border-t border-secondary-subtle/40 bg-surface-base px-4 py-12 sm:px-8 sm:py-16 lg:px-[6%] lg:py-24"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-dark">
            Career
          </p>
          <h2
            id="work-heading"
            className="text-balance text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
          >
            Work experience
          </h2>
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            Roles, responsibilities, and the stack used to ship real client work.
          </p>
        </header>

        <div className="relative">
          <span
            className="pointer-events-none absolute left-[0.4rem] top-3 bottom-24 hidden w-px bg-gradient-to-b from-primary-main/45 via-surface-variant to-transparent sm:left-[0.45rem] sm:block"
            aria-hidden
          />

          <ol className="relative m-0 list-none space-y-8 p-0 sm:space-y-10">
            {WORK.map((work) => (
              <li
                key={`${work.company}-${work.designation}`}
                className="relative sm:pl-12"
              >
                <span
                  className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-primary-main bg-surface-lowest ring-4 ring-surface-base sm:block"
                  aria-hidden
                />

                <article className="rounded-2xl border border-surface-variant bg-surface-lowest p-5 shadow-[0_12px_32px_-18px_rgba(45,52,51,0.2)] transition hover:shadow-[0_18px_40px_-16px_rgba(45,52,51,0.22)] sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1 space-y-2">
                      <h3 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl">
                        {work.designation}
                      </h3>
                      <p className="text-sm font-medium text-primary-dark sm:text-base">
                        {work.company}
                      </p>
                      <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                        {work.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                      <p className="rounded-xl border border-surface-variant bg-surface-container/60 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wider text-secondary-deep sm:text-right sm:text-sm">
                        {formatWorkSpan(work.startDate, work.endDate)}
                      </p>
                      <p className="text-center text-xs font-medium text-secondary-main sm:text-right sm:text-sm">
                        {getExperienceText(work.startDate, work.endDate)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4 border-t border-surface-variant pt-5">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-primary">
                        Stack
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {work.technologies.map((technology) => (
                          <li key={technology}>
                            <span className="inline-block rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-primary-dark sm:text-sm">
                              {technology}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-primary">
                        Focus areas
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <li key={tag}>
                            <span className="inline-block rounded-full border border-primary-main/25 bg-primary-container/50 px-3 py-1.5 text-xs font-medium text-primary-dark sm:text-sm">
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
