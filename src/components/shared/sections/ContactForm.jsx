import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Input, MetaFields } from '@/components/form'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  companyEmailValidation,
  // liveUrlValidation,
  phoneNumberValidation,
} from '@/components/form/utils'

import Script from 'next/script'
import { useFormMeta } from '@/hooks'
import { useRouter } from 'next/router'
import { PhoneInput } from '@/components/form/PhoneInput'

const schema = object({
  First_Name: string().required('First name is required'),
  Last_Name: string().required('Last name is required'),
  Email: string()
    .email('Email is invalid')
    .required('Email is required')
    .test('domain', 'Company Email is required', companyEmailValidation),
  Phone: string()
    .required('Phone number is required')
    .max(20, 'Phone number must be within 20 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  Company: string().required('Company name is required'), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  // Designation: string().required('Designation is required'), //designation
  Description: string().required('Message is required'),
})
const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Phone: '',
  Company: '',
  // Website: '',
  // Designation: '',
  Description: '',
}

export const ContactForm = ({
  CTAbreak = false,
  ID = '1',
  pickCampaign = true,
  pickVideo = true,
}) => {
  // const [otherServices, setOtherServices] = useState(false)
  const [otherServices, setOtherServices] = useState('')
  const [crews, setCrews] = useState(false)
  const metaValues = useFormMeta()
  const router = useRouter()
  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const [First_Name, Last_Name] = methods.watch(['First_Name', 'Last_Name'])
  const sourceURL =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://redbangle.com/'
  const routerSource = router.query['utm_source']
  const routerCampaign = router.query['utm_campaign']
  const routerMedium = router.query['utm_medium']
  const routerContent = router.query['utm_content']
  const routerTerm = router.query['utm_term']

  const onSubmit = async (e) => {
    e.preventDefault()
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL =
      'https://a9road3i6d.execute-api.ap-south-1.amazonaws.com/dev/verify'

    const token = await grecaptcha.execute(siteKey, {
      action: 'submit',
    })

    fetch(verifyURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'g-recaptcha-response': token,
      }),
    })
      .then(async () => {
        const isValidForm = await methods.trigger()
        if (isValidForm) {
          // console.log('valid form')
          setTimeout(() => {
            methods.reset(defaultValues)
          }, 500)
          e.target.submit()
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error)
      })
  }

  const toggleDropdown = () => {
    let selectBox = document.querySelector(`.CF-box${ID}`)
    let checkboxes = document.getElementById(`checkboxes${ID}`)
    checkboxes.style.display =
      checkboxes?.style?.display === 'none' ? 'block' : 'none'
    selectBox?.classList?.toggle('open')
  }

  const crewsItems = [
    'Single-camera Shoot',
    'Multi-camera Shoot',
    'Multi-location Shoot',
    'Others',
  ]

  const updateSelectedOptions = () => {
    let selectedOptions = []
    let checkedCheckboxes = document.querySelectorAll(
      `#checkboxes${ID} input[type='checkbox']:checked`
    )
    checkedCheckboxes.forEach(function (checkbox) {
      if (crewsItems.includes(checkbox.value)) {
        if (selectedOptions.includes('Crews')) {
          const a = new Set(selectedOptions)
          selectedOptions = [...a]
        } else {
          selectedOptions.push('Crews')
          setCrews(true)
        }
      }
      selectedOptions.push(checkbox.value)
    })
    let selectedOptionsText = document.querySelector(`.CF-options${ID}`)
    if (selectedOptionsText) {
      selectedOptionsText.textContent =
        selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Pick a service you would like to explore'
    }
    setOtherServices(selectedOptions.join(', '))
  }

  useEffect(() => {
    document.addEventListener('click', function (event) {
      var dropdown = document.querySelector(`.CF-select${ID}`)
      var target = event.target
      if (!dropdown?.contains(target)) {
        let checkboxes = document.getElementById(`checkboxes${ID}`)
        if (checkboxes) {
          checkboxes.style.display = 'none'
        }
        let selectBox = document.querySelector(`.CF-box${ID}`)
        if (selectBox) {
          selectBox.classList.remove('open')
        }
        updateSelectedOptions()
      }
    })
  }, [])

  return (
    <FormProvider {...methods}>
      <form
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads3202011000002781001"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <MetaFields />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="xnQsjsdp"
          value="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="xmIwtLD"
          value="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
        />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="actionType"
          value="TGVhZHM="
        />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="returnURL"
          // value="https&#x3a;&#x2f;&#x2f;www.redbangle.com&#x2f;success"
          value="https&#x3a;&#x2f;&#x2f;www.redbangle.global&#x2f;success"
        />

        <input
          name="First Name"
          type="text"
          id="First_Name"
          value={First_Name}
          hidden
        />
        <input
          name="Last Name"
          type="text"
          id="Last_Name"
          value={Last_Name}
          hidden
        />
        {/* Lead source URL */}
        <input name="LEADCF4" value={sourceURL} hidden />

        {/*  Lead Source */}
        <input
          name="Lead Source"
          value={routerSource ?? metaValues['utm_source'] ?? ''}
          hidden
        />

        {/*  UTM Source */}
        <input
          name="LEADCF11"
          value={routerSource ?? metaValues['utm_source'] ?? ''}
          hidden
        />

        {/*  UTM Campaign */}
        <input
          name="LEADCF7"
          value={routerCampaign ?? metaValues['utm_campaign'] ?? ''}
          hidden
        />

        {/*  UTM Medium */}
        <input
          name="LEADCF8"
          value={routerMedium ?? metaValues['utm_medium'] ?? ''}
          hidden
        />

        {/*  UTM Content */}
        <input
          name="LEADCF9"
          value={routerContent ?? metaValues['utm_content'] ?? ''}
          hidden
        />

        {/*  UTM Term */}
        <input
          name="LEADCF10"
          value={routerTerm ?? metaValues['utm_term'] ?? ''}
          hidden
        />

        {/* Website Version */}
        <input name="LEADCF18" hidden value="Global" />

        {/* Services Interested */}
        <input name="LEADCF20" hidden value={otherServices} />

        {/* <input type="hidden" name="zf_referrer_name" value="" /> */}
        {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
        {/* <input type="hidden" name="zf_redirect_url" value="" /> */}
        {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
        {/* <input type="hidden" name="zc_gad" value="" /> */}
        {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}

        <div className="grid grid-cols-1 gap-8">
          <div className="grid gap-8 md:gap-5 grid-cols-1 md:grid-cols-2">
            <Input
              borderedInput
              name="First_Name"
              placeholder="First name"
              required
            />
            <Input
              borderedInput
              name="Last_Name"
              placeholder="Last Name"
              required
            />
          </div>

          <Input
            borderedInput
            name="Company"
            placeholder="Company Name"
            required
          />

          <Input borderedInput name="Email" placeholder="Work Email" required />

          <PhoneInput
            borderedInput
            name="Phone"
            placeholder="Phone Number"
            required
          />

          {/* <Input
            borderedInput
            name="Designation"
            placeholder="Designation"
            required
          /> */}
          <div className="custom-select-services home">
            <div className={`custom-select CF-select${ID}`}>
              <div
                className={`select-box CF-box${ID}`}
                onClick={toggleDropdown}
              >
                <div
                  className={`selected-options CF-options${ID} ${otherServices.length === 0 ? 'opacity-70' : ''
                    }`}
                >
                  Pick a service you would like to explore
                </div>
                <div
                  className="options-container"
                  id={`checkboxes${ID}`}
                  style={{ display: 'none' }}
                >
                  {/* {pickCampaign && (
                    <label className="text-[18px] font-bold cursor-pointer">
                      <input
                        type="checkbox"
                        value="Campaign & Series"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Campaign & Series
                    </label>
                  )}
                  {pickVideo && (
                    <label className="text-[18px] font-bold cursor-pointer">
                      <input
                        type="checkbox"
                        value="Videos"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Videos
                    </label>
                  )} */}

                  {/* <label className="text-[18px] font-bold cursor-pointer">
                    <input
                      type="checkbox"
                      value="Crews"
                      className="pointer-events-none"
                      onChange={updateSelectedOptions}
                      checked={crews}
                      onClick={() => setCrews(!crews)}
                    />{' '}
                    Crews
                  </label>
                  <div className="custom-submenu">
                    <label className="sub-checkbox text-[16px] font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        value="Single-camera Shoot"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Single-camera Shoot
                    </label>
                    <label className="sub-checkbox text-[16px] font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        value="Multi-camera Shoot"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Multi-camera Shoot
                    </label>
                    <label className="sub-checkbox text-[16px] font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        value="Multi-location Shoot"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Multi-location Shoot
                    </label>
                    <label className="sub-checkbox text-[16px] font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        value="Others"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Others
                    </label>
                  </div> */}

                  <label className="text-[18px] font-bold cursor-pointer">
                    <input
                      type="checkbox"
                      value="Explainer Video"
                      onChange={updateSelectedOptions}
                      className="pointer-events-none"
                    />{' '}
                    Explainer Video
                  </label>
                  <label className="text-[18px] font-bold cursor-pointer">
                    <input
                      type="checkbox"
                      value="Demo Video"
                      onChange={updateSelectedOptions}
                      className="pointer-events-none"
                    />{' '}
                    Demo Video
                  </label>
                </div>
              </div>
            </div>
          </div>
          <Input
            borderedInput
            required
            name="Description"
            placeholder="Message"
          />
        </div>
        <div className="flex gap-3 items-center mt-8 md:mt-10 md:flex-row flex-col">
          <Button
            type="submit"
            className="w-full "
            suffix={<LineArrow hover />}
          >
            Contact us
          </Button>
          {CTAbreak && (
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0 mt-4 md:mt-0">
              <div className="stack-images flex">
                <img
                  src="/img/home/marin.png"
                  alt="marin"
                  loading="lazy"
                  className="translate-x-[13px] w-10 h-10 md:w-12 md:h-12"
                />
                <img
                  src="/img/manisha.webp"
                  alt="Manisha"
                  loading="lazy"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-[16px] leading-[1.25] tracking-[-0.64px] font-medium font-everett text-rb-black">
                  Marin / Manisha<span className="md:hidden">,&nbsp;</span>
                </div>
                <div className="text-[16px] leading-[1.25] tracking-[-0.64px] font-medium font-everett text-rb-black/60">
                  Global Services
                </div>
              </div>
            </div>
          )}
        </div>

        <Script
          id="wf_anal"
          src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273gid4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261aegid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
        ></Script>
      </form>
    </FormProvider>
  )
}
