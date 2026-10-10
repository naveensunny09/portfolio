// Eased scroll that behaves the same in every browser (native smooth scrolling varies)
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export const smoothScrollTo = (target, duration = 900) => {
  let top = 0
  if (target) {
    // Respect scroll-margin-top so sections land below the sticky navbar
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
    top = target.getBoundingClientRect().top + window.scrollY - margin
  }

  const start = window.scrollY
  const distance = top - start
  if (Math.abs(distance) < 1) return

  // Longer trips get a little more time, capped so it never drags
  const time = Math.min(duration + Math.abs(distance) / 10, 1600)
  let startTime = null

  const step = (now) => {
    if (startTime === null) startTime = now
    const progress = Math.min((now - startTime) / time, 1)
    window.scrollTo(0, start + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
