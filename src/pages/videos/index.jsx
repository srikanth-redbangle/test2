import {
  FeaturedPlayWorkSection,
  FeaturedWorkSection,
  SEO,
  Testimonials,
  TrustedBrandsSection,
  testimonialsDefault,
  WorkListHeroSection,
} from '@/components/shared'
import React from 'react'
// import { createTestimonialData } from './create'
import { similarPosts } from '@/utils/dummy'
import { Accordion } from '@/components/ui'
import { postsMapper } from '@/utils/mapper'
import { formatPlayPosts } from '@/utils/formate'
import { getPlayWorks } from '@/utils/graphql'
import Link from 'next/link'
import Script from 'next/script'
import { videoSchema } from '@/components/schema/video-schema'
import { CampaignHorizontalScrollCards } from '@/components/shared/sections/CampaignHorizontalScrollCards/CampaignHorizontalScrollCards'

const TNC = [
  {
    key: 0,
    title: 'Do you help with conceptualisation and script writing?',
    content:
      'Yes, we conceptualize and script across genres and formats. Most of our clients simply share a brief, and we then present creative ways to communicate the messages with the target audience.',
  },
  {
    key: 1,
    title: 'What kind of videos do you create?',
    content: (
      <>
        <div>
          Whether it’s studio-based production blended with 2D animation or a
          docu-series filmed across locations - we support the entire range of
          film and video formats that a global B2B business needs. Some of these
          are:
        </div>
        <ul className="list-disc pl-5 py-3">
          <li>Product & Service Marketing Videos</li>
          <li>Corporate Films</li>
          <li>Hiring & Culture Videos</li>
          <li>Testimonial & Case Study Videos</li>
          <li>ESG videos and short films</li>
          <li>Event Content</li>
          <li>Thought Leadership Content - including Podcasts</li>
          <li>Brand films</li>
          <li>Ad films</li>
        </ul>
      </>
    ),
  },
  // {
  //   key: 2,
  //   title: 'Typically, what business verticals do you create videos for?',
  //   content:
  //     'Red Bangle produces a variety of videos and video content to meet the diverse needs of global B2B brands. This includes videos for marketing, corporate communications and public relations, employer branding, internal communications, sales and RFPs, and more. The formats range from ad films and corporate films to marketing explainers and documentary films.',
  // },
  {
    key: 3,
    title: 'What is your typical video production process?',
    content: (
      <>
        <div>
          When it comes to end-to-end video production, we have a time-tested
          process. Take a look below.
        </div>
        <h3 className="mt-5 font-semibold  text-base">1. Project Briefing</h3>
        <div>
          Our Global Services team understands client requirements, including
          business intent, target audience, key messages, and any other project
          considerations to create a comprehensive project brief. We may request
          the client additional information through a Script Briefing Document
          to clarify and define priority objective, messages, visuals and calls
          to action.
        </div>
        <h3 className="mt-5 font-semibold  text-base">2. Red BangleX</h3>
        <div>
          Red BangleX is our cloud-based technology platform that’s built to
          support hundreds of video projects in parallel. From briefs, project
          schedules, assigning the project team and managing project assets - we
          do it all on the cloud and you can track the progress as we go along.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          3. Concepts & Estimates
        </h3>
        <div>
          We develop at least 2 different concepts for the brief, and present
          them to the client. Time permitting, estimates are provided for all
          the concepts presented so the client can decide on the most suitable
          way forward.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          4. Information Gathering
        </h3>
        <div>
          Some projects need us to go beyond the reading material a client may
          provide us. In such cases, we conduct primary or secondary research to
          gather information for the script.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          5. Script and Visualisation
        </h3>
        <div>
          We custom-script all the videos we make. And define the visual cues
          needed to start bringing the story to life.
        </div>
        <h3 className="mt-5 font-semibold  text-base">6. Pre-Production</h3>
        <div>
          Depending on the project brief, turnaround time, and budget - the
          pre-production workflow varies. A comprehensive workflow could include
          graphic design, a storyboard, location, casting, styling, art, a
          pre-production meeting, and more.
        </div>
        <h3 className="mt-5 font-semibold  text-base">7. Production</h3>
        <div>
          Our production process takes care of shot breakdowns, shoot schedules,
          curated crews and equipment, art production and more. From one-camera
          testimonial videos at an office to full-scale ad film production on
          location - we support campaigns, series and video production across
          formats.
        </div>
        <h3 className="mt-5 font-semibold  text-base">8. Post-Production</h3>
        <div>
          Our team of editors, motion graphic artists, animators, colorists, and
          sound engineers weave together all the required elements in
          post-production. A typical process could be as follows: a first draft,
          a final draft, professional voice-over recording, music purchase /
          editing and integration, SFX, audio mixing and mastering, colouring,
          and finishing touches. All files are uploaded to Red BangleX, which
          offers an easy-to-use interactive video review feature.
        </div>
        <h3 className="mt-5 font-semibold  text-base">9. Versioning</h3>
        <div>
          Should your video need a whole bunch of versions or adapts, we take
          care of that end-to-end, no matter what the dimension or resolution.
          We are equipped to create both direct adapts and custom versions
          across languages, and with subtitles.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          10. Cloud-based Delivery
        </h3>
        <div>
          We upload the final video file and its versions as well as adapts to
          Red BangleX. Our clients can download and use these assets from
          anywhere in the world. All project assets - such as music and footage
          files - are also stored on Red BangleX for easy repurposing across the
          client’s brand.
        </div>
      </>
    ),
  },
  // {
  //   key: 4,
  //   title: 'What are your typical project turnaround times?',
  //   content: (
  //     <>
  //       <div>
  //         Project turnaround times vary basis the format, scale of production as
  //         well as type of service. Here’s a little guidance for each of our
  //         services.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">1. Videos</h3>
  //       <div>
  //         Depending on the format and the scale of the project, as well as
  //         depending on how quickly we receive client feedback - we take anywhere
  //         between 10 and 40 working days to turnaround a brief. Occasionally,
  //         when we are making a longer-duration video or an interactive video,
  //         this timeline might stretch to over 45 days.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">2. Crews</h3>
  //       <div>
  //         Typically, we can get a curated video crew in place in as little as 3
  //         working days. And post the shoot, we can either handover the files at
  //         the shoot on a hard disk or quality-check the footage and deliver it
  //         online within 2 working days from the shoot.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">3. Campaign & Series</h3>
  //       <div>
  //         Workflows and timelines are highly customized and responsive for this
  //         service. A simple campaign film could be created in 15 working days
  //         from the formal contract or take up to 90 days - this is subject to
  //         the brief, the scale of production, as well as dependencies on the
  //         client side. A short series of videos could be produced in 45 days and
  //         a larger requirement - for example, YouTube content to grow
  //         subscribers and community - could be run as an annual contract.
  //       </div>
  //     </>
  //   ),
  // },
  {
    key: 5,
    title: 'How much do your video production services cost?',
    content: (
      <>
        Cost estimates vary based on the requirement, the effort involved in
        creating the video, the turnaround time as well as the production
        location. For a tailored quote, please{' '}
        <Link href="/contact" className="underline text-rb-red">
          send us a brief
        </Link>
        .
      </>
    ),
  },
  // {
  //   key: 6,
  //   title: 'Do you provide services internationally?',
  //   content:
  //     'We are a Global Video Agency. We have plenty of experience in producing videos across continents. Our cloud-based processes, a curated network of video crews across 100 countries, trained project managers, a professional global services team, and strategic post-production studios come together to deliver projects across formats and time zones.',
  // },
  {
    key: 7,
    title: 'Do you handle the entire creative process in-house?',
    content:
      'From concept development, scripts, design and production to post-production and final delivery — the entire creative process is managed in-house at Red Bangle. Should local crews or specialized external talent be required for a project — complete creative ownership, quality control, copyright and confidentiality continue to be taken care of by Red Bangle.',
  },
  {
    key: 8,
    title: 'How do you deliver the final creative outputs and assets?',
    content:
      'Briefs, drafts, and final videos, and all video assets are delivered to the client via Red BangleX - our cloud-based technology platform. This ensures zero-asset-loss and easy asset repurposing.',
  },
  // {
  //   key: 9,
  //   title:
  //     'What are your policies around intellectual property rights and business data confidentiality?',
  //   content:
  //     'We take data security, privacy, confidentiality, and intellectual property rights very seriously. Our practices adhere to global standards. We license every single software and creative asset required and ensure that necessary media release documents are in place, and have service contracts with our partners that explicitly detail the intellectual property rights assigned to the client.',
  // },
  // {
  //   key: 10,
  //   title: 'Which time zone does your company operate in?',
  //   content: (
  //     <>
  //       Our global services team supports clients across time zones. So,{' '}
  //       <Link href="/contact" className="underline text-rb-red">
  //         send us a brief
  //       </Link>{' '}
  //       and we’ll set up a meeting at a mutually convenient time.
  //     </>
  //   ),
  // },
]

