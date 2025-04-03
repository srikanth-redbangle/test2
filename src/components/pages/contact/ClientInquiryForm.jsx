'use client'
import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bool, mixed, number, object, string } from 'yup'
import {
  companyEmailValidation,
  fileSizeValidation,
  // liveUrlValidation,
  phoneNumberValidation,
} from '@/components/form/utils'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import {
  Checkbox,
  FileInput,
  Input,
  MetaFields,
  TextArea,
} from '@/components/form'
import { Label } from '@/components/form'
import Script from 'next/script'
import { useFormMeta } from '@/hooks'
import { useRouter } from 'next/router'
import { PhoneInput } from '@/components/form/PhoneInput'
import SelectCountry from '@/components/form/SelectCountry'

const schema = object({
  First_Name: string().required('First name is required'),
  Last_Name: string().required('Last name is required'),

  Phone: string()
    .required('Phone number is required')
    .max(20, 'Phone number must be within 20 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  Country: object()
    .shape({
      id: number(),
      label: object({ flag: string(), name: string() }),
      value: string(),
    })
    .nullable()
    .required('Country code is required'),
  Email: string()
    .email('Email is invalid')
    .required('Email is required')
    .test('domain', 'Company Email is required', companyEmailValidation),
  Designation: string().required('Designation is required'), //designation
  Company: string().required('Company name is required'), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  Description: string(),
  theFile: mixed().test('filesize', 'File size not more than 2 MB', (v) =>
    fileSizeValidation(v)
  ),
  Email_Opt_Out: bool(),
}).required()

const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Designation: '',
  Company: '',
  Phone: '',
  // Website: '',
  Description: '',
  theFile: [],
  Email_Opt_Out: true,
  Country: null,
}

