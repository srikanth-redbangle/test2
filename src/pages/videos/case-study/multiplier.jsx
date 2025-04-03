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
    name: 'SME BANKING EXPLAINER',
    company: 'VYMO',
    image: '/img/sme-banking-explainer.webp',
    tags: ['Marketing Video', 'SAAS'],
    href: '/videos/case-study/vymo',
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
    src: '/img/logos/multiplier-logo.webp',
    width: '260',
    height: '105',
  },
  tags: ['Explainer Video', 'SAAS'],
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
        vimeoId: '867140847',
        name: 'Multiplier - Explainer',
        company: 'MULTIPLIER',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/multiplier-thumbnail1.jpg',
        },
      },
    ],
  },
}

function Multiplier() {
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
      <SEO title="Case Study | Multiplier" />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="A Marketing Explainer Video for Multiplier"
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
                For ambitious companies, the call of global expansion is
                undeniable. Accessing diverse talent pools and expanding market
                reach holds immense potential. However, the reality on the
                ground can be starkly different. The intricate web of
                international employment regulations, payroll complexities, and
                local legal nuances often become a significant barrier to entry.
                These are the set of problems that Multiplier solves.
              </p>
              <p className=" mb-6 md:mb-7.5">
                And communicating the complex set of problems as well as the
                solutions that Multiplier offers in a contemporary way – is the
                challenge posed to Red Bangle. It was time for Multiplier to
                multiply its customers and a great marketing explainer video
                that would go a long way.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                Our globally-appealing marketing explainer video showed how
                Multiplier streamlined the complexities of international
                employment and paved the way for effortless global expansion.
                The video used a dynamic mix of animation and stock imagery.
                While the animation breathed joy into a complex subject like
                compliance, the stock images grounded the storytelling in
                tangible reality. The video was used by Multiplier to launch
                their solution globally and generate marketing leads.
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
Multiplier.PageLayout = SCSLayout
export default Multiplier
