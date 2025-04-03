export const fileRequiredValidation = (value) => {
  if (value && value.length > 0) {
    return true
  }
  return false
}
export const fileSizeValidation = (
  value,
  MAX_FILE_SIZE = 2097152 //2MB
) => {
  if (
    (value &&
      value?.reduce(
        (isValidSize, v) => isValidSize && v.size <= MAX_FILE_SIZE,
        true
      )) ||
    value.length == 0
  ) {
    return true
  }
  return false
}

export const liveUrlValidation = (value) => {
  if (value) {
    const urlregex = new RegExp(
      "^((((h|H)(t|T)|(f|F))(t|T)(p|P)((s|S)?)://[-.\\w]*)|(((w|W){3}\\.)[-.\\w]+)|((\\w+)([-\\w]*)(\\.([-\\w]+))+))(/?)([-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$"
    ) // Same regex as website_field_url in security-regex.xml. But single backslash is replaced with two backslashes.
    return urlregex.test(value)
  }
  return false
}

export const phoneNumberValidation = (value) => {
  if (value) {
    // const phoneregex = /^[+]{0,1}[()0-9-. ]+$/
    const phoneregex = /^[+]{0,1}[()0-9-.]+([ ]*[()0-9-.]+)*[ ]*[+]{0,1}$/
    return phoneregex.test(value)
  }
  return false
}

export const companyEmailValidation = (value) => {
  if (value) {
    const domains = ['gmail', 'yahoo', 'hotmail', 'aol', 'rediffmail']
    let check = true
    domains.forEach((d) => {
      check = check && `${value}`.search(`${d}.`) == -1
    })

    // not valid if any 1 present
    return check
  }
  return false
}

export const allEmailValidation = (value) => {
  if (value) {
    // You can keep a list of prohibited domains if needed
    const prohibitedDomains = [
      'example.com',
      'test.com',
      'invalid.com',
      'spam.com',
      'suspicious.com',
      'evil-domain.com',
      'spammy-domain.net',
      'fake-domain.org',
      'temporary-domain.net',
      'disposable-email.com',
      'example.net',
      'test.org',
    ]

    if (
      value.includes('@') &&
      prohibitedDomains.every((domain) => !value.endsWith('@' + domain)) &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      return true // Valid email
    }
  }
  return false // Invalid email
}

export const getFirstLastName = (fullName) => {
  const splitText = `${fullName}`.split(' ')
  return {
    firstName: splitText.shift(),
    lastName: splitText.join(' '),
  }
}

export const passwordValidation = (value) => {
  if (value) {
    // const passwordRegex = /^(?=.*\d)[+()a-zA-Z0-9-.]{6,}$/ // Password length >= 6 and should have 1 numeric character
    const passwordRegex = /^(?=.*[a-z])(?=.*\d).{6,}$/ // Password length >= 6 and should have 1 numeric character
    return passwordRegex.test(value)
  }
  return false
}
