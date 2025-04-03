import React, { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { LineHeading, SEO, VideoModal } from '../components/shared'
import { Swiper, SwiperSlide } from 'swiper/react'
import { csrSchema } from '@/components/schema/csr-schema'
import { ArrowButtonSlider } from '@/components/sliders/ArrowButtonSlider'
import { SliderButton } from '@/components/ui'

const videoList = [
  {
    id: 0,
    title: 'Industree ',
    youtubeThumbnail: '/img/csr/industree.webp',
    url: 'https://www.youtube.com/embed/4pxJSzRnH28?si=aCfgT9BwRNn74ZjS&autoplay=1',
  },
  {
    id: 1,
    title: 'Frontier Markets',
    youtubeThumbnail: '/img/csr/frontier-markets.webp',
    url: 'https://www.youtube.com/embed/OGTd7CntCJ8?si=vn2fXJjRT7rwKSeL&autoplay=1',
  },
  {
    id: 2,
    title: 'Garv Toilets',
    youtubeThumbnail: '/img/csr/garv-toilets.webp',
    url: 'https://www.youtube.com/embed/GrWVORRgE2w?si=ZHGw4ZhnXjYtByYc&autoplay=1',
  },
  {
    id: 3,
    title: 'India Hikes',
    youtubeThumbnail: '/img/csr/india-hikes.webp',
    url: 'https://www.youtube.com/embed/ZcBEya8vjhM?si=tIfoC7qH-tyRWY7a&autoplay=1',
  },
  // {
  //   id: 4,
  //   title: 'Seva Mob',
  //   youtubeThumbnail: '/img/csr/ep-128.webp',
  //   url: 'https://sevamob.com/&autoplay=1',
  // },
  {
    id: 5,
    title: 'Menstrual Educator',
    youtubeThumbnail: '/img/csr/menstrual-educator.webp',
    url: 'https://www.youtube.com/embed/yrDCYypBW2o?si=WWum5PBdtC7tJ95l&autoplay=1',
  },
  {
    id: 6,
    title: 'iKure',
    youtubeThumbnail: '/img/csr/ikure.webp',
    url: 'https://www.youtube.com/embed/WAVkQAKMMIA?si=vLw0FJpTHpFTen0C&autoplay=1',
  },
  {
    id: 7,
    title: 'Pollinate Energy',
    youtubeThumbnail: '/img/csr/pollinate-energy.webp',
    url: 'https://www.youtube.com/embed/3PpzG7Qd8gA?si=Y3lD_CPZF2SLCbR5&autoplay=1',
  },
  {
    id: 8,
    title: 'Dream a Dream',
    youtubeThumbnail: '/img/csr/dream-a-dream.webp',
    url: 'https://www.youtube.com/embed/u7oeKM-6SWM?si=YWUfzLw0knpiBdcQ&autoplay=1',
  },
  {
    id: 9,
    title: 'Enable India',
    youtubeThumbnail: '/img/csr/enable-india.webp',
    url: 'https://www.youtube.com/embed/O-Nw-ZnCcco?si=epEZHW0KAQ8NAbGs&autoplay=1',
  },
  {
    id: 10,
    title: 'Afforest',
    youtubeThumbnail: '/img/csr/afforest.webp',
    url: 'https://www.youtube.com/embed/BVoifmZCfNc?si=Vt3TWvLs25nxJV-Z&autoplay=1',
  },
]

export const CSRPage = () => {
  const [youTubeUrl, setYouTubeUrl] = useState(null)
  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const onModalOpen = (e, url) => {
    setHerovideoOpen(true)
    setYouTubeUrl(url)
    e.stopPropagation()
  }

  useEffect(() => {
    if (!herovideoOpen) {
      setYouTubeUrl(null)
    }
  }, [herovideoOpen])

  const sliderRef = useRef()

  return (
    <>
      <SEO
        title="Inspiring Social Change Through Digital Content"
        description="Take a look at our impact projects, volunteering work and the stories of businesses that are bring positive change to our environment and communities."
        keywords="Stories Of Social Impact, Impact Entrepreneuership, Lakshmi Rebecca Show, Talk Show, Volunteering, Interviewing Entrepreneurs, Volunteering Work, ESG, Social Responsibility, CSR"
        url="www.redbangle.com/social-impact"
      />
      <section className="bg-white py-15 md:py-30">
        <div className="container">
          <div className="text-[56px] tracking-[-1px] md:text-[72px] lg:text-[120px] uppercase leading-[100%] md:tracking-[-1.92px] font-everett font-medium">
            CONTENT FOR SOCIAL IMPACT
          </div>
          <p className="text-sm md:text-accordion-large font-semibold max-w-[1153px] mt-4 md:mt-20">
            While we are busy supporting your growth with strategic brand
            content, we also make time to inspire social change through digital
            content. Take a look at our social impact project. 
          </p>

          <div style={{ display: 'none' }}>
            <h2>Stories Of Social Impact</h2>
            <h2>Impact Entrepreneurship</h2>
            <h2>Lakshmi Rebecca Show</h2>
            <h2>Talk Show</h2>
            <h2>Volunteering</h2>
            <h2>Interviewing Entrepreneurs</h2>
            <h2>Volunteering Work</h2>
            <h2>ESG</h2>
            <h2>Social Responsibility</h2>
            <h2>CSR</h2>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-rb-service-grey py-15 md:pt-0 md:pb-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="block md:hidden px-4">
              <LineHeading className="mb-6 md:mb-9">
                meet the showstopper
              </LineHeading>
              <h3 className=" text-title md:text-title-md font-everett font-medium mb-6 md:mb-8">
                The Lakshmi Rebecca&nbsp;Show
              </h3>
            </div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/img/csr/lakshmi_2x.webp"
                width="1416"
                height="1580"
              />
              <img
                src="/img/csr/lakshmi.webp"
                alt=""
                width="708"
                height="790"
                className="w-full"
              />
            </picture>
          </div>
          <div className="w-full md:w-1/2 pt-12 md:pt-0 px-4 md:pl-14 max-w-[586px]">
            <div className="hidden md:block">
              <LineHeading className="mb-6 md:mb-9">
                Storytelling for change
              </LineHeading>
              <h3 className=" text-title md:text-title-md font-everett font-medium mb-6 md:mb-8">
                The Lakshmi Rebecca&nbsp;Show
              </h3>
            </div>
            <p className="text-lg text-rb-black/80">
              Positive social change is a shared goal at Red Bangle. We believe
              that a good, true story can inspire a hundred more. That’s why
              we’ve been creating an inspiring YouTube series on social
              entrepreneurs in India. Hosted by Lakshmi Rebecca (Co-founder, Red
              Bangle), the series features handpicked stories of sustainable,
              scalable and proven impact businesses. We invest up to a month in
              crafting each episode to bring you an engaging, information-filled
              and moving story of the business, its beneficiaries and the
              entrepreneur. The Lakshmi Rebecca Show has over 10Mn views across
              platforms and is funded by Red Bangle.
            </p>
          </div>
        </div>
        <div className="bg-white py-16 md:py-24 ">
          <div className="container">
            <div className="flex gap-6 justify-between mb-10">
              <div className="flex-1 text-xl md:text-4xl font-medium tracking-[-0.8px] md:tracking-[-1.44px] font-everett">
                Catch Some Inspiration
              </div>

              <div className="">
                <SliderButton
                  left
                  onClick={() => {
                    sliderRef.current.slidePrev()
                  }}
                />
                <SliderButton
                  className="ml-1"
                  onClick={() => {
                    sliderRef.current.slideNext()
                  }}
                />
              </div>
            </div>

            <Swiper
              onSwiper={(swiper) => (sliderRef.current = swiper)}
              spaceBetween={12}
              slidesPerView={1}
              className="swiper-overflow-visible"
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              // onSwiper={(swiper) => (sliderRef.current = swiper)}
            >
              {videoList.map(({ id, title, url, youtubeThumbnail }) => (
                <SwiperSlide key={id}>
                  <button
                    data-rb-cursor
                    data-rb-cursor-type="play"
                    onClick={(e) => onModalOpen(e, url)}
                    className="w-full block"
                  >
                    <div className="h-[240px] overflow-hidden mb-4 relative">
                      {/* <div className=" absolute top-4 left-4 border border-white text-white rounded-full py-2 px-4">
                      EP 148
                    </div> */}
                      <img
                        src={youtubeThumbnail}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>

                    <h3 className="font-everett text-base md:text-2xl font-medium">
                      {title}
                    </h3>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            {youTubeUrl && (
              <VideoModal
                youtubeVideo={youTubeUrl}
                open={herovideoOpen}
                setOpen={setHerovideoOpen}
              >
                <iframe
                  className="youtube-iframe w-full aspect-video max-w-[95%] md:max-w-[80%]"
                  src="https://www.youtube.com/embed/4pxJSzRnH28?si=aCfgT9BwRNn74ZjS"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </VideoModal>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 overflow-hidden hidden">
        <div className="container">
          <h2 className="text-title md:text-title-md mb-10 font-everett md:mb-18">
            Measuring our Social Impact
          </h2>

          <Swiper
            spaceBetween={12}
            slidesPerView={1.2}
            className="swiper-overflow-visible"
            breakpoints={{
              768: {
                slidesPerView: 2.1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 24,
              },
            }}
            // onSwiper={(swiper) => (sliderRef.current = swiper)}
          >
            {[
              {
                id: 0,
                title: 'Promoting Girl Education',
                date: 'June 20, 2023',
                image: 'girl-education.jpg',
              },
              {
                id: 1,
                title: 'Community Health Camps',
                date: 'Jan 13, 2023',
                image: 'community-health-camps.jpg',
              },
              {
                id: 2,
                title: 'Sustainable Healthcare P',
                date: 'Jan 15 , 2023',
                image: 'sustainable-healthcare.jpg',
              },
            ].map(({ id, title, date, image }) => (
              <SwiperSlide key={id}>
                <div className="border border-black/10">
                  <div className="p-6">
                    <p className="text-lg opacity-60 mb-2">{date}</p>

                    <h3 className="font-everett font-medium text-xl md:text-3xl tracking-[-1.12px]">
                      {title}
                    </h3>
                  </div>

                  <div className="h-[175px] md:h-[424px] overflow-hidden">
                    <img
                      src={`/img/csr/${image}`}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(csrSchema)}
      </Script>
    </>
  )
}

export default CSRPage
