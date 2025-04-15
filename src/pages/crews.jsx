import { crewsSchema } from '@/components/schema/crews-schema'
import styles from '@/styles/services.module.scss'
import {
  Marquee,
  TrustedBrandsSection,
  testimonialsDefault,
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
import { logoIcons } from '../components/pages/abc'

const CrewsServices = () => {
  // const videoRef = useRef(null)
  const _posts = similarPosts.map(postsMapper)
  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }

  const TNC = [
    {
      key: 0,
      title: 'What is the scale of production Red Bangle can handle?',
      content:
        'From a skeleton crew for a simple testimonial shoot to a full-fledged team of Directors, Producers, Camera persons, Sound Technicians, and Editors at a large-scale shoot - we support every production requirement our clients have.',
    },
    {
      key: 1,
      title: 'Would Red Bangle be able to facilitate a multi-location shoot?',
      content:
        'Be it a 3-location shoot in 1 city or a 10-city project - talk to us for everything from simple interview shoots to event coverage and more. No matter where you need a shoot done, our producers curate and brief local crews, and manage the production end to end.',
    },
    {
      key: 2,
      title: 'Do you run the entire production process in-house?',
      content:
        'The entire production process is managed by the Global Production team at Red Bangle. This experienced team of producers has worked with crews across continents, on a wide range of productions. They craft custom shoot briefs, curate crews for every requirement, and run shoots on-time as well as on-quality.',
    },
    {
      key: 3,
      title: 'Which countries do you have video crews in?',
      content:
        'From the USA, UK, various countries across Europe, to Japan, Indonesia, Thailand, Singapore, Australia, South Africa, Kenya, and India -  we provide professional video crews across 100+ countries. Our services cover all the major cities and business hubs in the world.',
    },
    {
      key: 4,
      title:
        'How do you ensure quality consistency in the case of a multi-country production?',
      content:
        'There are several ways in which we ensure quality consistency across locations. These include a detailed shoot brief that defines everything from camera, lighting, and sound requirements to framing and colour temperatures; our Producers being actively involved at the time of the shoot to ensure location access, check framing, lighting, etc; and, for more complex projects, we have a Director or two onboard the project to guide every crew and ensure the output is consistent across locations.',
    },
    {
      key: 5,
      title: 'What does a typical on-demand video shoot workflow look like?',
      content: (
        <>
          <div>
            Red Bangle&apos;s on-demand video crew services typically have the
            following workflow:
          </div>
          <ol className="list-decimal pl-[25px] py-3">
            <li>Project Briefing</li>
            <li>Crew Curation</li>
            <li>Estimate & Proposal</li>
            <li>Shoot Detailing</li>
            <li>Crew Briefing</li>
            <li>Scheduling & Coordination</li>
            <li>Production / Shoot</li>
            <li>Footage Upload to Cloud</li>
            <li>Quality Checks of the Footage</li>
            <li>Asset Delivery to the Client</li>
          </ol>
        </>
      ),
    },
    {
      key: 6,
      title: 'How do you deliver the footage after the shoot?',
      content:
        'All the captured footage is uploaded to the cloud and delivered via our Red BangleX — our production management platform.',
    },
    {
      key: 7,
      title: 'Do you undertake post-production after the shoot is done?',
      content: (
        <>
          Yes, often clients require post-production services once a shoot is
          done.{' '}
          <Link href="/contact" className="underline text-rb-red">
            send us a brief
          </Link>{' '}
          and we’ll be happy to custom edit and design a video for you. This
          video could be made purely out of what we’ve filmed or by using a mix
          of new and old assets.
        </>
      ),
    },
    {
      key: 8,
      title:
        'Do you support virtual reviews for a client who may be unable to join a shoot in person?',
      content:
        'Yes, we can scope for a live-stream feed of the production upon request and have a remote producer support the client with virtual coordination.',
    },
    // {
    //   key: 9,
    //   title: 'Which time zone does your company operate in?',
    //   content: (
    //     <>
    //       Our global services team supports clients across time zones. So,{' '}
    //       <Link href="/contact" className="underline text-rb-red">
    //         send us a brief
    //       </Link>{' '}
    //       and we’ll set up a meeting at a mutually convenient time.
    //     </>
    //   ),
    // },
  ]

  const createTestimonialData = [
    {
      key: 0,
      quote:
        'We worked on 2 films with Red Bangle and I can confidently say that the output exceeded our expectations. The team was able to come up with a concept that combined the strong recall of popular culture and at the same time incorporated the brand messaging clearly in the campaign. I would highly recommend them as a reliable and kickass creative partner',
      name: 'BHARAT VIRMANI',
      designation: 'Marketing Manager',
      company: 'Games24x7',
      image: {
        srcSet:
          '/img/testimonials/bharat.webp 533w, /img/testimonials/bharat.webp 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 1,
      quote:
        'The Red Bangle team is fantastic to work with! They add value not just from a creative standpoint but also in terms of communication strategy.',
      name: 'ROSHAN CARIAPPA ',
      designation: 'VICE-PRESIDENT MARKETING',
      company: 'VYMO',
      image: {
        srcSet:
          '/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },

    {
      key: 2,
      quote:
        'Red Bangle’s work has been exemplary for the Season of Joy Campaign. The video does what it set out to do – touch people’s hearts.',
      name: 'PEARLRAJ CANNIVADY',
      designation: 'VICE PRESIDENT - MARKETING',
      company: 'SPAR HYPERMARKETS',
      image: {
        srcSet:
          '/img/testimonials/pearlraj.webp 533w, /img/testimonials/pearlraj.webp 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
  ]

  const ourOfferings = [
    {
      // title: 'Simple <br class="hidden md:block"/>Production',
      title: (
        <>
          Single-camera&nbsp;
          <div className={` ${styles.arrowcontainer}`}></div>
        </>
      ),
      description:
        'Get a single-camera video crew to shoot interview, testimonial and leadership videos wherever you need. Book a curated video crew today.',
      content: [
        'Experienced Cinematographer',
        'Camera, Sound & Lights',
        'Local Booking & Permissions',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/single-camera-shoot.webp',
    },
    {
      // title: 'Complex <br class="hidden md:block"/>Production',
      title: (
        <>
          Multi-camera&nbsp;
          <div className={`${styles.arrowcontainer}`}></div>
        </>
      ),
      description:
        'Book a 2-camera crew to capture a fireside chat or a 5-camera crew to capture an event. Video crews that scale to your brief.',
      content: [
        'Experienced Producers',
        'Hand-picked Video Crews',
        'Directors and Assistant Directors',
        'Complete Equipment Support',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/multi-camera-shoot.webp',
    },
    {
      // title: 'Animation <br class="hidden md:block"/>Video',
      title: (
        <>
          Multi-location&nbsp;
          <div className={`${styles.arrowcontainer}`}></div>
        </>
      ),
      description:
        'When you need a single-camera shoot in multiple cities or a multi-camera shoot in multiple countries. Video production that scales with your business.',
      content: [
        'Experienced Producers',
        'Hand-picked Video Crews',
        'Directors and Assistant Directors',
        'Complete Equipment Support',
        'Local Booking & Permissions',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/multi-location-shoot.webp',
    },
  ]

  // const icons = [
  //   {
  //     id: 0,
  //     name: 'darwinbox.webp',
  //     width: '153',
  //     height: '34',
  //     alt: 'darwinbox',
  //   },
  //   {
  //     id: 1,
  //     name: 'wipro.svg',
  //     width: '83',
  //     height: '66',
  //     alt: 'Wipro',
  //     className: 'w-[70%] md:w-auto',
  //   },
  //   {
  //     id: 2,
  //     name: 'sequoia.svg',
  //     width: '176',
  //     height: '35',
  //     alt: 'Sequoia',
  //   },
  //   {
  //     id: 3,
  //     name: 'indeed.webp',
  //     width: '132',
  //     height: '36',
  //     alt: 'indeed',
  //     className: '',
  //   },
  //   {
  //     id: 4,
  //     name: 'my-11-circle.webp',
  //     width: '154',
  //     height: '42',
  //     alt: 'my-11-circle',
  //     className: '',
  //   },
  //   {
  //     id: 5,
  //     name: 'ikea.webp',
  //     width: '131',
  //     height: '52',
  //     alt: 'ikea',
  //   },
  //   {
  //     id: 6,
  //     name: 'titan-logo.webp',
  //     width: '80',
  //     height: '67',
  //     alt: 'titan',
  //   },
  //   {
  //     id: 7,
  //     name: 'tata-logo.svg',
  //     width: '150',
  //     height: '40',
  //     alt: 'tata',
  //   },
  //   {
  //     id: 8,
  //     name: 'ashirwad-logo.webp',
  //     width: '110',
  //     height: '56',
  //     alt: 'ashirwad',
  //   },

  //   {
  //     id: 9,
  //     name: 'india-gold.webp',
  //     width: '143',
  //     height: '32',
  //     alt: 'india-gold',
  //   },
  //   {
  //     id: 10,
  //     name: 'xiaomi-logo.webp',
  //     width: '126',
  //     height: '41',
  //     alt: 'xiaomi',
  //   },
  //   {
  //     id: 11,
  //     name: 'healthifyme.webp',
  //     width: '156',
  //     height: '40',
  //     alt: 'healthifyme',
  //   },
  //   {
  //     id: 12,
  //     name: 'swiggy.svg',
  //     width: '137',
  //     height: '39',
  //     alt: 'swiggy',
  //   },
  //   {
  //     id: 13,
  //     name: 'koo.webp',
  //     width: '88',
  //     height: '50',
  //     alt: 'koo',
  //   },
  //   {
  //     id: 14,
  //     name: 'vymo.svg',
  //     width: '106',
  //     height: '38',
  //     alt: 'vymo',
  //   },
  //   {
  //     id: 15,
  //     name: 'taneria.webp',
  //     width: '138',
  //     height: '54',
  //     alt: 'taneria',
  //   },
  //   {
  //     id: 16,
  //     name: 'slb-logo.webp',
  //     width: '85',
  //     height: '53',
  //     alt: 'slb',
  //   },
  //   {
  //     id: 17,
  //     name: 'mygate-logo.webp',
  //     width: '133',
  //     height: '36',
  //     alt: 'mygate',
  //   },
  // ]

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

    ,
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

  return (
    <>
      <SEO
        title="Professional Photographers & Videographers for Hire | Book a Video Crew"
        description="Hire a photographer, corporate videographer or a full video crew for your professional photo shoot and video shoot requirements across the globe"
        keywords="Commercial Photographer, Event Photographer, Professional Photographers, Photographers, Photography Director, Video Director, Action Camera, Drone With Camera, Photography Crew, Video Crew, Company Headshots, Hire Drone Videographer, Event Photographer, Commercial Photographer, Corporate Professional Headshots, Professional Photo Shoot, Video Film Company, Videographer For Rent, Video Shoot, Cinematographer, Videography, Real Estate Photography, Product Photography, Aerial Photography, Professional Photographer, Headshot Photography, Drone Photography, Business Headshots, Local Photographers, Best Drone Photography, Corporate Videographer, Hire A Photographer, Jewelry Photography, Best Photographer For Wedding, Camera Crew, Digital Filmmaking, Drone Photo, Commercial Headshot, Contemporary Corporate Headshots"
        url="https://www.redbangle.global/crews"
      />
      <section className="pb-12 md:pb-16 pt-8 md:pt-14 overflow-hidden">
        <div className="container">
          <h1 style={{ display: 'none' }}>
            professional video crews on-demand
          </h1>
          {/* <div className="uppercase text-rb-torch-red font-everett font-medium text-[56px] leading-9 tracking-[-0.512px] md:text-[120px] md:leading-[122px] md:tracking-[-1.92px]">
            CREWS
          </div>
          <div className="max-w-[1153px] mt-6  md:mt-7 md:mb-0 text-sm tracking-[-0.56px] md:text-[32px] md:leading-9.5 md:tracking-[-1.28px]">
            <h3 className="inline text-rb-black font-semibold">
              Book professional video crews on-demand in 100 countries. Shoot
              testimonial videos, event videos, drone footage, and more with Red
              Bangle. Be it a one-camera studio shoot or multi-camera
              multi-location production - we&apos;ve got you covered across the
              world.
            </h3>
          </div> */}

          <WorkListHeroSection
            duration="15"
            className="text-rb-rosa md:pb-8"
            type="CREWS"
            typeTwo="CREWS"
            video1="img/services/crew1.mp4"
            video2="img/services/crew2.mp4"
            outlineClass="outline-text-rosa"
            pillImg="/img/play-pill.webp"
            CTA
            CTAtext="Book a Crew"
            contentClassName="md:max-w-[1046px] font-semibold"
            content={
              <>
                Book professional video crews on-demand in 100 countries. Shoot
                testimonial videos, event videos, drone footage, and more with
                Red Bangle.
              </>
            }
          />

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
        </div>
      </section>
      <section>
        <div
          data-rb-cursor
          data-rb-cursor-type="playtext"
          onClick={onModalOpen}
          className="relative"
        >
          <div class="absolute play-circle md:hidden opacity-80 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-rb-black/50 rounded-full w-13 h-13">
            <svg
              className="block play-icon absolute md:hidden opacity-80 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
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
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/home/crew-preview.mp4"
            poster="/img/home/poster-crew.webp"
            className="w-[150%] max-w-full md:w-full md:translate-x-0"
          ></video>
        </div>
      </section>
      <section className="md:py-30 py-12">
        <div className="container">
          <div className="md:text-[40px] font-everett text-[26px] md:mb-15 mb-8  font-medium md:leading-[44px] leading-[28px] tracking-[-0.52px] md:tracking-[-1.6px]">
            Video Crew Services
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {cards.map((c) => (
              <Link
                href="/contact"
                key={c.id}
                data-rb-cursor
                data-rb-cursor-type="startnow"
              >
                <img src={c.imgsrc} alt={c.title} width="451" height="290" />
                <div className="mt-[10px] text-[12px] leading-[10px] md:text-[20px] md:leading-[18px] uppercase font-everett font-medium text-rb-black">
                  {c.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* <FeaturedPlayWorkSection
          works={works ?? []}
          title=""
          customClass="!py-0"
          numberOfVideosToShow={7}
        /> */}
      </section>
      <section className="bg-rb-service-grey md:py-30 py-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 items-center md:flex-row flex-col gap-8 md:gap-0">
            <div className="w-full md:w-2/5 px-4">
              <h2 className="text-title md:text-title-md mb-4 font-medium font-everett">
                Book a video crew in 100+ countries
              </h2>
              <p>
                From London to Tokyo and from New York to Bangalore - get a
                video shoot done anywhere, anytime. Just send us a brief, and
                we’ll take care of the creative and technical briefing,
                end-to-end shoot coordination and we’ll quality-check the
                footage before it reaches you.
              </p>
            </div>
            <div className="w-full md:w-3/5 px-4">
              <video
                src="/img/world-map.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pt-30 md:pb-15 py-7.5">
        <div className="container">
          <h2 className="text-center text-title md:text-title-md mb-10 md:mb-18 font-everett">
            Managed video shoot services
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
                  src="/img/services/video-shoot-service-2.webp"
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
                  src="/img/services/video-shoot-service-1.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/services/video-shoot-service-3.webp"
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
                  src="/img/services/video-shoot-service-4.webp"
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
      <section className="md:py-15 py-7.5">
        <div className="container">
          <div>
            <div className="uppercase text-rb-red text-sm md:text-xl font-semibold flex items-center">
              <span
                className={`h-px w-7.5 md:w-headingLine  block mr-3 bg-rb-red`}
              ></span>
              <span>Book a Video Shoot</span>
            </div>
            <h3 className="text-title md:text-title-md mb-10 md:mb-18 md:mt-8 mt-6 font-everett max-w-[718px]">
              Book a video crew anywhere, anytime
            </h3>
          </div>
          <div className="md:mt-18">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {ourOfferings.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`bg-rb-service-grey cursor-pointer md:p-8 px-4 py-6 ${styles.offeringcard}`}
                  >
                    <div className="flex flex-col justify-between min-h-full">
                      <div>
                        <div className="flex gap-[10px]">
                          <h3
                            className={`md:text-[36px] text-xl md:mb-3 mb-2 font-medium font-everett md:leading-[39px] leading-6 tracking-[-1.44px] `}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p className="md:text-base text-sm">
                          {item.description}
                        </p>
                        <hr className="my-6" />
                        <div className="gap-[14px] flex flex-col">
                          {item.content.map((data, index) => {
                            return (
                              <div className="flex md:gap-3 gap-2" key={index}>
                                <div className={`${styles.successcheck}`}></div>
                                <p className="font-semibold text-sm md:text-base">
                                  {data}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div>
                        <div className="mt-8">
                          <img src={item.img} alt="" />
                        </div>
                        <Button
                          href="#!"
                          className="font-bold  w-full md:!hidden  !inline-flex !text-sm mt-6"
                          suffix={<LineArrow hover />}
                        >
                          Get started
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Testimonials
        className="py-7.5 md:py-15"
        testimonialData={testimonialsDefault}
        type="semi"
      />

      <TrustedBrandsSection className="bg-white py-7.5 md:py-15" />

      {/* <section className="py-[60px]">
        <div className="container">
          <div className="uppercase text-rb-red text-sm md:text-xl font-semibold flex items-center">
            <span
              className={`h-px w-7.5 md:w-headingLine  block mr-3 bg-rb-red`}
            ></span>
            <span>Trusted by global brands</span>
          </div>
        </div>
        <div className="overflow-x-hidden mt-[40px]">
          <Marquee duration={40}>
            <div className="flex items-center overflow-hidden">
              {logoIcons.map(({ name, id, ...rest }) => (
                <div key={id} className="mx-6 md:mx-12">
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
      </section> */}

      {/* <ExploreMoreSection
        type="think"
        className="pt-7.5 md:pt-15 pb-15 md:pb-30"
      /> */}
      <section className=" overflow-hidden md:pt-15 pt-7.5">
        <div className="container">
          <h2 className="text-title md:text-title-md font-medium mb-10 md:mb-16">
            Explore More Services
          </h2>

          <div
            className="grid md:grid-cols-2 gap-4 md:gap-6"
            // onSwiper={(swiper) => (sliderRef.current = swiper)}
          >
            {[
              {
                id: 0,
                serviceTitle: 'VIDEOS',
                serviceDescription:
                  'Fuel your brand growth with global video production services. Go from concept and script to design, production, post-production, and versioning in one seamless journey. From explainer videos and customer testimonials to corporate films - choose Red Bangle for scalable B2B video production.',
                serviceAmblem: '/img/industries/create-circle.svg',
                bgColor: 'bg-rb-torch-red',
                href: '/videos',
              },
              {
                id: 2,
                serviceTitle: 'CAMPAIGNS',
                serviceDescription:
                  'Get great campaign ideas and premium, global production with Red Bangle. Supercharge your marketing funnels, hiring campaigns, and more with campaign films and video series that deliver on the business intent and drive ROI. One agency - boundless storytelling, borderless production.',
                serviceAmblem: '/img/industries/think-circle.svg',
                bgColor: 'bg-rb-scarlet',
                href: '/campaigns',
              },
            ].map(
              ({
                id,
                serviceTitle,
                serviceDescription,
                serviceAmblem,
                bgColor,
                href,
              }) => (
                <Link key={id} href={href} className="group">
                  <div
                    className={`p-8 md:p-14 relative overflow-hidden min-h-full ${bgColor}`}
                  >
                    <div className="absolute top-0 right-0 translate-x-[45%] -translate-y-12 md:-translate-y-28 opacity-20">
                      <img
                        src={serviceAmblem}
                        alt=""
                        className="w-[176px] h-[176px] md:w-[350px] md:h-[350px]"
                      />
                    </div>
                    <h3 className="relative text-white text-3xl md:text-6xl font-semibold flex items-center gap-3 mb-15 md:mb-[160px]">
                      {serviceTitle}
                      <svg
                        width="34"
                        height="32"
                        viewBox="0 0 34 32"
                        fill="none"
                        className="group-hover:translate-x-1 transition-all"
                      >
                        <path
                          d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                          fill="#fff"
                        />
                      </svg>
                    </h3>

                    <p className="text-sm md:text-xl text-white">
                      {serviceDescription}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
      <section className=" py-15 md:py-24">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                  Frequently Asked Questions
                </h3>
                {/* <div className="text-[16px] md:text-[20px] leading-[1.5] text-rb-black/80 md:block hidden">
                  For any queries please contact us at{' '}
                  <a className="text-rb-red" href="mailto:hello@redbangle.com">
                    hello@redbangle.com
                  </a>
                </div> */}
              </div>
            </div>
            <div className="w-full md:w-7/12">
              {/* <div className="text-[16px] leading-[1.12] tracking-[-0.64px] md:text-accordion-large font-medium uppercase font-everett md:mt-0 md:mb-6 mt-13 mb-5">
                Joining our Collaborative
              </div> */}
              <Accordion
                data={TNC?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
              {/* <div className="text-[16px] md:text-[20px] leading-[1.5] text-rb-black/80 block md:hidden mt-4">
                For any queries please contact us at{' '}
                <a className="text-rb-red" href="mailto:hello@redbangle.com">
                  hello@redbangle.com
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
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
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(crewsSchema)}
      </Script>
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
export default CrewsServices
