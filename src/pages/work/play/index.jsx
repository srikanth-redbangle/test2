import {
  TrustedBrandsSection,
  WorkListHeroSection,
  FeaturedPlayWorkSection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import { getPlayWorks } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import { ecsPlayWorkSchema } from '@/components/schema/ecs-play-work-schema'
import Script from 'next/script'

function ECS({ works, tags }) {
  // useEffect(() => {
  //   if (modal.open) {
  //     getPlayWorkDetails(modal.slug)
  //       .then((data) => {
  //         if (data.status == 'success') {
  //           setModal((prev) => ({
  //             ...prev,
  //             loading: false,
  //             video: data?.data?.work,
  //           }))
  //         }
  //       })
  //       .catch((err) => {
  //         setModal(INIT_MODAL)
  //       })
  //   }
  // }, [modal.open, modal.slug])
  // console.log(router.query)

  return (
    <>
      <SEO
        title="Video Production Company for Visual Storytelling"
        description="Watch our portfolio of video content including ad films, explainer videos, corporate videos and animated videos"
        keywords="Video Production Company, Animation Video Company, Ecs Services, Video Content Production, Visual Storytelling, Animation Projects, Engaging Videos, Corporate Storytelling, Video Marketing Solutions, Youtube Video Promotion, Youtube Channel Promotion, Video Production Agency, Video Production Services, Video Production Company, Video Company, Video Promotion, Youtube Video Creator, Corporate Video, Brand Video, Explainer Video Companies, Video Editing Company, Corporate Video Productions, Explainer Video Maker, Animated Video Explainer, Explainer Video Company, Promo Video Maker, Video Content Creation, Video Editing Services Near Me, Ad Film Makers, Animated Explainer Video, Youtube Marketing Services, Content Video, Corporate Video Production Company In Bangalore, Corporate Video Production, Youtube Marketing Agency, Promotional Video Maker, Video Commercial Production, Explainer Video Pricing, Corporate Film Makers, Commercial Video, Youtube Video Management, Youtube Video Advertising, Corporate Films, Corporate Video Makers, Youtube Video Marketing, Ad Films Production House, Explainer Video Services, Video Agency, Youtube Agency, Video Marketing Agency, Animation Video Services, Animation Video Company, Youtube Video Optimization, Video Production Companies Near Me, Corporate Video Production Company, Animated Video Production, Animated Explainer Video Company, Video Marketing Company, Video Content Marketing, Corporate Videographer, Corporate Film Production, Ad Film Agency, Advertisement Production House, Ad Production Houses, Youtube Ads Agency, Online Promo Video Maker, Youtube Marketing Agency Near Me, Corporate Video Company, Ad Film Making Companies, Ad Film Company, Best Explainer Videos, Explainer Video Agency, Animated Video Production Services, Animated Video Agency, Animated Video Production Companies, Creative Video Agency, Youtube Marketing Company, Promotional Video Company, Best Promo Video Maker, Content Creation Services, Brand Content Production Service, Corporate Video Production Service, Corporate Video Production Services, Corporate Video Services, Animated Corporate Video, Best Explainer Video Companies, Youtube Advertising Agency, Youtube Advertising Services, Youtube Seo Agency, Promo Video Creator, Commercial Video Production, Commercial Video Production Company, Corporate Video Production Agency, Best Corporate Videos, Corporate Video Production House, Youtube Production Agencies, Promotional Video Production Company, Promo Video Editor, Video Content Strategy, Animated Explainer Video Production Company, Corporate Explainer Video, Animated Explainer Video Agency, Advertising Video Production, Promotional Video Production, Commercial Production Companies, Explainer Video Cost, Commercial Video Production Services, Video Promotion Services, Youtube Video Strategy, Youtube Video Production Company, Youtube Marketing Services Near Me, Best Youtube Marketing Agency, Video Content Production, Video Content Management, Corporate Training Video Production, Video Production And Marketing, Event Video Services, Advertising Film Production Company, Film Advertising Agencies, Film Advertising Companies, Video Advertising Production Company, Ad Film Production Companies, Animated Explainer Video Production, Best Animated Explainer Videos, Explainer Video Studio, Top Explainer Video Companies, Animated Video Production Agency, Video Content Services, Music Video Company, Affordable Video Marketing Services, Youtube Video Agency, Video Content Agency, Video Content Marketing Agency, Youtube Advertising Company, Youtube Video Marketing Company, Youtube Production Companies, Promotional Video Services, Music Video Production Cost, Promo Video Pricing, Brand Videography, Top Commercial Production Companies, Music Video Promotion Services, Commercial Video Advertising, Youtube Editing Company, Youtube Video Branding, Youtube Video Services, Youtube Video Marketing Agency, Youtube Advertising Companies, Video Content Optimization, Video Content Creation Services, Video Content Marketing Services, Video Content Creation Agency, Video Content Production Company, Video Content Marketing Companies, Video Content Company, Video Content Creation Company, Video Content Production Agency, The Video Content Agency, Brand Content Production, Brand Video Agency, Branded Video Production Company, Fmcg Video Production Company, Fmcg Video Production Agency, Video Production Firm, Advertising Film Company, Advertising Video Services, Advertising Video Creation, Advertising Video Marketing, Youtube Video Consulting, Youtube Video Solutions, Video Content Consulting, Branded Content Video Production Company"
        url="www.redbangle.com/work/video-production-company-for-corporate-storytelling"
      />

      <WorkListHeroSection
        className="bg-rb-rosa"
        type="play"
        typeTwo="Work Showcase"
        pillImg="/img/play-pill.webp"
        content={
          <>
            Leverage storytellers, producers and technology to fuel brand
            growth.{' '}
            <h1 className="inline">
              Make ad films, corporate films, explainer videos, YouTube content
            </h1>{' '}
            and more!
          </>
        }
      />

      <div style={{ display: 'none' }}>
        <h2>Video Production Company</h2>
        <h2>Animation Video Company</h2>
        <h2>Video Content Production</h2>
        <h2>Visual Storytelling</h2>
        <h2>Animation Projects</h2>
        <h2>Engaging Videos</h2>
        <h2>Corporate Storytelling</h2>
        <h2>Video Marketing Solutions</h2>
      </div>
      <FeaturedPlayWorkSection tags={tags} works={works} />

      <TrustedBrandsSection className="bg-white pt-9 pb-18 md:pb-30 md:pt-15" />

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(ecsPlayWorkSchema)}
      </Script>
    </>
  )
}
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)
  const tags = works.reduce((prev, w) => {
    w.tags?.forEach((t) => (prev[t.slug] = t.name))
    return prev
  }, {})
  const tagProp = Object.entries(tags).map(([k, v], index) => ({
    key: index,
    label: v,
    value: k,
  }))
  const filtered = tagProp.filter((f) => f.value != 'featured-work').sort()

  return {
    props: {
      works,
      tags: [tagProp.find((t) => t.value == 'featured-work'), ...filtered],
    },
  }
}
export default ECS
