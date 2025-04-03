import Link from 'next/link'

export const services = [
  {
    key: 'think',
    label: 'Think',
    title: 'THINK',
    // image: { src: '/img/services/scs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/think.mp4',
      poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'Drive exponential brand growth with strategic campaign and content solutions. Leverage our knowledge of integrated marketing solutions and creativity.',
    steps: [
      '01. Brand Environment Analysis',
      '02. Communication Strategy',
      '03. Content Strategy',
      '04. Creative Ideation',
      '05. Content Production',
      '06. Distribution + Optimisation',
      '07. Performance Tracking',
    ],
    detail: '/services/think',
    // work: '/work/think',
  },
  {
    key: 'create',
    label: 'Create',
    title: 'CREATE',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/create.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'Go from creative insights and campaign ideas to end-to-end content production, distribution and optimisation in one seamless flow with us.',
    steps: [
      '01. Insight Discovery',
      '02. Creative Strategy',
      '03. Creative Ideation',
      '04. Content Production',
      '05. Distribution + Optimisation',
      '06. Performance Tracking',
    ],
    detail: '/services/create',
    work: '/work/create',
  },
  {
    key: 'play',
    label: 'Play',
    title: 'PLAY',
    // image: { src: '/img/services/ecs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/play.mp4',
      poster: '/img/services/play-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'Power every play button with brand content that rocks. Our storytellers, producers and technology fuel campaigns and content across audiences and regions.',
    steps: [
      '01. Script',
      '02. Visualisation',
      '03. Pre Production',
      '04. Production',
      '05. Post Production',
      '06. Versioning',
    ],
    detail: '/services/play',
    work: '/work/play',
  },
]

