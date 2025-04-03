import { useEffect, useRef, useState } from 'react'
import { LineArrow } from '@/components/icons'
import { aboutSchema } from '@/components/schema/about-schema'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {
  ArticleSection,
  LineHeading,
  Marquee,
  RedbangleWaySection,
  Testimonials,
  TrustedBrandsSection,
  WorkListHeroSection,
  testimonialsDefault,
  VideoModal,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import { aboutServices, redbanglewayCreate } from '@/content/services'
import styles from '@/styles/home.module.scss'

const About = () => {
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const containerRef = useRef()

  const heroSection = useRef()
  const insetRef = useRef()

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(max-width:768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '50% 40%',
          end: '80% 20%',
          trigger: heroSection.current,

          // markers: true,
        },
      })
      const getY = () => {
        const mEl = 72 + 50 + 72
        const titleElm = containerMbRef.current.getBoundingClientRect().height

        const y = mEl + titleElm
        return y
      }
      tl.fromTo(
        '.content-showreel',
        { opacity: 1, y: 0, duration: 0.05 },
        { opacity: 0, y: () => getY() },
        0
      ).fromTo('.play-circle, .play-icon', { opacity: 0.5 }, { opacity: 1 })

      return () => {
        tl.kill()
      }
    })
    mm.add('(min-width:768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '35% 40%',
          end: '60% 32%',
          trigger: heroSection.current,
          // markers: true,
        },
      })

      const getY = () => {
        const mEl = document
          .querySelector(`.heroMarquee`)
          .getBoundingClientRect().height
        //   +
        // 32 + //padding
        // 80 + // marquee margin
        // 108 // content height
        const titleElm = document
          .querySelector(`.hero-text`)
          .getBoundingClientRect().height

        const y = mEl + titleElm - 50

        return y
      }

      tl.fromTo(
        insetRef.current,
        {
          width: () => {
            const cistyles = containerRef.current?.getBoundingClientRect()
            return cistyles.width
          },

          y: () => -1 * getY(),
        },
        {
          width: '100%',

          y: 0,

          duration: 0.8,
        }
      )
        .fromTo(
          '.web-vid',
          {
            x: () => {
              const istyles = containerRef.current?.getBoundingClientRect()
              const nstyles = insetRef.current?.getBoundingClientRect()
              const diffContainer = Math.min(istyles.left - nstyles.left, 0)
              return diffContainer
            },
            borderRadius: '70px',
          },
          { x: 0, borderRadius: '0' },
          0
        )

        .fromTo(
          '.content-showreel',
          { opacity: 1 },
          { opacity: 0, y: () => getY(), duration: 0.01 },
          0
        )

      return () => {
        tl.kill()
      }
    })
    const resize = () => {
      gsap.matchMediaRefresh()
    }
    window.addEventListener('resize', resize)

    let singleLetterTimeline = gsap.timeline({
      ease: 'power2.out',
      repeat: -1,
    })

    singleLetterTimeline
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
          delay: 2,
        }
      )

      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 100,
        },
        '+=1'
      )
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
        },
        '+=2'
      )

    const letterTimeline = gsap.timeline()
    letterTimeline.to(
      `.${styles.rtol}, .${styles.ltor}`,
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.256,
        },
      },
      0
    )
    return () => {
      window.removeEventListener('resize', resize)
      letterTimeline.kill()
      mm.kill()
    }
  }, [])
  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }

  const heroHeightRef = useRef(0)

  useEffect(() => {
    const heightDiv = document.querySelector('.height-div').offsetHeight

    if (heroHeightRef.current === 0) {
      heroHeightRef.current = heroSection.current.offsetHeight
    }

    const heroHeightFunc = () => {
      if (window.innerWidth > 767) {
        heroSection.current.style.minHeight =
          heroHeightRef.current + heightDiv - 120 + 'px'
        ScrollTrigger.refresh()
      } else {
        // do nothing
      }
    }
    heroHeightFunc()
  }, [])
  return (
    <>
      <SEO
        title="About Red Bangle Global Video Production Agency"
        description="We are a global team of video professionals that provides hassle-free video production services across multiple locations and formats"
        keywords="Video Professionals, Seamless Support, Who We Are, What Do We Do, What Makes Us Unique, Meet Our Team, Meet Our Professionals, Meet Our Crew, Meet Our Leadership Team, Global Team, 	International Professionals, Team Culture, Video Creation Company, Professional Video Services"
        url="https://www.redbangle.global/about"
      />

      <section
        className="pt-10 pb-0 md:pb-0 md:pt-24 relative bg-rb-mercury text-rb-black "
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <h1 className="hero-text md:text-[112px] md:leading-[1.01] font-everett font-medium md:tracking-[-2.24px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px]">
            The <span className="text-[#FF1A40]">tech-enabled</span>
            <br />
            video{' '}
            <div
              className={`content aspect-[1920/1080] origin-top ${styles.content} hidden md:inline-block`}
              ref={containerRef}
            ></div>
            <span className="md:translate-x-[20px] inline-block">agency</span>
          </h1>
          <div className="heroMarquee flex md:flex-row flex-col items-start justify-between border-t border-t-rb-davy-grey/50 pt-6 md:pt-8 mt-6 md:mt-20 gap-4 md:gap-0">
            <div className="w-full md:w-1/2 text-[16px] leading-[1.25] tracking-[-0.64px] font-everett md:text-[22px] md:leading-[1.45] md:tracking-[-0.88px] font-medium">
              We are storytellers, filmmakers and technologists.
            </div>
            <div className="w-full md:w-1/2 text-[16px] leading-[1.5] md:text-[28px] md:leading-[1.28] tracking-[-0.64px] md:tracking-[-1.12px] font-semibold">
              We are Red Bangle — a technology-enabled global video agency built
              to serve ambitious B2B brands and large enterprises.
            </div>
          </div>
        </div>
        {/* <picture>
          <source
            media="(min-width:768px)"
            srcSet="/img/about/about-hero.webp"
            width="1440"
            height="688"
          />
          <img
            src="/img/about/about-hero.webp"
            alt="hero"
            width="708"
            height="790"
            className="w-full md:mt-32 mt-12"
          />
        </picture> */}
        <div
          className="w-full  bottom-0 left-0 select-none md:aspect-[1920/1080] relative  md:origin-top mx-auto"
          onClick={onModalOpen}
          data-rb-cursor
          data-rb-cursor-type="play"
          ref={insetRef}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            // src="/img/home/home-video.mp4"
            // src="/img/home/showreel-1.mp4"
            src="/img/about/about-hero.mp4"
            poster="/img/about/about-hero-poster.webp"
            // poster="/img/home/home-video-p.png"
            className="w-full hidden md:block web-vid "
            width="1920"
            height="1080"
          ></video>

          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/about/about-hero.mp4"
            poster="/img/about/about-hero-poster.webp"
            // src="/img/home/home-video-mb.mp4"
            // poster="/img/home/home-video-p.png"
            className="w-[100%] max-w-[100%] mt-8 block md:hidden"
            width="1920"
            height="1080"
            // width="720"
            // height="406"
          ></video>

          <div className=" absolute play-circle md:hidden opacity-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-rb-black/50 rounded-full w-13 h-13">
            <svg
              className="block play-icon absolute md:hidden opacity-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.570972 0.669922L8.07097 5.00005L0.570971 9.33018L0.570972 0.669922Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      <div style={{ display: 'none' }}>
        <h2>Who We Are</h2>
        <h2>What Do We Do</h2>
        <h2>Meet Our Team</h2>
        <h2>Global Team</h2>
        <h2>Team Culture</h2>
        <h2>Video Creation Company</h2>
        <h2>Professional Video Services</h2>
      </div>

      <section className="bg-white md:py-30 py-10">
        <div className="container">
          <h2 className="text-center text-title md:text-title-md mb-10 md:mb-18 font-everett">
            We win when everyone wins
          </h2>
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  For B2B Enterprises
                </div>
                <p className="text-16">
                  We are focused on empowering B2B brands and enterprises across
                  the world with content for growth.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/home/long_term.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Creative Collaboration
                </div>
                <p className="text-16">
                  Our business model is built to nurture creative collaboration
                  - with you and with filmmakers across the world.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/home/long_term_partnership.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/home/creative-collaboration.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-10 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Long-term Relationships
                </div>
                <p className="text-16">
                  We believe in building long-term relationships with our
                  clients and our collaborators, and in open feedback sharing.
                </p>
              </div>
            </div>
            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/home/pride.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-0 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Pride and Initiative
                </div>
                <p className="text-16">
                  Not just consistent creative quality and detailed processes in
                  every project. We take pride and ownership in everything we
                  do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RedbangleWaySection
        sectionBG="bg-rb-mercury md:py-30 py-10"
        title={<div className="md:max-w-[720px]">What makes us unique</div>}
        data={redbanglewayCreate}
        image={{
          src: '/img/about/what-makes-us-unique.webp',
          width: '491',
          height: '562',
        }}
      />

      <section className="pb-7.5 pt-10 md:pb-15 md:pt-30">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">Global Services</LineHeading>
          <div className="text-title md:text-title-md-tight max-w-[930px]">
            We are a tech-enabled, global, creative video agency for B2B
            businesses
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mt-12 md:mt-18">
            {aboutServices.map(
              ({ id, title, desc, img, imgmweb, alt, href }) => (
                <a
                  href={href}
                  key={id}
                  className="text-rb-black"
                  data-rb-cursor
                  data-rb-cursor-type="startnow"
                >
                  <picture>
                    <source
                      media="(min-width:768px)"
                      srcSet={img}
                      width="606"
                      height="681"
                    />
                    <img
                      src={imgmweb}
                      alt={alt}
                      width="515"
                      height="468"
                      className=""
                    />
                  </picture>
                  <div className="my-3 text-accordion font-everett font-medium md:text-accordion-large">
                    {title}
                  </div>
                  <div className="text-[16px] leading-[1.5] md:text-acc-large md:opacity-80 opacity-90">
                    {desc}
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>
      <TrustedBrandsSection className="bg-white py-7.5 md:py-15" />
      <Testimonials
        className="py-7.5 md:py-15"
        testimonialData={testimonialsDefault}
        type="semi"
      />
      {/* <section className="pb-16 pt-7.5 md:pt-15 md:pb-30">
        <div className="container">
          <div className="text-title md:text-title-md-tight text-center">
            Global Locations
          </div>

          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full md:mt-15 mt-8"
            width="1440"
            height="884"
          >
            <source src="/img/about/worldmap.mp4" type="video/mp4" />
          </video>
        </div>
      </section> */}
      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="898051756"
      >
        <div className="relative max-w-[80%] w-full">
          {/* <button
            aria-label="close modal"
            onClick={() => setHerovideoOpen(false)}
            className="w-6 h-6 absolute top-3.5 right-3.5 bg-white/10 z-[1] flex items-center justify-center rounded-full"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.00098L1 9.00098"
                stroke="white"
                strokeWidth="1.30909"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1.00098L9 9.00098"
                stroke="white"
                strokeWidth="1.30909"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button> */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            // src="/img/home/showreel-full.mp4"
            src="/img/home/home.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video> */}
          <iframe
            src="https://player.vimeo.com/video/898051756?h=1383313c75&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full aspect-video h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </VideoModal>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default About
