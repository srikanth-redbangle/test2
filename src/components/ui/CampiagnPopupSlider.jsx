import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LineArrow } from '../icons'

const CampiagnPopupSlider = ({
  videoId,
  featuredTitle,
  featuredDescription,
  isCampaign,
  id,
  data,
}) => {
  const sliderRef = useRef()

  const handlePrev = () => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }

  const handleNext = () => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }

  useEffect(() => {
    const moreVideosBtn = document.querySelectorAll('.more-video-btn')
    // const videoIframe = document.querySelectorAll('.video-iframe');

    moreVideosBtn.forEach((button) => {
      const parentGrid = button.closest('.parent-frame')
      const videoIframe = parentGrid.querySelector('.video-iframe')

      button.addEventListener('click', () => {
        videoIframe.src = `https://player.vimeo.com/video/${button.dataset.video}?autoplay=1&title=0&byline=0&portrait=0`
        parentGrid.querySelector('.active').classList.remove('active')
        button.classList.add('active')
      })
    })
  }, [])

  return (
    <div className="parent-frame" data-id={id}>
      <div className="grid md:grid-cols-2 gap-7 mb-12">
        <div className="w-full">
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
            className="w-full aspect-video h-[180px] md:h-auto video-iframe"
            frameborder="0"
            data-src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="max-h-[265px] overflow-auto rb-scrollbar">
          <h3 className="text-xl md:text-3xl font-semibold mb-3">
            {featuredTitle}
          </h3>
          <p>{featuredDescription}</p>
        </div>
      </div>

      <div className="relative">
        <h3 className="text-xl md:text-3xl font-semibold mb-6">
          See more from this {isCampaign ? 'campaign' : 'series'}
        </h3>

        <Swiper
          // className="swiper-overflow-visible"
          ref={sliderRef}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 24,
            },
          }}
        >
          {data.map(({ moreVideoThumb, moreVideoId, vidId }) => (
            <SwiperSlide
              className="relative group"
              key={vidId}
              // data-playing={selected == i}
            >
              <button
                // onClick={changeVideoOnClick}
                className={`w-full cursor-pointer more-video-btn relative h-[110px] md:h-[140px] ${
                  vidId === 0 ? 'active' : ''
                }`}
                data-video={moreVideoId}
              >
                <img
                  src={moreVideoThumb}
                  alt=""
                  className="w-full h-full object-cover ease-out duration-300"
                />
                <div className="inset-0 m-auto absolute play-btn w-12 h-12 bg-black/60 rounded-full flex justify-center items-center">
                  <svg
                    className="w-4 h-auto"
                    width="26"
                    height="33"
                    viewBox="0 0 26 33"
                    fill="none"
                  >
                    <path
                      d="M.875 1.744a.758.758 0 0 1 1.178-.63l22.877 15.25c.45.3.45.961 0 1.261L2.053 32.876a.758.758 0 0 1-1.178-.63V1.744Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="currently-playing absolute text-[10px] md:text-xs py-1 px-4 md:py-2 md:px-6 whitespace-nowrap rounded-2xl bg-rb-black text-white font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 invisible duration-300 opacity-0">
                  Currently Playing
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="md:absolute top-0 right-0 flex gap-2 justify-center mt-6 md:mt-0">
          <button
            onClick={handlePrev}
            className="prev w-10 h-10 rounded-full flex items-center justify-center bg-transparent duration-300 ease-out border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group"
          >
            <LineArrow
              left
              className="text-rb-black max-w-[16px] group-hover:text-white"
            />
          </button>
          <button
            onClick={handleNext}
            className="next w-10 h-10 rounded-full flex items-center justify-center bg-transparent duration-300 ease-out border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group"
          >
            <LineArrow className="text-rb-black max-w-[16px] group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CampiagnPopupSlider