export const capabilitiesSCS = [
  {
    key: 0,
    title: 'Brand Environment Analysis',
    text: 'We delve into your brand ecosystem and study your market presence through a comprehensive analysis of the brand environment',
    icon: {
      src: '/img/services/approach/s-star.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Brand Communication Strategy',
    text: 'We identify communication gaps and recommend a strategy for a new brand proposition and for reinventing brand positioning',
    icon: {
      src: '/img/services/approach/s-circles.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Content Strategy',
    text: 'We design a comprehensive content plan that caters to your distinct audience and resonates across the funnel',
    icon: {
      src: '/img/services/approach/s-maze.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Creative Ideation',
    text: 'With strategic blueprints and imaginative problem-solving, we bring alive an extensive collection of digital content ideas',
    icon: {
      src: '/img/services/approach/s-think.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 4,
    title: 'Content Production',
    text: 'We direct and produce across the world to bring amazing creative ideas to life. And our project management excellence enables content production at scale',
    icon: {
      src: '/img/services/approach/s-gear.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Distribution and Optimisation',
    text: 'We employ the right channels for content distribution, ensuring the right reach and maximum ROI',
    icon: {
      src: '/img/services/approach/s-megaphone.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 6,
    title: 'Performance Tracking',
    text: 'Our comprehensive performance tracking helps us obtain crucial insights, drive actionable plans and deliver meaningful results',
    icon: {
      src: '/img/services/approach/s-chart.svg',
      width: 111,
      height: 111,
    },
  },
]

export const capabilitiesCreate = [
  {
    key: 0,
    title: 'Insight Discovery',
    text: null,
    icon: {
      src: '/img/services/approach/star.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Creative Strategy',
    text: null,
    icon: {
      src: '/img/services/approach/circles.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Creative Ideation',
    text: null,
    icon: {
      src: '/img/services/approach/maze.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Content Production',
    text: null,
    icon: {
      src: '/img/services/approach/gear.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 4,
    title: 'Distribution and Optimisation',
    text: null,
    icon: {
      src: '/img/services/approach/megaphone.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Performance Tracking',
    text: null,
    icon: {
      src: '/img/services/approach/rise-chart.svg',
      width: 111,
      height: 111,
    },
  },
]
export const capabilitiesPlay = [
  {
    key: 0,
    title: 'Script',
    text: null,
    icon: {
      src: '/img/services/approach/script.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Visualisation',
    text: null,
    icon: {
      src: '/img/services/approach/visualisation.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Pre Production',
    text: null,
    icon: {
      src: '/img/services/approach/prepod.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Production',
    text: null,
    icon: {
      src: '/img/services/approach/production.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 4,
    title: 'Post Production',
    text: null,
    icon: {
      src: '/img/services/approach/postproduction.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Versioning',
    text: null,
    icon: {
      src: '/img/services/approach/versioning.svg',
      width: 111,
      height: 111,
    },
  },
]

export const redbanglewayThink = [
  {
    key: '0',
    heading: 'Immerse',
    content:
      "We diagnose the challenge at hand with an in-depth discussion. We study what shapes your brand's landscape: understanding the competition and category challenges, and gaining relevant consumer insights.",
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Strategize',
    content:
      'We distil the problem, define the gap and identify the sweet spot. We formulate the content strategy and craft messages that align with your brand values and vision.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Create',
    content:
      'We unveil the power of imagination through creative ideas that will leapfrog your brand into the future. Our production capability brings alive the collaborative vision.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Connect',
    content:
      'We use strategic content distribution to maximise reach with all the right audiences. Our tracking and insights help optimise content performance.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]

export const redbanglewayCreate = [
  {
    key: '0',
    heading: 'The Global, Creative Video Agency',
    content:
      'Experience the power of a global, professional creative video agency that thinks for your business and crafts stories the world over. Our agency and global film collaborative are designed to meet your growing B2B video needs. ',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Experienced Creative & Production Experts',
    content:
      'We’ve been fuelling B2B communications with great video campaigns and content for nearly a decade now. We know what sticks in global B2B marketing, corporate communications, employer branding, and more.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Borderless Production Services',
    content:
      'Be it 50 videos across 5 continents or 5 videos across 1 country - we’ve got the creative juices, the video crews and the workflows. Talk to us for effortless, scalable video content production.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Cloud-based Workflows',
    content:
      'From briefing and reviewing drafts to sharing video assets with internal teams - do it all on the cloud with Red BangleX - our technology platform that’s built to support hundreds of video projects in parallel. Never lose a creative asset again!',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]

export const approach = [
  { key: 0, title: 'Project Brief', src: 'brief.svg' },
  { key: 1, title: 'Info Gathering', src: 'info.svg' },
  { key: 2, title: 'Concept Proposal', src: 'concept.svg' },
  { key: 3, title: 'Research & Script', src: 'research.svg' },
  { key: 4, title: 'Visualization', src: 'visualization.svg' },
  { key: 5, title: 'Pre-Prod Meeting', src: 'prepod.svg' },
  { key: 6, title: 'Production', src: 'production.svg' },
  { key: 7, title: 'Post Production', src: 'postproduction.svg' },
  { key: 8, title: 'Delivery', src: 'delivery.svg' },
  { key: 9, title: 'Video Asset Repurposing', src: 'videoasset.svg' },
]

export const serviceVideos = {
  think: {
    video: {
      src: '/img/services/think-rect.mp4',
      poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/think-full.mp4',
      poster: '/img/services/think-full-poster.webp',
      width: '1920',
      height: '1080',
    },
  },
  create: {
    video: {
      src: '/img/services/create-rect.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/create-full.mp4',
      poster: '/img/services/create-full-poster.webp',
      width: '1920',
      height: '1080',
    },
  },
  play: {
    video: {
      src: '/img/services/play-rect.mp4',
      poster: '/img/services/play-poster.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/play-full.mp4',
      poster: '/img/services/play-full-poster.webp',
      width: '1920',
      height: '1080',
    },
  },
}

export const playStats = [
  {
    id: 0,
    countUpProps: {
      value: 60,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <span className="md:max-w-[188px]">
        satisfied <br />
        clients
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 4,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: <>projects completed successfully</>,
  },
  {
    id: 2,
    countUpProps: {
      value: 25,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <>
        countries
        <br /> produced in
      </>
    ),
  },
  {
    id: 3,
    countUpProps: {
      value: 50,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <>
        formats
        <br />
        supported
      </>
    ),
  },
]

export const playAdvantage = [
  {
    key: 0,
    image: '/img/services/approach/storytelling.svg',
    title: 'Premium Storytelling',
    text: 'Whatever the genre and whoever the audience, we bring alive scripts with visual wow and heart. We are known for great production quality and on-time delivery.',
  },
  {
    key: 1,
    image: '/img/services/approach/filmmakers.svg',
    title: 'Curated Filmmakers',
    text: 'We offer any-genre, any-location production with the support of our curated community of filmmakers, always ensuring that complete creative ownership stays with us.',
  },
  {
    key: 2,
    image: '/img/services/approach/formats.svg',
    title: 'Across Formats',
    text: 'From an advertising campaign film to an explainer video, we have the experts and the experience to craft it all. We have dedicated teams for scripts, design, direction, production, post production and more.',
  },
  {
    key: 3,
    image: '/img/services/approach/efficiency.svg',
    title: 'Process Efficiency',
    text: 'Having produced over 4000 pieces of content across 25 countries, we’ve got a technology-enabled scheduling and project management engine that’s on par with the best in the service industry.',
  },
  {
    key: 4,
    image: '/img/services/approach/scalable.svg',
    title: 'Scalable Production',
    text: 'Be it 35 films produced across 5 continents in 45 days or 100 pieces of YouTube content across a few months - we’ve got the capability and the experience for campaign and content production at scale.',
  },
]

export const TNC = [
  {
    key: 0,
    title: 'What services does your global video production agency offer?',
    content: (
      <>
        <div>
          Red Bangle offers three services designed for global businesses:
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          End-to-End Video Creation:
        </h3>
        <div>
          We offer end-to-end video services across locations. Our services take
          you from concepts, scripts, visualization, and design to production,
          post-production, reviews and versioning in one place.
        </div>
        <h3 className="mt-5 font-semibold  text-base">Campaigns & Series:</h3>
        <div>
          From big-budget advertisements to well-crafted YouTube content - we
          can help supercharge your B2B brand with scalable, end-to-end creative
          production services.
        </div>
        <h3 className="mt-5 font-semibold  text-base">Crew Bookings:</h3>
        <div>
          With Red Bangle, you can access professional video crews on-demand in
          100 countries. Be it a single-camera testimonial shoot or a
          multi-camera event shoot - our curated video crew services scale to
          your brief, no matter which location.
        </div>
      </>
    ),
  },
  {
    key: 1,
    title: 'How experienced is your team?',
    content:
      'We’ve been fuelling B2B communications with great video campaigns and content for nearly a decade now. We’ve made over 4000 pieces of content across formats, across 25 countries. We know what sticks in global B2B marketing, corporate communications, employer branding, and more.',
  },
  {
    key: 2,
    title: ' Do you have a portfolio i can view?',
    content: (
      <>
        Absolutely. Explore our Campaign & Series portfolio{' '}
        <Link href="/campaigns" className="underline text-rb-red">
          here
        </Link>{' '}
        and our Video portfolio{' '}
        <Link href="/videos" className="underline text-rb-red">
          here
        </Link>
        .
      </>
    ),
  },
  {
    key: 3,
    title: 'Typically, what business verticals do you create videos for?',
    content:
      'Red Bangle produces a variety of videos and video content to meet the diverse needs of global B2B brands. This includes videos for marketing, corporate communications and public relations, employer branding, internal communications, sales and RFPs, and more. The formats range from ad films and corporate films to marketing explainers and documentary films.',
  },
  // {
  //   key: 4,
  //   title: 'What is your typical video production process?',
  //   content: (
  //     <>
  //       <div>
  //         When it comes to end-to-end video production, we have a time-tested
  //         process. Take a look below.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">1. Project Briefing</h3>
  //       <div>
  //         Our Global Services team understands client requirements, including
  //         business intent, target audience, key messages, and any other project
  //         considerations to create a comprehensive project brief. We may request
  //         the client additional information through a Script Briefing Document
  //         to clarify and define priority objective, messages, visuals and calls
  //         to action.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">2. Red BangleX</h3>
  //       <div>
  //         Red BangleX is our cloud-based technology platform that’s built to
  //         support hundreds of video projects in parallel. From briefs, project
  //         schedules, assigning the project team and managing project assets - we
  //         do it all on the cloud and you can track the progress as we go along.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">
  //         3. Concepts & Estimates
  //       </h3>
  //       <div>
  //         We develop at least 2 different concepts for the brief, and present
  //         them to the client. Time permitting, estimates are provided for all
  //         the concepts presented so the client can decide on the most suitable
  //         way forward.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">
  //         4. Information Gathering
  //       </h3>
  //       <div>
  //         Some projects need us to go beyond the reading material a client may
  //         provide us. In such cases, we conduct primary or secondary research to
  //         gather information for the script.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">
  //         5. Script and Visualisation
  //       </h3>
  //       <div>
  //         We custom-script all the videos we make. And define the visual cues
  //         needed to start bringing the story to life.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">6. Pre-Production</h3>
  //       <div>
  //         Depending on the project brief, turnaround time, and budget - the
  //         pre-production workflow varies. A comprehensive workflow could include
  //         graphic design, a storyboard, location, casting, styling, art, a
  //         pre-production meeting, and more.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">7. Production</h3>
  //       <div>
  //         Our production process takes care of shot breakdowns, shoot schedules,
  //         curated crews and equipment, art production and more. From one-camera
  //         testimonial videos at an office to full-scale ad film production on
  //         location - we support campaigns, series and video production across
  //         formats.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">8. Post-Production</h3>
  //       <div>
  //         Our team of editors, motion graphic artists, animators, colorists, and
  //         sound engineers weave together all the required elements in
  //         post-production. A typical process could be as follows: a first draft,
  //         a final draft, professional voice-over recording, music purchase /
  //         editing and integration, SFX, audio mixing and mastering, colouring,
  //         and finishing touches. All files are uploaded to Red BangleX, which
  //         offers an easy-to-use interactive video review feature.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">9. Versioning</h3>
  //       <div>
  //         Should your video need a whole bunch of versions or adapts, we take
  //         care of that end-to-end, no matter what the dimension or resolution.
  //         We are equipped to create both direct adapts and custom versions
  //         across languages, and with subtitles.
  //       </div>
  //       <h3 className="mt-5 font-semibold  text-base">
  //         10. Cloud-based Delivery
  //       </h3>
  //       <div>
  //         We upload the final video file and its versions as well as adapts to
  //         Red BangleX. Our clients can download and use these assets from
  //         anywhere in the world. All project assets - such as music and footage
  //         files - are also stored on Red BangleX for easy repurposing across the
  //         client’s brand.
  //       </div>
  //     </>
  //   ),
  // },
  {
    key: 5,
    title: 'What are your typical project turnaround times?',
    content: (
      <>
        <div>
          Project turnaround times vary basis the format, scale of production as
          well as type of service. Here’s a little guidance for each of our
          services.
        </div>
        <h3 className="mt-5 font-semibold  text-base">1. Videos</h3>
        <div>
          Depending on the format and the scale of the project, as well as
          depending on how quickly we receive client feedback - we take anywhere
          between 10 and 40 working days to turnaround a brief. Occasionally,
          when we are making a longer-duration video or an interactive video,
          this timeline might stretch to over 45 days.
        </div>
        <h3 className="mt-5 font-semibold  text-base">2. Crews</h3>
        <div>
          Typically, we can get a curated video crew in place in as little as 3
          working days. And post the shoot, we can either handover the files at
          the shoot on a hard disk or quality-check the footage and deliver it
          online within 2 working days from the shoot.
        </div>
        <h3 className="mt-5 font-semibold  text-base">3. Campaign & Series</h3>
        <div>
          Workflows and timelines are highly customized and responsive for this
          service. A simple campaign film could be created in 15 working days
          from the formal contract or take up to 90 days - this is subject to
          the brief, the scale of production, as well as dependencies on the
          client side. A short series of videos could be produced in 45 days and
          a larger requirement - for example, YouTube content to grow
          subscribers and community - could be run as an annual contract.
        </div>
      </>
    ),
  },
  // {
  //   key: 6,
  //   title: 'How much do your video production services cost?',
  //   content: (
  //     <>
  //       Cost estimates vary based on the requirement, the effort involved in
  //       creating the video, the turnaround time as well as the production
  //       location. For a tailored quote, please{' '}
  //       <Link href="/contact" className="underline text-rb-red">
  //         send us a brief
  //       </Link>
  //       .
  //     </>
  //   ),
  // },
  {
    key: 7,
    title: 'Do you provide services internationally?',
    content:
      'We are a Global Video Agency. We have plenty of experience in producing videos across continents. Our cloud-based processes, a curated network of video crews across 100 countries, trained project managers, a professional global services team, and strategic post-production studios come together to deliver projects across formats and time zones.',
  },
  // {
  //   key: 8,
  //   title: 'How do you deliver the final creative outputs and assets?',
  //   content:
  //     'Briefs, drafts, and final videos, and all video assets are delivered to the client via Red BangleX - our cloud-based technology platform. This ensures zero-asset-loss and easy asset repurposing.',
  // },
  {
    key: 9,
    title:
      'What are your policies around intellectual property rights and business data confidentiality?',
    content:
      'We take data security, privacy, confidentiality, and intellectual property rights very seriously. Our practices adhere to global standards. We license every single software and creative asset required and ensure that necessary media release documents are in place, and have service contracts with our partners that explicitly detail the intellectual property rights assigned to the client.',
  },
  {
    key: 10,
    title: 'Which time zone does your company operate in?',
    content: (
      <>
        Our global services team supports clients across time zones. So,{' '}
        <Link href="/contact" className="underline text-rb-red">
          send us a brief
        </Link>{' '}
        and we’ll set up a meeting at a mutually convenient time.
      </>
    ),
  },
]

export const createTestimonialData = [
  {
    key: 0,
    quote:
      'We worked on 2 films with Red Bangle and I can confidently say that the output exceeded our expectations. The team was able to come up with a concept that combined the strong recall of popular culture and at the same time incorporated the brand messaging clearly in the campaign. I would highly recommend them as a reliable and kickass creative partner',
    name: 'BHARAT VIRMANI',
    designation: 'Marketing Manager',
    company: 'Games24x7',
    image: {
      srcSet:
        '/img/testimonials/bharat.webp 533w, /img/testimonials/bharat.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 1,
    quote:
      'The Red Bangle team is fantastic to work with! They add value not just from a creative standpoint but also in terms of communication strategy.',
    name: 'ROSHAN CARIAPPA ',
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
      'Red Bangle’s work has been exemplary for the Season of Joy Campaign. The video does what it set out to do – touch people’s hearts.',
    name: 'PEARLRAJ CANNIVADY',
    designation: 'VICE PRESIDENT - MARKETING',
    company: 'SPAR HYPERMARKETS',
    image: {
      srcSet:
        '/img/testimonials/pearlraj.webp 533w, /img/testimonials/pearlraj.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

export const aboutServices = [
  {
    id: 1,
    title: 'Get Videos',
    desc: 'Scalable, end-to-end B2B video production services across formats, and locations.',
    img: '/img/about/video.webp',
    imgmweb: '/img/about/video.webp',
    alt: 'video',
    href: '/videos',
  },
  {
    id: 2,
    title: 'Get Crews',
    desc: 'Curated, professional video crews available on-demand across 100 countries.',
    img: '/img/about/shoot.webp',
    imgmweb: '/img/about/shoot.webp',
    alt: 'shoot',
    href: '/crews',
  },
  {
    id: 1,
    title: 'Get Campaigns',
    desc: 'Campaign films and video series production for ambitious B2B brands.',
    img: '/img/about/campaign.webp',
    imgmweb: '/img/about/campaign.webp',
    alt: 'post',
    href: '/campaigns',
  },
]
