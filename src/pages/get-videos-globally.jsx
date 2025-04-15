import {
  LineHeading,
  Marquee,
  RevealText,
  StatsSection,
} from '@/components/shared'
import { VideoModal } from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import { Testimonials } from '@/components/shared'
import { useState } from 'react'
import { getGlobalWorks } from '@/utils/graphql'
import { formatGlobalPosts } from '@/utils/formate'
import { logoIcons } from './abc'
import { ContactForm } from '@/components/shared/sections/ContactForm'
import { CampaignHorizontalScrollCards } from '@/components/shared/sections/CampaignHorizontalScrollCards/CampaignHorizontalScrollCards'
import { FeaturedGlobalVideoSectionNew } from '@/components/shared/sections/Services/FeaturedGlobalVideoSectionNew'

const testimonialsDefault = [
  {
    key: 0,
    quote:
      'We are delighted to team up with Red Bangle to promote the fight against childhood cancer in Romania! The video showcases the ability of the creatives and product managers at Red Bangle to deliver a very compelling case for our innovative work, and to capture the hearts and minds of the audience.',
    name: 'Alina Pătrăhău',
    designation: 'Founder Dara',
    company: 'BRIGHT PARTNERSHIPS',
    image: {
      srcSet:
        '/img/testimonials/alina-patrahau.jpg, /img/testimonials/alina-patrahau_2x.jpg',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 1,
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
    key: 3,
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
  {
    key: 4,
    quote:
      'The Red Bangle team is fantastic to work with! They add value not just from a creative standpoint but also in terms of communication strategy.',
    name: 'Roshan Cariappa',
    designation: 'VP Marketing',
    company: 'Vymo',
    image: {
      srcSet:
        '/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

const GetVideosGlobally = ({ works }) => {
  // console.log("👉🏼👉🏼👉🏼 => GetVideosGlobally => works:", works)
  const filteredArrayData = [...works]

  const crew = [
    {
      id: 0,
      imgsrc: '/img/articles/Multiplier-2.jpg',
      title: 'SAAS Marketing Explainer',
      workDetails: {
        videolink: 'https://vimeo.com/1008706394?share=copy#t=0',
      },
      content: 'Multiplier is a SAAS solution that simplifies the complexities of global employee onboarding. This explainer video shows how Multiplier seamlessly connects the HR puzzle pieces – including global onboarding, payroll and compliance.',
      companies: { nodes: [{ name: 'Multiplier' }] },
      tags: { nodes: [{ slug: 'Marketing-Events', name: 'Marketing & Events' }] },
      usage: { nodes: [{ name: 'Explainer' }] },
      // videoDetails: {
      //   publish: '2023-09-12',
      //   width: 1920,
      //   height: 1080,
      //   aspectRatio: '16:9',
      //   duration: '3 mins',
      //   fps: 30,
      // },
    },
    {
      id: 1,
      imgsrc: '/img/articles/SLB.png',
      title: `Sales Digitization Demo`,
      workDetails: {
        videolink: 'https://vimeo.com/1008706015?share=copy#t=0',
      },
      content: <div>SLB is one of the world&apos;s largest offshore drilling companies and it drives global innovation in oilfield services. This interactive video introduces their tool kit in an informative yet exciting manner to drive technology adoption amongst internal users. The approach taken shuns jargon and ensures that each service module unfolds as persona-specific narratives. <br /><br />Check out the full project case study <a href="https://www.redbangle.global/videos/case-study/slb" className='text-rb-red' target="_blank" rel="noopener noreferrer">here.</a></div>,
      companies: { nodes: [{ name: 'Schlumberger' }] },
      tags: { nodes: [{ name: 'Corp Comm ' }] },
      usage: { nodes: [{ name: 'Explainer' }] },
    },
    {
      id: 2,
      imgsrc: '/img/articles/virtusa.png',
      title: `Marketing Explainer`,
      workDetails: {
        videolink: 'https://vimeo.com/1008706511?share=copy',
      },
      content: `Virtusa combines logic, creativity and curiosity to build, solve, and create solutions for their client’s challenges. This lead generation video showcases Virtusa’s Service Transformation offering for the insurance industry. It uses animation to simplify the platform’s multiple benefits and highlights its role in streamlining service operations and achieving customer satisfaction.`,
      companies: { nodes: [{ name: 'Virtusa ' }] },
      tags: { nodes: [{ name: 'Marketing ' }] },
      usage: { nodes: [{ name: 'Explainer' }] },
    },
    //     {
    //       id: 3,
    //       imgsrc: '/img/articles/skype.png',
    //       title: 'Skype for Business',
    //       workDetails: {
    //         videolink: 'https://vimeo.com/1008705942?share=copy#t=0',
    //       },
    //       content: `Skype for Business is an enterprise software application for instant messaging and video telephony developed by Microsoft as part of the Microsoft 365 suite. 
    // In this animated explainer, Microsoft explains how to use Outlook with integrated Skype for Business in a use-case, demonstrating the device adaptability and ease of use at the office, on the go and during remote work.`,
    //       companies: { nodes: [{ name: 'Microsoft' }] },
    //       tags: { nodes: [{ name: 'Marketing ' }] },
    //       usage: { nodes: [{ name: 'Explainer' }] },
    //     },
    {
      id: 3,
      imgsrc: '/img/articles/Isprava.jpg',
      title: ' GEN A.I. Video',
      workDetails: {
        videolink: 'https://vimeo.com/1012671974?share=copy',
      },
      content: `Isprava creates unparalleled living experiences with their luxury villas in Goa. In this Gen AI and animation blended film, Isprava takes inspiration from traditional Portuguese Azulejo tiles commonly found in Goa and pays tribute to Goa’s rich cultural history. Every frame is infused with intricate and fun details – from the indigenous flora and fauna to the vibrant colors.`,
      companies: { nodes: [{ name: ' Isprava' }] },
      tags: { nodes: [{ name: 'Marketing ' }] },
      usage: { nodes: [{ name: 'Demo' }] },
    },
    {
      id: 4,
      imgsrc: '/img/articles/koo.png',
      title: 'App Feature Demo',
      workDetails: {
        videolink: 'https://vimeo.com/1008705901?share=copy#t=0',
      },
      content: `Koo is an Indian microblogging and social networking service, available in regional Indian languages. In this animated demo video, Koo shares its self-authentication feature that allows users to self-verify online in a few simple steps. Made in both Hindi and English, and the video was made compatible for a variety of digital platforms to ensure a wide audience reach. `,
      companies: { nodes: [{ name: 'Koo' }] },
      tags: { nodes: [{ name: 'Marketing ' }] },
      usage: { nodes: [{ name: 'Explainer / Demo ' }] },
    },
    // {
    //   id: 5,
    //   imgsrc: '/img/articles/vyomo.png',
    //   title: 'Vymo',
    //   workDetails: {
    //     videolink: 'https://vimeo.com/1008705746?share=copy#t=0',
    //   },
    //   content: 'Vymo is a sales engagement platform for global BFSI enterprises. It offers an intelligent sales frontend that helps drive interventions across the customer lifecycle to improve outcomes. This video demonstrates the Vymo app using real app imagery, animations and stock music. ',
    //   companies: { nodes: [{ name: 'Vymo' }] },
    //   tags: { nodes: [{ name: 'Marketing' }] },
    //   usage: { nodes: [{ name: 'Demo' }] },
    // },
    {
      id: 5,
      imgsrc: '/img/articles/Jigsaw.png',
      title: ' Lead Gen Video',
      workDetails: {
        videolink: 'https://vimeo.com/1010564152?share=copy',
      },
      content: 'Jigsaw (now known as U-next) – offers a wide range of digital courses that help people upskill. The brand needed videos to generate sales leads online. Our creative production team took a fresh approach, crafting videos that were to the point, well-designed, and helped drive course sales.',
      companies: { nodes: [{ name: 'Jigsaw' }] },
      tags: { nodes: [{ name: 'Marketing & Events' }] },
      usage: { nodes: [{ name: 'Explainer' }] },
    },
    {
      id: 6,
      imgsrc: '/img/articles/redbangle.png',
      title: 'Platform Explainer',
      workDetails: {
        videolink: 'https://vimeo.com/1008705722?share=copy#t=0',
      },
      content: `In this video, we at Red Bangle describe our vision for technology-enabled integrated brand content services. Our goal is to help ambitious brands easily commission and manage campaigns and content, and drive ROI using our future platform. `,
      companies: { nodes: [{ name: 'Red Bangle' }] },
      tags: { nodes: [{ name: ' Corp Comm' }] },
      usage: { nodes: [{ name: 'Demo' }] },
    },
    {
      id: 6,
      imgsrc: '/img/articles/Wipro.png',
      title: `Animated Case Study`,
      workDetails: {
        videolink: 'https://vimeo.com/1010564112?share=copy',
      },
      content: `When WIPRO wanted to showcase its cutting edge solutions for the healthcare sector, they roped in Red Bangle to make a series of 24 videos for the big HIMSS event in the USA. Here’s one of them.`,
      companies: { nodes: [{ name: 'Wipro' }] },
      tags: { nodes: [{ name: ' Marketing & Events ' }] },
      usage: { nodes: [{ name: 'Explainer' }] },
    },
  ]





  const heroListitems = [
    {
      id: 0,
      text: 'Creative videos that wow',
    },
    {
      id: 1,
      text: 'Timely delivery with cloud-based workflows ',
    },
  ]

  const videoCards = [
    // {
    //   id: 0,
    //   imgUrl: '/img/services/global-video.webp',
    //   title: 'Creative Video Agency',
    //   desc: 'Experience the power of a creative video agency that thinks for your B2B brand and crafts stories the world over. We’ve got the Writers, Directors and Crews for every video brief. Supercharge your marketing, hiring, corporate communications, and more!',
    // },
    // {
    //   id: 0,
    //   imgUrl: '/img/services/video-across.webp',
    //   title: 'Any format, any location',
    //   desc: 'Be it an interactive video crafted using 2D animation or a documentary film shot across the USA - we support a wide range of video formats, across locations. We make scalable video production easy for your B2B brand.',
    // },
    // {
    //   id: 1,
    //   imgUrl: '/img/services/create-process-trimmed.webp',
    //   title: 'Borderless Production',
    //   desc: 'From Sydney and Singapore to New York and Bangalore, we offer professional video crews worldwide. Get curated crews and hands-on quality control no matter which location.',
    // },
    // {
    //   id: 2,
    //   imgUrl: '/img/services/video-shoot-service-4.webp',
    //   title: 'Creative Video Agency',
    //   desc: 'Experience the power of a creative video agency that thinks for your B2B brand and crafts stories the world over. We’ve got the Writers, Directors and Crews for every video brief.',
    // },
    // {
    //   id: 3,
    //   imgUrl: '/img/services/video-shoot-service-1.webp',
    //   title: 'Videos Across Formats',
    //   desc: 'From interactive 2D explainer videos, live action ad films to mixed-format corporate films – we support a wide range of video formats, making scalable content effortless for your brand.',
    // },
    // {
    //   id: 4,
    //   imgUrl: '/img/services/video-shoot-service-2.webp',
    //   title: 'End-to-end Solutions',
    //   desc: 'Go from concepts, scripts, visualization, and design to production, post-production, reviews and versioning with Red Bangle. Our end-to-end services and cloud-based workflows ensure on-time delivery, everytime.',
    // },

    {
      id: 1,
      imgUrl: '/img/services/global-video.webp',
      title: 'Creative Video Agency',
      desc: `Experience the power of a creative video agency that thinks for your B2B brand and crafts stories the world over. We’ve got the Writers, Designers and Animators for every video brief.`,
    },
    {
      id: 2,
      imgUrl: '/img/services/fresh-scripts.webp',
      title: 'Fresh Scripts & Stories',
      desc: 'Get fresh concepts, scripts, great graphic design, and premium animation. Get videos that wow your audience. Kick off a brief with Red Bangle, today!',
    },
    {
      id: 3,
      imgUrl: '/img/services/end-to-end.webp',
      title: 'End-to-end Solutions',
      desc: 'Go from concepts, scripts, visualization, and design to production, post-production, reviews and versioning with one B2B video agency. Get end-to-end video services across formats with Red Bangle.',
    },
    {
      id: 4,
      imgUrl: '/img/services/video-across.webp',
      title: ' Any Format, Any Genre',
      desc: 'From interactive 2D explainer videos, animated ad films to mixed-format corporate films – we support a wide range of video formats, making scalable content effortless for your brand.',
    },
    {
      id: 5,
      imgUrl: '/img/services/redbangleX.webp',
      title: 'Cloud-based Workflows',
      desc: 'Our custom-built creative production management platform lets you track project progress, review videos, and seamlessly share video assets with colleagues. Never chase a deadline or hunt for a video file again',
    },
    {
      id: 6,
      imgUrl: '/img/services/limitless.webp',
      title: 'Limitless Versioning',
      desc: 'Making one film, but need it adapted to several languages and a range of dimensions for various platforms? Choose Red Bangle for accurately managed limitless versioning services. Fulfill every B2B video marketing need your business has! ',
    },
  ]

  return (
    <>
      <SEO
        title="Global Corporate Video Production Company | Red Bangle"
        description="Red Bangle offers seamless video production for corporate, testimonial, and leadership videos. Partner with us for hassle-free filming in 100+ countries."
        keywords="Commercial Photographer, Event Photographer, Professional Photographers, Photographers, Photography Director, Video Director, Action Camera, Drone With Camera, Photography Crew, Video Crew, Company Headshots, Hire Drone Videographer, Event Photographer, Commercial Photographer, Corporate Professional Headshots, Professional Photo Shoot, Video Film Company, Videographer For Rent, Video Shoot, Cinematographer, Videography, Real Estate Photography, Product Photography, Aerial Photography, Professional Photographer, Headshot Photography, Drone Photography, Business Headshots, Local Photographers, Best Drone Photography, Corporate Videographer, Hire A Photographer, Jewelry Photography, Best Photographer For Wedding, Camera Crew, Digital Filmmaking, Drone Photo, Commercial Headshot, Contemporary Corporate Headshots"
        url="https://www.redbangle.global/get-videos-globally"
      />
      <section className="pb-12 md:pb-25 pt-8 md:pt-20 overflow-hidden bg-rb-mercury">
        <div className="container">
          <h1 style={{ display: 'none' }}>Expert Demo & Explainer Creators</h1>

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

          <div className="flex justify-center items-start md:flex-row flex-col gap-6">
            <div className="w-full md:w-7/12">
              <div className="md:text-[80px] text-[40px] leading-[1.02] font-everett font-medium uppercase tracking-[-1.6px]">
                <div className="flex items-center gap-5">
                  Awesome
                  <div className="md:w-[142px] w-[75px] rounded-[40px] overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      // src="/img/services/crew2.mp4"
                      src="/img/services/video2.mp4"
                      className="w-full h-full object-cover rounded-[40px]"
                    ></video>
                  </div>
                </div>
                Explainer & 
                <br />Demo Videos
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
                Kick start your marketing video today.
                </div>
                <ContactForm CTAbreak pickCampaign={false} ID="3" />
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
        className="pt-12 md:pt-14 pb-0 md:pb-15"
      />

      <section className=" md:pt-15 pt-12">
        <div className="container">
          <LineHeading className=" md:mb-7.5">Featured work</LineHeading>
          <div className="text-title md:text-title-md md:mt-9 mt-8 font-everett font-medium max-w-[1080px]">
            {/* Go from scripts to post-production, <br />
            in one seamless workflow. */}
            <RevealText
              text={`Go from scripts and design to post-production, in one seamless workflow.`}
            />
          </div>
        </div>
      </section>
      <FeaturedGlobalVideoSectionNew
        crew={crew}
        customClass="md:pb-10 md:py-2 md:mt-5 bg-[#F1F2F6]"
        stickyBg
      />

      <CampaignHorizontalScrollCards
        data={videoCards}
        title="Scalable video production made easy for B2B brands"
        titleClass="md:max-w-full"
      />

      <Testimonials
        className="py-7.5 md:pb-30"
        testimonialData={testimonialsDefault}
        type="semi"
      />
    </>
  )
}
export async function getStaticProps() {
  const { data } = await getGlobalWorks()

  const works = formatGlobalPosts(data?.works?.nodes).filter(
    (obj) => obj?.globalLp?.globalLpVideo
  )

  return {
    props: {
      works,
      // tags: [tagProp.find((t) => t.value == 'featured-work'), ...filtered],
    },
  }
}

GetVideosGlobally.PageLayoutProps = {
  formHeading: ' Get started on expertly crafted explainers and demos today.',
  // formHeading: 'Get started on your global production with Red Bangle',
}

export default GetVideosGlobally
