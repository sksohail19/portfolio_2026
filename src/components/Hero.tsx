import heroImage from '@/assets/image.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSectionId } from '@/utils/scrollToSection'

export default function Hero() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <section
      id="home"
      className="font-sora relative isolate max-h-[min(100dvh,56rem)] min-h-[min(100dvh,56rem)] scroll-mt-24 px-4 py-12 sm:px-8 sm:py-16 lg:px-[6%] lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        aria-hidden
        style={{
          background:
            'linear-gradient(135deg, #446657 0%, #C5EBD8 45%, transparent 70%)',
        }}
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:gap-20 lg:flex-row lg:items-center">
        <article className="w-full max-w-xl shrink-0 space-y-6 text-center lg:max-w-none lg:flex-1 lg:space-y-8 lg:text-left">
          <p className="mx-auto inline-flex rounded-full bg-primary-container px-4 py-2 font-medium text-primary-dark tracking-wide text-lg lg:mx-0">
            Available for opportunities
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[2.85rem] xl:text-[3.5rem] xl:leading-[1.06]">
            Architecting Seamless{' '}
            <span className="text-primary-main">Digital Experiences</span>.
          </h1>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg lg:mx-0 lg:max-w-xl">
            Full-stack developer and DevOps enthusiast crafting robust, scalable
            solutions with intentional design and technical clarity.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <button
              type="button"
              className="rounded-lg bg-primary-main px-7 py-3  font-semibold text-text-inverse shadow-[0_18px_40px_-14px_rgba(68,102,87,0.55)] transition hover:bg-primary-dark hover:shadow-[0_22px_44px_-12px_rgba(36,70,56,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main"
              onClick={() => {
                if (location.pathname === '/' && location.hash === '#projects') {
                  scrollToSectionId('projects')
                } else {
                  navigate({ pathname: '/', hash: '#projects' }, { replace: true })
                }
              }}
            >
              View projects
            </button>
            <button
              type="button"
              className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main transition hover:bg-primary-container/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main"
            >
              Download resume
            </button>
          </div>
        </article>
        <aside className="relative w-full max-w-md shrink-0 lg:max-w-none lg:flex-1 lg:pl-4">
          <div className="relative mx-auto aspect-[4/5] max-h-[min(72vh,36rem)] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-20px_rgba(45,52,51,0.35)] sm:max-w-md lg:mx-0 lg:ml-auto lg:max-h-[min(78vh,40rem)] lg:max-w-lg">
            <img
              src={heroImage}
              alt="Sohail Shaik"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </aside>
      </div>
    </section>
  )
}
