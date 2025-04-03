import {
  FeaturedWorkSection,
  SEO,
  Testimonials,
  TrustedBrandsSection,
  WorkListHeroSection,
  testimonialsDefault,
} from '@/components/shared'
import React, { Children, useEffect } from 'react'
// import { createTestimonialData } from './create'
import { campaignPosts } from '@/utils/dummy'
import { Accordion, Button, SliderButton } from '@/components/ui'
import { postsMapper } from '@/utils/mapper'
import { useState } from 'react'
import { campaignSchema } from '@/components/schema/campaign-schema'
import Link from 'next/link'
import Modal from '@/components/shared/Modal/Modal'
// import { Swiper, SwiperSlide } from 'swiper/react'
import { useLenis } from '@studio-freight/react-lenis'
// import CampiagnPopupSlider from '@/components/ui/campiagnPopupSlider'
import Script from 'next/script'
import { CampaignHorizontalScrollCards } from '@/components/shared/sections/CampaignHorizontalScrollCards/CampaignHorizontalScrollCards'
import CampiagnPopupSlider from '@/components/ui/CampiagnPopupSlider'

const TNC = [
  {
    key: 1,
    title: 'Does Red Bangle help with conceptualization and script writing?',
    content:
      'Yes, we conceptualize and script across genres and formats. Most of our clients simply share a brief, and we then present creative ways to communicate the messages with the target audience.',
  },
  {
    key: 2,
    title: 'Can Red Bangle handle end-to-end campaign creation?',
    content:
      'Yes, we’ve done plenty of this. From a single campaign film to a series of films for one campaign - we support clients across genres. For example, should you want to launch a new software product for the manufacturing industry in North America - we would come up with creative insights, a central campaign idea, craft the copy and design for the campaign, and produce the film(s) or video(s) end to end. We also provide teasers, thumbnails, video descriptions for digital publishing, posters and more to support your campaign needs. Talk to us for end to end campaign services.',
  },
  {
    key: 3,
    title: 'How much do your video production services cost?',
    content: (
      <>
        Cost estimates vary based on the requirement, the effort involved in
        creating the video, the turnaround time as well as the production
        location. For a tailored quote, please{' '}
        <Link href="/contact" className="underline text-rb-red">
          send us a brief
        </Link>
        .
      </>
    ),
  },
  {
    key: 4,
    title: 'Do you create campaigns for Employer Branding and Recruitment?',
    content: (
      <>
        <div>
          We&apos;ve supported clients across industries in achieving diverse
          employer branding objectives - be it scaling up teams in a new region
          or fostering diversity.
        </div>
        <div className="mt-5">
          <Link href="/contact" className="underline text-rb-red">
            Talk to us
          </Link>{' '}
          for engaging storytelling and content for employer branding and
          hiring.
        </div>
      </>
    ),
  },

  {
    key: 5,
    title: 'Do you handle the entire creative process in-house?',
    content:
      'From concept development, scripts, design and production to post-production and final delivery — the entire creative process is managed in-house at Red Bangle. Should local crews or specialized external talent be required for a project — complete creative ownership, quality control, copyright and confidentiality continue to be taken care of by Red Bangle.',
  },
  // {
  //   key: 6,
  //   title: 'Do you provide services internationally?',
  //   content:
  //     'We are a Global Video Agency. We have plenty of experience in producing videos across continents. Our cloud-based processes, a curated network of video crews across 100 countries, trained project managers, a professional global services team, and strategic post-production studios come together to deliver projects across formats and time zones.',
  // },
  {
    key: 7,
    title: 'How do you deliver the final creative outputs and assets?',
    content:
      'Briefs, drafts, and final videos, and all video assets are delivered to the client via Red BangleX - our cloud-based technology platform. This ensures zero-asset-loss and easy asset repurposing.',
  },
  // {
  //   key: 8,
  //   title:
  //     'What are your policies around intellectual property rights and business data confidentiality?',
  //   content:
  //     'We take data security, privacy, confidentiality, and intellectual property rights very seriously. Our practices adhere to global standards. We license every single software and creative asset required and ensure that necessary media release documents are in place, and have service contracts with our partners that explicitly detail the intellectual property rights assigned to the client.',
  // },
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

const campaignCards = [
  {
    id: 1,
    title: 'Creativity for Growth',
    desc: 'Get fresh campaigns & series that deliver on your communication intent and B2B business goals. Supercharge your marketing funnels, hiring campaigns, corporate communications, and more.',
    imgUrl: '/img/services/fresh-creativity.webp',
  },
  {
    id: 2,
    title: 'Quality & Ownership',
    desc: 'Our curated crews, and proven, cloud-based processes drive complete creative ownership at our end. You won’t have to worry about creative quality and consistency across locations and videos.',
    imgUrl: '/img/services/consistent-quality.webp',
  },
  {
    id: 3,
    title: 'Borderless Production',
    desc: 'Be it a campaign film production in Thailand or a series of 50 videos produced across the USA - we’ve got the creatives, the producers, the crews and the processes.',
    imgUrl: '/img/services/borderless-production.webp',
  },
  {
    id: 4,
    title: 'Multi-format Production',
    desc: 'Whether it’s studio-based production with 2D animation or a heart-warming docu-series filmed across terrains - we support the entire range of film and video formats that your global B2B business needs.',
    imgUrl: '/img/services/multi-format--production.webp',
  },
  {
    id: 5,
    title: 'Cloud-based Workflows',
    desc: 'Our custom-built creative production management platform - Red BangleX - lets you track project progress, review videos, and seamlessly share video assets with colleagues. Never chase a deadline or hunt for a video file again!',
    imgUrl: '/img/services/redbangleX.webp',
  },
  {
    id: 6,
    title: 'Limitless Versioning',
    desc: 'Making one film, but need it adapted to several languages and a range of dimensions for various platforms? Try our accurately-managed limitless versioning services. Fulfill every B2B video marketing need your business has! ',
    imgUrl: '/img/services/limitless.webp',
  },
]

export const campignFeaturedWork = [
  {
    id: 0,
    featuredImg: '/img/services/gordon-ritter.webp',
    featuredTitle: 'VYMO',
    featuredSubtext: 'THE NEXT FRONTIER SOFTWARE',
    featuredDescription: (
      <>
        When Vymo wanted to capture a conversation with Gordon Ritter, Founder
        and General Partner, Emergence Capital, on software trends - we proposed
        a unique thought leadership style that would not only feature Gordon
        Ritter, but also showcase the trends graphically. The production in the
        US was then followed by motion graphics design, post production and
        multiple versions of the video focusing on specific messages.
        Here&apos;s Gordon Ritter sharing how organizations can derive value
        from next frontier software like Vymo.
      </>
    ),
    videoId: '894983028',
    moreVideos: [
      {
        vidId: 0,
        moreVideoThumb: '/img/campaign/vymo-1.jpg',
        moreVideoId: '894983028',
      },
      {
        vidId: 1,
        moreVideoThumb: '/img/campaign/vymo-2.jpg',
        moreVideoId: '894982477',
      },
      {
        vidId: 2,
        moreVideoThumb: '/img/campaign/vymo-3.jpg',
        moreVideoId: '894982676',
      },
      {
        vidId: 3,
        moreVideoThumb: '/img/campaign/vymo-4.jpg',
        moreVideoId: '894982800',
      },
      {
        vidId: 4,
        moreVideoThumb: '/img/campaign/vymo-5.jpg',
        moreVideoId: '894982567',
      },
      {
        vidId: 5,
        moreVideoThumb: '/img/campaign/vymo-6.jpg',
        moreVideoId: '894982871',
      },
    ],
  },

  {
    id: 1,
    featuredImg: '/img/services/ikeaa.webp',
    featuredTitle: 'IKEA',
    featuredSubtext: 'IKEA 101 SERIES',
    featuredDescription: (
      <>
        IKEA&apos;s products revolve around a central theme: &quot;smart ways to
        organize homes.&quot; And soon after its launch in India, Ikea wanted a
        series to drive product adoption in the India market. Called the
        &quot;Ikea 101 series&quot;, each video featured an Ikea India employee
        who demonstrated a product. Here are some of the videos from this
        series.{' '}
      </>
    ),
    videoId: '867141321',
    moreVideos: [
      {
        vidId: 0,
        moreVideoThumb: '/img/campaign/ikea-1.jpg',
        moreVideoId: '867141321',
      },
      {
        vidId: 1,
        moreVideoThumb: '/img/campaign/ikea-2.jpg',
        moreVideoId: '894990235',
      },
      {
        vidId: 2,
        moreVideoThumb: '/img/campaign/ikea-3.jpg',
        moreVideoId: '894990377',
      },
      {
        vidId: 3,
        moreVideoThumb: '/img/campaign/ikea-4.jpg',
        moreVideoId: '894990518',
      },
      {
        vidId: 4,
        moreVideoThumb: '/img/campaign/ikea-5.jpg',
        moreVideoId: '894990684',
      },
      {
        vidId: 5,
        moreVideoThumb: '/img/campaign/ikea-6.jpg',
        moreVideoId: '894990939',
      },
      {
        vidId: 6,
        moreVideoThumb: '/img/campaign/ikea-7.jpg',
        moreVideoId: '894991042',
      },
      {
        vidId: 7,
        moreVideoThumb: '/img/campaign/ikea-8.jpg',
        moreVideoId: '894991166',
      },
    ],
  },
  {
    id: 2,
    featuredImg: '/img/services/multiplier.webp',
    featuredTitle: 'MULTIPLIER',
    featuredSubtext: 'INTRODUCING MULTIPLIER',
    featuredDescription: (
      <>
        Multiplier is a SAAS solution that simplifies the complexities of global
        employee onboarding. When Multiplier commissioned us to make an
        explainer video that would help them run an online campaign for lead
        generation and could be used in first-level sales conversations - we
        didn&apos;t just get into the depth of the solution, but also understood
        the business context and the customer mindset. This allowed us to craft
        an explainer video that delivered the core messages in a unique style
        and in a duration and pace that held the viewer&apos;s attention all
        through. Take a look at the explainer video to see how Multiplier
        seamlessly connects a range of puzzle pieces in global HR - including
        global onboarding, payroll and compliance.
      </>
    ),
    videoId: '867140847',
  },

  {
    id: 3,
    featuredImg: '/img/services/vymo.webp',
    featuredTitle: 'VYMO',
    featuredSubtext: 'VYMO FOR SMB BANKERS',
    featuredDescription: (
      <>
        <>
          Vymo - a cool SAAS product that boosts sales engagement for financial
          institutions - has made a series of marketing videos with Red Bangle.
          Some of the videos focus on sub-segments of their BFSI target audience
          such as SMB bankers and insurance wholesalers, while others focus on
          specific features that benefit enterprise sales and support existing
          CRM. We work closely with the client in enhancing scripts, visualising
          in a contextually-relevant manner, and running efficient production
          workflows throughout the year.
        </>
      </>
    ),
    videoId: '867139215',

    moreVideos: [
      {
        vidId: 0,
        moreVideoThumb: '/img/campaign/vymo-smb-1.jpg',
        moreVideoId: '867139215',
      },
      {
        vidId: 1,
        moreVideoThumb: '/img/campaign/vymo-smb-2.jpg',
        moreVideoId: '894997404',
      },
      {
        vidId: 2,
        moreVideoThumb: '/img/campaign/vymo-smb-3.jpg',
        moreVideoId: '894997360',
      },
      {
        vidId: 3,
        moreVideoThumb: '/img/campaign/vymo-smb-4.jpg',
        moreVideoId: '894999030',
      },
    ],
  },
  {
    id: 4,
    isCampaign: true,
    featuredImg: '/img/services/xiaomii.webp',
    featuredTitle: 'XIAOMI',
    featuredSubtext: 'REDMI SMART WATCH',
    featuredDescription: (
      <>
        <>
          &quot;The Redmi Smartwatch 3 launch film offers an exciting look at
          the brand new wearable. The film - designed for a 60-second duration -
          showcases fresh features, sleek design, and how it elevates user
          lifestyle. The master film was further edited to create 3 down edits -
          each featuring one user and a specific set of features. &quot;
        </>
      </>
    ),
    videoId: '868472545',

    moreVideos: [
      {
        vidId: 0,
        moreVideoThumb: '/img/campaign/redmi-1.jpg',
        moreVideoId: '868472545',
      },
      {
        vidId: 1,
        moreVideoThumb: '/img/campaign/redmi-2.jpg',
        moreVideoId: '895008394',
      },
      {
        vidId: 2,
        moreVideoThumb: '/img/campaign/redmi-3.jpg',
        moreVideoId: '895008462',
      },
      {
        vidId: 3,
        moreVideoThumb: '/img/campaign/redmi-4.jpg',
        moreVideoId: '895008518',
      },
    ],
  },
  {
    id: 5,
    featuredImg: '/img/services/jigsaw.webp',
    featuredTitle: 'JIGSAW',
    featuredSubtext: 'PROJECT MANAGEMENT COURSE',
    featuredDescription: (
      <>
        <>
          Jigsaw (now known as U-next) offers a wide range of digital courses to
          help people upskill for careers in information technology. The brand
          wanted a series of marketing videos to generate customer leads online
          and drive course sales. Our creative production team took a fresh
          approach - crafting videos that were to the point and well-designed.
          Take a look at some of the videos from the series - most of which were
          also cut-down to 6-second YouTube ads.
        </>
      </>
    ),
    videoId: '868487552',
    moreVideos: [
      {
        vidId: 0,
        moreVideoThumb: '/img/campaign/jigsaw-1.jpg',
        moreVideoId: '868487552',
      },
      {
        vidId: 1,
        moreVideoThumb: '/img/campaign/jigsaw-2.jpg',
        moreVideoId: '895013752',
      },
      {
        vidId: 2,
        moreVideoThumb: '/img/campaign/jigsaw-3.jpg',
        moreVideoId: '895013824',
      },
      {
        vidId: 3,
        moreVideoThumb: '/img/campaign/jigsaw-4.jpg',
        moreVideoId: '895013878',
      },
      {
        vidId: 4,
        moreVideoThumb: '/img/campaign/jigsaw-5.jpg',
        moreVideoId: '895013948',
      },
      {
        vidId: 5,
        moreVideoThumb: '/img/campaign/jigsaw-6.jpg',
        moreVideoId: '895014054',
      },
    ],
  },
  {
    id: 6,
    featuredImg: '/img/services/belong.webp',
    featuredTitle: 'BELONG.CO',
    featuredSubtext: 'TALENT AND TECH FIRST CEOs',
    featuredDescription: (
      <>
        <>
          We produced a thought leadership series for Belong.co -- a disruptive
          HR-tech company. In this series of 3-camera fireside conversations,
          Vijay Sharma - the CEO of Belong - meets with various leaders across
          tech-enabled and tech-first organisations to discuss how talent and
          technology can help accelerate enterprise growth.
        </>
      </>
    ),
    videoId: '892603098',
    moreVideos: [
      {
        vidId: 0,
        moreVideoThumb: '/img/campaign/belong-1.jpg',
        moreVideoId: '892603098',
      },
      {
        vidId: 1,
        moreVideoThumb: '/img/campaign/belong-2.jpg',
        moreVideoId: '868490889',
      },
      {
        vidId: 2,
        moreVideoThumb: '/img/campaign/belong-3.jpg',
        moreVideoId: '895017613',
      },
    ],
  },
  {
    id: 7,
    featuredImg: '/img/services/tanishq.webp',
    featuredTitle: 'TANISHQ',
    featuredSubtext: 'JEWELS OF INDIA',
    featuredDescription: (
      <>
        <>
          &quot;Tanishq, a popular Indian jewelry brand, wanted to promote
          Indian handcrafted jewelry. The brand - along with journalist Shobha
          Narayan - commissioned a series of films that told the stories of
          unique craftsmanships from the region. Each film featured current-day
          artisans and their process as well as the history and stories around a
          certain jewelry style and state. And each master film was published
          online on YouTube and on a dedicated website along with various edits
          around the process and the lives of the artisans. &quot;
        </>
      </>
    ),
    videoId: '868492284',

    moreVideos: [
      {
        vidId: 0,
        moreVideoThumb: '/img/campaign/tanishq-1.jpg',
        moreVideoId: '868492284',
      },
      {
        vidId: 1,
        moreVideoThumb: '/img/campaign/tanishq-2.jpg',
        moreVideoId: '868488790',
      },
    ],
  },

  {
    id: 8,
    isCampaign: true,
    featuredImg: '/img/services/colearn.webp',
    featuredTitle: 'COLEARN',
    featuredSubtext: 'TEACHERS FOR COLEARN',
    featuredDescription: (
      <>
        <>
          CoLearn - an Indonesian ed-tech startup - needed to hire more
          South-East Asian individuals passionate about STEM education. With the
          Indonesian education system not being equipped to support adequate
          STEM learning in schools, passionate teachers from other Asian
          countries were key to offering supplementary STEM learning online.
          CoLearn already had success in finding and employing remote STEM
          teachers in Malaysia, Singapore, etc. Now, it wanted to showcase their
          work, life and impact to attract more such individuals. We met a few
          teachers of CoLearn virtually, hand-picked stories and narratives we
          felt were most heart-warming, and crafted two videos that celebrated
          the life and work of CoLearn&apos;s STEM educators.
        </>
      </>
    ),
    videoId: '867137489',
    moreVideos: [
      {
        vidId: 0,
        moreVideoThumb: '/img/campaign/colearn-1.jpg',
        moreVideoId: '867137489',
      },
      {
        vidId: 1,
        moreVideoThumb: '/img/campaign/colearn-2.jpg',
        moreVideoId: '895020060',
      },
    ],
  },
  {
    id: 9,
    featuredImg: '/img/services/redbangle.webp',
    featuredTitle: 'RED BANGLE',
    featuredSubtext: "HERE'S TO 2021!",
    featuredDescription: (
      <>
        2020 was a strange year. Lock downs and remote work were a shock to our
        organisation - where people were used to working together at the office
        and on production sets. But we pulled through and how! We doubled the
        number of videos we made, without doing a single shoot between April and
        December. We supported each other through the ups and downs, and our
        commitment to our clients continued unchanged. So, we made a year end /
        beginning social media campaign video that talked about everything the
        world had seen that year, and how we too had transformed, survived and
        thrived. The video uses a unique collage style to bring our narrative
        alive.
      </>
    ),
    videoId: '897887059',
  },

  // {
  //   id: 3,
  //   featuredImg: '/img/services/redbangle.webp',
  //   featuredTitle: 'RED BANGLE',
  //   featuredSubtext: "HERE'S TO 2021!",
  //   featuredDescription: (
  //     <>
  //       <>
  //         When Vymo wanted to capture a conversation with Gordon Ritter, Founder
  //         and General Partner, Emergence Capital, on software trends - we
  //         proposed a unique thought leadership style that would not only feature
  //         Gordon Ritter, but also showcase the trends graphically. The
  //         production in the US was then followed by motion graphics design, post
  //         production and multiple versions of the video focusing on specific
  //         messages. Here&apos;s Gordon Ritter sharing how organizations can
  //         derive value from next frontier software like Vymo.
  //       </>
  //     </>
  //   ),
  //   videoId: '868665870',
  // },

  // {
  //   id: 5,
  //   featuredImg: '/img/services/infosys.webp',
  //   featuredTitle: 'INFOSYS',
  //   featuredSubtext: 'BUSINESS AGILITY WITH RESILIENCE',
  //   featuredDescription: (
  //     <>
  //       <>
  //         When Vymo wanted to capture a conversation with Gordon Ritter, Founder
  //         and General Partner, Emergence Capital, on software trends - we
  //         proposed a unique thought leadership style that would not only feature
  //         Gordon Ritter, but also showcase the trends graphically. The
  //         production in the US was then followed by motion graphics design, post
  //         production and multiple versions of the video focusing on specific
  //         messages. Here&apos;s Gordon Ritter sharing how organizations can
  //         derive value from next frontier software like Vymo.
  //       </>
  //     </>
  //   ),

  //   videoId: '868665870',
  // },
  // {
  //   id: 6,
  //   featuredImg: '/img/services/infosys2.webp',
  //   featuredTitle: 'INFOSYS',
  //   featuredSubtext: 'SPRINGBOARD FOR EUROPE',
  //   featuredDescription: (
  //     <>
  //       <>
  //         When Vymo wanted to capture a conversation with Gordon Ritter, Founder
  //         and General Partner, Emergence Capital, on software trends - we
  //         proposed a unique thought leadership style that would not only feature
  //         Gordon Ritter, but also showcase the trends graphically. The
  //         production in the US was then followed by motion graphics design, post
  //         production and multiple versions of the video focusing on specific
  //         messages. Here&apos;s Gordon Ritter sharing how organizations can
  //         derive value from next frontier software like Vymo.
  //       </>
  //     </>
  //   ),
  //   videoId: '868665870',
  // },
]

const CampaignServices = () => {
  const _posts = campaignPosts.map(postsMapper)
  const [visibleCards, setVisibleCards] = useState(6)
  const [open, setOpen] = useState(false)
  const [videoModalContent, setVideoModalContent] = useState(false)
  const lenis = useLenis()

  const loadMore = () => {
    // Increase the number of visible cards by 6
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6)
  }

  function videoContentTrigger(value) {
    return () => {
      setVideoModalContent((state) => (state === value ? value : value))
      // setActiveVideo(0)

      const videoParent = document.querySelector(
        `.parent-frame[data-id="${value}"] `
      )
      const singleVideoParent = document.querySelector(
        `.single-video-parent[data-id="${value}"] `
      )
      if (videoParent) {
        const videoIframe = videoParent.querySelector('.video-iframe')
        const videoBtns = videoParent.querySelectorAll('.more-video-btn')

        videoBtns.forEach((btn, index) => {
          btn.classList.remove('active')
          if (index === 0) {
            videoIframe.src = `https://player.vimeo.com/video/${btn.dataset.video}?autoplay=1&title=0&byline=0&portrait=0`
            btn.classList.add('active')
          }
        })
      }

      if (singleVideoParent) {
        const singleVideoIframe =
          singleVideoParent.querySelector('.single-vid-iframe')

        singleVideoIframe.src = singleVideoIframe.dataset.src
      }

      setOpen(true)
    }
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.body.style.overflow = 'hidden'
      }, 100)
      lenis?.stop()
    } else {
      document.body.style.overflow = 'visible'
      lenis?.start()
    }
    return () => {
      document.body.style.overflow = 'visible'
      lenis?.start()
    }
  }, [open, lenis])

  useEffect(() => {
    if (!open) {
      const videoIframe = document.querySelectorAll('.video-iframe')
      const singleIframe = document.querySelectorAll('.single-vid-iframe')

      videoIframe.forEach((iframe) => {
        iframe.src = ''
      })
      singleIframe.forEach((iframe) => {
        iframe.src = ''
      })
    }
  }, [open])

  return (
    <>
      <Modal width="max-w-[1060px] w-full" open={open} setOpen={setOpen}>
        {campignFeaturedWork.map(
          ({
            id,
            featuredSubtext,
            featuredTitle,
            videoId,
            featuredDescription,
            moreVideos,
            isCampaign,
          }) => (
            <div className={videoModalContent === id ? '' : 'hidden'} key={id}>
              {moreVideos ? (
                <CampiagnPopupSlider
                  videoId={videoId}
                  featuredSubtext={featuredSubtext}
                  featuredTitle={featuredTitle}
                  featuredDescription={featuredDescription}
                  isCampaign={isCampaign}
                  id={id}
                  data={moreVideos}
                />
              ) : (
                <>
                  <div
                    className="max-w-[1060px] w-full mb-8 single-video-parent pt-10 md:pt-0"
                    data-id={id}
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
                      className="w-full aspect-video h-[180px] md:h-auto single-vid-iframe"
                      data-src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <div className="">
                    <h3 className="text-xl md:text-3xl font-semibold mb-3">
                      {featuredSubtext},&nbsp;
                      <span className="text-rb-black/60 text-base">
                        {featuredTitle}
                      </span>
                    </h3>
                    <p>{featuredDescription}</p>
                  </div>
                </>
              )}
            </div>
          )
        )}
      </Modal>

      <SEO
        title="Video Campaigns for B2B Marketing, Corporate & HR Communication "
        description="Get impactful employer branding campaigns, PR video campaigns & marketing video campaigns from our international team of video communication specialists"
        keywords="Best Commercial Campaigns, Best Campaign Marketing, Famous Advertising Campaigns, Best Recruitment Campaigns, Company Ad Campaigns, Video Ad Campaigns, Active Campaign, Product Ads, Corporate Ads, Best Way To Advertise Your Business, Brand Advertising, Creative Campaigns, Creative Ad, Ad Campaigns, Brand Campaigns, Best Commercial Campaigns, Great Ad Campaigns, Creative Brand Campaigns, Creative Marketing Campaigns"
        url="https://www.redbangle.global/campaigns"
      />
      <section className={`pb-12 md:pb-24 pt-8 md:pt-14  overflow-hidden `}>
        <div className="container">
          <h1 style={{ display: 'none' }}>
            video campaign ideas, scripts and end-to-end production
          </h1>
          {/* <div className="uppercase text-rb-scarlet font-everett font-medium text-[56px] leading-[1.07] tracking-[-1.96px] md:text-[120px] md:leading-[122px] md:tracking-[-1.92px]">
              CAMPAIGN & SERIES
              <br />
            </div>
            <div className="max-w-[1153px] mt-6  md:mt-7 text-rb-black text-sm tracking-[-0.56px] md:text-[32px] md:leading-[1.25] md:tracking-[-0.48px] font-semibold">
              From big campaign films to well-crafted video series - get scalable,
              end-to-end global creative production services with Red Bangle.
              Supercharge your B2B brand today.
            </div> */}
          <WorkListHeroSection
            className="text-rb-scarlet"
            type="CAMPAIGNS"
            typeTwo="SERIES"
            video1="/img/services/campaign1.mp4"
            video2="/img/services/campaign2.mp4"
            outlineClass="outline-text-scarlet"
            pillImg="/img/play-pill.webp"
            CTA
            CTAtext="Send a brief"
            contentClassName="md:max-w-[1046px] font-semibold"
            content={
              <>
                From campaign films to video series - supercharge your B2B brand
                with global, end-to-end creative production services.
              </>
            }
          />
        </div>
        <div style={{ display: 'none' }}>
          <h2>Best Commercial Campaigns</h2>
          <h2>Best Campaign Marketing</h2>
          <h2>Famous Advertising Campaigns</h2>
          <h2>Active Campaign</h2>
          <h2>Product Ads</h2>
          <h2>Corporate Ads</h2>
          <h2>Best Way To Advertise Your Business</h2>
          <h2>Brand Advertising</h2>
          <h2>Creative Campaigns</h2>
          <h2>Creative Ad</h2>
          <h2>Ad Campaigns</h2>
          <h2>Brand Campaigns</h2>
          <h2>Best Commercial Campaigns</h2>
        </div>
      </section>

      <section className={`py-12 md:py-24 bg-rb-mercury`}>
        <div className="container relative">
          <h2 className="text-title md:text-title-md mb-10 md:mb-14 font-everett max-w-[343px] md:max-w-[832px]">
            Explore Our Work
          </h2>
          {/* <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-8 md:mt-10">
              {campignFeaturedWork.map((v) => (
                <a
                  href="#!"
                  key={v.id}
                  className="bg-rb-mercury rounded-md md:rounded-xl p-4 duration-300 ease-out hover:bg-rb-red group"
                >
                  <div className="h-[150px] md:h-[230px] overflow-hidden">
                    <img
                      src={v.featuredImg}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
  
                  <div className="pt-4">
                    <h3 className="font-everett text-2xl font-medium duration-300 ease-out group-hover:text-white">
                      {v.featuredTitle}
                      <span className="text-rb-black/60 text-base duration-300 ease-out group-hover:text-white">
                        {v.featuredSubtext}
                      </span>
                    </h3>
                  </div>
                </a>
              ))}
            </div> */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-8 md:mt-10">
            {campignFeaturedWork.slice(0, visibleCards).map((v) => (
              <button
                onClick={videoContentTrigger(v.id)}
                href="#!"
                key={v.id}
                className="bg-white rounded-md md:rounded-xl p-4 duration-300 ease-out hover:bg-rb-red group"
              >
                <div className="h-[150px] md:h-[230px] overflow-hidden">
                  <img
                    src={v.featuredImg}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-everett text-lg md:text-2xl font-medium duration-300 ease-out group-hover:text-white">
                    {v.featuredSubtext},&nbsp;
                    <span className="text-rb-black/60 text-base duration-300 ease-out group-hover:text-white">
                      {v.featuredTitle}
                    </span>
                  </h3>
                </div>
              </button>
            ))}
          </div>
          {visibleCards < campignFeaturedWork.length && (
            <div className="text-center mt-12">
              <Button
                intent="p-secondary"
                className="mx-auto "
                onClick={loadMore}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>

      <CampaignHorizontalScrollCards data={campaignCards} />

      <Testimonials
        className="py-12 md:py-24 !bg-rb-mercury"
        testimonialData={testimonialsDefault}
        type="semi"
      />

      <TrustedBrandsSection className="pt-12 md:pt-24 md:pb-12 pb-6" />

      <FeaturedWorkSection
        posts={_posts}
        href="/work/create"
        title="Explore Film Campaigns & Series"
      />
      {/* <div className="py-15">
        </div> */}

      <section className="py-6 md:py-12 overflow-hidden">
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
                serviceTitle: 'VIDEO',
                serviceDescription:
                  'Fuel your brand growth with global video production services. Go from concept and script to design, production, post-production, and versioning in one seamless journey. From explainer videos and customer testimonials to corporate films - choose Red Bangle for scalable B2B video production.',
                serviceAmblem: '/img/industries/create-circle.svg',
                bgColor: 'bg-rb-torch-red',
                href: '/videos',
              },
              {
                id: 2,
                serviceTitle: 'CREWS',
                serviceDescription:
                  'Book professional video crews on-demand in 100 countries. Our team of experienced producers curates video crews for every brief and location, manages the shoots and quality-checks the footage for you. Shoot video testimonials, events, drone footage, and more whenever you need them and wherever you need them!',
                serviceAmblem: '/img/industries/play-circle.svg',
                bgColor: 'bg-rb-rosa',
                href: '/crews',
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

      <section className="md:pt-12 pt-6 md:pb-24 pb-12">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                  Frequently Asked Questions
                </h3>
                {/* <div className="text-[16px] md:text-[20px] leading-[1.5] text-rb-black/80 mb-8 md:mb-0">
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
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(campaignSchema)}
      </Script>
    </>
  )
}

export default CampaignServices