const videoCards = [
  {
    id: 1,
    imgUrl: '/img/services/global-video.webp',
    title: 'Creative Video Agency',
    desc: 'Experience the power of a creative video agency that thinks for your B2B brand and crafts stories the world over. We’ve got the Writers, Directors and Crews for every video brief. Supercharge your marketing, hiring, corporate communications, and more!',
  },
  {
    id: 2,
    imgUrl: '/img/services/fresh-scripts.webp',
    title: 'Fresh Scripts & Stories',
    desc: 'Get fresh concepts, scripts, great graphic design, animation, and premium production quality. Get videos that wow your audience. Kick off a brief with Red Bangle, today! ',
  },
  {
    id: 3,
    imgUrl: '/img/services/end-to-end.webp',
    title: 'End-to-end Solutions',
    desc: 'Go from concepts, scripts, visualization, and design to production, post-production, reviews and versioning with one B2B video agency. Get end-to-end video services across locations with Red Bangle.',
  },
  {
    id: 4,
    imgUrl: '/img/services/video-across.webp',
    title: 'Any format, any location',
    desc: 'Be it an interactive video crafted using 2D animation or a documentary film shot across the USA - we support a wide range of video formats, across locations. We make scalable video production easy for your B2B brand.',
  },
  {
    id: 5,
    imgUrl: '/img/services/redbangleX.webp',
    title: 'Cloud-based Workflows',
    desc: 'Our custom-built creative production management platform - Red BangleX - lets you track project progress, review videos, and seamlessly share video assets with colleagues. Never chase a deadline or hunt for a video file again! ',
  },
  {
    id: 6,
    imgUrl: '/img/services/limitless.webp',
    title: 'Limitless Versioning',
    desc: 'Making one film, but need it adapted to several languages and a range of dimensions for various platforms? Choose Red Bangle for accurately managed limitless versioning services. Fulfill every B2B video marketing need your business has! ',
  },
]

