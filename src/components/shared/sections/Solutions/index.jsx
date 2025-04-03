import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Autoplay } from 'swiper/modules'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'

import styles from '@/styles/sections/Solutions.module.scss'
import { SolutionsSlider } from '@/components/sliders/SolutionsSlider'
import { SwiperSlide } from 'swiper/react'

gsap.registerPlugin(ScrollTrigger)

const videosData = [
  {
    key: 1,
    img: '/img/home/testimonial.webp',
    title: 'Testimonial & Case Study Videos',
    desc: 'From fresh scripts to anywhere production and any format post-production - choose Red Bangle for end-to-end services on testimonial and case study videos. ',
  },
  {
    key: 2,
    img: '/img/home/product.webp',
    title: 'Product & Service Videos',
    desc: 'Have a great product or service, and need a cool video to market it to your audience? We’ve got you covered. Get great scripts and premium production across formats and genres with Red Bangle.',
  },
  {
    key: 3,
    img: '/img/home/corporate.webp',
    title: 'Corporate Films',
    desc: 'Need to share your corporate growth story with global stakeholders? Talk to us for corporate films with unique stylisations and on-point messaging.',
  },
  {
    key: 4,
    img: '/img/home/hiring.webp',
    title: 'Hiring & Culture Videos',
    desc: 'Need employee testimonial videos, a culture film, or a campus hiring video? Talk to us for fresh ideas, insights, and great-quality production no matter where you need it! ',
  },
  {
    key: 5,
    img: '/img/home/event.webp',
    title: 'Documentary Films',
    desc: 'You’ve got a great story, and we’ve got great storytellers. We’ve also got great project managers and client-servicing folks. Brief us, and we’ll take care of the rest - delivering a documentary film you’ll be amazed with.',
  },
  {
    key: 6,
    img: '/img/home/documentary.webp',
    title: 'Event Videos',
    desc: 'From a roundtable meet in Los Angeles to a large business summit in Bangalore - talk to us for event videos in any location. Capture the event experience, visitor testimonials, and more! ',
  },
]

const crewsData = [
  {
    key: 1,
    img: '/img/home/studio.webp',
    title: 'Single Location Shoot',
    desc: 'Need a camera crew to shoot a customer testimonial in another city? Book a single-camera, single-location shoot with Red Bangle today.',
  },
  {
    key: 2,
    img: '/img/home/single.webp',
    title: 'Multi-Location Shoot',
    desc: 'Need to capture employee testimonials across global offices? Book curated video crews across 100 countries with Red Bangle. ',
  },
  {
    key: 3,
    img: '/img/home/multi.webp',
    title: 'BTS/Making-of Shoot',
    desc: 'Building something cool or creating a brand new experience at your office? Book a professional video crew to capture the making-of / the behind-the-scenes footage.',
  },
  {
    key: 4,
    img: '/img/home/drone.webp',
    title: 'Drone/Aerial Shoot',
    desc: 'Want to capture the scale and beauty of your corporate headquarters or R&D facility? Book a drone shoot with us today!',
  },
  {
    key: 5,
    img: '/img/home/event-shoot.webp',
    title: 'Event Shoot',
    desc: 'From 2-camera crews for roundtable meets to 5-camera crews for business summits - get video crews that scale with your event.',
  },
  {
    key: 6,
    img: '/img/home/bts-shoot.webp',
    title: 'Studio/Chroma Shoot',
    desc: 'Looking to shoot a business leader in a studio and against a green screen backdrop? Book a crew, equipment and studio with Red Bangle today.',
  },
]

const campaignsData = [
  {
    key: 1,
    img: '/img/home/brands.webp',
    title: 'Brand & Marketing',
    desc: 'Need a campaign film or a set of brand films - talk to us today for creative production services that make campaign creation a breeze for you.',
  },
  {
    key: 2,
    img: '/img/home/employeer.webp',
    title: 'Employer Branding & Recruitment',
    desc: 'Looking to grow your team in a new region or need to attract more women employees? Talk to us for engaging, at-scale storytelling and content for employer branding and hiring.',
  },
  {
    key: 3,
    img: '/img/home/corpcomm.webp',
    title: 'CorpComm & Public Relations',
    desc: 'Need to share your corporate growth story or need a series of PR videos? Our writers, producers and filmmakers are here to make creative production easy for you.',
  },
  {
    key: 4,
    img: '/img/home/environmental.webp',
    title: 'Environmental, Social & Governance',
    desc: 'From documentaries to interviews and infographic videos - we conceptualize and craft ESG campaigns and series for internal and external audiences. Brief us, and leave the rest to us.',
  },
]

