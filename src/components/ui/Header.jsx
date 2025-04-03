import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.scss'
import { Button } from './Button'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'

const cursorProps = {
  'data-rb-cursor': '',
  'data-rb-cursor-blend': 'darken',
  'data-rb-cursor-blendclick': 'darken',
  'data-state': 'open',
}

const dropDownArrow = (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path
      d="m1.625 15.375 13.75-13.75m0 0H1.625m13.75 0v13.75"
      stroke="#111010"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const outsideLinks = [
  // {
  //   title: 'Services',
  //   menu: [
  //     { title: 'Campaigns', href: '/campaigns' },
  //     { title: 'Videos', href: '/videos' },
  //     { title: 'Crews', href: '/crews' },
  //   ],
  // },
  // {
  //   title: 'Work',
  //   menu: [
  //     { title: 'Create', href: '/work/create' },
  //     { title: 'Play', href: '/work/play' },
  //   ],
  // },
  {
    title: 'About',
    menu: [
      { title: 'Who We Are', href: '/about' },
      { title: 'Blog', href: '/blog' },
      // { title: 'Partners', href: '/partners' },
      // { title: 'CSR', href: '/csr' },
    ],
  },
  // {
  //   title: 'Collab',
  //   menu: null,
  // },
  // {
  //   title: 'Global',
  // menu: ,
  // },
]

export const Header = () => {
  const lenis = useLenis()
  const headerTimeline = useRef()
  const contentlenisRef = useRef()

  const [mainMenu, setmainMenu] = useState(false)
  const [dropdownMenu, setdropdownMenu] = useState(false)

  const router = useRouter()
  const { asPath } = router

  const mainMenuTrigger = () => {
    setmainMenu((state) => !state)
    setdropdownMenu(false)
  }
  useEffect(() => {
    headerTimeline.current = gsap.timeline({ paused: true })
    headerTimeline.current.fromTo(
      '.nav-menu-image',
      { scale: 0.4 },
      { scale: 1 }
    )
    headerTimeline.current.fromTo(
      contentlenisRef.current,
      {
        y: () => (window.innerWidth > 767 ? -300 : 0),
      },
      { y: 0 },
      0
    )

    const onEsc = (e) => {
      if (e.keyCode === 27) {
        setmainMenu(false)
        setdropdownMenu(false)
      }
    }
    window.document.addEventListener('keydown', onEsc)
    return () => {
      window.document.removeEventListener('keydown', onEsc)
    }
  }, [])
  useEffect(() => {
    if (mainMenu) {
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
  }, [mainMenu, lenis])

  function dropDownTrigger(value) {
    return () => {
      if (window.innerWidth <= 768)
        setdropdownMenu((state) => (state === value ? null : value))
    }
  }

  useEffect(() => {
    setmainMenu(0)
    setdropdownMenu(false)
    lenis?.start()
  }, [asPath, lenis])

  useEffect(() => {
    const element = contentlenisRef.current?.virtualScroll?.element
    if (element && window.innerWidth >= 768) {
      if (!mainMenu) {
        contentlenisRef.current?.scrollTo('#lastlink')
      } else {
        contentlenisRef.current?.scrollTo('#firstlink')
      }
    }
    if (window.innerWidth >= 768 && headerTimeline.current) {
      if (mainMenu) {
        headerTimeline.current.play()
      } else {
        headerTimeline.current.reverse()
      }
    }
  }, [mainMenu])
  return (
    <>
      <header className="relative">
        <div className="flex items-center h-[60px] md:h-[85px] border-b border-b-black/10 bg-white">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="md:w-1/4">
                <Link href="/">
                  <img
                    className={styles.image}
                    width="190"
                    height="44"
                    src="/logo.svg"
                    alt="Red Bangle"
                  />
                </Link>
              </div>

              <div className="flex-1 md:flex-none md:w-3/4 -mr-4 md:mr-0">
                <div className="flex items-center justify-end h-[60px] md:h-[85px]">
                  <div
                    className={`nav-wrapper block md:flex items-center md:h-full top-0 right-0 ${
                      mainMenu ? 'active' : ''
                    }`}
                  >
                    <Link
                      href="/videos"
                      className="mr-8 uppercase flex md:h-full items-center text-sm font-semibold text-rb-black/60 hover:text-rb-black transition-all w-full md:w-auto py-4 md:py-0"
                    >
                      VIDEOS
                    </Link>
                    <Link
                      href="/campaigns"
                      className="mr-8 uppercase flex md:h-full items-center text-sm font-semibold text-rb-black/60 hover:text-rb-black transition-all w-full md:w-auto py-4 md:py-0"
                    >
                      CAMPAIGNS
                    </Link>
                    <Link
                      href="/crews"
                      className="mr-8 uppercase flex md:h-full items-center text-sm font-semibold text-rb-black/60 hover:text-rb-black transition-all w-full md:w-auto py-4 md:py-0"
                    >
                      CREWS
                    </Link>
                    {outsideLinks.map((l, i) => (
                      <div
                        className="block md:inline-block md:h-full font-semibold text-sm md:mr-8 relative group text-rb-black/60 hover:text-rb-black transition-all"
                        key={i}
                      >
                        <button
                          onClick={dropDownTrigger(i)}
                          className="uppercase flex h-full items-center w-full md:w-auto py-4 md:py-0"
                        >
                          {l.title}

                          <div className="w-5 h-5 flex items-center justify-center ml-1">
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              className="group-hover:rotate-90 transition-all group-hover:text-rb-red"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path
                                  d="M7.65234 13.7046L14.0942 7.26275"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.20312 6.84087L14.645 6.84087L14.645 13.2827"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </div>
                        </button>
                        <div
                          className={`dropdown-menu ${
                            dropdownMenu === i ? 'active' : ''
                          }`}
                        >
                          {l.menu?.map((lItem, li) => (
                            <Link
                              key={li}
                              href={lItem.href}
                              className="mt-4 first:mt-0 text-lg leading-6 text-rb-black hover:text-rb-red transition-all capitalize"
                            >
                              {lItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <Link
                      href="/collab"
                      className="mr-8 uppercase flex md:h-full items-center text-sm font-semibold text-rb-black/60 hover:text-rb-black transition-all w-full md:w-auto py-4 md:py-0"
                    >
                      COLLAB
                    </Link>

                    {/* <button
                      onClick={dropDownTrigger(999)}
                      className="mr-8 group uppercase  md:h-full items-center text-sm font-semibold text-rb-black/60 hover:text-rb-black transition-all w-full md:w-auto py-4 md:py-0"
                    >
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          className="mr-[6px]"
                        >
                          <path
                            d="M11.988 10.3685C12.0984 9.58386 12.1533 8.79239 12.152 8C12.1533 7.20761 12.0984 6.41614 11.988 5.63148H15.0901C15.6384 7.16291 15.6384 8.83709 15.0901 10.3685H11.988ZM8.50029 15C7.81669 15 7.11888 14.2984 6.58376 13.0753C6.33931 12.5166 6.14025 11.8798 5.99122 11.1886H11.0093C10.8603 11.8795 10.6613 12.5164 10.4168 13.0753C9.88169 14.2984 9.18388 15 8.50029 15ZM5.84138 10.3685C5.61096 8.79791 5.61096 7.20209 5.84138 5.63148H11.1592C11.2757 6.41558 11.3335 7.20729 11.332 8C11.3335 8.79271 11.2757 9.58442 11.1592 10.3685H5.84138ZM1.91044 10.3685C1.36221 8.83709 1.36221 7.16291 1.91044 5.63148H5.01259C4.79348 7.20289 4.79348 8.79711 5.01259 10.3685H1.91044ZM8.50029 1C9.18388 1 9.88169 1.70137 10.4168 2.92473C10.6613 3.48336 10.8603 4.1202 11.0093 4.81145H5.99122C6.14025 4.12047 6.33931 3.48363 6.58376 2.92473C7.11888 1.70137 7.81669 1 8.50029 1ZM14.7347 4.81117H11.8466C11.6826 3.99906 11.4545 3.24957 11.1685 2.59633C10.9369 2.06641 10.6744 1.6177 10.387 1.25621C11.3189 1.51427 12.1867 1.96366 12.9353 2.57574C13.6838 3.18781 14.2967 3.94913 14.7347 4.81117ZM6.61357 1.25594C6.327 1.6177 6.06478 2.06613 5.8329 2.59578C5.54689 3.24957 5.31911 3.99906 5.15478 4.81063H2.26591C2.70401 3.94868 3.31686 3.18745 4.0654 2.57544C4.81394 1.96343 5.68176 1.51405 6.61357 1.25594ZM2.26591 11.1888H5.15396C5.31802 12.0009 5.54607 12.7504 5.83208 13.4037C6.06396 13.9333 6.32618 14.3818 6.61275 14.7435C5.68106 14.4854 4.81336 14.036 4.06496 13.424C3.31656 12.8119 2.70386 12.0507 2.26591 11.1888ZM10.387 14.7435C10.6736 14.3818 10.9361 13.9333 11.1677 13.4037C11.4537 12.7499 11.6815 12.0004 11.8458 11.1888H14.7347C14.2967 12.0509 13.6839 12.8123 12.9353 13.4244C12.1867 14.0365 11.3189 14.4859 10.387 14.7441V14.7435Z"
                            fill="#111010"
                          />
                        </svg>
                        Global
                      </span>
                      <div
                        className={`dropdown-menu ${
                          dropdownMenu === 999 ? 'active' : ''
                        }`}
                      >
                        {[
                          {
                            title: (
                              <div className="flex items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16.4838 15.0452C16.6258 14.0364 16.6963 13.0188 16.6947 12C16.6963 10.9812 16.6258 9.9636 16.4838 8.95477H20.4723C21.1771 10.9237 21.1771 13.0763 20.4723 15.0452H16.4838ZM11.9996 21C11.1207 21 10.2235 20.0979 9.5355 18.5254C9.2212 17.8071 8.96526 16.9883 8.77366 16.0996H15.2255C15.0339 16.988 14.778 17.8068 14.4637 18.5254C13.7757 20.0979 12.8785 21 11.9996 21ZM8.58101 15.0452C8.28475 13.0259 8.28475 10.9741 8.58101 8.95477H15.4182C15.568 9.96289 15.6423 10.9808 15.6404 12C15.6423 13.0192 15.568 14.0371 15.4182 15.0452H8.58101ZM3.52694 15.0452C2.82207 13.0763 2.82207 10.9237 3.52694 8.95477H7.51542C7.2337 10.9751 7.2337 13.0249 7.51542 15.0452H3.52694ZM11.9996 3C12.8785 3 13.7757 3.90176 14.4637 5.47465C14.778 6.19289 15.0339 7.01168 15.2255 7.90043H8.77366C8.96526 7.01203 9.2212 6.19324 9.5355 5.47465C10.2235 3.90176 11.1207 3 11.9996 3ZM20.0152 7.90008H16.302C16.0911 6.85594 15.7979 5.8923 15.4301 5.05242C15.1324 4.37109 14.7949 3.79418 14.4254 3.32941C15.6235 3.66121 16.7393 4.239 17.7017 5.02595C18.6642 5.8129 19.4521 6.79174 20.0152 7.90008ZM9.57382 3.32906C9.20538 3.79418 8.86823 4.37074 8.57011 5.05172C8.20237 5.8923 7.90952 6.85594 7.69823 7.89937H3.98398C4.54725 6.79117 5.3352 5.81244 6.29761 5.02557C7.26002 4.23869 8.37579 3.66092 9.57382 3.32906ZM3.98398 16.0999H7.69718C7.90812 17.1441 8.20132 18.1077 8.56905 18.9476C8.86718 19.6286 9.20433 20.2051 9.57276 20.6702C8.37488 20.3383 7.25927 19.7606 6.29704 18.9737C5.3348 18.1868 4.54705 17.2081 3.98398 16.0999ZM14.4254 20.6702C14.7938 20.2051 15.1313 19.6286 15.4291 18.9476C15.7968 18.107 16.0897 17.1434 16.301 16.0999H20.0152C19.4521 17.2083 18.6642 18.1872 17.7018 18.9742C16.7393 19.7612 15.6235 20.3391 14.4254 20.6709V20.6702Z"
                                    fill="#EF001C"
                                  />
                                </svg>
                                <span className="text-rb-red">Global</span>
                              </div>
                            ),
                            href: '/',
                          },
                          {
                            title: (
                              <div className="flex items-center gap-2">
                                <img
                                  src="/img/india-icon.svg"
                                  alt="India"
                                  className="max-w-[24px]"
                                />
                                India
                              </div>
                            ),
                            href: 'https://www.redbangle.com/',
                          },
                        ].map((lItem, li) => (
                          <Link
                            target={lItem.href === '/' ? '_self' : '_blank'}
                            key={li}
                            href={lItem.href}
                            className="mt-4 first:mt-0 text-lg leading-6 text-rb-black hover:text-rb-red transition-all capitalize"
                          >
                            {lItem.title}
                          </Link>
                        ))}
                      </div>
                    </button> */}

                    <Button
                      href="/contact"
                      size="sm"
                      className="w-full md:w-auto py-4 md:py-2 h-auto "
                    >
                      GET IN TOUCH
                    </Button>
                  </div>
                  <button
                    className={`w-[54px] md:w-[90px] h-full bg-rb-black flex-col text-white flex justify-center items-center hamburger relative z-[9999] md:hidden ${
                      mainMenu ? 'active' : ''
                    }`}
                    aria-label="toggle menu"
                    onClick={mainMenuTrigger}
                  >
                    <div className="inline-flex flex-col gap-[5px]">
                      <span className="bg-white h-[2px] w-[30px] duration-300 ease-out"></span>
                      <span className="bg-white h-[2px] w-[30px] duration-300 ease-out"></span>
                      <span className="bg-white h-[2px] w-4 duration-300 ease-out"></span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
