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
    name: 'SALES DIGITISATION',
    company: 'SLB',
    image: '/img/sales-digitisation.webp',
    tags: ['Interactive Video', 'Technology'],
    href: '/videos/case-study/slb',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/vymo-logo.webp',
    width: '260',
    height: '105',
  },
  tags: ['Marketing Video', 'SAAS'],
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
        name: 'Vymo for SME Banking',
        company: 'VYMO',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/vymo-thumbnail1.jpg',
        },
      },
    ],
  },
}

function Vymo() {
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
      <SEO title="Case Study | Vymo" />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Transforming SME Banking Relationships"
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
                At the heart of the US financial landscape lies a network of
                regional and community banks — Commercial banks. These are
                institutions that have built enduring relationships, that span
                generations, with local SMEs. However, new large banks tapping
                into the SME market present a challenge to the very existence of
                these smaller, community-centric Commercial banks.
              </p>
              <p className=" mb-6 md:mb-7.5">
                Enter Vymo, a sales engagement platform that can help Commercial
                banks get closer to their SME customers and build long-term
                loyalty. Now, all Vymo needed was a great marketing video
                targeting Commercial Banks in North America.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                Vymo had a clear vision on the characters the film should have,
                what product features to show off and how. They even had a
                script in place. We began by collaborating with Vymo to sharpen
                the script. We then defined the visual style - both on set and
                in terms of graphics.
              </p>
              <p className="mb-6 md:mb-7.5">
                While the story needed to have a global appeal and cast, we
                needed to bring it to life at far lower prices than it would
                cost to produce in Los Angeles or Chicago. So, we filmed this in
                a studio in Bangalore. We cast actors with meticulous detail -
                ensuring they embodied the personas within the narrative, and
                flew them in from across the country. Our custom graphics added
                a unique, global flavor to the film. And with some
                post-production magic - seamless transitions and meticulously
                rotoscoped sequences - and a great American voice over - the
                outcome was an effective digital ad film.
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
Vymo.PageLayout = SCSLayout
export default Vymo
