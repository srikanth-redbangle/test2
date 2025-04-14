// import { crewsSchema } from '@/components/schema/crews-schema'
// import styles from '@/styles/services.module.scss'
import {
  LineHeading,
  Marquee,
  StatsSection,
  TrustedBrandsSection,
  // testimonialsDefault,
  FeaturedGlobalVideoSection,
} from '@/components/shared'
import { VideoModal } from '@/components/shared'
import { LineArrow } from '@/components/icons'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui'

import { similarPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { Accordion } from '@/components/ui'
import { Testimonials, WorkListHeroSection } from '@/components/shared'
import { useState } from 'react'
import { getPlayWorks } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import Link from 'next/link'
import { logoIcons } from './abc'
import { ContactForm } from '@/components/shared/sections/ContactForm'

const testimonialsDefault = [
  {
    key: 2,
    quote:
      'Because of Covid restrictions, our team was unable to travel to India for the event. But the team at Red Bangle supported us on the ground and even helped us manage our golfing ambassador. Thanks team!',
    name: 'MATT WALKINGTON',
    designation: 'Account Director',
    company: 'BRIGHT PARTNERSHIPS',
    image: {
      srcSet:
        '/img/testimonials/matt-walkington.webp 533w, /img/testimonials/matt-walkington.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },

  {
    key: 3,
    quote:
      'Despite difficulties faced in shooting in 2 countries, we created these awesome videos, while keeping everyone safe during Covid-19.',
    name: 'MARC IRAWAN',
    designation: 'Founder',
    company: 'COLEARN',
    image: {
      srcSet:
        '/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 4,
    quote:
      'We partnered with Red Bangle to create video content for our internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends and are always experimental and open to feedback. They’re an amazing lot to work with!',

    designation: 'VP INTERNAL COMMUNICATIONS',
    company: 'FORTUNE 100 ITES ENTERPRISE',
    image: {
      srcSet:
        '/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 5,
    quote:
      'It’s never easy creating a great video and in a fast-growing business like ours, we are always looking for a lot of videos. We struggled, till we came across Red Bangle.',
    name: 'SUNIL SURESH',
    designation: 'CHIEF MARKETING AND STRATEGY OFFICER',
    company: 'CAPILLARY TECHNOLOGIES',
    image: {
      srcSet:
        '/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

const BookCrewsGlobally = ({ works }) => {
  // const filteredData = works.filter((item) => {
  //   return item?.tags?.some((tag) => tag.name === 'Featured Work')
  // })
  // const filteredArrayData = filteredData.splice(0, 8)

  // console.log(filteredArrayData)
  // console.log(works[0].tags)
  // const videoRef = useRef(null)
  // const _posts = similarPosts.map(postsMapper)
  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }

  const cards = [
    {
      id: 0,
      imgsrc: '/img/services/testimoial-shoot.webp',
      title: 'Testimonial Shoot',
    },
    {
      id: 1,
      imgsrc: '/img/services/interview-video.webp',
      title: 'Interview video',
    },

    {
      id: 2,
      imgsrc: '/img/services/drone-shoot.webp',
      title: 'Drone shoOt',
    },
    {
      id: 3,
      imgsrc: '/img/services/office-shoot.webp',
      title: 'OFFICE SHOOT',
    },
    {
      id: 4,
      imgsrc: '/img/services/event-coverage.webp',
      title: 'EVENT SHOOT',
    },
    {
      id: 5,
      imgsrc: '/img/services/multi-location.webp',
      title: 'Multi-location',
    },
    {
      id: 6,
      imgsrc: '/img/services/leadership-video.webp',
      title: 'LEADERSHIP Shoot',
    },
    {
      id: 7,
      imgsrc: '/img/services/chroma-shoot.webp',
      title: 'CHROMA SHOOT',
    },
  ]

  const heroListitems = [
    {
      id: 0,
      text: 'Highly skilled crews in 100+ countries',
    },
    {
      id: 1,
      text: 'Quick turnaround times',
    },
    {
      id: 2,
      text: 'Custom budgets and managed shoots',
    },
  ]

  const tags = [
    // {
    //   key: 0,
    //   label: 'Videos',
    //   value: 'featured-work',
    // },
    {
      key: 0,
      label: 'Crews',
      value: 'crews',
    },
  ]

  return (
    <>
      <SEO
        title="Reliable Video Crew for Global Shoots | Red Bangle"
        description="Get quality shoots tailor-made to your brief and budgets across 100+ countries. Fully managed service with quick turnaround by professional video crews"
        keywords="Commercial Photographer, Event Photographer, Professional Photographers, Photographers, Photography Director, Video Director, Action Camera, Drone With Camera, Photography Crew, Video Crew, Company Headshots, Hire Drone Videographer, Event Photographer, Commercial Photographer, Corporate Professional Headshots, Professional Photo Shoot, Video Film Company, Videographer For Rent, Video Shoot, Cinematographer, Videography, Real Estate Photography, Product Photography, Aerial Photography, Professional Photographer, Headshot Photography, Drone Photography, Business Headshots, Local Photographers, Best Drone Photography, Corporate Videographer, Hire A Photographer, Jewelry Photography, Best Photographer For Wedding, Camera Crew, Digital Filmmaking, Drone Photo, Commercial Headshot, Contemporary Corporate Headshots"
        url="https://www.redbangle.global/book-crews-globally"
      />
      <section className="pb-12 md:pb-25 pt-8 md:pt-24 overflow-hidden bg-rb-mercury">
        <div className="container">
          <h1 style={{ display: 'none' }}>RELIABLE VIDEO CREWS</h1>

          <div style={{ display: 'none' }}>
            <h2>Commercial Photographer</h2>
            <h2>Event Photographer</h2>
            <h2>Professional Photographers</h2>
            <h2>Photographers</h2>
            <h2>Photography Director</h2>
            <h2>Video Director</h2>
            <h2>Action Camera</h2>
            <h2>Drone With Camera</h2>
            <h2>Company Headshots</h2>
            <h2>Event Photographer</h2>
            <h2>Commercial Photographer</h2>
            <h2>Corporate Professional Headshots</h2>
            <h2>Professional Photo Shoot</h2>
            <h2>Video Film Company</h2>
            <h2>Videographer For Rent</h2>
            <h2>Video Shoot</h2>
            <h2>Cinematographer</h2>
            <h2>Videography</h2>
            <h2>Real Estate Photography</h2>
            <h2>Product Photography</h2>
            <h2>Aerial Photography</h2>
            <h2>Professional Photographer</h2>
            <h2>Headshot Photography</h2>
            <h2>Drone Photography</h2>
            <h2>Business Headshots</h2>
            <h2>Local Photographers</h2>
            <h2>Best Drone Photography</h2>
            <h2>Corporate Videographer</h2>
            <h2>Hire A Photographer</h2>
            <h2>Jewelry Photography</h2>
            <h2>Best Photographer For Wedding</h2>
            <h2>Camera Crew</h2>
            <h2>Digital Filmmaking</h2>
            <h2>Drone Photo</h2>
            <h2>Contemporary Corporate Headshots</h2>
          </div>

          <div className="flex justify-center items-center md:flex-row flex-col gap-6">
            <div className="w-full md:w-7/12">
              <div className="md:text-[80px] text-[40px] leading-[1.02] font-everett font-medium uppercase tracking-[-1.6px]">
                On-demand,
                <div className="flex items-center gap-5">
                  reliable
                  <div className="md:w-[142px] w-[75px] rounded-[40px] overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src="/img/services/crew1.mp4"
                      className="w-full h-full object-cover rounded-[40px]"
                    ></video>
                  </div>
                </div>{' '}
                video crews
              </div>
              <div className="mt-5 md:mt-8">
                {heroListitems.map((l) => (
                  <div
                    key={l.id}
                    className={`flex items-center md:gap-3 gap-2 mb-3`}
                  >
                    <div>
                      <img src="/img/red-check.svg" alt="" />
                    </div>
                    <p className="font-semibold text-sm md:text-label-large">
                      {l.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-7.5 md:mt-15 overflow-hidden hidden md:block">
                <Marquee duration={70}>
                  <div className="flex items-center">
                    {logoIcons.map(({ name, id, ...rest }) => (
                      <div key={id} className="mx-6 md:mx-12 filter ">
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
            </div>
            <div className="w-full md:w-5/12">
              <div className="bg-white py-6 px-5.5 rounded-[20px]">
                <div className="text-accordion font-semibold mb-7">
                  Give us a few details, we’ll be in touch
                </div>
                <ContactForm
                  CTAbreak
                  pickCampaign={false}
                  pickVideo={false}
                  ID="3"
                />
              </div>
            </div>
            <div className="mt-5 overflow-hidden  md:hidden">
              <Marquee duration={70}>
                <div className="flex items-center">
                  {logoIcons.map(({ name, id, ...rest }) => (
                    <div key={id} className="mx-6 md:mx-12 filter ">
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
          </div>
        </div>
      </section>

      <StatsSection
        tag="WE ARE GLOBAL"
        className="pt-12 md:pt-30 pb-0 md:pb-15"
      />

      <section className=" md:pt-15 pt-12">
        <div className="container">
          {/* <div className="md:text-[40px] font-everett text-[26px] md:mb-15 mb-8  font-medium md:leading-[44px] leading-[28px] tracking-[-0.52px] md:tracking-[-1.6px]">
            Video Crew Services
          </div> */}
          <LineHeading className=" md:mb-7.5">Featured Services</LineHeading>
          <div className="text-title md:text-title-md md:mt-9 mt-8 font-everett font-medium max-w-[890px]">
            Portfolio of productions that exemplify our commitment to
            excellence.
          </div>
        </div>
      </section>
      <FeaturedGlobalVideoSection
        works={[]}
        cards={cards}
        tags={tags}
        // seeAll={false}
        customClass="md:pb-30 pt-0 md:pt-7"
        stickyBg
      />

      <section className="md:pt-30 md:pb-30 py-7.5 bg-rb-mercury">
        <div className="container">
          <h2 className="text-center text-title md:text-title-md mb-10 md:mb-18 font-everett">
            Quality shoots across 100+ countries
          </h2>
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Borderless Production
                </div>
                <p className="text-16">
                  From Sydney and Singapore to New York and New Delhi - get
                  professional video crews anywhere you need them. Talk to Red
                  Bangle today!
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/services/video-shoot-service-3.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Curated Crews
                </div>
                <p className="text-16">
                  Get hand-picked professional video crews, custom technical
                  briefs briefs and hands on quality control on every shoot.
                  Book a crew with us today!
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/services/video-shoot-service-4.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/services/video-shoot-service-2.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-10 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Scalable Services
                </div>
                <p className="text-16">
                  Be it a single-camera testimonial shoot or a multi-camera
                  event shoot - our curated video crew services scale to your
                  brief, no matter which location.
                </p>
              </div>
            </div>
            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/services/video-shoot-service-1.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-0 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Quality & Ownership
                </div>
                <p className="text-16">
                  Our curated crews, and proven, cloud-based processes drive
                  complete creative ownership at our end. You won’t have to
                  worry about creative quality and consistency across locations
                  and video files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        className="py-7.5 md:py-30"
        testimonialData={testimonialsDefault}
        type="semi"
      />

      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="891125698"
      >
        <div className="relative max-w-[90%] md:max-w-[80%] w-full">
          <iframe
            src="https://player.vimeo.com/video/891125698?h=1383313c75&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full aspect-video h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </VideoModal>
      {/* <Script id="schema" type="application/ld+json">
        {JSON.stringify(crewsSchema)}
      </Script> */}
    </>
  )
}
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)

  return {
    props: {
      works,
      // tags: [tagProp.find((t) => t.value == 'featured-work'), ...filtered],
    },
  }
}

BookCrewsGlobally.PageLayoutProps = {
  formHeading: 'Book a video crew today: anywhere, any time.',
}

export default BookCrewsGlobally
