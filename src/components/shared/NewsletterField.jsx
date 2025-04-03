import { useState, useEffect } from 'react'
import { ArrowButton, Button } from '../ui'
import Modal from './Modal/Modal'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// import { object, string } from 'yup'
import { Input, MetaFields, Select } from '../form'
import { LineArrow } from '../icons'
import { subscriberSchema, subscriberDefaultValues } from '@/content/schemas'
import { departmentOptions } from '../../utils/constant'

// const schema = object({
//   FIRSTNAME: string().required('First name is required'),
//   LASTNAME: string().required('Last name is required'),
//   CONTACT_EMAIL: string()
//     .email('Email is invalid')
//     .required('Email is required'),
//   CONTACT_CF1: string().required('Industry is required'),
//   CONTACT_CF3: string().required('Department is required'),
// })

export const NewsletterField = () => {
  const [open, setOpen] = useState(false)
  const methods = useForm({
    defaultValues: subscriberDefaultValues,
    mode: 'onBlur',
    resolver: yupResolver(subscriberSchema),
  })
  const { register, watch, formState } = methods
  const [email] = watch(['CONTACT_EMAIL'])
  const disabled = formState.errors.email || !email || email.length == 0

  useEffect(() => {
    if (!open) {
      methods.reset(subscriberDefaultValues)
    }
  }, [open, methods])
  return (
    <>
      <div className="relative md:max-w-[404px] flex items-center w-full justify-between ml-auto">
        <input
          {...register('CONTACT_EMAIL')}
          name="CONTACT_EMAIL"
          type="email"
          placeholder="Subscribe to our newsletter"
          className="border border-rb-dune/30 w-full h-12 md:h-[58px] tracking-[-0.16px] rounded-6xl pl-5 md:pl-6 pr-28 font-semibold md:font-bold placeholder:text-rb-black/70 bg-rb-black/5"
        />
        <ArrowButton
          disabled={disabled}
          onClick={() => {
            setOpen(true)
          }}
          className="absolute right-2 hover:bg-rb-black duration-300 ease-out max-w-[76px] md:max-w-[92px]"
        />
      </div>
      <FormProvider {...methods}>
        <Modal open={open} setOpen={setOpen}>
          <form
            method="POST"
            id="zcampaignOptinForm"
            action="https://mdkqeorq-zgpm.maillist-manage.com/weboptin.zc"
            target="_blank"
            onSubmit={async (e) => {
              const isValidForm = await methods.trigger()
              if (isValidForm) {
                setTimeout(() => {
                  // close form after success
                  setOpen(false)
                }, 500)
                return true
              }
              e.preventDefault()
            }}
          >
            <MetaFields />
            <input type="hidden" name="CONTACT_EMAIL" value={email} hidden />

            <input
              type="hidden"
              id="secretid"
              value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"
            />
            {/* <!-- Do not edit the below Zoho Campaigns hidden tags --> */}
            <input type="hidden" id="fieldBorder" value="" onLoad="" />
            <input
              type="hidden"
              name="zc_trackCode"
              id="zc_trackCode"
              value="ZCFORMVIEW"
              onLoad=""
            />
            <input
              type="hidden"
              name="viewFrom"
              id="viewFrom"
              value="URL_ACTION"
            />
            <input
              type="hidden"
              id="submitType"
              name="submitType"
              value="optinCustomView"
            />
            <input type="hidden" id="lD" name="lD" value="1e400042590ada19" />
            <input
              type="hidden"
              name="emailReportId"
              id="emailReportId"
              value=""
            />
            <input type="hidden" name="zx" id="cmpZuid" value="127b2e617" />
            <input type="hidden" name="zcvers" value="3.0" />
            <input
              type="hidden"
              name="oldListIds"
              id="allCheckedListIds"
              value=""
            />
            <input
              type="hidden"
              id="mode"
              name="mode"
              value="OptinCreateView"
            />
            <input
              type="hidden"
              id="zcld"
              name="zcld"
              value="1e400042590ada19"
            />
            <input
              type="hidden"
              id="zctd"
              name="zctd"
              value="1e40004258e9fbe1"
            />
            <input type="hidden" id="document_domain" value="" />
            <input
              type="hidden"
              id="zc_Url"
              value="mdkqeorq-zgpm.maillist-manage.com"
            />
            <input type="hidden" id="new_optin_response_in" value="0" />
            <input type="hidden" id="duplicate_optin_response_in" value="0" />
            <input
              type="hidden"
              id="zc_formIx"
              name="zc_formIx"
              value="3zdc801a8a7689470f67ec3276a57115344848368f4320a0f9b20d89c552d043ee"
            />
            {/* <!-- End of the campaigns hidden tags --> */}
            <input
              type="hidden"
              id="scriptless"
              name="scriptless"
              value="yes"
            />
            {/* <input
              type="hidden"
              id="zc_spmSubmit"
              name="zc_spmSubmit"
              value="ZCSPMSUBMIT"
            /> */}
            <input type="hidden" id="isCaptchaNeeded" value="false" />
            <input type="hidden" id="superAdminCap" value="0" />
            <input
              type="hidden"
              id="zcWebOptin"
              name="SIGNUP_SUBMIT_BUTTON"
              value="Join Now"
            ></input>
            <div className="grid gap-6 md:gap-8">
              <div className="grid gap-6 md:gap-5 grid-cols-1 md:grid-cols-2">
                <Input
                  name="FIRSTNAME"
                  label="First Name"
                  placeholder="First name"
                  required
                />
                <Input
                  // hideLabel
                  name="LASTNAME"
                  label="Last name"
                  placeholder="Last name"
                  required
                  // forcedError={}
                />
              </div>
              <Input
                name="CONTACT_CF1"
                label="Industry"
                placeholder="Enter industry type"
                required
              />
              <Select
                name="CONTACT_CF3"
                label="Department"
                options={departmentOptions}
                placeholder="Select your department"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-5 md:mt-10"
              suffix={<LineArrow />}
            >
              SUBSCRIBE
            </Button>
          </form>
        </Modal>
      </FormProvider>
    </>
  )
}
