import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  PostContent,
  PressSection,
  SEO,
  SimilarPosts,
  StatsContainer,
  Testimonials,
  WorkHeroSection,
  testimonialsDefault,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { ccs, similarPosts } from '@/utils/dummy'
import { CommercialSection } from '@/components/pages/work'
// // import { createTestimonialData } from '@/pages/services/create'

export const similarPostsData = [
  {
    key: 1,
    name: 'HIRING SAAS EXPLAINER',
    company: 'MULTIPLIER',
    image: '/img/hiring-saas-explainer.webp',
    tags: ['Explainer Video', 'SAAS'],
    href: '/videos/case-study/multiplier',
  },
  {
    key: 2,
    name: 'SME BANKING EXPLAINER',
    company: 'VYMO',
    image: '/img/sme-banking-explainer.webp',
    tags: ['Marketing Video', 'SAAS'],
    href: '/videos/case-study/vymo',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/slb-logo-new.webp',
    width: '260',
    height: '105',
  },
  tags: ['Interactive Video', 'Technology'],
  // desktopVideo: '/img/works/metro-wholesale-big.mp4',
  // mobileVideo: '/img/works/metro-wholesale.mp4',
  // featured: {
  //   src: '/img/works/ccs_2x.webp',
  //   width: '2880',
  //   height: '1544',
  // },
  commercials: {
    title: (
      <>
        Portfolio of video projects that&nbsp;elevated brands and exceeded
        client expectations.
      </>
    ),
    excerpt:
      'Unlock the full potential of your brand with our commercial adaptations. We combine innovative ideas, expert production, and strategic messaging to create captivating commercials that leave a lasting impression.',
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 130,
        vimeoId: '867139215',
        name: 'Digitizing the SLB Sales Funnel',
        company: 'SLB',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/slb-thumbnail1.jpg',
        },
      },
    ],
  },
}

function Slb() {
  const router = useRouter()
  const articleUrl = `https://www.redbangle.global${router.pathname}`

  const { logo, tags, commercials, desktopVideo, mobileVideo } = pageData
  const socials = [
    {
      key: 0,
      href: `https://twitter.com/intent/tweet?text=${articleUrl}`,
      color: '#000',
      icon: <Twitter />,
    },

    {
      key: 1,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`,
      color: '#006699',
      icon: <Linkedin />,
    },
  ]
  return (
    <>
      <SEO title="Case Study | SLB" />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="SLB’s Sales Digitisation - an Interactive Video"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
      />
      <section className="bg-white pt-7.5 md:py-15 overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Problem Statement
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                SLB is a global company driving innovation in oilfield services.
                And even as they were delivering technology-based solutions for
                their clients, they were ramping up digitization internally.
              </p>
              <p className=" mb-6 md:mb-7.5">
                SLB was in the process of digitizing sales, manufacturing, and
                product engineering workflows in order to deliver a better
                customer experience and to enhance efficiency. While the tool
                kit was still under development, a launch date was set and it
                was time to plan for technology adoption amongst key stakeholder
                groups.
              </p>
              <p className=" mb-6 md:mb-7.5">
                Their ask to Red Bangle: equip internal teams with a
                comprehensive understanding of their evolving digital toolkit.
                The starting point for us: detailed user journeys built for the
                tech team!
              </p>
              <p className=" mb-6 md:mb-7.5">
                The challenge: build the stories from an internal marketing POV,
                introduce the tool kit in an exciting manner and drive
                technology user adoption.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                Multiple in-depth discovery calls helped us change the brief
                from a 1-hour walkthrough requirement to a cool 10-minute,
                interactive and engaging explainer video.
              </p>
              <p className="mb-6 md:mb-7.5">
                We created a modular video structure, sat down with the client
                in Houston and hashed out all the key information for each
                module. Our approach ensured that each module unfolded like a
                mini-story that was not based on dry, technical jargon, but as
                personas-specific narratives.
              </p>
              <p className="mb-6 md:mb-7.5">
                The magic truly came alive in the custom-designed storyboard.
                The visual language was relatable to the oilfield industry and
                the stakeholders, supported the core messaging and positioned
                the technology well. Quality animation, SFX and an engaging
                American voice over brought it all together. Now, SLB has an
                internal technology transformation story that sells itself.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      <SimilarPosts
        tag="explore our case studies"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      />
    </>
  )
}
Slb.PageLayout = SCSLayout
export default Slb
