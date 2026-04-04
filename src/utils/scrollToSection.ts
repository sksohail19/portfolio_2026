/** Scroll to an element by id; respects reduced-motion preference. */
export function scrollToSectionId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}