const slides = [
  {
    key: 0,
    title: 'Campaigns',
    excerpt:
      'Get video campaign ideas, scripts and end-to-end production across locations. We are an end-to-end video agency for your B2B marketing and communication needs. ',
    video: {
      src: '/img/home/play-square.mp4',
      poster: '/img/services/play-poster.webp',
      width: '1440',
      height: '810',
    },

    color: 'rgb(180, 3, 21)',
    href: '/campaigns',
    sliderData: campaignsData,
  },

  {
    key: 1,
    title: 'Videos',
    excerpt:
      'From corporate videos and explainers to customer testimonial videos - get video production services that take you from script and visualization to production and post-production in one seamless experience, no matter which location or industry. ',
    video: {
      src: '/img/home/think-square.mp4',
      poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    color: 'rgb(255, 0, 56)',
    href: '/videos',
    sliderData: videosData,
  },
  {
    key: 2,
    title: 'Crews',
    excerpt:
      'Got an in-house creative team, but need professional video crews to capture footage in various locations? Get on-demand video crews across 100 countries with Red Bangle. Be it a one-camera studio shoot or multi-camera multi-location production - we’ve got you covered across the world.',
    video: {
      src: '/img/home/create-square.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    color: 'rgb(255, 131, 165)',
    href: '/crews',
    sliderData: crewsData,
  },
]

const sReverse = slides
export const SolutionsSection = () => {
  const containerRef = useRef()
  const onClick = (i) => {
    try {
      window.scrollTo(
        0,
        containerRef.current.offsetTop +
          (i == 1 ? 200 : 0) +
          (i == 0 ? 0 : (i + (i == 2 ? 1 : 0)) * window.innerHeight)
      )
    } catch {}
  }
  useEffect(() => {
    const container = containerRef.current
    const contents = document.querySelectorAll('.content-track > div')
    const sections = document.querySelectorAll('[data-solutionsection]')
    const bullets = document.querySelectorAll('[data-solutionsection-bullet]')

    const tls = []

    const mm = gsap.matchMedia()
    mm.add('(min-width:768px)', () => {
      // console.log(window.innerHeight)
      const totalDuration = 3 * window.innerHeight
      const n = sections.length
      const singleDuration = totalDuration / n
      // gsap.set(contents, { autoAlpha: 0 })
      // gsap.set(contents[0], { autoAlpha: 1 })
      const mstl = ScrollTrigger.create({
        trigger: '.pin-up',
        start: () => 'top top',
        // invalidateOnRefresh: true,
        end: () => `+=${totalDuration}`,
        // markers: true,
        pin: true,
        scrub: true,
        // animation: linetl,
      })
      sections.forEach((s, i) => {
        // if (i == 0) {
        //   const tl = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: container,
        //       toggleActions: 'play none play reverse',
        //       start: 'top 0',

        //       end: `+=${singleDuration}`,
        //       scrub: false,
        //     },
        //   })
        //   tl.fromTo(
        //     bullets[i],
        //     { backgroundColor: 'white' },
        //     { backgroundColor: 'white' }
        //   )
        //   tls.push(tl)
        //   return
        // }
        const scrollTriggerSettings = {
          trigger: container,
          start: () => `top+=200px -=${singleDuration * (i - 1)}`,
          end: () =>
            i == 2 ? `bottom top+=${singleDuration}` : `+=${singleDuration}`,
          markers: false,
          toggleActions: 'play none play reverse',
        }
        const tl = gsap.timeline({
          scrollTrigger: {
            ...scrollTriggerSettings,
            scrub: true,
            // trigger: container,
            // start: () => `top+=200px -=${singleDuration * (i - 1)}`,
            // end: () =>
            //   i == 2 ? `bottom top+=${singleDuration}` : `+=${singleDuration}`,

            // // markers: true,
            // scrub: true,
            // // animation: tl,
            // toggleActions: 'play none play reverse',
          },
        })
        tls.push(tl)
        // ScrollTrigger.create()
        tl.fromTo(
          contents[i],
          {
            yPercent: 0,
            //  autoAlpha: i !== 0 ? 0 : 1
          },
          {
            yPercent: -100 * i,
            // autoAlpha: 1,
            // duration: 0.5,
          },
          0
        )
        const ltl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            // 200 for giving space to stay for first section and 2 times as their are 2 container on top of last section
            start: () =>
              `top+=${
                i != 2 ? singleDuration * i : (singleDuration + 200) * 2
              } top+=200px`,

            toggleActions: 'play none play reverse',
            // markers: true,
          },
        })
        if (i > 0) {
          ltl.fromTo(
            bullets[i - 1],
            { backgroundColor: 'white' },
            { backgroundColor: 'transparent' },
            0
          )
        }
        ltl.fromTo(
          bullets[i],
          { backgroundColor: 'transparent' },
          { backgroundColor: 'white' },
          0
        )
        tls.push(ltl)
      })

      return () => {
        mstl.kill()
        tls.forEach((t) => t.kill())
      }
    })

    return () => {
      mm.kill()
    }
  }, [])

  return (
    <>
      {/* <section
        className="text-white relative  md:h-screen pb-12 md:pb-0 transition-all duration-300 md:hidden"
        style={{ backgroundColor: slides[activeSlide].color }}
      >
        <div className="container">
          <Swiper
            className="md:h-screen swiper-bullets py-12 md:py-0"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            direction="horizontal"
            breakpoints={{
              768: {
                direction: 'vertical',
                autoplay: false,
              },
            }}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            style={{
              '--swiper-pagination-color': '#fff',
              '--swiper-pagination-bullet-inactive-color': 'transparent',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-size': '12px',
              '--swiper-pagination-bullet-horizontal-gap': '6px',
            }}
            onSlideChange={(swiper) => {
              setActiveSlider(swiper.activeIndex)
            }}
          >
            {slides.map((s) => (
              <SwiperSlide key={s.key} className="flex flex-col justify-center">
                <div>
                  <h3 className={styles.title}>
                    {s.title} <br /> Content Solution
                  </h3>
                  <div className="flex flex-wrap items-end flex-col-reverse md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-7 pt-9 md:pt-0">
                      <img alt={s.title} {...s?.image} className="w-full" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-7 md:pr-10">
                      <p className="mt-5.5 md:mt-0 mb-7.5 md:mb-10">
                        {s.excerpt}
                      </p>
                      <Button intent="secondary" suffix={<LineArrow />}>
                        Learn more
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
      <section
        className="text-white relative overflow-visible md:overflow-hidden"
        ref={containerRef}
      >
        <div className="pin-up min-h-screen">
          {/* <div className="container relative hidden md:block">
            <div className="flex flex-col absolute top-[50vh] -translate-y-1/2 md:right-4 xl:right-0 z-[1]">
              {sReverse.map((_, i) => (
                <button
                  key={i}
                  data-solutionsection-bullet={i}
                  onClick={() => onClick(i)}
                  className="w-3 h-3 border border-white bg-transparent my-[3px] rounded-full"
                ></button>
              ))}
            </div>
          </div> */}
          <div className="content-track flex  md:h-screen flex-col md:relative w-full ">
            {sReverse.map((s) => (
              <div
                key={s.key}
                className="min-h-screen  md:h-auto w-full flex-shrink-0  place-content-center first:pt-18 first:md:pt-24 pt-16 md:py-24 last:md:pb-16 top-0 left-0 sticky md:static"
                style={{ backgroundColor: s.color }}
                data-solutionsection={s.color}
              >
                <div className="container">
                  <div className="flex justify-between items-start flex-col lg:flex-row">
                    <h3 className="text-white uppercase text-[32px] md:text-[100px] leading-[1.06] md:leading-[0.93] tracking-[-0.64px] md:tracking-[-2px] font-everett font-medium">
                      {s.title}
                    </h3>
                    <div className="w-full lg:w-1/2 lg:pl-7 lg:pr-10">
                      <p className="mt-4 lg:mt-0 mb-10 lg:mb-8 lg:text-[20px] lg:leading-[1.4]">
                        {s.excerpt}
                      </p>
                      <Button
                        intent="secondary"
                        suffix={<LineArrow hover />}
                        href={s.href}
                        className="w-full md:w-auto md:max-w-max"
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                  <div className=" mt-12 overflow-hidden md:overflow-visible">
                    <SolutionsSlider type="custom">
                      {s.sliderData.map((t) => (
                        <SwiperSlide key={t.key}>
                          {/* <div className="flex min-h-[310px] md:min-h-fit"> */}
                          <a
                            href={s.href}
                            className="flex  md:h-[350px]"
                            data-rb-cursor-type="view"
                          >
                            <div className="p-2 md:p-3 bg-white slidesAnim">
                              <div className="overflow-hidden h-[165px] md:h-auto">
                                <img src={t.img} alt={t.title} loading="lazy" />
                              </div>
                              <div className="text-center text-rb-black">
                                <div className="mt-[10px] mb-2 text-[16px] leading-[24px] tracking-[-0.36px] font-everett font-medium">
                                  {t.title}
                                </div>
                                <div className="text-sm tracking-[-0.28px] slideDesc">
                                  {t.desc}
                                </div>
                              </div>
                            </div>
                          </a>
                        </SwiperSlide>
                      ))}
                    </SolutionsSlider>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
