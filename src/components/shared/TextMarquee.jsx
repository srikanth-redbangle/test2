import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const TextMarquee = ({ children, duration, direction }) => {
  const ref = useRef()

  useEffect(() => {
    const parts = ref.current?.querySelectorAll('.marquee__part')

    if (!parts || !gsap) return

    const timeline = gsap.to(parts, {
      xPercent: -100,
      duration,
      repeat: -1,
      ease: 'none',
    })

    gsap.to(timeline, { timeScale: direction })

    return () => {
      timeline.kill() // Cleanup the animation on unmounting
    }
  }, [direction])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const spans = entry.target.querySelectorAll('.marquee-text')
          spans.forEach((span) => {
            const spanObserver = new IntersectionObserver(
              (spanEntries) => {
                spanEntries.forEach((spanEntry) => {
                  if (spanEntry.isIntersecting) {
                    span.classList.add('text-red')
                  } else {
                    span.classList.remove('text-red')
                  }
                })
              },
              {
                threshold: 1,
                root: document.querySelector('.heroMarquee'),
              }
            )

            spanObserver.observe(span)
          })
          // }
        })
      },
      {
        threshold: 1,
        // root: document.querySelector('.heroMarquee'),
        // rootMargin: '0% 50%',
      }
    )

    const parts = document.querySelectorAll('.marquee__part')

    parts.forEach((part) => {
      observer.observe(part)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="flex origin-left">
      <div className="marquee__inner flex" ref={ref}>
        <div className="flex flex-shrink-0 relative whitespace-nowrap marquee__part">
          {children}
        </div>
        <div className="flex flex-shrink-0 relative whitespace-nowrap marquee__part">
          {children}
        </div>
      </div>
    </div>
  )
}
