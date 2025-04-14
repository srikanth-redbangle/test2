import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {
  LineHeading,
  // CountUp,
  RevealText,
  SolutionsSection,
  VideoModal,
  ArticleSection,
  TrustedBrandsSection,
  RollupNumber,
  Marquee,
  StatsSection,
  RedbangleWaySection,
  Testimonials,
  testimonialsDefault,
} from '@/components/shared'
import { Accordion, Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import WorkSlider from '@/components/sliders/WorkSlider'
import styles from '@/styles/home.module.scss'
import { SEO } from '@/components/shared/SEO'

import { schemaHome } from '@/components/schema/homeSchema'
import { getLatestArticle, getPlaySliderData } from '@/utils/graphql'
import { formateBlogPostFunc } from './src/utils/formate'
import Script from 'next/script'
import { redbanglewayCreate, TNC } from '@/content/services'
import { TextMarquee } from '@/components/shared/TextMarquee'

gsap.registerPlugin(ScrollTrigger)

export const logoIcons = [
  {
    id: 0,
    name: 'darwinbox.webp',
    width: '153',
    height: '34',
    alt: 'darwinbox',
  },
  {
    id: 1,
    name: 'wipro.svg',
    width: '83',
    height: '66',
    alt: 'Wipro',
    className: 'w-[70%] md:w-auto',
  },
  {
    id: 2,
    name: 'entrepreneur-first.png',
    width: '174',
    height: '33',
    alt: 'entrepreneur-first',
  },
  // {
  //   id: 3,
  //   name: 'indeed.webp',
  //   width: '132',
  //   height: '36',
  //   alt: 'indeed',
  //   className: '',
  // },
  {
    id: 4,
    name: 'u-next.webp',
    width: '115',
    height: '40',
    alt: 'u-next',
    className: '',
  },
  {
    id: 5,
    name: 'microsoft.webp',
    width: '171',
    height: '36',
    alt: 'microsoft',
    className: '',
  },
  {
    id: 6,
    name: 'toddle.webp',
    width: '146',
    height: '49',
    alt: 'toddle',
    className: '',
  },
  {
    id: 7,
    name: 'kpit.webp',
    width: '115',
    height: '34',
    alt: 'kpit',
    className: '',
  },
  {
    id: 8,
    name: 'tata-logo.svg',
    width: '157',
    height: '40',
    alt: 'tata',
    className: '',
  },

  {
    id: 9,
    name: 'general-electric.webp',
    width: '71',
    height: '71',
    alt: 'general-electric',
    className: '',
  },
  {
    id: 10,
    name: 'xiaomi.png',
    width: '155',
    height: '44',
    alt: 'xiaomi',
    className: '',
  },
  {
    id: 11,
    name: 'acentra.webp',
    width: '211',
    height: '60',
    alt: 'acentra',
    className: 'max-w-[150px]',
  },
  {
    id: 12,
    name: 'co-learn.webp',
    width: '135',
    height: '25',
    alt: 'co-learn',
    className: '',
  },
  {
    id: 13,
    name: 'thought-works.webp',
    width: '164',
    height: '26',
    alt: 'thought-works',
    className: '',
  },
  {
    id: 14,
    name: 'lentra.webp',
    width: '145',
    height: '42',
    alt: 'lentra',
    className: '',
  },
  {
    id: 15,
    name: 'bosch.webp',
    width: '151',
    height: '33',
    alt: 'bosch',
    className: '',
  },
  {
    id: 16,
    name: 'vymo.webp',
    width: '117',
    height: '42',
    alt: 'vymo',
    className: '',
  },
  {
    id: 17,
    name: 'metro-wholesale.webp',
    width: '130',
    height: '63',
    alt: 'metro-wholesale',
    className: '',
  },
  {
    id: 18,
    name: 'slb.webp',
    width: '113',
    height: '52',
    alt: 'slb',
    className: '',
  },
  {
    id: 19,
    name: 'the-story-lab.webp',
    width: '156',
    height: '53',
    alt: 'the-story-lab',
    className: '',
  },
  {
    id: 20,
    name: 'emeritus.webp',
    width: '157',
    height: '50',
    alt: 'emeritus',
    className: '',
  },
  {
    id: 21,
    name: 'allen-digital.png',
    width: '155',
    height: '43',
    alt: 'allen-digital',
    className: '',
  },
  {
    id: 22,
    name: 'annalect.webp',
    width: '149',
    height: '39',
    alt: 'annalect',
    className: '',
  },
  {
    id: 23,
    name: 'multiplier.webp',
    width: '133',
    height: '35',
    alt: 'multiplier',
    className: '',
  },
]

export default function Home({ articles }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const videoRef = useRef(null)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const containerRef = useRef()
  const insetRef = useRef()
  const pinSection = useRef()
  const containerMbRef = useRef()
  const heroSection = useRef()

  const refreshScrolltriggers = () => {
    setTimeout(() => {
      ScrollTrigger.refresh()
      console.log('refreshScrolltriggers')
    }, 100)
  }
  // console.log(articles)
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(max-width:768px)', () => {
      // const istyles = containerMbRef.current?.getBoundingClientRect()
      // const nstyles = insetRef.current?.getBoundingClientRect()

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
      ).fromTo(' .play-icon', { opacity: 0.5 }, { opacity: 1 })

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [hasReachedTop, setHasReachedTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const elementHeight = document.querySelector('#hero-section').offsetHeight
      const scrollPosition = window.scrollY

      if (window.innerWidth > 768) {
        if (elementHeight + scrollPosition >= windowHeight + 600) {
          setHasReachedTop(true)
        } else {
          setHasReachedTop(false)
        }
      } else {
        if (elementHeight + scrollPosition >= windowHeight + 500) {
          setHasReachedTop(true)
        } else {
          setHasReachedTop(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <SEO
        title="Video Production Agency for Enterprises | Get Campaigns, Videos and Crews"
        description="Video creation company producing tailor-made corporate videos, explainer videos, promotional videos & employer branding videos for global enterprises"
        keywords="Corporate Video, Video Creation Company, Corporate Video Production Agency, Video Animation Services, Brand Video Agency, Explainer Video Production, Corporate Videographer, Video And Marketing, Photographers, Drone Photography, Video Filming, Videography Editing, B2b Video Agency, Post Production, End To End Solutions, Book A Crew, Creative Videos, Production Videos, Corporate Films, Professional Video Services, Advertising Video, Digital Media Marketing, Brand Campaigns, Best Commercial Campaigns, Great Ad Campaigns, Best Campaign Marketing, Video Production Agency, Video Shoot"
        url="https://www.redbangle.global"
      />

      <section
        className="bg-white md:-mb-[3px] md:pt-9  relative overflow-hidden "
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <h1 style={{ display: 'none' }}>PRODUCTION/VIDEO/CAMPAIGN AGENCY</h1>
          <div>
            <div className={` ${styles.title}`}>
              <span className={styles.ltor}>We are a</span>
            </div>
            {/* <div
              className={`flex items-start md:items-center md:gap-1  ${styles.title}`}
            >
              <span className={`${styles.ltor}`}>Global</span>
              <video
                autoPlay
                muted
                playsInline
                loop
                className="relative w-auto h-full max-w-fit translate-y-[-8px] hidden md:inline-block"
                width="1440"
                height="94"
              >
                <source src="/img/home/text-animation.webm" type="video/webm" />
                <source src="/img/home/text-animation.mp4" type="video/mp4" />
              </video>
            </div>
            <video
              autoPlay
              muted
              playsInline
              loop
              className="mt-[10px] ml-[-16px] relative w-auto h-full max-w-fit translate-y-[-8px] inline-block md:hidden"
              width="768"
              height="42"
            >
              <source
                src="/img/home/text-animation-mweb.webm"
                type="video/webm"
              />
              <source
                src="/img/home/text-animation-mweb.mp4"
                type="video/mp4"
              />
            </video> */}

            {/* <div
              className={`heroMarquee max-w-[89%] md:max-w-[50%] my-2 text-rb-mercury ${styles.title}`}
            >
              <TextMarquee duration={25} direction={1}>
                <div className="uppercase outline-text-black  flex  items-center">
                  <span className="opacity-60 marquee-text">SHOOT</span>
                  <img
                    src="/img/home/star.svg"
                    alt="star"
                    width="30"
                    height="30"
                    loading="lazy"
                    className="mx-3 md:mx-7 w-5 h-5 md:w-[30px] md:h-[30px]"
                  />

                  <span className="opacity-60 marquee-text">GLOBAL</span>
                  <img
                    src="/img/home/star.svg"
                    alt="star"
                    width="30"
                    height="30"
                    loading="lazy"
                    className="mx-3 md:mx-7 w-5 h-5 md:w-[30px] md:h-[30px]"
                  />
                  <span className="opacity-60 marquee-text">VIDEO</span>
                  <img
                    src="/img/home/star.svg"
                    alt="star"
                    width="30"
                    height="30"
                    loading="lazy"
                    className="mx-3 md:mx-7 w-5 h-5 md:w-[30px] md:h-[30px]"
                  />
                  <span className="opacity-60 marquee-text">POST</span>
                  <img
                    src="/img/home/star.svg"
                    alt="star"
                    width="30"
                    height="30"
                    loading="lazy"
                    className="mx-3 md:mx-7 w-5 h-5 md:w-[30px] md:h-[30px]"
                  />
                </div>
              </TextMarquee>
            </div> */}
            <div className="banner relative h-[50%] w-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                src="/img/home/new-home-preview-text.mp4"
                poster="/img/home/hero-poster.webp"
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></video>
              {/* <div className={` ${styles.textblend}`}>Global Video Agency</div> */}
              <div className={` ${styles.title}`}>
                <div className={` ${styles.textblend}`}>
                  Global Video Agency
                </div>
              </div>
            </div>
            {/* <div className={` ${styles.title}`}>
              <span className={` ${styles.textblend}`}>
                Global Video Agency
              </span>
            </div> */}
          </div>
          {/* <div className="uppercase hidden mt-0 mb-2 whitespace-nowrap text-rb-ironside-grey text-sm tracking-[-0.208px]  items-center content-showreel opacity-0 invisible">
            <span className="h-px w-12 bg-rb-ironside-grey block mr-3"></span>
            SHOWREEL 2022
          </div>
          <div
            className={`content aspect-[1920/1080] origin-top relative ${styles.content} hidden`}
            // onClick={onModalOpen}
            ref={containerMbRef}
          ></div> */}
        </div>

        <div style={{ display: 'none' }}>
          <h2>Corporate Video</h2>
          <h2>Video Creation Company</h2>
          <h2>Corporate Video Production Agency</h2>
          <h2>Corporate Videographer</h2>
          <h2>Video And Marketing</h2>
          <h2>Photographers</h2>
          <h2>Drone Photography</h2>
          <h2>Video Filming</h2>
          <h2>Post Production</h2>
          <h2>End To End Solutions</h2>
          <h2>Creative Videos</h2>
          <h2>Production Videos</h2>
          <h2>Corporate Films</h2>
          <h2>Advertising Video</h2>
          <h2>Digital Media Marketing</h2>
          <h2>Brand Campaigns</h2>
          <h2>Best Commercial Campaigns</h2>
          <h2>Best Campaign Marketing</h2>
          <h2>Video Production Agency</h2>
          <h2>Video Shoot</h2>
        </div>
        {/* <div
          className={`mt-23 mb-18 md:mt-32 md:mb-24 ${styles.heroMarquee} marquee-animation`}
        ></div> */}

        <div className="container">
          <div
            id="hero-section"
            className="flex items-center justify-center text-center md:mt-10 mt-5"
          >
            <div>
              <div className="text-rb-black text-[16px] md:text-[24px] leading-[1.5] md:leading-[1.33] tracking-[-0.64px] md:tracking-[-0.96px] font-semibold max-w-[900px]">
                Power your B2B communications with Red Bangle. Get scalable,
                end-to-end campaign and video services, and on-demand video
                crews across 100 countries.
              </div>
              <div className="flex items-center justify-center md:flex-row flex-col md:mt-10 mt-9 md:gap-5 gap-4">
                <Button
                  href="/contact"
                  className="font-bold  w-full md:w-auto !inline-flex"
                  suffix={<LineArrow hover />}
                >
                  Get professional video services
                </Button>
                <div className="flex items-center gap-3">
                  <div className="stack-images flex">
                    <img
                      src="/img/home/marin.png"
                      alt="marin"
                      loading="lazy"
                      className="translate-x-[13px] w-10 h-10 md:w-12 md:h-12"
                    />
                    <img
                      src="/img/manisha.webp"
                      alt="Manisha"
                      loading="lazy"
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[16px] leading-[1.25] tracking-[-0.64px] font-medium font-everett text-rb-black">
                      Marin / Manisha<span className="md:hidden">,&nbsp;</span>
                    </div>
                    <div className="text-[16px] leading-[1.25] tracking-[-0.64px] font-medium font-everett text-rb-black/60">
                      Global Services
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              ref={videoRef}
              className={`mt-12 md:mt-0 video-scroll duration-500 ease-out overflow-hidden ${
                hasReachedTop ? 'active' : ''
              }`}
              onClick={onModalOpen}
              data-rb-cursor
              data-rb-cursor-type="play"
            >
              <div className="absolute backdrop-blur-sm rounded-[32px] py-4 px-4.5 overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2  text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="13"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M.043 1.124c0-.442.489-.71.86-.47L9.09 5.916c.342.22.342.72 0 .94L.903 12.117a.559.559 0 0 1-.86-.47V1.125Z"
                    />
                  </svg>
                </div>
              </div>
              <video
                autoPlay
                muted
                loop
                playsInline
                // src="/img/home/home-video.mp4"
                // src="/img/home/showreel-1.mp4"
                src="/img/home/home-preview.mp4"
                poster="/img/home/hero-poster.webp"
                // poster="/img/home/home-video-p.png"
                className=" hidden md:block web-vid"
                // width="256"
                // height="138"
              ></video>

              <video
                autoPlay
                muted
                loop
                playsInline
                src="/img/home/home-preview.mp4"
                poster="/img/home/hero-poster.webp"
                // src="/img/home/home-video-mb.mp4"
                // poster="/img/home/home-video-p.png"
                className="block md:hidden w-full h-full object-cover"
                width="343"
                height="185"
                // width="720"
                // height="406"
              ></video>

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
            </div> */}

            {/* <div
              className={`w-[100px] h-[100px] z-[999] small-video overflow-hidden rounded-full fixed right-3 bottom-3 ${
                hasReachedTop ? 'active' : ''
              }`}
              onClick={onModalOpen}
              data-rb-cursor
              data-rb-cursor-type="play"
              // ref={insetRef}
            >
              <div className="absolute backdrop-blur-sm rounded-[32px] py-4 px-4.5 overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2  text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="13"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M.043 1.124c0-.442.489-.71.86-.47L9.09 5.916c.342.22.342.72 0 .94L.903 12.117a.559.559 0 0 1-.86-.47V1.125Z"
                    />
                  </svg>
                </div>
              </div>
              <video
                autoPlay
                muted
                loop
                playsInline
                // src="/img/home/home-video.mp4"
                // src="/img/home/showreel-1.mp4"
                src="/img/home/home-preview.mp4"
                poster="/img/home/hero-poster.webp"
                // poster="/img/home/home-video-p.png"
                className="w-full h-full object-cover hidden md:block web-vid"
                // width="256"
                // height="138"
              ></video>

              <video
                autoPlay
                muted
                loop
                playsInline
                src="/img/home/home-preview.mp4"
                poster="/img/home/hero-poster.webp"
                // src="/img/home/home-video-mb.mp4"
                // poster="/img/home/home-video-p.png"
                className="block md:hidden w-full h-full object-cover"
                width="343"
                height="185"
                // width="720"
                // height="406"
              ></video>

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
            </div> */}
          </div>
        </div>
        <div className="mt-12 ">
          <Marquee duration={70}>
            <div className="flex items-center">
              {logoIcons.map(({ name, id, ...rest }) => (
                <div key={id} className="mx-6 md:mx-12 filter grayscale">
                  <img
                    src={`/img/logos/${name}`}
                    loading="lazy"
                    alt=""
                    {...rest}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
      <div
        ref={videoRef}
        className={`mt-12 md:mt-8 md:mb-[-2px] video-scroll duration-500 ease-out !overflow-visible lg:h-[200vh] md:h-[150vh] ${
          hasReachedTop ? 'active' : ''
        }`}
        onClick={onModalOpen}
        data-rb-cursor
        data-rb-cursor-type="play"
      >
        <div className="absolute backdrop-blur-sm rounded-[32px] py-4 px-4.5 overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2  text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
            >
              <path
                fill="#fff"
                d="M.043 1.124c0-.442.489-.71.86-.47L9.09 5.916c.342.22.342.72 0 .94L.903 12.117a.559.559 0 0 1-.86-.47V1.125Z"
              />
            </svg>
          </div>
        </div>
        <div className="md:sticky top-1/4 lg:top-0 overflow-hidden hidden md:block lg:h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            // src="/img/home/home-video.mp4"
            // src="/img/home/showreel-1.mp4"
            src="/img/home/home-preview-new.mp4"
            poster="/img/home/hero-poster.webp"
            // poster="/img/home/home-video-p.png"
            className="web-vid w-full h-full object-cover relative"
            // width="256"
            // height="138"
          ></video>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          src="/img/home/home-preview-new.mp4"
          poster="/img/home/hero-poster.webp"
          // src="/img/home/home-video-mb.mp4"
          // poster="/img/home/home-video-p.png"
          className="block md:hidden w-full h-full object-cover"
          // width="343"
          // height="185"
          // width="720"
          // height="406"
        ></video>

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

      <SolutionsSection />

      <StatsSection
        tag="WE ARE GLOBAL"
        className="pt-18 md:pt-30 pb-9 md:pb-15"
      />

      <RedbangleWaySection
        title={<div className="md:max-w-[720px]">Made for your B2B brand</div>}
        data={redbanglewayCreate}
        image={{
          src: '/img/services/create-process.webp',
          width: '614',
          height: '774',
        }}
      />

      <Testimonials
        testimonialData={testimonialsDefault}
        className="py-7.5 md:py-15"
        type="semi"
      />

      <section className=" py-12 md:py-24">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                  Frequently Asked Questions
                </h3>
                {/* <div className="text-[16px] md:text-[20px] leading-[1.5] text-rb-black/80 mb-10 md:mb-0">
                  For any queries please contact us at{' '}
                  <a className="text-rb-red" href="mailto:hello@redbangle.com">
                    hello@redbangle.com
                  </a>
                </div> */}
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <Accordion
                data={TNC?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="891125644"
      >
        <div className="relative max-w-[90%] md:max-w-[80%] w-full">
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            // src="/img/home/showreel-full.mp4"
            src="/img/home/new-home-preview-full.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video> */}
          <iframe
            src="https://player.vimeo.com/video/891125644?h=1383313c75&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full aspect-video h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </VideoModal>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaHome)}
      </Script>
    </>
  )
}
// export async function getStaticProps() {
//   const {
//     status,
//     data: { works },
//   } = await getPlaySliderData()
//   console.log(status)
//   const playWorks = works?.nodes?.map((n) => ({
//     key: n?.slug,
//     type: 'play',
//     title: n?.title,
//     video: {
//       src: n?.workDetails?.previewLink?.mediaItemUrl ?? '',
//       width: n?.workDetails?.previewLink?.mediaDetails?.width ?? '',
//       height: n?.workDetails?.previewLink?.mediaDetails?.height ?? '',
//     },
//     href: `/work/play?work=${n?.slug}`,
//   }))
//   const { data } = await getLatestArticle()
//   return {
//     props: {
//       playWorks,
//       articles: data?.posts?.nodes?.map(formateBlogPostFunc),
//     },
//   }
// }
