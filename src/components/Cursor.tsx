import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      rafId = requestAnimationFrame(tick)
    }

    const onEnter = () => ring.classList.add('hov')
    const onLeave = () => ring.classList.remove('hov')

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,[data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafId = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cur-dot" ref={dotRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  )
}
