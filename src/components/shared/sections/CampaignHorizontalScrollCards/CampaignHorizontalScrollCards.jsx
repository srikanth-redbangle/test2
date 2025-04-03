import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

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

export const CampaignHorizontalScrollCards = ({
  data = [],
  title = 'Take the effort out of campaigns and content for B2B growth marketing',
  titleClass = 'md:max-w-[832px]',
}) => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    let cardContainer = document.querySelector('.feature-slider')
    let lineProgress = document.querySelector('.progress-slider')
    const mm = gsap.matchMedia()
    let tl = null

    const width = cardContainer.scrollWidth - cardContainer.offsetWidth
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.featured-section',
        start: '20% 30%',
        end: '70% 5%',
        scrub: true,
        // markers: true,
      },
    })
    tl.fromTo(cardContainer, { x: 0 }, { x: -width })
    tl.fromTo(lineProgress, { xPercent: -100 }, { xPercent: 0 }, 0)

    return () => tl.kill()
  }, [])

  return (
    <section className="py-7.5 md:py-15 bg-white  h-[300vh] featured-section">
      <div className=" sticky top-[10%] md:top-5">
        <div className="overflow-hidden">
          <div className="container">
            <h2
              className={`text-title md:text-title-md mb-10 md:mb-18 font-everett max-w-[343px] ${titleClass}`}
            >
              {title}
            </h2>
            <div className="flex gap-8 feature-slider">
              {data.map((c) => (
                <div key={c.id} className="min-w-full md:min-w-[33.33%]">
                  <div className="h-full bg-rb-mercury rounded-2xl p-8 duration-300 ease-out hover:bg-[#DCDDDF] flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-3xl mb-3 font-medium font-everett">
                        {c.title}
                      </h3>

                      <p className="opacity-90 font-normal mb-5">{c.desc}</p>
                    </div>

                    <div className="h-[166px] overflow-hidden">
                      <img
                        src={c.imgUrl}
                        className="w-full h-full object-cover"
                        alt={c.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-2 bg-rb-black/10 w-full relative overflow-hidden mt-16">
              <div className="progress-slider absolute inset-0 w-full h-full bg-rb-red"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
