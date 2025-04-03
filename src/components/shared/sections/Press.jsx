import { Button } from '@/components/ui'
import { LineHeading } from '../Heading'
import { PostContent } from '../PostContent'
import { LineArrow } from '@/components/icons'

export const PressSection = ({ className = '', title, image, content }) => {
  return (
    <section className={className}>
      <div className="container py-10 md:py-[70px] text-white">
        <LineHeading white className="mb-6 md:mb-9">
          press
        </LineHeading>
        <h3 className="!text-title md:!text-title-md-tight md:tracking-[-2.08px] mb-10 md:mb-25 max-w-[730px]">
          {title}
        </h3>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-[642px]">
            <img alt="" {...image} />
          </div>
          <div className="w-full md:w-1/2 lg:w-[calc(100%_-_642px)] md:pl-6 lg:pl-14 md:self-end">
            <PostContent
              className="text-base md:text-2xl mb-10"
              content={content}
            />
            <Button
              intent="secondary"
              suffix={<LineArrow hover />}
              className="w-full md:w-auto"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
