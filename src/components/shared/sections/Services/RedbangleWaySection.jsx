import { ImageAccordion } from '@/components/ui'
import { LineHeading } from '../../Heading'

export const RedbangleWaySection = ({
  title = 'Our practical approach to achieving exceptional outcomes',
  data,
  image,
  sectionBG = 'bg-white',
}) => (
  <section className={`${sectionBG} py-7.5 md:py-15`}>
    <div className="container">
      {/* <LineHeading className="mb-6 md:mb-9">the red bangle way</LineHeading> */}
      <h3 className="text-title md:text-title-md mb-10 md:mb-18 font-everett max-w-[800px]">
        {title}
      </h3>
      <ImageAccordion
        containerClass="md:flex-row-reverse"
        image={image}
        imageAccordionContentClassName="md:w-2/3 md:text-acc-large text-rb-black/80"
        data={
          data ?? [
            {
              key: '0',
              heading: 'Discovery',
              content:
                'We begin by thoroughly understanding your brand, target audience, and goals. Through extensive research and analysis, we uncover valuable insights.',
              image: {
                src: '/img/services/service-image.webp',
                width: '726',
                height: '915',
              },
            },
            {
              key: '1',
              heading: 'Strategy Development',
              content:
                'We begin by thoroughly understanding your brand, target audience, and goals. Through extensive research and analysis, we uncover valuable insights.',
              image: {
                src: '/img/services/service-image.webp',
                width: '726',
                height: '915',
              },
            },
            {
              key: '2',
              heading: 'Creative Ideation',
              content:
                'We begin by thoroughly understanding your brand, target audience, and goals. Through extensive research and analysis, we uncover valuable insights.',
              image: {
                src: '/img/services/service-image.webp',
                width: '726',
                height: '915',
              },
            },
            {
              key: '3',
              heading: 'Production',
              content:
                'We begin by thoroughly understanding your brand, target audience, and goals. Through extensive research and analysis, we uncover valuable insights.',
              image: {
                src: '/img/services/service-image.webp',
                width: '726',
                height: '915',
              },
            },
          ]
        }
      />
    </div>
  </section>
)
