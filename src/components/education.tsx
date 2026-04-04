type Education = {
  title: string
  department: string
  university: string
  board: string
  startDate: Date
  endDate: Date
  technologies: string[]
  tags: string[]
}

function formatEducationSpan(start: Date, end: Date) {
  const opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
  return `${start.toLocaleDateString('en-US', opts)} — ${end.toLocaleDateString('en-US', opts)}`
}

const EDUCATION: Education[] = [
  {
    title: 'Bachelor of Technology',
    department: 'Information Technology',
    university: 'Kallam Haranadhareddy University of Technology, Guntur',
    board: 'Jawaharlal Nehru Technological University Kakinada',
    startDate: new Date(2020, 12, 23),
    endDate: new Date(2024, 6, 10),
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'Express',
      'MongoDB',
      'MySQL',
      'Python',
      'Java',
      'C',
      'Cryptography',
    ],
    tags: ['IT', 'B.Tech', 'Campus Ambassador', 'ITFT', 'Event Management'],
  },
  {
    title: 'Intermediate (+2)',
    department: 'Mathematics, Physics, Chemistry',
    university: 'NRI Junior College, Tenali',
    board: 'Board of Intermediate Education, Andhra Pradesh',
    startDate: new Date(2018, 6, 10),
    endDate: new Date(2020, 6, 10),
    technologies: ['Mathematics', 'Physics', 'Chemistry'],
    tags: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    title: 'Secondary School of Education (SSC)',
    department: 'General',
    university: 'Sri Chaitanya Techno School, Tenali',
    board: 'Board of Secondary Education, Andhra Pradesh',
    startDate: new Date(2016, 6, 10),
    endDate: new Date(2018, 6, 10),
    technologies: ['Science', 'Social Studies', 'English'],
    tags: ['Science', 'Social Studies', 'English'],
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="font-sora scroll-mt-24 border-t border-secondary-subtle/40 bg-surface-base px-4 py-12 sm:px-8 sm:py-16 lg:px-[6%] lg:py-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-dark">
            Learning
          </p>
          <h2
            id="education-heading"
            className="text-balance text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
          >
            Education
          </h2>
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            Formal training, institutions, and the threads that built a technical foundation.
          </p>
        </header>

        <div className="relative">
          <span
            className="pointer-events-none absolute left-[0.4rem] top-3 bottom-24 hidden w-px bg-gradient-to-b from-primary-main/45 via-surface-variant to-transparent sm:left-[0.45rem] sm:block"
            aria-hidden
          />

          <ol className="relative m-0 list-none space-y-8 p-0 sm:space-y-10">
            {EDUCATION.map((education, index) => (
              <li key={`${education.title}-${index}`} className="relative sm:pl-12">
                <span
                  className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-primary-main bg-surface-lowest ring-4 ring-surface-base sm:block"
                  aria-hidden
                />

                <article className="rounded-2xl border border-surface-variant bg-surface-lowest p-5 shadow-[0_12px_32px_-18px_rgba(45,52,51,0.2)] transition hover:shadow-[0_18px_40px_-16px_rgba(45,52,51,0.22)] sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1 space-y-2">
                      <h3 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl">
                        {education.title}
                      </h3>
                      <p className="text-sm font-medium text-primary-dark sm:text-base">
                        {education.department}
                      </p>
                      <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                        {education.university}
                      </p>
                      <p className="text-xs leading-relaxed text-secondary-main sm:text-sm">
                        {education.board}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-xl border border-surface-variant bg-surface-container/60 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wider text-secondary-deep sm:text-left sm:text-sm">
                      {formatEducationSpan(education.startDate, education.endDate)}
                    </p>
                  </div>

                  <div className="mt-5 space-y-4 border-t border-surface-variant pt-5">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-primary">
                        Coursework &amp; tools
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {education.technologies.map((technology) => (
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
                        Highlights
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {education.tags.map((tag) => (
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
