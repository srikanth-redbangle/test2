import { ContactForm } from '../ContactForm'

export const ContactSection = ({ formHeading }) => {
  return (
    <section className="bg-rb-mercury py-12 md:py-23">
      <div className="container">
        <div className="rb-row md:items-center md:justify-between">
          <div className="w-full md:w-1/2">
            <div className="text-[60px] lg:text-[70px] xl:text-[110px] leading-[1.06] text-rb-black tracking-[-2.56px] uppercase font-everett font-medium">
              let&apos;s start something{' '}
              <span className="text-rb-red">new</span> today
            </div>
            <div className="hidden lg:flex md:mt-16 mt-10">
              <div className="pl-3 md:pl-6 pr-6 md:pr-8 border-l border-l-rb-black/[0.15] text-[#1E1F1F] flex flex-col justify-between">
                <div>
                  <img
                    src="/img/home/marin.png"
                    alt="avatar1"
                    className="w-8 h-8 md:w-[70px] md:h-[70px]"
                    loading="lazy"
                  />
                  <div className="text-input md:text-[13px] opacity-70 tracking-[-0.048px] md:tracking-[-0.052px] mt-4 md:mt-6 mb-6 max-w-[146px] md:max-w-[250px]">
                    Marin loves to jam with clients, figure business goals and
                    drive creative solutions for B2B brands. She’s got a
                    particular interest in B2B Marketing and Employer Branding.
                  </div>
                </div>
                <div>
                  <div className="font-everett text-input md:text-sm font-medium tracking-[-0.048px] md:tracking-[-0.052px]">
                    Marin George, <br className="md:hidden" />
                    <span className="opacity-60 md:opacity-100">
                      AVP, <br />
                      Global Services
                    </span>
                  </div>
                </div>
              </div>
              <div className="pl-3 md:pl-6 border-l border-l-rb-black/[0.15] text-[#1E1F1F] flex flex-col justify-between">
                <div>
                  <img
                    src="/img/manisha.webp"
                    alt="avatar2"
                    className="w-8 h-8 md:w-[70px] md:h-[70px]"
                    loading="lazy"
                  />
                  <div className="text-input md:text-[13px] opacity-70 tracking-[-0.048px] md:tracking-[-0.052px] mt-4 md:mt-6 mb-6 max-w-[146px] md:max-w-[250px]">
                    Manisha’s global interests drive solutions for global
                    clients. Talk to her to get fresh ideas flowing, great
                    project management, and seamless global video production.
                  </div>
                </div>
                <div>
                  <div className="font-everett text-input md:text-sm font-medium tracking-[-0.048px] md:tracking-[-0.052px]">
                    Manisha Singh, <br className="md:hidden" />
                    <span className="opacity-60 md:opacity-100">
                      Group Account Manager, <br />
                      Global Services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 mt-10 md:mt-0">
            <h3 className="text-base leading-5.5 md:text-2xl md:leading-6.5 mb-5.5 md:mb-7 font-semibold">
              {formHeading}
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