export const ClientInquiryForm = () => {
  // const [callingCode, setCallingCode] = useState('')
  const [countryData, setCountryData] = useState(null)
  const [crews, setCrews] = useState(false)

  const [otherServices, setOtherServices] = useState('')

  const metaValues = useFormMeta()
  const router = useRouter()

  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const [First_Name, Last_Name, Email_Opt_Out, Country] = methods.watch([
    'First_Name',
    'Last_Name',
    'Email_Opt_Out',
    'Country',
  ])

  const sourceURL =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://redbangle.com/'

  const routerSource = router.query['utm_source']
  const routerCampaign = router.query['utm_campaign']
  const routerMedium = router.query['utm_medium']
  const routerContent = router.query['utm_content']
  const routerTerm = router.query['utm_term']

  useEffect(() => {
    let countrylist = []
    const fetchData = async () => {
      try {
        // countrylist api call

        const response1 = await fetch(
          'https://api.redbangle.com/redbangle/user/api/getCountryCode'
        )
        const jsonData1 = await response1.json()

        jsonData1?.data.forEach((item, index) =>
          countrylist.push({
            // label: (
            //   <div className="flex items-center gap-2">
            //     <img
            //       className="w-6 h-4 md:w-10 md:h-6.5"
            //       src={item?.flag}
            //       alt={item?.name}
            //     />
            //     <span>+ {item?.callingCodes[0]}</span>
            //   </div>
            // ),
            id: index,
            label: { flag: item?.flag, name: item?.name },
            value: '+' + item?.callingCodes[0],
          })
        )
        setCountryData(countrylist)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [Country])

  const onSubmit = async (e) => {
    e.preventDefault()
    // const secretKey = '6LfsAwApAAAAALauUGbhQ9gkrnzoE1m1eQ5zTDnK'
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL =
      'https://a9road3i6d.execute-api.ap-south-1.amazonaws.com/dev/verify'

    const token = await grecaptcha.execute(siteKey, {
      action: 'submit',
    })
    // console.log(token)

    fetch(verifyURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'g-recaptcha-response': token,
      }),
    })
      // .then((response) => response.json())
      .then(async () => {
        // if (data?.success) {
        const isValidForm = await methods.trigger()
        if (isValidForm) {
          setTimeout(() => {
            methods.reset(defaultValues)
          }, 500)
          e.target.submit()
        }
        // }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error)
      })
  }

  const toggleDropdown = () => {
    let selectBox = document.querySelector('.select-box')
    let checkboxes = document.getElementById('checkboxes')
    checkboxes.style.display =
      checkboxes.style.display === 'none' ? 'block' : 'none'
    selectBox.classList.toggle('open')
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
      "#checkboxes input[type='checkbox']:checked"
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
    let selectedOptionsText = document.querySelector('.selected-options')
    selectedOptionsText.textContent =
      selectedOptions.length > 0
        ? selectedOptions.join(', ')
        : 'Select Services'
    setOtherServices(selectedOptions.join(', '))
  }

  useEffect(() => {
    document.addEventListener('click', function (event) {
      var dropdown = document.querySelector('.custom-select')
      var target = event.target

      if (dropdown && !dropdown.contains(target)) {
        var checkboxes = document.getElementById('checkboxes')
        checkboxes.style.display = 'none'
        var selectBox = document.querySelector('.select-box')
        selectBox.classList.remove('open')
        updateSelectedOptions()
      }
    })
  }, [])

  return (
    <div>
      <p className="text-rb-black/90 font-normal text-sm md:text-2xl mb-6 md:mb-21 md:mt-4">
        We are always looking to work on exciting briefs.
        <br />
        Let&apos;s start a conversation today!
      </p>
      <FormProvider {...methods}>
        <form
          // Prod
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
            style={{ display: 'none' }}
            name="xnQsjsdp"
            value="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="text"
            style={{ display: 'none' }}
            name="xmIwtLD"
            value="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
          />
          <input
            type="text"
            style={{ display: 'none' }}
            name="actionType"
            value="TGVhZHM="
          />
          <input
            type="text"
            style={{ display: 'none' }}
            name="returnURL"
            // value="https&#x3a;&#x2f;&#x2f;www.redbangle.com&#x2f;success"
            value="https&#x3a;&#x2f;&#x2f;redbangle.global&#x2f;success"
          />

          {/* <input type="hidden" name="zf_referrer_name" value="" /> */}
          {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
          {/* <input type="hidden" name="zf_redirect_url" value="" /> */}
          {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
          {/* <input type="hidden" name="zc_gad" value="" /> */}
          {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}

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
          <input
            name="Email Opt Out"
            type="checkbox"
            id="Email_Opt_Out"
            value={!Email_Opt_Out ? 'on' : ''}
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

          {/* Country code */}
          <input name="LEADCF19" hidden value={Country?.value} />

          {/* Services Interested */}
          <input name="LEADCF20" hidden value={otherServices} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-14">
            <div className="col-span-1 ">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                Name*
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Input
                  name="First_Name"
                  label=""
                  placeholder="First Name"
                  required
                  hideLabel={true}
                />
                <Input
                  name="Last_Name"
                  label=""
                  placeholder="Last Name"
                  required
                  hideLabel={true}
                />
              </div>
            </div>

            {/* <PhoneInput
              name="Phone"
              label="Phone Number"
              placeholder="Your Phone Number"
              required
            /> */}
            <div className="col-span-1 ">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                Phone Number*
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {/* <div className="w-[25%] h-[57.6px] md:h-[73.6px] mr-2 p-4 md:p-6 font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg px-3 md:px-4 pointer-none">{`${
                  callingCode && '+' + callingCode
                }`}</div> */}
                <SelectCountry
                  name="Country"
                  // title="Country*"
                  displayLabel="hidden"
                  addCustomStyle
                  options={countryData}
                  // placeholder="Select your Country"
                  required
                />
                <PhoneInput
                  name="Phone"
                  label=""
                  placeholder="Your Phone Number"
                  inputClassname="px-3 md:px-4 font-normal"
                />
              </div>
            </div>
            <Input
              name="Email"
              label="Work Email"
              placeholder="example@domain.com"
              required
            />
            <Input
              name="Designation"
              label="Designation"
              placeholder="Your designation"
              required
            />
            <Input
              name="Company"
              label="Company Name"
              placeholder="Your company name"
              required
            />
            <div className="custom-select-services">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                Which services are you interested in?
              </label>
              <div className="custom-select">
                <div className="select-box" onClick={toggleDropdown}>
                  <div
                    className={`selected-options ${
                      otherServices.length === 0 ? 'opacity-60' : ''
                    }`}
                  >
                    Select Services
                  </div>
                  <div
                    className="options-container"
                    id="checkboxes"
                    style={{ display: 'none' }}
                  >
                    <label className="text-[18px] font-bold">
                      <input
                        type="checkbox"
                        value="Campaign & Series"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Campaign & Series
                    </label>
                    <label className="text-[18px] font-bold">
                      <input
                        type="checkbox"
                        value="Videos"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Videos
                    </label>
                    <label className="text-[18px] font-bold">
                      <input
                        type="checkbox"
                        value="Crews"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                        checked={crews}
                        onClick={() => setCrews(!crews)}
                      />{' '}
                      Crews
                    </label>
                    <div className="custom-submenu">
                      <label className="sub-checkbox text-[16px] font-semibold">
                        <input
                          type="checkbox"
                          value="Single-camera Shoot"
                          onChange={updateSelectedOptions}
                          className="pointer-events-none"
                        />{' '}
                        Single-camera Shoot
                      </label>
                      <label className="sub-checkbox text-[16px] font-semibold">
                        <input
                          type="checkbox"
                          value="Multi-camera Shoot"
                          onChange={updateSelectedOptions}
                          className="pointer-events-none"
                        />{' '}
                        Multi-camera Shoot
                      </label>
                      <label className="sub-checkbox text-[16px] font-semibold">
                        <input
                          type="checkbox"
                          value="Multi-location Shoot"
                          onChange={updateSelectedOptions}
                          className="pointer-events-none"
                        />{' '}
                        Multi-location Shoot
                      </label>
                      <label className="sub-checkbox text-[16px] font-semibold">
                        <input
                          type="checkbox"
                          value="Others"
                          onChange={updateSelectedOptions}
                          className="pointer-events-none"
                        />{' '}
                        Others
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <Label>
                Tell Us About The Project (Scope, Timeline, Budget):
              </Label>
              <div className=" border-rb-border-grey rounded-lg border p-4 md:p-6">
                <TextArea
                  name="Description"
                  hideLabel
                  placeholder="Please provide us with the details of your inquiry or any questions you may have"
                  required
                  // className="md:pb-14"
                  noBorder
                  rows={12}
                />
                <FileInput
                  name="theFile"
                  hideLabel
                  label="Attach Files"
                  // labelClassName="p-4 md:p-6 bottom-0 left-0 "
                  placeholder="File size not more than 2 MB"
                />
              </div>
              <Checkbox
                name="Email_Opt_Out"
                label="Yes, sign me up for your newsletter"
                labelClassName="mt-4"
              />
            </div>
            <Button
              type="submit"
              suffix={<LineArrow hover />}
              className="w-full md:w-auto g-recaptcha"
            >
              SUBMIT
            </Button>
          </div>
          <Script
            id="wf_anal"
            src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273gid4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261aegid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
          ></Script>
        </form>
      </FormProvider>
    </div>
  )
}
