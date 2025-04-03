import { Header, Footer } from '../ui'

export const WebsiteLayout = ({
  children,
  className = '',
  hasContactForm = true,
  formHeading = 'GET SCALABLE B2B VIDEO PRODUCTION TODAY',
}) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer hasContactForm={hasContactForm} formHeading={formHeading} />
    </>
  )
}
