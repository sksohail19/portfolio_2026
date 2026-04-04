import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSectionId } from '@/utils/scrollToSection'

export type NavLinkItem = {
  label: string
  sectionId: string
}

type NavbarProps = {
  title: string
  links: NavLinkItem[]
  cta: NavLinkItem
}

export default function Navbar(props: NavbarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const menuId = useId()
  const [menuOpen, setMenuOpen] = useState(false)

  const goToSection = (sectionId: string) => {
    setMenuOpen(false)
    const hash = `#${sectionId}`
    if (location.pathname === '/' && location.hash === hash) {
      scrollToSectionId(sectionId)
      return
    }
    navigate({ pathname: '/', hash }, { replace: true })
  }

  const onNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    goToSection(sectionId)
  }

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const linkClass =
    'relative inline-block py-2 text-base font-medium text-text-primary transition-all duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-semantic-green after:transition-all after:duration-300 hover:-translate-y-0.5 hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-variant/70 bg-surface-base/90 backdrop-blur-md supports-[backdrop-filter]:bg-surface-base/80">
      <nav
        className="font-sora mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="min-w-0 shrink text-left text-xl font-bold tracking-tight text-text-primary transition hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main sm:text-2xl lg:text-3xl"
          onClick={(e) => {
            e.preventDefault()
            setMenuOpen(false)
            if (location.pathname === '/' && location.hash === '#home') {
              scrollToSectionId('home')
            } else {
              navigate({ pathname: '/', hash: '#home' }, { replace: true })
            }
          }}
        >
          <span className="block truncate">{props.title}</span>
        </Link>

        <ul className="hidden list-none items-center gap-6 p-0 lg:flex xl:gap-8">
          {props.links.map((link) => (
            <li key={link.sectionId}>
              <a
                href={`#${link.sectionId}`}
                className={linkClass}
                onClick={(e) => onNavClick(e, link.sectionId)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`#${props.cta.sectionId}`}
            className="hidden rounded-lg bg-primary-main px-3 py-2 text-sm font-semibold text-text-inverse transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main sm:inline-flex sm:px-4 sm:py-2.5 sm:text-base"
            onClick={(e) => onNavClick(e, props.cta.sectionId)}
          >
            {props.cta.label}
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-surface-variant bg-surface-lowest text-text-primary transition hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-full origin-center rounded-full bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition ${menuOpen ? 'scale-0 opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-full origin-center rounded-full bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {typeof document !== 'undefined' &&
        createPortal(
          <div
            id={menuId}
            className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-[100] overflow-y-auto border-b border-surface-variant bg-surface-base shadow-[0_12px_40px_-12px_rgba(45,52,51,0.25)] transition-[opacity,visibility,transform] duration-200 ease-out lg:hidden ${
              menuOpen
                ? 'visible translate-y-0 opacity-100'
                : 'invisible pointer-events-none -translate-y-1 opacity-0'
            }`}
            aria-hidden={!menuOpen}
          >
            <ul className="m-0 flex list-none flex-col gap-1 p-4 pb-8 sm:p-6 sm:pb-10">
              {props.links.map((link) => (
                <li key={link.sectionId}>
                  <a
                    href={`#${link.sectionId}`}
                    className={`${linkClass} block rounded-lg px-3 py-3 text-lg`}
                    onClick={(e) => onNavClick(e, link.sectionId)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`#${props.cta.sectionId}`}
                  className="block rounded-lg bg-primary-main px-4 py-3 text-center text-base font-semibold text-text-inverse transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main"
                  onClick={(e) => onNavClick(e, props.cta.sectionId)}
                >
                  {props.cta.label}
                </a>
              </li>
            </ul>
          </div>,
          document.body,
        )}
    </header>
  )
}
