import { useState, useEffect, useMemo } from 'react'
import { PlayCard } from '@/components/shared/Cards'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { LineHeading, VideoMetaModal } from '@/components/shared'
import { useRouter } from 'next/router'
import { getPlayWorkDetails } from '@/utils/graphql'
import usePagination from '@/hooks/usePagination'
import Link from 'next/link'
import Modal from '../../Modal/Modal'
import { ContactForm } from '../ContactForm'
import { useLenis } from '@studio-freight/react-lenis'
import { refreshCursor, useAppDispatch } from '@/context'

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
}

export const FeaturedPlayWorkSection = ({
  title = 'Here’s a portfolio of work that worked',
  works = [],
  href = '/work/play',
  featuredTitle,
  tags,
  stickyBg,
  noSideBtn,
  customClass = '',
  numberOfVideosToShow = 8,
  seeAll = true,
  cards = [],
}) => {
  const [type, setType] = useState(
    works?.length > 0 ? 'featured-work' : 'crews'
  )
  const [modal, setModal] = useState(INIT_MODAL)
  const [contactModal, setContactModal] = useState(false)
  const lenis = useLenis()
  // const { cursorRefresh } = useAppState()
  const dispatch = useAppDispatch()

  const router = useRouter()
  const pathname = router.pathname
  const videos = useMemo(
    () => works.filter((w) => w.tags.find((v) => v.slug === type)),
    [type, works]
  )

  const { loadMore, data, hasMore } = usePagination(
    videos,
    numberOfVideosToShow
  )

  useEffect(() => {
    if (router.query?.work) {
      setModal((prev) => ({ ...prev, loading: true, open: true }))
      getPlayWorkDetails(router.query?.work)
        .then((data) => {
          if (data.status == 'success') {
            setModal((prev) => ({
              ...prev,
              loading: false,
              video: data?.data?.work,
            }))
          }
        })
        .catch((err) => {
          setModal(INIT_MODAL)
        })
    } else {
      setModal(INIT_MODAL)
    }
  }, [router.query])

  useEffect(() => {
    if (contactModal) {
      setTimeout(() => {
        document.body.style.overflow = 'hidden'
      }, 100)
      lenis?.stop()
    } else {
      document.body.style.overflow = 'visible'
      lenis?.start()
    }
    return () => {
      document.body.style.overflow = 'visible'
      lenis?.start()
    }
  }, [contactModal, lenis])

  useEffect(() => {
    setTimeout(() => {
      dispatch(refreshCursor())
    }, 500)
  }, [type, dispatch])

  return (
    <section className={`py-7.5 md:py-14 ${customClass}`}>
      <div className="container relative">
        {featuredTitle && (
          <>
            <LineHeading className="mb-6 md:mb-9">FEATURED WORK</LineHeading>
            <div className="rb-row mb-8 md:items-center">
              <div className="w-full md:w-7/12">
                <h3 className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-[963px]">
                  {title}
                </h3>
              </div>
              <div className="w-full hidden md:block md:w-5/12">
                {noSideBtn ? (
                  ''
                ) : (
                  <Button
                    suffix={<LineArrow hover />}
                    intent="p-secondary"
                    href={href}
                    className="md:float-right"
                  >
                    EXPLORE WORK
                  </Button>
                )}
              </div>
            </div>
          </>
        )}

        {tags && (
          <>
            <div
              className={`sticky top-0 pt-6 md:pt-10 z-[1] ${
                stickyBg ? stickyBg : 'bg-white'
              } ${cards.length > 0 ? '!static' : ''}`}
            >
              <div className="flex text-xl leading-5.5 md:text-2xl md:leading-5.5 font-medium font-everett text-rb-black/50 overflow-auto">
                {tags.map(({ key, label, value }) => (
                  <button
                    key={key}
                    onClick={() => setType(value)}
                    data-active={type === value}
                    className="mx-3 md:mx-4 capitalize whitespace-nowrap first:ml-0 data-[active=true]:text-rb-red border-b-[3px] border-b-transparent pb-2.5 data-[active=true]:border-b-rb-red"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="grid  gap-y-8 md:gap-y-[42px] gap-x-5 md:gap-x-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 md:mt-10">
          {data.map((v) => (
            <PlayCard
              data-rb-cursor
              data-rb-cursor-type="viewwork"
              onClick={() => {
                router.push(`${pathname}?work=${v.slug}`, undefined, {
                  shallow: true,
                })
              }}
              src={v?.featuredImage?.src}
              name={v?.title}
              company={v?.company?.name}
              key={v.slug}
            />
          ))}
          {type == 'crews' &&
            cards.map((c) => (
              <button
                data-rb-cursor
                data-rb-cursor-type="bookcrew"
                onClick={() => setContactModal(!contactModal)}
                key={c.id}
                className="group"
              >
                <div className="aspect-[162/96] md:aspect-[297/176] relative w-full overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition duration-300"
                    src={c.imgsrc}
                    alt={c.title}
                    width="451"
                    height="290"
                  />
                </div>
                <div className="line-clamp-1 mt-[10px] text-[12px] leading-[10px] md:text-[20px] md:leading-[18px] uppercase font-everett font-medium text-rb-black">
                  {c.title}
                </div>
              </button>
            ))}
          {/* {seeAll && (
            <a
              href="#!"
              className="bg-rb-red hover:bg-rb-milano-red transition-all aspect-[162/96] md:aspect-[297/176] flex justify-center items-center gap-2 md:gap-[13px] group"
            >
              <h4 className="text-white font-medium text-[13px] md:text-[24px] md:tracking-[-0.4px] tracking-[-0.216px] font-everett">
                See All
              </h4>
              <img
                src="/img/services/right-arrow.svg"
                alt=""
                className="w-[12px] h-[12px] md:w-[22px] md:h-[22px] transform rotate-90 group-hover:translate-y-1 transition-all"
              />
            </a>
          )} */}
        </div>
        {hasMore && !seeAll && (
          <Button
            className="mt-12 md:mt-16 mx-auto uppercase"
            // intent="p-secondary"
            onClick={loadMore}
            suffix={<LineArrow hover />}
          >
            See All Work
          </Button>
        )}

        <VideoMetaModal
          loading={modal.loading}
          open={modal.open}
          video={modal.video}
          setOpen={(v) => {
            router.push(`${pathname}`, undefined, { shallow: true })
            setModal((m) => ({ ...m, open: v }))
          }}
        />
        <Modal
          width="max-w-[1060px] w-full"
          open={contactModal}
          setOpen={setContactModal}
        >
          <div className="text-accordion font-semibold mb-7">
            Give us a few details, we’ll be in touch
          </div>
          <ContactForm CTAbreak ID="2" />
        </Modal>
      </div>
    </section>
  )
}
