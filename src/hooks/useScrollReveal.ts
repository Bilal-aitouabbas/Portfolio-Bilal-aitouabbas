import { useEffect, useRef } from 'react'

/**
 * Adds the `.in` class to every `.sr` child of `containerRef` when it enters
 * the viewport. Elements animate in via CSS transitions defined in index.css.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const els = root.querySelectorAll<HTMLElement>('.sr')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return containerRef
}
