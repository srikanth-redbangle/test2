import { SCSLayout } from '@/components/Layout'
import {
  Telegram,
  Whatsapp,
  Twitter,
  Linkedin,
  LineArrow,
} from '@/components/icons'
import {
  ContentPostCard,
  LineHeading,
  PostContent,
  PressSection,
  SEO,
  SimilarPosts,
  StatsContainer,
  Testimonials,
  WorkHeroSection,
} from '@/components/shared'

import { ccs, similarPosts } from '@/utils/dummy'
import { CommercialSection } from '@/components/pages/work'
// import { createTestimonialData } from '@/pages/services/create'
import { Button } from '@/components/ui'
import { ccsPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'

const pageData = {
  logo: {
    src: '/img/logos/mygate-big.webp',
    width: '260',
    height: '105',
  },
  tags: ['Creative Ideation', 'Content Production', 'SAAS'],
  desktopVideo: '/img/works/heros-mygate-big.mp4',
  mobileVideo: '/img/works/heros-mygate.mp4',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
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
        duration: 15,
        vimeoId: '866814464',
        name: 'HEROES AT MYGATE',
        company: 'MYGATE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/mygate-1.jpg',
        },
      },
    ],
  },

  press: {
    title: 'Security agency MyGate’s campaign is an ode to security guards',
    image: {
      src: '/img/works/mygate-campign-thumb.webp',
      width: '820',
      height: '486',
    },
    content:
      'MyGate has come up with a campaign, which is an ode to the security guards. The film has been created by Red Bangle. It highlights the hard wok put in by the security guards, which often go unappreciated',
    href: '#!',
  },
}

export const similarPostsData = [
  {
    key: 0,
    name: 'Try Ball Offer',
    company: ' My 11 Circle',
    image: '/img/works/my-11-circle.jpg',
    tags: ['Creative Ideation', 'Content Production', 'Content Production'],
    href: '/case-study/my11circle',
  },
  {
    key: 1,
    name: '5 Star Quality, Wholesale Prices',
    company: 'Metro Wholesale',
    image: '/img/works/metro-wholesale.jpg',
    tags: ['Creative Ideation', 'Content Production', 'Content Production'],
    href: '/case-study/metro-wholesale',
  },
]

function MyGate() {
  const _posts = ccsPosts.map(postsMapper)
  const { logo, tags, commercials, press, desktopVideo, mobileVideo } = pageData
  const socials = [
    {
      key: 0,
      href: 'https://twitter.com/intent/tweet?url=redbangle.com%2Fcase-study%2Fheros-mygate&text=Heros%20at%20mygate',
      color: '#000',
      icon: <Twitter />,
    },

    {
      key: 1,
      href: 'http://www.linkedin.com/shareArticle?mini=true&url=redbangle.com%2Fcase-study%2Fheros-mygate&title=Heros%20at%20mygate',
      color: '#006699',
      icon: <Linkedin />,
    },
  ]
  return (
    <>
      <SEO title="Case Study | Heros at mygate" />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
      />
      <section className="bg-white pt-7.5 md:py-15 overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-6 md:mb-30">
              <LineHeading className="mb-6 md:mb-9">
                Background & objective
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 mb-8 md:mb-12">
                MyGate is a smart, technology-forward security solution that
                helps gated communities manage their security needs including
                visitor entry and exit, household help and more.
              </p>

              <p>
                However, there was a lack of enthusiasm amongst security guards
                around the new technology. With the onground security forces
                forming an important part of the user group, MyGate needed to
                build a positive association between its app and the security
                guards.
              </p>
            </div>
            <div className="mt-6 md:mb-30">
              <LineHeading className="mb-6 md:mb-9">
                Creative Solution
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 mb-8 md:mb-12">
                Typically, security guards in India are from smaller towns, work
                long hours, are an ignored support system and are not tech
                savvy. They saw the MyGate app as yet another chore - when in
                fact it was also built to make their work easier. 
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 mb-8 md:mb-12">
                With security guards being integral to product adoption, it was
                crucial that MyGate create a positive association with this user
                group, drive app usage and demonstrate app effectiveness. 
                Therefore, the first step was to acknowledge their contributions
                and restore social respect. This led to the creation of the
                central idea, #HeroesatMyGate, which aimed to recognize the
                sacrifices that guards make to ensure our safety and well-being.
                The marketing campaign illustrated authentic scenarios within
                apartment complexes, highlighting the treatment of security
                guards. We seamlessly integrated MyGate&apos;s brand name into
                the campaign message. 
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 mb-8 md:mb-12">
                The campaign humanized security guards and highlighted their
                importance, resulting in a positive response from both security
                guards and apartment residents. The guards also began to
                perceive MyGate as their partner, which led to an improved
                adoption of the app.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />

        <PressSection
          className="bg-rb-red mt-16 md:mt-25"
          title={press?.title}
          content={press?.content}
          image={press?.image}
        />
      </section>

      <SimilarPosts
        tag="explore more case studies"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      />
    </>
  )
}
MyGate.PageLayout = SCSLayout
export default MyGate
