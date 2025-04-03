import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { VideoModal } from '../../Modal'
import { useState } from 'react'

export const ServiceHeroSection = ({
  type,
  content,
  className = '',
  video,
  fullVideo,
  ctaText = 'Work with us',
  ctaLink = '!#',
}) => {
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }
  return (
    <>
      <section
        className={`py-14 md:py-24 text-white overflow-hidden ${className}`}
      >
        <div className="container">
          <div className="uppercase font-everett font-medium text-[32px] leading-9 tracking-[-0.512px] md:text-[120px] md:leading-[122px] md:tracking-[-1.92px]">
            {type}
            <br />
          </div>
          <div className="max-w-[1153px] mt-6 mb-10 md:mt-12 md:mb-16 text-sm tracking-[-0.56px] md:text-[32px] md:leading-9.5 md:tracking-[-1.28px]">
            {content}
          </div>
          <Button
            href={ctaLink}
            suffix={<LineArrow hover />}
            className="w-full md:w-max uppercase"
            intent="secondary"
          >
            {ctaText}
          </Button>
        </div>
      </section>
      <div className="overflow-hidden">
        <div
          className="w-full select-none aspect-[1440/812] relative"
          onClick={onModalOpen}
          data-rb-cursor
          data-rb-cursor-type="play"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/home/showreel-1.mp4"
            poster="/img/home/home-video-p.png"
            {...video}
            className="w-[150%] -translate-x-1/4 max-w-max md:max-w-full md:w-full md:translate-x-0"
          ></video>
          <div className="absolute play-circle flex items-center justify-center md:hidden left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-rb-red rounded-full w-13 h-13">
            <svg
              className="block play-icon"
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
        </div>
      </div>
      <VideoModal open={herovideoOpen} setOpen={setHerovideoOpen}>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/img/home/showreel-full.mp4"
          {...fullVideo}
          className="max-w-[80%]"
          width="1920"
          height="1080"
        ></video>
      </VideoModal>
    </>
  )
}
