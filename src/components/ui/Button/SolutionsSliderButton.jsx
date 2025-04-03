import { cx } from 'class-variance-authority'
import { LineArrow } from '../../icons'
import { forwardRef } from 'react'

export const SolutionsSliderButton = forwardRef(
  ({ className, left, type, ...props }, ref) => (
    <button
      {...props}
      className={cx(
        'disabled:pointer-events-none disabled:opacity-50 custom-button-new h-10 md:h-[50px] rounded-8.5 inline-flex w-[66px] justify-center items-center border-2',
        left
          ? 'border-white bg-transparent text-white'
          : 'border-rb-red bg-rb-red text-white',
        className
      )}
      ref={ref}
      type={type ?? 'button'}
      data-rb-cursor
    >
      <LineArrow width="18" height="18" left={left} />
    </button>
  )
)
SolutionsSliderButton.displayName = 'SolutionsSliderButton'