const VideoServices = ({ works, tags }) => {
  const _posts = similarPosts.map(postsMapper)
  return (
    <>
      <SEO
        title="Corporate Video Production Agency for Global B2B Enterprises"
        description="End-to-end video solutions for your enterprise videos. Get everything from scripts, video shoot to post-production and adaptations"
        keywords="Best Advertising Videos, Leadership Motivation Videos, Video Production Companies Near Me, Marketing Videos, Promotional Videos, Testimonials Videos, Explainer Videos, Product Video, Team Culture Videos, Pre Recorded Video Interview, Corporate Video, Video Production, Video Production Service, Filming Production Companies, Corporate Video Production, Corporate Videography, Event Video Production, Video Animation Services, Animated Video Production, Commercial Production Companies, Explainer Videos, Product Video, Cartoon Animator, Advertising Video, Corporate Video Production, Production Videos, Film Production Agencies, B2b Video Agency, Testimonials Videos, Commercial Video, Inspirational Leadership Video, Promotional Video Companies, Corporate Films, Creative Video Agency, Culture Videos, Marketing Videos, PR Videos, AI Generated Videos"
        url="https://www.redbangle.global/videos"
      />
      <section className={`pb-6 md:pb-12 pt-8 md:pt-14 overflow-hidden `}>
        <div className="container">
          <h1 style={{ display: 'none' }}>
            corporate videos and explainers to customer testimonial videos - get
            creative video production services
          </h1>
          {/* <div className="uppercase text-rb-scarlet font-everett font-medium text-[56px] leading-[1.07] tracking-[-1.96px] md:text-[120px] md:leading-[122px] md:tracking-[-1.92px]">
              Video
              <br />
            </div>
            <div className="max-w-[1153px] mt-6  md:mt-7 text-rb-black text-sm tracking-[-0.56px] md:text-[32px] md:leading-[1.25] md:tracking-[-0.48px] font-semibold">
              Be it corporate video production, animated explainer videos,
              customer testimonial videos or a range of other video formats - we
              are your global B2B video production agency. Go from script and
              visualization to production and post-production in one seamless
              experience- no matter which city!
            </div> */}
          <WorkListHeroSection
            duration="15"
            className="text-rb-torch-red pb-12 md:pb-24"
            type="VIDEOS"
            typeTwo="VIDEOS"
            video1="img/services/video1.mp4"
            video2="img/services/video2.mp4"
            outlineClass="outline-text-torchred"
            pillImg="/img/play-pill.webp"
            CTA
            CTAtext="Send a brief"
            contentClassName="md:max-w-[1046px] font-semibold"
            content={
              <>
                Be it a marketing explainer, a hiring video or a corporate film
                - we are your end-to-end B2B video production agency. Go from
                script and visualization to production and post-production in
                one seamless workflow.
              </>
            }
          />
        </div>

        <div style={{ display: 'none' }}>
          <h2>Video Production Companies Near Me</h2>
          <h2>Marketing Videos</h2>
          <h2>Promotional Videos</h2>
          <h2>Testimonials Videos</h2>
          <h2>Explainer Videos</h2>
          <h2>Product Video</h2>
          <h2>Corporate Video</h2>
          <h2>Video Production</h2>
          <h2>Video Production Service</h2>
          <h2>Filming Production Companies</h2>
          <h2>Corporate Video Production</h2>
          <h2>Corporate Videography</h2>
          <h2>Explainer Videos</h2>
          <h2>Product Video</h2>
          <h2>Cartoon Animator</h2>
          <h2>Advertising Video</h2>
          <h2>Corporate Video Production</h2>
          <h2>Production Videos</h2>
          <h2>Film Production Agencies</h2>
          <h2>Testimonials Videos</h2>
          <h2>Commercial Video</h2>
          <h2>Corporate Films</h2>
          <h2>Marketing Videos</h2>
          <h2>PR Videos</h2>
          <h2>AI Generated Videos</h2>
        </div>
        <FeaturedPlayWorkSection
          works={works ?? []}
          tags={tags}
          seeAll={false}
          customClass="bg-rb-mercury md:pb-24 pt-6 pb-12"
          stickyBg
        />
      </section>

      <CampaignHorizontalScrollCards
        data={videoCards}
        title="Scalable video production made easy for B2B brands"
        titleClass="md:max-w-full"
      />

      <Testimonials
        className="py-6 md:py-12"
        testimonialData={testimonialsDefault}
        type="semi"
      />

      <TrustedBrandsSection className="md:py-12 py-6" />

      <FeaturedWorkSection
        posts={_posts}
        href="/work/create"
        title="Explore Case Studies"
      />

      <section className="py-6 md:py-12 overflow-hidden">
        <div className="container">
          <h2 className="text-title md:text-title-md font-medium mb-10 md:mb-16">
            Explore More Services
          </h2>

          <div
            className="grid md:grid-cols-2 gap-4 md:gap-6"
            // onSwiper={(swiper) => (sliderRef.current = swiper)}
          >
            {[
              {
                id: 0,
                serviceTitle: 'CAMPAIGNS',
                serviceDescription:
                  'Get great campaign ideas and premium,  global production with Red Bangle. Supercharge your marketing funnels, hiring campaigns, and more with ad campaigns and video series that deliver on the business intent and drive ROI. One agency - boundless storytelling, borderless production. ',
                serviceAmblem: '/img/industries/think-circle.svg',
                bgColor: 'bg-rb-scarlet',
                href: '/campaigns',
              },
              {
                id: 2,
                serviceTitle: 'CREWS',
                serviceDescription:
                  'Book professional video crews on-demand in 100 countries. Our team of experienced producers curates video crews for every brief and location, manages the shoots and quality-checks the footage for you. Shoot video testimonials, events, drone footage, and more whenever you need them and wherever you need them!',
                serviceAmblem: '/img/industries/play-circle.svg',
                bgColor: 'bg-rb-rosa',
                href: '/crews',
              },
            ].map(
              ({
                id,
                serviceTitle,
                serviceDescription,
                serviceAmblem,
                bgColor,
                href,
              }) => (
                <Link key={id} href={href} className="group">
                  <div
                    className={`p-8 md:p-14 relative overflow-hidden min-h-full ${bgColor}`}
                  >
                    <div className="absolute top-0 right-0 translate-x-[45%] -translate-y-12 md:-translate-y-28 opacity-20">
                      <img
                        src={serviceAmblem}
                        alt=""
                        className="w-[176px] h-[176px] md:w-[350px] md:h-[350px]"
                      />
                    </div>
                    <h3 className="text-white text-3xl md:text-6xl font-semibold flex items-center gap-3 mb-15 md:mb-[160px]">
                      {serviceTitle}
                      <svg
                        width="34"
                        height="32"
                        viewBox="0 0 34 32"
                        fill="none"
                        className="group-hover:translate-x-1 transition-all"
                      >
                        <path
                          d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                          fill="#fff"
                        />
                      </svg>
                    </h3>

                    <p className="text-sm md:text-xl text-white">
                      {serviceDescription}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <section className="md:pt-12 pt-6 md:pb-24 pb-12">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                  Frequently Asked Questions
                </h3>
                {/* <div className="text-[16px] md:text-[20px] leading-[1.5] text-rb-black/80 mb-8 md:mb-0">
                    For any queries please contact us at{' '}
                    <a className="text-rb-red" href="mailto:hello@redbangle.com">
                      hello@redbangle.com
                    </a>
                  </div> */}
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <Accordion
                data={TNC?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
            </div>
          </div>
        </div>
      </section>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(videoSchema)}
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

export default VideoServices