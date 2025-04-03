import { ArrowButtonSlider } from '@/components/sliders/ArrowButtonSlider'
import { SwiperSlide } from 'swiper/react'
import { LineHeading } from '../Heading'
import { cx } from 'class-variance-authority'
export const testimonialsDefault = [
  {
    key: 1,
    quote:
      'The Red Bangle team is fantastic to work with! They add value not just from a creative standpoint but also in terms of communication strategy.',
    name: 'ROSHAN CARIAPPA',
    designation: 'VICE-PRESIDENT MARKETING',
    company: 'VYMO',
    image: {
      srcSet:
        '/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 2,
    quote:
      'Because of Covid restrictions, our team was unable to travel to India for the event. But the team at Red Bangle supported us on the ground and even helped us manage our golfing ambassador. Thanks team!',
    name: 'MATT WALKINGTON',
    designation: 'Account Director',
    company: 'BRIGHT PARTNERSHIPS',
    image: {
      srcSet:
        '/img/testimonials/matt-walkington.webp 533w, /img/testimonials/matt-walkington.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },

  {
    key: 3,
    quote:
      'Despite difficulties faced in shooting in 2 countries, we created these awesome videos, while keeping everyone safe during Covid-19.',
    name: 'MARC IRAWAN',
    designation: 'Founder',
    company: 'COLEARN',
    image: {
      srcSet:
        '/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 4,
    quote:
      'We partnered with Red Bangle to create video content for our internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends and are always experimental and open to feedback. They’re an amazing lot to work with!',

    designation: 'VP INTERNAL COMMUNICATIONS',
    company: 'FORTUNE 100 ITES ENTERPRISE',
    image: {
      srcSet:
        '/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 5,
    quote:
      'It’s never easy creating a great video and in a fast-growing business like ours, we are always looking for a lot of videos. We struggled, till we came across Red Bangle.',
    name: 'SUNIL SURESH',
    designation: 'CHIEF MARKETING AND STRATEGY OFFICER',
    company: 'CAPILLARY TECHNOLOGIES',
    image: {
      srcSet:
        '/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  // {
  //   key: 1,
  //   quote:
  //     'Because of Covid restrictions, our team was unable to travel to India for the event. But the team at Red Bangle supported us on the ground and even helped us manage our golfing ambassador. Thanks team!',
  //   name: 'MATT WALKINGTON',
  //   designation: 'Account Director',
  //   company: 'BRIGHT PARTNERSHIPS',
  //   image: {
  //     srcSet:
  //       '/img/testimonials/matt-walkington.webp 533w, /img/testimonials/matt-walkington.webp 1066w',
  //     sizes: '(max-width:768px) 533px, 1066px',
  //   },
  // },

  // {
  //   key: 3,
  //   quote:
  //     'It has been a pleasure to work with the Red Bangle team on Project Loom. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
  //   name: 'SHOBA NARAYAN',
  //   designation: 'FOUNDER',
  //   company: 'PROJECT LOOMS',
  //   image: {
  //     srcSet:
  //       '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
  //     sizes: '(max-width:768px) 533px, 1066px',
  //   },
  // },

  // {
  //   key: 5,
  //   quote:
  //     'We partnered with Red Bangle to create video content for our internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends and are always experimental and open to feedback. They’re an amazing lot to work with!',
  //   name: 'Lissa Smith',
  //   designation: 'Marketing Manager',
  //   company: 'FORTUNE 100 ITES ENTERPRISE',
  //   image: {
  //     srcSet:
  //       '/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w',
  //     sizes: '(max-width:768px) 533px, 1066px',
  //   },

  // },
]

const testimonialsSemi = [
  // {
  //   key: 0,
  //   quote:
  //     'Despite difficulties faced in shooting in 2 countries, we created these awesome videos, while keeping everyone safe during Covid-19.',
  //   name: 'MARC IRAWAN ',
  //   designation: 'Founder',
  //   company: 'COLEARN',
  //   image: {
  //     srcSet:
  //       '/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w',
  //     sizes: '(max-width:768px) 533px, 1066px',
  //   },
  // },
  // {
  //   key: 1,
  //   quote:
  //     'Because of Covid restrictions, our team was unable to travel to India for the event. But the team at Red Bangle supported us on the ground and even helped us manage our golfing ambassador. Thanks team!',
  //   name: 'MATT WALKINGTON',
  //   designation: 'Account Director',
  //   company: 'BRIGHT PARTNERSHIPS',
  //   image: {
  //     srcSet:
  //       '/img/testimonials/matt-walkington.webp 533w, /img/testimonials/matt-walkington.webp 1066w',
  //     sizes: '(max-width:768px) 533px, 1066px',
  //   },
  // },
  // {
  //   key: 2,
  //   quote:
  //     'The Red Bangle team is fantastic to work with! They add value not just from a creative standpoint but also in terms of communication strategy.',
  //   name: 'ROSHAN CARIAPPA',
  //   designation: 'VICE-PRESIDENT MARKETING',
  //   company: 'VYMO',
  //   image: {
  //     srcSet:
  //       '/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w',
  //     sizes: '(max-width:768px) 533px, 1066px',
  //   },
  // },

  {
    key: 3,
    quote:
      'It has been a pleasure to work with the Red Bangle team on Project Loom. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
    name: 'SHOBA NARAYAN',
    designation: 'FOUNDER',
    company: 'PROJECT LOOMS',
    image: {
      srcSet:
        '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 4,
    quote:
      'It’s never easy creating a great video and in a fast-growing business like ours, we are always looking for a lot of videos. We struggled, till we came across Red Bangle.',
    name: 'SUNIL SURESH',
    designation: 'CHIEF MARKETING AND STRATEGY OFFICER',
    company: 'CAPILLARY TECHNOLOGIES',
    image: {
      srcSet:
        '/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 5,
    quote:
      'We partnered with Red Bangle to create video content for our internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends and are always experimental and open to feedback. They’re an amazing lot to work with!',

    designation: 'VP INTERNAL COMMUNICATIONS',
    company: 'FORTUNE 100 ITES ENTERPRISE',
    image: {
      srcSet:
        '/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

export const Testimonials = ({
  testimonialData,
  className = '',
  type = 'default',
  headingBig,
  heading = 'What Clients Say',
}) => {
  const testimonials =
    type == 'default' ? testimonialsDefault : testimonialsSemi
  return (
    <section
      className={`bg-white mt-12 ${className} ${
        type == 'default' ? '' : 'overflow-hidden'
      }`}
    >
      <div className="container">
        {headingBig ? (
          <h2 className="text-title md:text-title-md mb-10 md:mb-18 font-everett">
            {' '}
            {heading}
          </h2>
        ) : (
          <LineHeading className="mb-6 md:mb-9">{heading}</LineHeading>
        )}

        <ArrowButtonSlider type={type}>
          {(testimonialData || testimonials).map((t) => (
            <SwiperSlide key={t.key}>
              <div className="flex flex-wrap flex-col-reverse md:flex-row">
                <div className="block md:hidden">
                  <div className="text-base font-bold mt-3 mb-0.5 uppercase">
                    {t.name ? t.name + ',' : ''}{' '}
                    <span className="text-sm leading-6.5 uppercase">
                      {t.company}
                    </span>
                  </div>
                  <div className="font-semibold text-rb-black/80 text-sm uppercase">
                    {t.designation}
                  </div>
                </div>
                <div className="relative w-full md:w-5/12 flex-shrink-0">
                  <img
                    {...t?.image}
                    alt={t.name}
                    className={cx(
                      'w-full h-full object-cover',
                      type == 'semi' ? 'md:pr-6' : 'md:pr-8'
                    )}
                  />
                </div>

                <div className="w-full md:w-7/12 flex flex-col justify-end  md:min-h-fit">
                  <div className="mb-12">
                    <div
                      className={cx(
                        'text-xl md:mb-0 font-semibold md:max-w-[634px]',
                        type == 'semi'
                          ? 'md:text-lg md:leading-6.5 md:tracking-[-0.1px]'
                          : 'md:text-2xl md:leading-10 md:tracking-[-0.072px]'
                      )}
                    >
                      {t.quote}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div
                      className={cx(
                        'text-base font-bold mb-1.5 uppercase',
                        type == 'semi'
                          ? 'md:text-[24px] md:leading-6 tracking-[-0.24px]'
                          : 'md:text-[28px] md:leading-8'
                      )}
                    >
                      {t.name}
                      {t.name ? ', ' : ''}
                      <span
                        className={cx(
                          'text-sm leading-6.5 uppercase',
                          type == 'semi'
                            ? 'md:text-base md:leading-5 tracking-[-0.16px]'
                            : 'md:text-lg md:leading-6.5'
                        )}
                      >
                        {t.designation}
                      </span>
                    </div>
                    <div
                      className={cx(
                        'font-semibold text-rb-black/60 text-sm leading-5 tracking-[-0.14px] uppercase',
                        type == 'semi'
                          ? 'md:text-base md:leading-5 md:tracking-[-0.32px]'
                          : 'md:text-lg md:leading-6.5 md:tracking-[-0.18px]'
                      )}
                    >
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </ArrowButtonSlider>
      </div>
    </section>
  )
}
