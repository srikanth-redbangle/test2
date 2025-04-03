import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from 'react-player'
import styles from '@/styles/ui/VideoGallery.module.scss'
import { LineHeading } from '@/components/shared'
import { LineArrow } from '@/components/icons'

export const VideoGallery = ({ sources = [] }) => {
  const [hasWindow, setHasWindow] = useState(false)
  const [selected, setSelected] = useState(0)
  const { vimeoId, name: sName, company: sComapany } = sources[selected]
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  const sliderRef = useRef()

  const handlePrev = () => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }

  const handleNext = () => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }

  return (
    <div className="container relative">
      <LineHeading className="mb-6 md:mb-9">Check out the videos</LineHeading>
      <div
        className={` bg-rb-black ${styles.playerwrapper}`}
        data-rb-cursor
        data-rb-cursor-state="invisible"
      >
        {hasWindow && sComapany !== 'SLB' && (
          <ReactPlayer
            className={styles.reactplayer}
            playsinline
            loop
            // playing
            muted
            controls
            url={`https://vimeo.com/${vimeoId}`}
            width="100%"
            height="100%"
          />
        )}
        {hasWindow && sComapany === 'SLB' && (
          <iframe
            className={`${styles.reactplayer} aspect-video`}
            src="https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html"
            width="100%"
            height="100%"
            allow="fullscreen"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        )}
      </div>

      <div className="text-base leading-5 md:text-4xl font-everett uppercase mt-4 mb-6 md:mt-7 md:mb-16">
        {sName}{' '}
        {/* <span className="text-rb-black/60 text-xs leading-2.5 md:text-[26px] md:leading-8 block md:inline mt-1 md:mt-0">
          {sComapany}
        </span> */}
      </div>

      <div>
        <Swiper
          ref={sliderRef}
          spaceBetween={12}
          slidesPerView={2.1}
          className="swiper-overflow-visible"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          // onSwiper={(swiper) => (sliderRef.current = swiper)}
        >
          {sources.map(
            ({ key, duration, vimeoId: vId, thumbnail, name, company }, i) => (
              <SwiperSlide
                className="relative group"
                key={key}
                data-playing={selected == i}
              >
                <button
                  className="text-left w-full cursor-pointer"
                  onClick={() => setSelected(i)}
                >
                  <div className="relative aspect-[297/176] w-full overflow-hidden mb-3">
                    <img
                      {...thumbnail}
                      alt={name}
                      className="w-full h-full object-cover absolute group-data-[playing=true]:opacity-60 transition-all"
                    />
                    <div className="absolute text-[10px] md:text-xs py-1 px-4 md:py-2 md:px-6 whitespace-nowrap rounded-2xl bg-rb-black text-white font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 invisible group-data-[playing=true]:visible">
                      Currently Playing
                    </div>
                  </div>
                  <div className="uppercase font-everett text-xs leading-2.5 md:text-xl md:leading-4.5">
                    {name}
                  </div>
                  <div className="uppercase font-everett text-[10px] leading-2.5 md:text-base  md:leading-4.5 mt-1 text-rb-black/60">
                    {company}
                  </div>
                </button>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      {sources.length > 4 && (
        <div className="md:absolute bottom-[-80px] left-0 flex gap-2 justify-start mt-6 md:mt-0">
          <button
            onClick={handlePrev}
            className="prev w-[66px] h-10 md:h-[50px] rounded-8.5 flex items-center justify-center bg-transparent duration-300 ease-out border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group"
          >
            <LineArrow
              className="text-rb-black max-w-[16px] group-hover:text-white"
              left
            />
          </button>
          <button
            onClick={handleNext}
            className="next w-[66px] h-10 md:h-[50px] rounded-8.5 flex items-center justify-center bg-transparent duration-300 ease-out border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group"
          >
            <LineArrow className="text-rb-black max-w-[16px] group-hover:text-white" />
          </button>
        </div>
      )}
    </div>
  )
}
