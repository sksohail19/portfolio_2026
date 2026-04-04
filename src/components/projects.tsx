import { useEffect, useState } from 'react'

const GITHUB_PROFILE = 'https://github.com/sksohail19'

function formatProjectSpan(start: Date, end: Date) {
  const opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
  return `${start.toLocaleDateString('en-US', opts)} — ${end.toLocaleDateString('en-US', opts)}`
}

type ProjectDescriptionBlock = {
  shortDescription: string
  features?: string[]
}

export type Project = {
  title: string
  description: ProjectDescriptionBlock[]
  url: string
  startDate: Date
  publishDate: Date
  technologies: string[]
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    title: 'ITFT Website',
    description: [
      {
        shortDescription:
          'ITFT (Information Technology Future Technocrats) is an organization which helps the students to perform well in their areas of interest. I have developed a website for them which helps them to manage the students and the events details. ',
        features: [
          'Admin Panel to manage the students and the events details and publish results of the events and a announcement board',
          'User Panel to view the events, results of the events, announcements, team members, etc',
        ],
      },
    ],
    url: 'https://itftsac.vercel.app/',
    startDate: new Date(2025, 6, 10),
    publishDate: new Date(2025, 9, 10),
    technologies: ['React JS', 'MongoDB', 'Node JS', 'Express JS'],
    tags: ['Edu', 'Event Management', 'Admin Panel'],
  },
  {
    title: 'Ops Factory',
    description: [
      {
        shortDescription:
          'Ops Factory is a platform where you can generate operational files like Docker, Jenkins, Terraform, Ansible, etc., It works by taking inputs from the user and generating the files based on the inputs.',
        features: [
          'User can generate the files by selecting the services like Docker, Jenkins, Terraform, Ansible, etc., they want to use',
          'User can download the files and use them in their projects',
        ],
      },
    ],
    url: 'https://ops-factory.vercel.app/',
    startDate: new Date(2025, 2, 2),
    publishDate: new Date(2025, 8, 1),
    technologies: ['React JS'],
    tags: [
      'DevOps',
      'Automation',
      'File Generation',
      'Docker',
      'Jenkins',
      'Terraform',
      'Ansible',
      'Operations',
    ],
  },
  {
    title: 'Role Match',
    description: [
      {
        shortDescription:
          'Role Match is a platform where you can find the best role for you based on your skills and interests. It helps you to find the jobs (Full-time, Part-time, Freelance, etc.) based on your skills and interests. This platform will provide you the list of jobs from different sources like Naukri, Remotive, Adzuna and JSearch, etc., and you can apply for the jobs directly from the platform.',
        features: [
          'User can search for the jobs by skills, interests, location, etc.',
          'User can apply for the jobs directly from the platform',
          'User can view the details of the jobs and the companies',
          'User can view the list of jobs from different sources like Naukri, Remotive, Adzuna and JSearch, etc.',
          'User can view the details of the companies and the jobs',
        ],
      },
    ],
    url: 'https://role-match-pi.vercel.app/',
    startDate: new Date(2025, 8, 1),
    publishDate: new Date(2025, 9, 1),
    technologies: ['React JS', 'MongoDB', 'Node JS', 'Express JS'],
    tags: ['Jobs'],
  },
  {
    title: 'To Do List',
    description: [
      {
        shortDescription:
          'To Do list is a simple platform where you can list all your tasks and mark them as completed or not completed. It also helps you to delete the tasks and edit the tasks.',
        features: [
          'User can add a new task by entering the task name and description',
          'User can mark the task as completed or not completed',
          'User can delete the task',
          'User can edit the task',
        ],
      },
    ],
    url: 'https://github.com/sksohail19/to-do-app',
    startDate: new Date(2025, 7, 10),
    publishDate: new Date(2025, 7, 23),
    technologies: ['React JS'],
    tags: ['To Do List', 'Task Management', 'Todo App'],
  },
  {
    title: 'News App',
    description: [
      {
        shortDescription:
          'News App is a platform where you can get the latest news from different sources like BBC, CNN, Fox News, etc., It helps you to get the latest news from different sources and you can also search for the news by keywords.',
        features: [
          'User can search for the news by keywords',
          'User can view the details of the news',
          'User can view the list of news from different sources like BBC, CNN, Fox News, etc.',
          'User can view the details of the news and the sources',
        ],
      },
    ],
    url: '',
    startDate: new Date(2025, 2, 1),
    publishDate: new Date(2025, 1, 20),
    technologies: ['React JS', 'Node JS', 'Express JS'],
    tags: [
      'News',
      'News App',
      'News API',
      'News Search',
      'News Search by Keywords',
      'News Search by Sources',
    ],
  },
  {
    title: 'SHL: Secure Homomorphic Lightweight Cryptography Algorithm',
    description: [
      {
        shortDescription:
          'SHL: Secure Homomorphic Lightweight Cryptography Algorithm is a secure and lightweight cryptography algorithm that is used to encrypt and decrypt the data. It is a secure and lightweight cryptography algorithm that is used to encrypt and decrypt the data. It is a secure and lightweight cryptography algorithm that is used to encrypt and decrypt the data. It encrypts the data using the Key Derivative Function (KDF) and the data is encrypted using the SHA-256 algorithm. It also decrypts the data using the Key Derivative Function (KDF) and the data is decrypted using the SHA-256 algorithm.',
      },
    ],
    url: '',
    startDate: new Date(2023, 11, 21),
    publishDate: new Date(2024, 6, 1),
    technologies: ['Python'],
    tags: [
      'Cryptography',
      'Secure',
      'Lightweight',
      'Homomorphic',
      'Key Derivative Function',
      'SHA-256',
      'Encryption',
      'Decryption',
    ],
  },
]

