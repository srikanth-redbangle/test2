import { Swiper } from 'swiper/react'
import { SolutionsSliderButton } from '../ui'
import { Children, useRef, useState } from 'react'
/**
 *
 * @param {*} type default | half
 * @returns
 */
export const SolutionsSlider = ({ children, type = 'default' }) => {
  const sliderRef = useRef()

  const [progress, setProgress] = useState(0)

  const props =
    type == 'default'
      ? {}
      : {
          breakpoints: {
            250: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          },
        }

  const isPrevDisabled = progress === 0
  const isNextDisabled = progress === 1
  return (
    <div className="relative">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        // loop
        onSwiper={(swiper) => {
          sliderRef.current = swiper
        }}
        className={type == 'default' ? '' : 'swiper-overflow-visible'}
        onSlideChange={(swiper) => {
          setProgress(swiper.progress)
        }}
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
        {...props}
      >
        {children}
      </Swiper>
      {children.length > 4 && (
        <div
          className={`hidden md:block ${
            type == 'default'
              ? 'mt-6 md:mt-0 md:absolute z-[1] right-0 bottom-0'
              : 'mt-4 '
          }`}
        >
          <SolutionsSliderButton
            className="solution-btn-left"
            left
            onClick={() => {
              sliderRef.current.slidePrev()
            }}
            disabled={isPrevDisabled}
          />
          <SolutionsSliderButton
            className="ml-1 solution-btn-right"
            onClick={() => {
              sliderRef.current.slideNext()
            }}
            disabled={isNextDisabled}
          />
        </div>
      )}
    </div>
  )
}
