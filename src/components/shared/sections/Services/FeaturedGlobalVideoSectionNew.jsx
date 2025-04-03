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
import { VideoMetaModalNew } from '../../Modal/VideoMetaModalNew'

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
}

export const FeaturedGlobalVideoSectionNew = ({
  title = 'Here’s a portfolio of work that worked',
  href = '/work/play',
  featuredTitle,
  noSideBtn,
  customClass = '',
  crew = [],
}) => {
  const [type, setType] = useState('explainer-videos')
  const [modal, setModal] = useState(INIT_MODAL)
  const [contactModal, setContactModal] = useState(false)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null) 
  const lenis = useLenis()
  // const { cursorRefresh } = useAppState()
  const dispatch = useAppDispatch()

  const router = useRouter()
  const pathname = router.pathname
 

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

        <div className="grid  gap-y-8 md:gap-y-[42px] gap-x-5 md:gap-x-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 md:mt-10">
          {type == 'explainer-videos' &&
            crew.map((c) => (
              <button
                data-rb-cursor
                data-rb-cursor-type="viewwork"
                onClick={() => {
                  setContactModal(!contactModal)
                  setSelectedVideo(c)
                  setHerovideoOpen(true)
                }}
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
                <div className="line-clamp-1 text-left mt-[10px] text-[12px] leading-[10px] md:text-[20px] md:leading-[18px] uppercase font-everett font-medium text-rb-black">
                  {c.title}
                </div>
                <div className="text-rb-black/60 text-left text-[10px] md:text-base leading-2.5 md:leading-4.5 font-medium mt-1.5 md:mt-2.5 line-clamp-1 uppercase font-everett">
                  {c.companies.nodes[0].name}
                </div>
              </button>
            ))}
        </div>
        <VideoMetaModalNew setOpen={setHerovideoOpen} open={herovideoOpen} video={selectedVideo}/>

      </div>
    </section>
  )
}