export default function Projects() {
  const [showCaseStudy, setShowCaseStudy] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project)
    setShowCaseStudy(true)
  }

  const closeCaseStudy = () => {
    setShowCaseStudy(false)
    setSelectedProject(null)
  }

  const previewText = (text: string, maxLen: number) => {
    const trimmed = text.trim()
    return trimmed.length <= maxLen ? trimmed : `${trimmed.slice(0, maxLen)}…`
  }

  const hasLiveUrl = Boolean(selectedProject?.url?.trim())

  useEffect(() => {
    if (!showCaseStudy) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCaseStudy(false)
        setSelectedProject(null)
      }
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [showCaseStudy])

  return (
    <>
      <section
        id="projects"
        className="font-sora scroll-mt-24 border-t border-secondary-subtle/40 bg-surface-base px-4 py-12 sm:px-8 sm:py-16 lg:px-[6%] lg:py-24"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <header className="max-w-2xl space-y-3">
              <h2
                id="projects-heading"
                className="text-balance text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
              >
                Selected works
              </h2>
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                A collection of systems built with precision and passion.
              </p>
            </header>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-surface-variant bg-surface-lowest px-5 py-3 text-sm font-semibold text-primary-dark shadow-[0_12px_32px_-18px_rgba(45,52,51,0.2)] transition hover:border-primary-main/30 hover:bg-primary-container/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main sm:self-start"
            >
              Browse GitHub
            </a>
          </div>

          <ul className="grid list-none gap-5 p-0 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <li
                key={project.title}
                className="flex flex-col gap-4 rounded-2xl border border-surface-variant bg-surface-lowest p-5 shadow-[0_12px_32px_-18px_rgba(45,52,51,0.2)] transition hover:shadow-[0_18px_40px_-16px_rgba(45,52,51,0.22)]"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                    {previewText(project.description[0].shortDescription, 140)}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wider text-secondary-main">
                    {formatProjectSpan(project.startDate, project.publishDate)}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="inline-block rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-primary-dark sm:text-sm">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => openCaseStudy(project)}
                    className="inline-flex rounded-lg bg-primary-main px-4 py-2.5 text-sm font-semibold text-text-inverse shadow-[0_14px_36px_-16px_rgba(68,102,87,0.55)] transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main"
                  >
                    Case study
                  </button>
                  {project.url.trim() ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary-main underline-offset-4 transition hover:text-primary-dark hover:underline"
                    >
                      View project
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showCaseStudy && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-text-primary/45 px-4 py-8 backdrop-blur-[2px] sm:px-6 sm:py-12"
          role="presentation"
          onClick={closeCaseStudy}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="relative max-h-[min(90dvh,40rem)] w-full max-w-2xl cursor-default overflow-y-auto rounded-2xl border border-surface-variant bg-surface-lowest p-6 shadow-[0_28px_64px_-24px_rgba(45,52,51,0.45)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="space-y-3 border-b border-surface-variant pb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary-main">
                Case study
              </p>
              <h2
                id="case-study-title"
                className="text-balance text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
              >
                {selectedProject.title}
              </h2>
              <p className="text-xs font-medium uppercase tracking-wider text-secondary-main">
                {formatProjectSpan(selectedProject.startDate, selectedProject.publishDate)}
              </p>
            </header>

            <div className="flex flex-col gap-6 pt-6">
              <p className="text-base leading-relaxed text-text-secondary">
                {selectedProject.description[0].shortDescription}
              </p>

              {selectedProject.description[0].features &&
                selectedProject.description[0].features.length > 0 && (
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-primary">
                      Highlights
                    </h3>
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {selectedProject.description[0].features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-primary">
                  Stack
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="inline-block rounded-full bg-gray-200 px-3 py-1.5 text-sm font-medium text-primary-dark">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-primary">
                  Tags
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block rounded-full border border-surface-variant bg-surface-container/80 px-3 py-1.5 text-sm font-medium text-primary-dark">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-surface-variant pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeCaseStudy}
                  className="inline-flex justify-center rounded-lg border border-surface-variant bg-surface-lowest px-5 py-2.5 text-sm font-semibold text-primary-dark transition hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main sm:min-w-[7rem]"
                >
                  Close
                </button>
                <button
                  type="button"
                  disabled={!hasLiveUrl}
                  onClick={() => {
                    if (hasLiveUrl)
                      window.open(selectedProject.url, '_blank', 'noopener,noreferrer')
                  }}
                  className="inline-flex justify-center rounded-lg bg-primary-main px-5 py-2.5 text-sm font-semibold text-text-inverse shadow-[0_14px_36px_-16px_rgba(68,102,87,0.55)] transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main enabled:cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary-subtle disabled:text-text-secondary disabled:shadow-none sm:min-w-[10rem]"
                >
                  {hasLiveUrl ? 'Visit project' : 'No public URL'}
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  )
}
